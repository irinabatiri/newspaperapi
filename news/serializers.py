from django.contrib.auth import get_user_model
from rest_framework import serializers
from .models import Article, Like

class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('id', 'user', 'title', 'body', 'created_at',)
        model = Article

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ('id', 'username',)

# class LikeSerializer(serializers.ModelSerializer):
#     class Meta:
#         fields = ('id', 'user')
#         model = Like