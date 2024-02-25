from rest_framework import serializers
from post.models import Post,Interest
from django.contrib.auth.models import User


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model=Post
        fields=('__all__')


class InterestSerializer(serializers.ModelSerializer):
    class Meta:
        model=Interest
        fields=('__all__')


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=('__all__')