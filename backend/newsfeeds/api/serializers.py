from django.db.models import fields
from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.contrib.auth.models import User
from newsfeeds.models import Post, Comment 

User = get_user_model()
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username','first_name', 'middle_name', 'last_name')
        
class CommentSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    class Meta:
        model = Comment
        fields = ('comment','user')

class PostSerializer(serializers.ModelSerializer):
    comments = CommentSerializer(many=True)
    post_by = UserSerializer()
    class Meta:
        model = Post
        fields = ('title', 'overview', 'detail', 'comments', 'post_by', 'timestamp', 'id')
