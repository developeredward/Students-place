from django.urls import path

from .views import (
    ProfileListView,
    profile_detail_api_view
)
'''
CLIENT
Base ENDPOINT /api/profiles/
'''
urlpatterns = [
    path('', ProfileListView.as_view()),
    path('<str:username>/', profile_detail_api_view),
]
