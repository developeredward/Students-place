from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import ProfileSerializer
from ..models import Profile

class ProfileListView(ListAPIView):
    queryset = Profile.objects.order_by('-timestamp')
    serializer_class = ProfileSerializer
    



@api_view(['GET'])
def profile_detail_api_view(request, username, *args, **kwargs):
    # get the profile for the passed username
    qs = Profile.objects.filter(user__username=username)
    if not qs.exists():
        return Response({"detail": "User not found"}, status=404)
    profile_obj = qs.first()
    data = request.data or {}
    if request.method == "POST":
        me = request.user
        action = data.get("action")
        if profile_obj.user != me:
            if action == "follow":
                profile_obj.followers.add(me)
            elif action == "unfollow":
                profile_obj.followers.remove(me)
            else:
                pass
    serializer = ProfileSerializer(instance=profile_obj, context={"request": request})
    return Response(serializer.data, status=200)
