from django.urls import path
from .views import ArticleList, ArticleDetail, UserList, UserDetail, LikeCreate, LikeDestroy

urlpatterns = [
    path('users/', UserList.as_view()),
    path('users/<int:pk>/', UserDetail.as_view()),
    path('', ArticleList.as_view()),
    path('<int:pk>/', ArticleDetail.as_view()),
    #POST - records a like for the user in post with the given ID, 
    #GET - returns a representation of all likes for the post with the given ID
    path('likes/', LikeCreate.as_view()), 
    path('likes/<int:pk>/', LikeDestroy.as_view()),
]