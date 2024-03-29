define({ "api": [
  {
    "type": "get",
    "url": "articles/:id",
    "title": "Retrieve one article",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Token a1fe532ee4dbb5307cba3994733bcc6c1f47c8b2",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/v1/articles/:id"
      }
    ],
    "name": "GetArticle",
    "group": "Articles",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Article unique ID</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "Authenticated user"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "article",
            "description": "<p>Article with the specified ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the article</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>Name of the author</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the article</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "body",
            "description": "<p>Text of the article</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "created_at",
            "description": "<p>Date when the article was published</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP 200 OK\n{\n    \"id\": 2,\n    \"author\": \"1\",\n    \"title\": \"Christmas story\",\n    \"body\": \"Charles Dickens has written a story about a greedy old man who changed his life due to some events that happened on Christmas eve.\",\n    \"created_at\": \"2019-11-12T09:25:35.727643Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>The user is not logged in and has no permission to view the articles.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>There is no article with the specified ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 403 Forbidden\n{\n    \"detail\": \"Authentication credentials were not provided.\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP 404 NotFound\n{\n    \"detail\": \"Not found.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./news/views.py",
    "groupTitle": "Articles"
  },
  {
    "type": "get",
    "url": "articles/",
    "title": "Retrieve all articles",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Token a1fe532ee4dbb5307cba3994733bcc6c1f47c8b2",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/v1/articles/"
      }
    ],
    "name": "GetArticles",
    "group": "Articles",
    "permission": [
      {
        "name": "Authenticated user"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "articles",
            "description": "<p>List of articles.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the article</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>Name of the author</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the article</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "body",
            "description": "<p>Text of the article</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "created_at",
            "description": "<p>Date when the article was published</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n[\n    {\n        \"id\": 1,\n        \"author\": \"Ivan Ivanov\",\n        \"title\": \"The true story\",\n        \"body\": \"The movie \"True Story of Benjamin Button\" is based on a novel by an English writer.\",\n        \"created_at\": \"2019-11-12T09:24:08.300472Z\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>The user is not logged in and has no permission to view the articles.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 403 Forbidden\n{\n    \"detail\": \"Authentication credentials were not provided.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./news/views.py",
    "groupTitle": "Articles"
  },
  {
    "type": "post",
    "url": "rest-auth/logout/",
    "title": "Logout page",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Token a1fe532ee4dbb5307cba3994733bcc6c1f47c8b2",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/v1/rest-auth/logout/"
      }
    ],
    "name": "GetLogout",
    "group": "Authentication",
    "permission": [
      {
        "name": "Authenticated User"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Successfully logged out.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n{\n    \"detail\": \"Successfully logged out.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./news/views.py",
    "groupTitle": "Authentication"
  },
  {
    "type": "get",
    "url": "rest-auth/password/reset/confirm/",
    "title": "Password reset confirm",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Token 543b765b9df06a3c2cf05f4f456f926739c38f07",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/v1/rest-auth/password/reset/confirm"
      }
    ],
    "name": "PostConfirmResetPassword",
    "group": "Authentication",
    "permission": [
      {
        "name": "Authenticated user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "newpassword1",
            "description": "<p>The new password 1</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "newpassword2",
            "description": "<p>The same new password</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Uid",
            "description": "<p>The unique ID of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": "<p>Token of the user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n{\n    \"detail\": \"New password has been saved.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>The two new_passwords do not match</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 400 Bad Request:\n{\n    \"new_password2\": [\n        \"The two password fields didn't match.\"\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./news/views.py",
    "groupTitle": "Authentication"
  },
  {
    "type": "post",
    "url": "rest-auth/login/",
    "title": "Login post page",
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/v1/rest-auth/login/"
      }
    ],
    "name": "PostLogin",
    "group": "Authentication",
    "permission": [
      {
        "name": "Anonymous user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Key",
            "description": "<p>A newly generated auth token key. A confirmation email is sent to the user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 201 CREATED\n{\n    \"key\": \"16bc183d4b321d348508e30bb1f23c45091478cd\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>The provided credentials are wrong.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 400 Bad Request\n{\n    \"non_field_errors\": [\n        \"Unable to log in with provided credentials.\"\n    ]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP 400 Bad Request\n{\n    \"password\": [\n        \"This field may not be blank.\"\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./news/views.py",
    "groupTitle": "Authentication"
  },
  {
    "type": "post",
    "url": "rest-auth/password/change/",
    "title": "Password change",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Token 543b765b9df06a3c2cf05f4f456f926739c38f07",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/v1/rest-auth/password/change/"
      }
    ],
    "name": "PostNewPassword",
    "group": "Authentication",
    "permission": [
      {
        "name": "Authenticated user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "new_password1",
            "description": "<p>The new password 1.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "new_password2",
            "description": "<p>The same new password 2.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n{\n    \"detail\": \"New password has been saved.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>The two new_passwords do not match</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 400 Bad Request:\n{\n    \"new_password2\": [\n        \"The two password fields didn't match.\"\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./news/views.py",
    "groupTitle": "Authentication"
  },
  {
    "type": "post",
    "url": "rest-auth/registration/",
    "title": "Registration",
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/v1/rest-auth/registration/"
      }
    ],
    "name": "PostRegistration",
    "group": "Authentication",
    "permission": [
      {
        "name": "Anonymous user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email (optional).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password1",
            "description": "<p>Password 1.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password2",
            "description": "<p>Password 2.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Key",
            "description": "<p>A newly generated auth token key. A confirmation email is sent to the user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 201 CREATED\n{\n    \"key\": \"16bc183d4b321d348508e30bb1f23c45091478cd\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>A user with that username and/or email already exists.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 400 Bad Request\n{\n    \"username\": [\n        \"A user with that username already exists.\"\n    ],\n    \"email\": [\n        \"A user is already registered with this e-mail address.\"\n    ]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP 400 Bad Request\n{\n    \"password\": [\n        \"This field may not be blank.\"\n    ]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP 400 Bad Request:\n{\n    \"password2\": [\n        \"The two password fields didn't match.\"\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./news/views.py",
    "groupTitle": "Authentication"
  },
  {
    "type": "post",
    "url": "rest-auth/password/reset/",
    "title": "Password reset",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Token 543b765b9df06a3c2cf05f4f456f926739c38f07",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/v1/rest-auth/password/reset/"
      }
    ],
    "name": "PostResetPassword",
    "group": "Authentication",
    "permission": [
      {
        "name": "Authenticated user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n{\n    \"detail\": \"Password reset e-mail has been sent.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>The email passed in as parameter is wrong (e.g testuser@ instead of testuser@companpy.com).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 400 Bad Request\n{\n    \"email\": [\n        \"Enter a valid email address.\"\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./news/views.py",
    "groupTitle": "Authentication"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "C__Users_ibati_projects_newspaperapi_doc_main_js",
    "groupTitle": "C__Users_ibati_projects_newspaperapi_doc_main_js",
    "name": ""
  },
  {
    "type": "delete",
    "url": "likes/:id",
    "title": "Unlike an article",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Token 6c00b7d00f7c2ceb9c7287927c5cad2418de425c",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/v1/likes/:id"
      }
    ],
    "name": "DeleteLike",
    "group": "Likes",
    "permission": [
      {
        "name": "Authenticated user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The unique ID of the Like</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>The user is not logged in and has no permission to perform this action.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 403 Forbidden\n{\n    \"detail\": \"Authentication credentials were not provided.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./news/views.py",
    "groupTitle": "Likes"
  },
  {
    "type": "post",
    "url": "/likes/",
    "title": "Like an article",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Token \t6c00b7d00f7c2ceb9c7287927c5cad2418de425c",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/v1/likes/"
      }
    ],
    "name": "PostLike",
    "group": "Likes",
    "permission": [
      {
        "name": "Authenticated user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "reader",
            "description": "<p>The user's unique ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "article",
            "description": "<p>The article's unique ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "like_coordinates",
            "description": "<p>The ID of the Like, the reader whom this Like belongs and the Article that was Liked.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The unique ID of the Like</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "reader",
            "description": "<p>The unique ID of the User</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "article",
            "description": "<p>The unique ID of the Article</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 201 CREATED\n{\n    \"id\": 13,\n    \"reader\": 1,\n    \"article\": 2\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>The user is not logged in and has no permission to perform this action.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 403 Forbidden\n{\n    \"detail\": \"Authentication credentials were not provided.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./news/views.py",
    "groupTitle": "Likes"
  },
  {
    "type": "get",
    "url": "rest-auth/user/",
    "title": "Retrieve the logged in user",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Token c5d185f9b0a38ef1cd9ac76b7e1adcaa80345e13",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/v1/rest-auth/user/"
      }
    ],
    "name": "GetUser",
    "group": "UserForUser",
    "permission": [
      {
        "name": "Authenticated user"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "pk",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>First name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>Last name.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n{\n    \"pk\": 1,\n    \"username\": \"ibati\",\n    \"email\": \"irina.batiri2@gmail.com\",\n    \"first_name\": \"\",\n    \"last_name\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>The user besides admin has no permission to delete the user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 403 Forbidden\n{\n    \"detail\": \"Authentication credentials were not provided.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./news/views.py",
    "groupTitle": "UserForUser"
  },
  {
    "type": "put",
    "url": "rest-auth/user/",
    "title": "Change one user (own information)",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Token 4a483a106cb2924480fcf48d4ac24f0b51540fae",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/v1/rest-auth/user/"
      }
    ],
    "name": "PutUser",
    "group": "UserForUser",
    "permission": [
      {
        "name": "Authenticated user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "updated_username",
            "description": "<p>The updated username.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "updated_first_name",
            "description": "<p>The updated first name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "updated_last_name",
            "description": "<p>The updated last name.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "pk",
            "description": "<p>The unique ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>First name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>Last name.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n{\n    \"pk\": 3,\n    \"username\": \"testuser2\",\n    \"email\": \"\",\n    \"first_name\": \"Test\",\n    \"last_name\": \"User2\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>A user with that username already exists.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>The user besides admin has no permission to delete the user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 400 Bad Request\n{\n    \"username\": [\n        \"A user with that username already exists.\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP 403 Forbidden\n{\n    \"detail\": \"Authentication credentials were not provided.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./news/views.py",
    "groupTitle": "UserForUser"
  },
  {
    "type": "delete",
    "url": "user/:id/",
    "title": "Delete one user",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Token 8fc190f141d323b9ce9570d8bbe6d8f5206d81be",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/v1/users/:id/"
      }
    ],
    "name": "DeleteUser",
    "group": "UsersForAdmin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User's unique ID</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "Admin"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>The user besides admin has no permission to delete the user.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>There is no user with the specified ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 403 Forbidden\n{\n    \"detail\": \"Authentication credentials were not provided.\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP 404 NotFound\n{\n    \"detail\": \"Not found.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./news/views.py",
    "groupTitle": "UsersForAdmin"
  },
  {
    "type": "get",
    "url": "users/:id/",
    "title": "Retreive one user",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Token 8fc190f141d323b9ce9570d8bbe6d8f5206d81be",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/v1/users/:id/"
      }
    ],
    "name": "GetUser",
    "group": "UsersForAdmin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User's unique ID</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "Admin"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n{\n    \"id\": 4,\n    \"username\": \"testuser3\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>The user besides admin has no permission to update the user.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>There is no user with the specified ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 403 Forbidden\n{\n    \"detail\": \"Authentication credentials were not provided.\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP 404 NotFound\n{\n    \"detail\": \"Not found.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./news/views.py",
    "groupTitle": "UsersForAdmin"
  },
  {
    "type": "get",
    "url": "users/",
    "title": "Retrieve all users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Token 8fc190f141d323b9ce9570d8bbe6d8f5206d81be",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/v1/users/"
      },
      {
        "url": "http://127.0.0.1:8000/api/v1/"
      }
    ],
    "name": "GetUsers",
    "group": "UsersForAdmin",
    "permission": [
      {
        "name": "Admin"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>List of users.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n[\n    {\n        \"id\": 4,\n        \"username\": \"testuser3\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>The user besides admin has no permission to view the list of the users.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 403 Forbidden\n{\n    \"detail\": \"Authentication credentials were not provided.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./news/views.py",
    "groupTitle": "UsersForAdmin"
  },
  {
    "type": "put",
    "url": "users/:id/",
    "title": "Update a user",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Token 8fc190f141d323b9ce9570d8bbe6d8f5206d81be",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/v1/users/:id/"
      }
    ],
    "name": "PutUser",
    "group": "UsersForAdmin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User's unique ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>The updated username.</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "Admin"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>The updated user.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The unique user's ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>The updated username.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Authentication credentials were not provided.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>There is no user with the specified ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 403 Forbidden\n{\n    \"detail\": \"Authentication credentials were not provided.\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP 404 NotFound\n{\n    \"detail\": \"Not found.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./news/views.py",
    "groupTitle": "UsersForAdmin"
  }
] });
