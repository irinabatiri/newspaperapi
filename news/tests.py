from django.test import TestCase
from django.contrib.auth.models import User

from .models import Article, Like

class NewspaperTests(TestCase):
    @classmethod
    def setUpTestData(cls):
        testuser1 = User.objects.create_user(
            username = 'testuser1', password='abc123')
        testuser1.save()
        test_article = Article.objects.create(
            author = 'Author', 
            title = 'Article title',
            body = 'Body content ...')
        test_article.save()
        testlike = Like.objects.create(
            reader = testuser1,
            like = True,
            article = test_article
        )
        testlike.save()
#testing the models
    def test_article_content(self):
        article = Article.objects.get(id=1)
        expected_author = f'{article.author}'
        expected_title = f'{article.title}'
        expected_body = f'{article.body}'
        self.assertEqual(expected_author, 'Author')
        self.assertEqual(expected_title, 'Article title')
        self.assertEqual(expected_body, 'Body content ...')

    def test_like(self):
        like = Like.objects.get(id=1)
        expected_reader = f'{like.reader}'
        expected_like = Like.like
        expected_article = f'{Like.article}'
        self.assertEqual(expected_reader, 'testuser1')
        self.assertEqual(expected_like, True) #?
        self.assertEqual(expected_article, 'Article title')