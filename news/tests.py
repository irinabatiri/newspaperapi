from django.test import TestCase
from django.contrib.auth.models import User

from .models import Article

class NewspaperTests(TestCase):
    @classmethod
    def setUpTestData(cls):
        testuser1 = User.objects.create_user(
            username = 'testuser1', password='abc123')
        testuser1.save()
        test_article = Article.objects.create(
            author = testuser1, 
            title = 'Article title',
            body = 'Body content ...')
        test_article.save()

    def test_article_content(self):
        article = Article.objects.get(id=1)
        expected_author = f'{article.author}'
        expected_title = f'{article.title}'
        expected_body = f'{article.body}'
        self.assertEqual(expected_author, 'testuser1')
        self.assertEqual(expected_title, 'Article title')
        self.assertEqual(expected_body, 'Body content ...')
