from django.contrib.auth import get_user_model
from rest_framework import generics, permissions

from .models import Article, Like
from .serializers import ArticleSerializer, UserSerializer, LikeSerializer



class ArticleList(generics.ListAPIView):
    """
    @apiDefine Authenticated user    Only logged in users can use this functionality
    """
    """
    @api {get}    /                     Retrieve all articles
    @apiName GetArticles
    @apiGroup Articles
    @apiPermission Authenticated user

    @apiSuccess {Object[]} articles    List of articles.
    @apiSuccess {Number} id            ID of the article
    @apiSuccess {String} author        Name of the author 
    @apiSuccess {String} title         Title of the article
    @apiSuccess {String} body          Text of the article
    @apiSuccess {Date} created_at      Date when the article was published

    @apiSuccessExample Success-Response:
        HTTP 200 OK
        [
            {
                "id": 1,
                "author": "Ivan Ivanov",
                "title": "The true story",
                "body": "The movie "True Story of Benjamin Button" is based on a novel by an English writer.",
                "created_at": "2019-11-12T09:24:08.300472Z"
            }
        ]

    @apiError Forbidden The user is not logged in and has no permission to view the articles.

    @apiErrorExample Error-Response:
         HTTP 403 Forbidden
         {
             "detail": "Authentication credentials were not provided."
         }
    """
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

class ArticleDetail(generics.RetrieveAPIView):
    """
    @api {get} :id Retrieve one article
    @apiName GetArticle
    @apiGroup Articles
    @apiParam {Number} id Article unique ID

    @apiPermission Authenticated user
    @apiSuccess {Object} article    Article with the specified ID.
    @apiSuccess {Number} id            ID of the article
    @apiSuccess {String} author        Name of the author 
    @apiSuccess {String} title         Title of the article
    @apiSuccess {String} body          Text of the article
    @apiSuccess {Date} created_at      Date when the article was published

    @apiSuccessExample Success-Response:
        HTTP 200 OK
    {
        "id": 2,
        "author": "1",
        "title": "Christmas story",
        "body": "Charles Dickens has written a story about a greedy old man who changed his life due to some events that happened on Christmas eve.",
        "created_at": "2019-11-12T09:25:35.727643Z"
    }

    @apiError Forbidden The user is not logged in and has no permission to view the articles.

    @apiErrorExample Error-Response:
        HTTP 403 Forbidden
        {
            "detail": "Authentication credentials were not provided."
        }

    @apiError NotFound There is no article with the specified ID.

    @apiErrorExample Error-Response:
        HTTP 404 NotFound
        {
            "detail": "Not found."
        }
    """
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

class LikeCreate(generics.CreateAPIView):
    """
    @api {post} /likes/  Like an article
    @apiName PostLike
    @apiGroup Likes
    @apiPermission Authenticated user

    @apiParam {Number} reader The user's unique ID
    @apiParam {Number} article The article's unique ID

    @apiSuccess {Object} like_coordinates The ID of the Like, the reader whom this Like belongs and the Article that was Liked.
    @apiSuccess {Number} id               The unique ID of the Like
    @apiSuccess {Number} reader           The unique ID of the User
    @apiSuccess {Number} article          The unique ID of the Article

    @apiSuccessExample Success-Response:
    HTTP 201 CREATED
    {
        "id": 13,
        "reader": 1,
        "article": 2
    }

    @apiError Forbidden The user is not logged in and has no permission to perform this action.

    @apiErrorExample Error-Response:
        HTTP 403 Forbidden
        {
            "detail": "Authentication credentials were not provided."
        }
    """
    queryset = Like.objects.all()
    serializer_class = LikeSerializer

class LikeDestroy(generics.DestroyAPIView):
    """
    @api {delete} likes/:id  Unlike an article
    @apiName DeleteLike
    @apiGroup Likes
    @apiPermission Authenticated user 

    @apiParam {Number} id  The unique ID of the Like
    @apiSuccess {String} message 
    @apiSuccessExample Success-Response:
    HTTP 204 No Content

    @apiError Forbidden The user is not logged in and has no permission to perform this action.

    @apiErrorExample Error-Response:
        HTTP 403 Forbidden
        {
            "detail": "Authentication credentials were not provided."
        }
    """
    queryset = Like.objects.all()
    serializer_class = LikeSerializer

class UserList(generics.ListCreateAPIView):
    """
    @api {get} users/ Retrieve all users
    @apiName GetUsers
    @apiGroup UsersForAdmin
    @apiPermission Admin

    @apiSuccess {Object[]} users    List of users.
    @apiSuccess {Number} id         ID of the user.
    @apiSuccess {String} username   Username.

    @apiSuccessExample Success-Response:
        HTTP 200 OK
        [
            {
                "id": 4,
                "username": "testuser3"
            }
        ]

    @apiError Forbidden The user besides admin has no permission to view the list of the users.

    @apiErrorExample Error-Response:
         HTTP 403 Forbidden
         {
             "detail": "Authentication credentials were not provided."
         }
    """    
    permission_classes = (permissions.IsAdminUser,)
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer

