from rest_framework import serializers
from post.models import Post,Interest

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model=Post
        fields=('__all__')


class InterestSerializer(serializers.ModelSerializer):
    class Meta:
        model=Interest
        fields=('__all__')
