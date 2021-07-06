from django.urls import path
from rest_framework.serializers import as_serializer_error

from .views import PostListView, PostCreateView

urlpatterns = [
    path('feeds/', PostListView.as_view()),
    path('feeds/create/', PostCreateView.as_view())
]