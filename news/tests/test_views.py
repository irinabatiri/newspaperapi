from rest_framework.test import APIClient
from rest_framework.test import APITestCase
from rest_framework.test import APIRequestFactory
from django.core.urlresolvers import reverse
from django.contrib.auth.models import AnonymousUser, User

from news import views
from models import Article, Like

class TestArticle(APITestCase):
    def setUp(self):
        self.factory = APIRequestFactory()
        self.user = User.objects.create_user(
            username='Name', email='test@company.com', password='top_secret')

    def test_list_user(self):
        request = self.factory.get(reverse('articles'))
        request.user = self.user #1
        response = ArticleList.as_view()(request)
        self.assertEqual(response.status_code, 200,
                        f'Expected Response Code 200 - OK, received {response.status_code} instead.')

    def test_list_nonuser(self):
        request = self.factory.get(reverse('articles'))
        request.user = AnonymousUser
        response = ArticleList.as_view()(request)
        self.assertEqual(response.status_code, 403,
                        f'Expected Response Code 403, received {response.status_code} instead.')

   def test_detail_user(self):
        request = self.factory.get(reverse('article_id'))
        request.user = self.user #1
        response = ArticleDetail.as_view()(request)
        self.assertEqual(response.status_code, 200,
                        f'Expected Response Code 200 - OK, received {response.status_code} instead.')

    def test_detail_user_404(self):
        request = self.factory.get('/10000/')
        request.user = self.user #1
        response = ArticleDetail.as_view()(request)
        self.assertEqual(response.status_code, 404,
                        f'Expected Response Code 404 - NOT FOUND, received {response.status_code} instead.')

    def test_detail_nonuser(self):
        request = self.factory.get(reverse('articles'))
        request.user = AnonymousUser
        response = ArticleDetail.as_view()(request)
        self.assertEqual(response.status_code, 403,
                        f'Expected Response Code 403 - FORBIDDEN, received {response.status_code} instead.')

class TestLike(APITestCase):
    def setUp(self):
        self.factory = APIRequestFactory()
        self.user = User.objects.create_user(
            username='Name', email='test@company.com', password='top_secret')  
        self.article_mockup = Article.objects.create(
            author='X', title='Title', body='Body content...')
        self.like_mockup = Like.objects.create(
            reader = user, article = article_mockup
        )

    def test_like_post_user(self):
        request = factory.post('likes/') # or like/1?
        request.user = self.user #1
        response = LikeCreate.as_view()(request)
        self.assertEqual(response.status_code, 201, 
                        f'Expected Response Code 201 - CREATED, received {response.status_code} instead.')

    def test_like_post_nonuser(self):
        request = self.factory.get(reverse('likes/')) # or like/1?
        request.user = AnonymousUser
        response = LikeCreate.as_view()(request)
        self.assertEqual(response.status_code, 403,
                        f'Expected Response Code 403 - FORBIDDEN, received {response.status_code} instead.')

    def test_like_delete_user(self):
        request = factory.post('likes/<int:pk>/')
        request.user = self.user #1
        response = LikeCreate.as_view()(request)
        self.assertEqual(response.status_code, 201, 
                        f'Expected Response Code 201 - CREATED, received {response.status_code} instead.')

class TestUser(APITestCase):
    def setUp(self):
        self.factory = APIRequestFactory()
        self.user = User.objects.create_user(
            username='Name', email='test@company.com', password='top_secret')
        self.superuser = User.objects.create_superuser(
            username='Admin', email='admin@company.com', password='admin_pass')
    
    def test_userlist_user(self):
        request = factory.get('users/')
        request.user = self.user
        response = UserList.as_view()(request)
        self.assertEqual(response.status_code, 403,
                        f'Expected Response Code 403 - Forbidden, received {response.status_code} instead.')
    
    def test_userlist_superuser(self):
        request = factory.get('users/')
        request.superuser = self.superuser
        response = UserList.as_view()(request)
        self.assertEqual(response.status_code, 200,
                        f'Expected Response Code 200 - Forbidden, received {response.status_code} instead.')        

