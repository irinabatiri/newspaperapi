from django.urls import path
from .views import ArticleList, ArticleDetail, UserList, UserDetail, LikeCreate, LikeDestroy

urlpatterns = [
    path('users/', UserList.as_view(), name = 'users'),
    path('users/<int:pk>/', UserDetail.as_view(), name = 'user_id'),
    path('', ArticleList.as_view(), name = 'articles'),
    path('<int:pk>/', ArticleDetail.as_view(), name = 'article_id'),
    #POST - records a like for the user in post with the given ID, 
    #GET - returns a representation of all likes for the post with the given ID
    path('likes/', LikeCreate.as_view(), name = 'likes'), 
    path('likes/<int:pk>/', LikeDestroy.as_view(), name = 'like_id'),
]