from django.shortcuts import render
from rest_framework import generics
from .Serializer import PostSerializer,InterestSerializer
from post.models import Post,Interest

class Posts(generics.ListCreateAPIView):
    serializer_class=PostSerializer
    queryset=Post.objects.all()


class Interests(generics.ListCreateAPIView):
    serializer_class=InterestSerializer
    queryset=Interest.objects.all()



class Post(generics.RetrieveUpdateDestroyAPIView):
    serializer_class=PostSerializer
    queryset=Post.objects.all()


class Interest(generics.RetrieveUpdateDestroyAPIView):
    serializer_class=InterestSerializer
    queryset=Interest.objects.all()
    