class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    @api {get} users/:id Retreive one user
    @apiName GetUser
    @apiGroup UsersForAdmin
    @apiParam {Number} id User's unique ID

    @apiPermission Admin
    @apiSuccess {Number} id       ID of the user.
    @apiSuccess {String} username Username.

    @apiSuccessExample Success-Response:
        HTTP 200 OK
        {
            "id": 4,
            "username": "testuser3"
        }
    @apiError Forbidden The user besides admin has no permission to update the user.

    @apiErrorExample Error-Response:
         HTTP 403 Forbidden
         {
             "detail": "Authentication credentials were not provided."
         }

    @apiError NotFound There is no user with the specified ID.

    @apiErrorExample Error-Response:
        HTTP 404 NotFound
        {
            "detail": "Not found."
        }
    """
    """
    @api {put} users/:id Update a user
    @apiName PutUser
    @apiGroup UsersForAdmin
    @apiParam {Number} id       User's unique ID
    @apiParam {String} username The updated username.

    @apiPermission Admin
    @apiSuccess {Object} user     The updated user.
    @apiSuccess {Number} id       The unique user's ID.
    @apiSuccess {String} username The updated username.

    @apiSuccessExample Success-Response:
        HTTP 200 OK

    @apiError Forbidden Authentication credentials were not provided.
    @apiErrorExample Error-Response:
         HTTP 403 Forbidden
         {
             "detail": "Authentication credentials were not provided."
         }

    @apiError NotFound There is no user with the specified ID.

    @apiErrorExample Error-Response:
        HTTP 404 NotFound
        {
            "detail": "Not found."
        }
        
    """
    """
    @api {delete} user/:id Delete one user
    @apiName DeleteUser
    @apiGroup UsersForAdmin
    @apiParam {Number} id User's unique ID

    @apiPermission Admin
    @apiSuccess {String} message

    @apiError Forbidden The user besides admin has no permission to delete the user.
    @apiErrorExample Error-Response:
         HTTP 403 Forbidden
         {
             "detail": "Authentication credentials were not provided."
         }

    @apiError NotFound There is no user with the specified ID.

    @apiErrorExample Error-Response:
        HTTP 404 NotFound
        {
            "detail": "Not found."
        }
    """
    permission_classes = (permissions.IsAdminUser,)
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer
"""
@api {post} rest-auth/registration/  Registration 
@apiName PostRegistration
@apiGroup Authentication
@apiPermission Anonymous user
@apiParam {String} username      Username.
@apiParam {String} email         Email (optional).
@apiParam {String} password1     Password 1.
@apiParam {String} password2     Password 2.

@apiSuccess {String} Key   A newly generated auth token key. A confirmation email is sent to the user.
@apiSuccessExample Success-Response:
    HTTP 201 CREATED
    {
        "key": "16bc183d4b321d348508e30bb1f23c45091478cd"
    }

@apiError BadRequest A user with that username and/or email already exists.
@apiErrorExample Error-Response:
    HTTP 400 Bad Request
    {
        "username": [
            "A user with that username already exists."
        ],
        "email": [
            "A user is already registered with this e-mail address."
        ]
    }

@apiError BadRequest The "username" field and the "password1"/"password2" field cannot be blank.
@apiErrorExample Error-Response:
    HTTP 400 Bad Request
    {
        "password": [
            "This field may not be blank."
        ]
    }

@apiError BadRequest The two passwords do not match
@apiErrorExample Error-Response:
    HTTP 400 Bad Request:
    {
        "password2": [
            "The two password fields didn't match."
        ]
    }
"""
"""
@api {post} rest-auth/login/ Login post page
@apiName PostLogin
@apiGroup Authentication
@apiPermission Anonymous user
@apiParam {String} username   Username.
@apiParam {String} password   Password.

@apiSuccess {String} Key   A newly generated auth token key. A confirmation email is sent to the user.
@apiSuccessExample Success-Response:
    HTTP 201 CREATED
    {
        "key": "16bc183d4b321d348508e30bb1f23c45091478cd"
    }

@apiError BadRequest The provided credentials are wrong.
@apiErrorExample Error-Response:
    HTTP 400 Bad Request
    {
        "non_field_errors": [
            "Unable to log in with provided credentials."
        ]
    }

@apiError BadRequest The "username" field and the "password" field cannot be blank.
@apiErrorExample Error-Response:
    HTTP 400 Bad Request
    {
        "password": [
            "This field may not be blank."
        ]
    }
"""
"""
@api {post} rest-auth/logout/  Logout page
@apiName GetLogout
@apiGroup Authentication
@apiPermission Authenticated User

@apiSuccess {String} message
@apiSuccessExample Success-Response:
    HTTP 200 OK
    {
        "detail": "Successfully logged out."
    }

