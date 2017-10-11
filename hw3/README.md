# Homework 3 - Django

**Due: 11/3 (Fri) 20:59 (This is a hard deadline)**

In this assignment you will implement a backend service for the blog frontend that you have created in homework 2.
This is an **individual** assignment.

Through this assignment, you are expected to:

  - Build a RESTful API server with Django
  - Understand how communication between the client and the server occurs
  - Test your Django application

## Features

As you have seen in homework 2, our blog has three models: *user*, *article*, and *comment*.

  - Each user should be able to sign up, sign in and sign out.
  - Only those users who are signed in are allowed to read or write articles and comments.
  - Users should be able to update or delete articles and comments only which they have created.

For the user model, using the [django default user model](https://docs.djangoproject.com/en/1.11/topics/auth/default/) is recommended.
You may also use the django authentication system to manage user authentication.
In homework 2, we didn't cover the real user authentication process.
Now with a proper backend, we can manage user sessions and authentication supported by Django.

Detailed specifications of RESTful APIs are as following:

| API                    | GET | POST | PUT | DELETE |
|------------------------|-----|------|-----|--------|
| `/signup`              | X | Create new user | X | X |
| `/signin`              | X | Log in | X | X |
| `/signout`             | Log out | X | X | X |
| `/article`             | Get article list | Create new article | X | X |
| `/article/:id`         | Get specified article | X | Edit specified article | Delete specified article |
| `/article/:id/comment` | Get comments of specified article | Create comment on specified article | X | X |
| `/comment/:id`         | Get specified comment | X | Edit specified comment | Delete specified comment |

Note that the APIs are slightly different from that of homework 2. Since we have used mock-backend, APIs were limited in homework 2.
In this assignment, we will implement a more RESTful API. 

Requests should contain data using the JSON format in the body of the request.
For each model, the JSON format should look like:
  - User : `{username: string, password: string}`
  - Article : `{title: string, content: string, author_id: int}`
  - Comment : `{article_id: int, content: string, author_id: int}`

For each API you should respond with the appropriate HTTP response code.
The list of response codes you should use is as follows:

  - `200` (Ok) : Request was responded successfully.
  - `201` (Created) : Request has created new resources successfully.
  - `401` (Unauthorized) : Request requires authentication. This should be returned if you are requesting without signing in.
  - `403` (Forbidden) : Request is forbidden. This should be returned if your request tries to modify resources of which you are not the owner.
  - `404` (Not Found) : Requested resource is not found. 
  - `405` (Method not allowed) : Requested URL does not allow the method of the request.

## Testing

You should also write tests to verify that your blog backend is implemented correctly.
Your tests should reach **100%** of both the statement coverage and the branch coverage.

You can check the coverage by:
  - Statement coverage : `coverage run --source='./blog' manage.py test`
  - Branch coverage : `coverage run --branch --source='./blog' manage.py test`

## Grading

This assignment is composed of a total of 70 points.

  - User APIs (15 points)
  - Article APIs (25 points)
  - Comment APIs (15 points)
  - Testing (15 points)

## Submission

**Due: 11/3 (Fri) 20:59 (This is a hard deadline)**

Please name your repository as `swpp-hw3-YOUR_USERNAME`, and replace `YOUR_USERNAME` with your own GitHub username.
Refer to HW1 to create another private repository.
We will check the snapshot of the *master* branch of your Github repository at the deadline and grade it.

**Make sure to push your work on Github on time and add `LastOne817` as a collaborator in your repository settings.**

  
## Tips

In django, it is rather complex to send request other than GET method with RESTful API due to the [CSRF token](https://docs.djangoproject.com/en/1.11/topics/security/#cross-site-request-forgery-csrf-protection).
To successfully handle such requests, try the following steps:

1. Before sending the request, send GET request to `/api/token`. The response will come with an empty content and will set the cookie `csrftoken` in your browser.
2. Send the POST request with a header containing `HTTP_X_CSRFTOKEN` as the value of the `csrftoken`.

For more detail, see `test_csrf` of the `blog/test.py` file in the skeleton code.
You may change this part if you have a better way of handling the CSRF token, but disabling the protection itself is **NOT** permitted.

To test your APIs, we recommend using ARC (Advanced REST Client). Check `arc.pdf` for detailed information.
