from rest_framework.generics import ListAPIView, CreateAPIView, GenericAPIView, ListCreateAPIView, RetrieveUpdateDestroyAPIView, RetrieveAPIView

from django.contrib.auth.models import User
from newsfeeds.models import Post, Comment
from .serializers import PostSerializer, UserSerializer, PostCreateSerializer, CommentCreateSerializer

class PostListView(ListAPIView):
    queryset = Post.objects.order_by('-timestamp')
    serializer_class = PostSerializer
class PostCreateView(CreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostCreateSerializer

class PostDetailView(RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class CommentCreateView(CreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentCreateSerializer