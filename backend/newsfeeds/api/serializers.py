from django.db.models import fields
from rest_framework import serializers
from django.contrib.auth.models import User
from newsfeeds.models import Post, Comment 

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username','email')
        
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
