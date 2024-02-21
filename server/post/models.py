from django.db import models
from django.contrib.auth.models import User


class Interest(models.Model):
    Interest=models.CharField(max_length=20)

    def __str__(self):
        return self.Interest

class Post(models.Model):
    User=models.ForeignKey(User,on_delete=models.CASCADE)
    Title=models.CharField(max_length=120)
    Content=models.TextField()
    Interest=models.ManyToManyField(Interest)
    Likes=models.IntegerField()
    Dislikes=models.IntegerField()
    Published=models.DateTimeField()

    def __str__(self):
        return self.Title
