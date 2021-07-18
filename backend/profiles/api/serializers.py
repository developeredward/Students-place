from django.db import models
from django.db.models import fields
from rest_framework import serializers
from django.contrib.auth import get_user_model
from rest_framework.fields import ReadOnlyField
from ..models import Profile

User = get_user_model()

class UserSerialiazer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'first_name', 'middle_name', 'last_name', 'profile_picture', 'verified', 'admin', 'author')


class FollowersSerializer(serializers.ModelSerializer):
    user = UserSerialiazer()
    class Meta:
        model= User
        fields = ("user",)


class ProfileSerializer(serializers.ModelSerializer):
    user = UserSerialiazer()
    following = UserSerialiazer(many=True)
    followers_count = serializers.SerializerMethodField(read_only=True)
    following_count = serializers.SerializerMethodField(read_only=True)
    followers = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = Profile
        fields = ('user',"location","bio","timestamp", "followers_count", "following_count","followers", "following")

    
    def get_followers_count(self, obj):
        return obj.user.followers.count()
    
    def get_following_count(self, obj):
        return obj.following.count()

    def get_followers(self, obj):
        return FollowersSerializer(obj.user.followers.all(), many=True).data
    
   




















#    from django.db import models
# from django.db.models import fields
# import json
# from rest_framework import serializers
# from django.contrib.auth import get_user_model
# from rest_framework.fields import ReadOnlyField
# from ..models import Profile, UserFollowing

# User = get_user_model()

# class UserSerialiazer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = ('username', 'first_name', 'middle_name', 'last_name', 'profile_picture', 'verified', 'admin', 'author')


# class FollowingSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = UserFollowing
#         fields = ("id", "following_user_id", "created")

# class FollowersSerializer(serializers.ModelSerializer):
#     class Meta:
#         model= UserFollowing
#         fields = ("id", "user_id", "created")

# class ProfileSerializer(serializers.ModelSerializer):
#     user = UserSerialiazer()
#     following = serializers.SerializerMethodField(read_only=True)
#     followers = serializers.SerializerMethodField(read_only=True)
#     # following_count = serializers.SerializerMethodField(read_only=True)
#     class Meta:
#         model = Profile
#         fields = ('user',"location","bio","timestamp")

    
#     def get_following(self, obj):
#         return FollowingSerializer(obj.following.all(), many=True).data
    
#     def get_followers(self, obj):
#         return FollowersSerializer(obj.followers.all(), many=True).data
    
#     # def get_follower_count(self, obj):
#     #     return obj.followers.count()
 