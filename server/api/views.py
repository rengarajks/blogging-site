from django.shortcuts import render
from rest_framework import generics
from .Serializer import PostSerializer,InterestSerializer,UserSerializer
from post.models import Post,Interest
from django.contrib.auth.models import User

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
    

class Users(generics.ListCreateAPIView):
    serializer_class=UserSerializer
    queryset=User.objects.all()


class User(generics.RetrieveUpdateDestroyAPIView):
    serializer_class=UserSerializer
    queryset=User.objects.all()


# views.py
from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def login_view(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return JsonResponse({'message': 'Login successful'})
        else:
            return JsonResponse({'error': 'Invalid credentials'}, status=400)
