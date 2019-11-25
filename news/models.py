from django.db import models
from django.contrib.auth.models import User

class Article(models.Model):
    author = models.CharField(max_length=200)
    title = models.CharField(max_length=200)
    body = models.TextField()
    created_at = models.DateTimeField(auto_now_add = True)

    def __str__(self):
        return self.title


class Like(models.Model):
    reader = models.ForeignKey(User, on_delete = models.CASCADE)
    article = models.ForeignKey(Article, on_delete = models.CASCADE)

    def __str__(self):
        return self.like
