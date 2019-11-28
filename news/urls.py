from django.urls import path, re_path
from rest_auth.views import PasswordResetConfirmView
from .views import ArticleList, ArticleDetail, UserList, UserDetail, LikeCreate, LikeDestroy

urlpatterns = [
    path('users/', UserList.as_view(), name='users'),
    path('users/<int:pk>/', UserDetail.as_view(), name='user_id'),
    re_path(r'^rest-auth/password/reset/confirm/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,20})/$', PasswordResetConfirmView.as_view(),
            name='password_reset_confirm'),
    path('articles/', ArticleList.as_view(), name='articles'),
    path('articles/<int:pk>/', ArticleDetail.as_view(), name='article_id'),
    path('likes/', LikeCreate.as_view(), name='likes'),
    path('likes/<int:pk>/', LikeDestroy.as_view(), name='like_id'),
]