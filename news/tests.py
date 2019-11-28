from rest_framework.test import APITestCase
from rest_framework.test import APIRequestFactory
from django.urls import reverse
from django.contrib.auth.models import AnonymousUser, User
from django.test import TestCase

from .models import Article, Like
from .views import ArticleList, ArticleDetail, LikeCreate, LikeDestroy, UserList, UserDetail


class TestArticleModel(TestCase):
    @classmethod
    def setUpTestData(cls):
        testuser1 = User.objects.create_user(
            username='testuser1', password='abc123')
        testuser1.save()
        test_article = Article.objects.create(
            author='Author',
            title='Article title',
            body='Body content ...')
        test_article.save()

    def test_article_content(self):
        article = Article.objects.get(id=1)
        expected_author = f'{article.author}'
        expected_title = f'{article.title}'
        expected_body = f'{article.body}'
        self.assertEqual(expected_author, 'Author')
        self.assertEqual(expected_title, 'Article title')
        self.assertEqual(expected_body, 'Body content ...')


class TestArticleViews(APITestCase):
    def setUp(self):
        self.factory = APIRequestFactory()
        self.user = User.objects.create_user(
            username='Name', email='test@company.com', password='top_secret')
        self.article = Article.objects.create(
            author='Author', title='Article title', body='Body content ...')

    def test_list_user(self):
        request = self.factory.get(reverse('articles'))
        request.user = self.user 
        response = ArticleList.as_view()(request)
        self.assertEqual(response.status_code, 200,
                        f'Expected Response Code 200 - OK, received {response.status_code} instead.')

    def test_list_nonuser(self):
        request = self.factory.get(reverse('articles'))
        request.user = AnonymousUser
        response = ArticleList.as_view()(request)
        self.assertEqual(response.status_code, 403,
                        f'Expected Response Code 403 - FORBIDDEN, received {response.status_code} instead.')

    def test_detail_user(self):
        request = self.factory.get(reverse('article_id', kwargs={'pk': self.article.pk}))
        request.user = self.user
        response = ArticleDetail.as_view()(request, pk=self.article.pk)
        self.assertEqual(response.status_code, 200,
                        f'Expected Response Code 200 - OK, received {response.status_code} instead.')

    def test_detail_user_404(self):
        request = self.factory.get(reverse('article_id', kwargs={'pk': 10000}))
        request.user = self.user
        response = ArticleDetail.as_view()(request, pk=10000)
        self.assertEqual(response.status_code, 404,
                        f'Expected Response Code 404 - NOT FOUND, received {response.status_code} instead.')

    def test_detail_nonuser(self):
        request = self.factory.get(reverse('article_id', kwargs={'pk': self.article.pk}))
        request.user = AnonymousUser
        response = ArticleDetail.as_view()(request, pk=self.article.pk)
        self.assertEqual(response.status_code, 403,
                        f'Expected Response Code 403 - FORBIDDEN, received {response.status_code} instead.')


class TestLikeViews(APITestCase):
    def setUp(self):
        self.factory = APIRequestFactory()
        self.user = User.objects.create_user(
            username='Name', email='test@company.com', password='top_secret')  
        self.superuser = User.objects.create_superuser(
            username='Admin', email='admin@company.com', password='admin_pass')
        self.article = Article.objects.create(
            author='X', title='Title', body='Body content...')
        self.like = Like.objects.create(
            reader=self.user, article=self.article)

    def test_like_post_user(self):
        request = self.factory.post('likes/', {'reader': self.user.pk, 'article': self.article.pk}) 
        request.user = self.user 
        response = LikeCreate.as_view()(request, reader=self.user.pk, article=self.article.pk)
        self.assertEqual(response.status_code, 201, 
                        f'Expected Response Code 201 - CREATED, received {response.status_code} instead.')

    def test_like_post_nonuser(self):
        request = self.factory.post('likes/')
        request.user = AnonymousUser
        response = LikeCreate.as_view()(request)
        self.assertEqual(response.status_code, 403,
                        f'Expected Response Code 403 - FORBIDDEN, received {response.status_code} instead.')

    def test_like_destroy_user(self):
        request = self.factory.delete(reverse('like_id', kwargs={'pk':self.like.pk}))
        request.user = self.user 
        response = LikeDestroy.as_view()(request, pk=self.like.pk)
        self.assertEqual(response.status_code, 204, 
                        f'Expected Response Code 204 - NO CONTENT, received {response.status_code} instead.')


class TestUser(APITestCase):
    def setUp(self):
        self.factory = APIRequestFactory()
        self.user = User.objects.create_user(
            username='Name', email='test@company.com', password='top_secret')
        self.superuser = User.objects.create_superuser(
            username='Admin', email='admin@company.com', password='admin_pass')
    
    def test_userlist_user(self):
        request = self.factory.get('users/')
        request.user = self.user
        response = UserList.as_view()(request)
        self.assertEqual(response.status_code, 403,
                        f'Expected Response Code 403 - Forbidden, received {response.status_code} instead.')

    def test_userlist_nonuser(self):
        request = self.factory.get('users/')
        request.user = AnonymousUser
        response = UserList.as_view()(request)
        self.assertEqual(response.status_code, 403,
                        f'Expected Response Code 403 - Forbidden, received {response.status_code} instead.')
    
    def test_userlist_superuser(self):
        request = self.factory.get('users/')
        request.user = self.superuser
        response = UserList.as_view()(request)
        self.assertEqual(response.status_code, 200,
                        f'Expected Response Code 200 - OK, received {response.status_code} instead.')

    def test_user_instance_user(self):
        request = self.factory.get(reverse('user_id', kwargs={'pk':self.user.pk}))
        request.user = self.user
        response = UserDetail.as_view()(request, pk=self.user.pk)
        self.assertEqual(response.status_code, 403,
                        f'Expected Response Code 403 - Forbidden, received {response.status_code} instead.')

    def test_user_instance_nonuser(self):
        request = self.factory.get(reverse('user_id', kwargs={'pk':self.user.pk}))
        request.user = AnonymousUser
        response = UserDetail.as_view()(request, pk=self.user.pk)
        self.assertEqual(response.status_code, 403,
                        f'Expected Response Code 403 - Forbidden, received {response.status_code} instead.')  

    def test_user_instance_admin(self):
        request = self.factory.get(reverse('user_id', kwargs={'pk':self.user.pk}))
        request.user = self.superuser
        response = UserDetail.as_view()(request, pk=self.user.pk)
        self.assertEqual(response.status_code, 200,
                        f'Expected Response Code 200 - OK, received {response.status_code} instead.')

    def test_user_instance_404(self):
        request = self.factory.get(reverse('user_id', kwargs={'pk':10000}))
        request.user = self.superuser
        response = UserDetail.as_view()(request, pk=10000)
        self.assertEqual(response.status_code, 404,
                        f'Expected Response Code 404 - NOT FOUND, received {response.status_code} instead.')
