from django.urls import path
from rest_framework.serializers import as_serializer_error

from .views import PostListView, PostCreateView, PostDetailView, CommentCreateView

urlpatterns = [
    path('feeds/', PostListView.as_view()),
    path('feeds/create/', PostCreateView.as_view()),
    path('feeds/<pk>/', PostDetailView.as_view()),
    path('comment/', CommentCreateView.as_view()),
]