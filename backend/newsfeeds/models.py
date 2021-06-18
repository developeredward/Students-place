from django.db import models
from django.contrib.auth.models import User

class Post(models.Model):
    title = models.CharField(max_length=100)
    overview = models.CharField(max_length=1000)
    detail = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)
    comments = models.ManyToManyField('Comment')
    post_by = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.title

class Comment(models.Model):
    comment = models.TextField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    
    def __str__(self):
        return str(self.comment)