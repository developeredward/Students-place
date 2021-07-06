from rest_framework.generics import ListAPIView, CreateAPIView

from django.contrib.auth.models import User
from newsfeeds.models import Post
from .serializers import PostSerializer, UserSerializer

class PostListView(ListAPIView):
    queryset = Post.objects.order_by('-timestamp')
    serializer_class = PostSerializer
class PostCreateView(CreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