"""
"""
@api {post} rest-auth/password/change/  Password change
@apiName PostNewPassword
@apiGroup Authentication
@apiPermission Authenticated user
@apiParam {String} new_password1    The new password 1.
@apiParam {String} new_password2    The same new password 2.

@apiSuccess {String} message
@apiSuccessExample Success-Response:
    HTTP 200 OK
    {
        "detail": "New password has been saved."
    }

@apiError BadRequest The two new_passwords do not match
@apiErrorExample Error-Response:
    HTTP 400 Bad Request:
    {
        "new_password2": [
            "The two password fields didn't match."
        ]
    }
"""
"""
@api {post} rest-auth/password/reset/   Password reset
@apiName PostResetPassword
@apiGroup Authentication
@apiPermission Authenticated user
@apiParam {String} email    Email.

@apiSuccess {String} message
@apiSuccessExample Success-Response:
    HTTP 200 OK
    {
        "detail": "Password reset e-mail has been sent."
    }

@apiError BadRequest The email passed in as parameter is wrong (e.g testuser@ instead of testuser@companpy.com).
@apiErrorExample Error-Response:
    HTTP 400 Bad Request
    {
        "email": [
            "Enter a valid email address."
        ]
    }

"""
"""
@api {post} rest-auth/password/reset/confirm/ Password reset confirm
@apiName PostConfirmResetPassword
@apiGroup Authentication
@apiPermission Authenticated user
@apiParam {String} newpassword1   The new password 1
@apiParam {String} newpassword2   The same new password
@apiParam {Number} user_ID        The unique user's ID
@apiParam {String} token          The auth token

@apiSuccess {String} message
@apiSuccessExample Success-Response:
    HTTP 200 OK
    {
        "detail": "New password has been saved."
    }
@apiError BadRequest The two new_passwords do not match
@apiErrorExample Error-Response:
    HTTP 400 Bad Request:
    {
        "new_password2": [
            "The two password fields didn't match."
        ]
    }
"""
"""
@api {get} rest-auth/user/ Retrieve the logged in user
@apiName GetUser
@apiGroup UserForUser
@apiPermission Authenticated user

@apiSuccess {Number} pk
@apiSuccess {String} username     Username.
@apiSuccess {String} email        Email.
@apiSuccess {String} first_name   First name.
@apiSuccess {String} last_name    Last name.

@apiSuccessExample Success-Response:
    HTTP 200 OK
    {
        "pk": 1,
        "username": "ibati",
        "email": "irina.batiri2@gmail.com",
        "first_name": "",
        "last_name": ""
    }
@apiError Forbidden The user besides admin has no permission to delete the user.
@apiErrorExample Error-Response:
    HTTP 403 Forbidden
    {
        "detail": "Authentication credentials were not provided."
    }
"""
"""
@api {put} rest-auth/user/ Change one user (own information)
@apiName PutUser
@apiGroup UserForUser
@apiPermission Authenticated user
@apiParam {String} username       The username.
@apiParam {String} first_name     The first name.
@apiParam {String} last_name      the last name.

@apiSuccess {Number} pk           The unique ID.
@apiSuccess {String} username     Username.
@apiSuccess {String} email        Email.
@apiSuccess {String} first_name   First name.
@apiSuccess {String} last_name    Last name.

@apiSuccessExample Success-Response:
    HTTP 200 OK
    {
        "pk": 3,
        "username": "testuser2",
        "email": "",
        "first_name": "Test",
        "last_name": "User2"
    }
@apiError BadRequest A user with that username already exists.
@apiErrorExample Error-Response:
    HTTP 400 Bad Request
    {
        "username": [
            "A user with that username already exists."
    }

@apiError Forbidden The user besides admin has no permission to delete the user.
@apiErrorExample Error-Response:
    HTTP 403 Forbidden
    {
        "detail": "Authentication credentials were not provided."
    }

"""
"""
@api {patch} rest-auth/user/ Partially change one user (own information)
@apiName PatchUser
@apiGroup UserForUser
@apiPermission Authenticated user
@apiParam {String} username       The username.
@apiParam {String} first_name     The first name.
@apiParam {String} last_name      the last name.

@apiSuccess {Number} pk           The unique ID.
@apiSuccess {String} username     Username.
@apiSuccess {String} email        Email.
@apiSuccess {String} first_name   First name.
@apiSuccess {String} last_name    Last name.

@apiSuccessExample Success-Response:
    HTTP 200 OK
    {
        "pk": 3,
        "username": "testuser2",
        "email": "",
        "first_name": "Test",
        "last_name": "User2"
    }
@apiError BadRequest A user with that username already exists.
@apiErrorExample Error-Response:
    HTTP 400 Bad Request
    {
        "username": [
            "A user with that username already exists."
    }

@apiError Forbidden The user besides admin has no permission to delete the user.
@apiErrorExample Error-Response:
    HTTP 403 Forbidden
    {
        "detail": "Authentication credentials were not provided."
    }
"""

