import re
from django.db import models
from django.db.models import fields, query
from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.contrib.auth.models import User
from rest_framework.settings import reload_api_settings


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
        fields = ('id', 'comment', 'user', 'timestamp')

class PostSerializer(serializers.ModelSerializer):
    comments = CommentSerializer(many=True)
    get_recent_comments = CommentSerializer(many=True)
    post_by = UserSerializer()
    timestamp = TimestampField()
    class Meta:
        model = Post
        fields = ('id','content', 'image', 'video', 'document', 'get_recent_comments', 'comments', 'post_by', 'timestamp')
    
    # def get_comments(self, obj):
    #     return CommentSerializer(obj.get_comments.all()[:1], many=True).data
    



class PostCreateSerializer(serializers.ModelSerializer):
    post_by = User()
    class Meta:
        model = Post
        fields = ('content','post_by',)
        read_only_fields = ['post_by']

    def validate(self, attrs):
        attrs['post_by'] = self.context['request'].user
        return attrs
    # def get_post_by(self):
    #     return self.request.user

class CommentCreateSerializer(serializers.ModelSerializer):
    post = serializers.PrimaryKeyRelatedField(many=False, queryset=Post.objects.all())
    user = serializers.PrimaryKeyRelatedField(many=False, queryset=User.objects.all())
    # post = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Comment
        fields = ('comment','post', 'user')
    
    # def get_post(self, obj):
    #     return PostSerializer(Post.objects.all(), many=True).data
    