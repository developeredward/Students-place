from django.contrib.auth import get_user_model
from django.db import models
from django.contrib.auth.models import User
from tinymce.models import HTMLField



User = get_user_model()

class PostView(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey('Post', on_delete=models.CASCADE)

    def __str__(self):
        return self.user.username

class Post(models.Model):
    content = models.TextField(null=True, blank=True)
    image = models.FileField(upload_to="uploads/images",null=True, blank=True)
    document = models.FileField(upload_to="uploads/documents", null=True, blank=True) 
    video = models.FileField(upload_to="uploads/videos", blank=True, null=True)
    timestamp = models.DateTimeField(auto_now_add=True)
    post_by = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.id)

    @property
    def get_recent_comments(self):
        return self.comments.order_by('-timestamp')[:2]



class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name="comments")
    timestamp = models.DateTimeField(auto_now_add=True)
    comment = models.TextField()
    
    def __str__(self):
        return str(self.post)