from django.db.models import fields
from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.contrib.auth.models import User
from newsfeeds.models import Post, Comment 

User = get_user_model()

class TimestampField(serializers.Field):
    def to_representation(self, value):
        return round(value.timestamp()*1000)

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username','first_name', "get_full_name", "profile_picture", 'middle_name', 'last_name')
        
class CommentSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    timestamp = TimestampField()
    class Meta:
        model = Comment
        fields = ('comment', 'user', 'timestamp')
class PostSerializer(serializers.ModelSerializer):
    comments = CommentSerializer(many=True)
    post_by = UserSerializer()
    timestamp = TimestampField()
    class Meta:
        model = Post
        fields = ('title', 'overview', 'detail', 'comments', 'post_by', 'timestamp', 'id')
    