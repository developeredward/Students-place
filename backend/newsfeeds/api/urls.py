from django.urls import path
from rest_framework.serializers import as_serializer_error

from .views import PostListView, PostCreateView

urlpatterns = [
    path('', PostListView.as_view()),
    path('create', PostCreateView.as_view())
]