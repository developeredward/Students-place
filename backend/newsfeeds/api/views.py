from rest_framework.generics import ListAPIView

from django.contrib.auth.models import User
from newsfeeds.models import Post
from .serializers import PostSerializer, UserSerializer


class PostListView(ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

