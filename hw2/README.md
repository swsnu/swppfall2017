# Homework 2 - Angular2

#### **Due: 10/7 (Sat) 20:59 (This is a hard deadline)**

You will implement a front-end for a blogging service using Angular2. This is an **individual** assignment.
This assignment will help you

- Make a simple Angular2 application before diving into your projects
- Let you try out stuff we have learned in our practice sessions

## Features

Our blog will support three models: User, Articles, and Comments.
You are required to create a total of five pages as shown in the below storyboard, meeting the following requirements:

![image](https://i.imgur.com/xDPo8Cl.png)

- Sign In page (/sign_in)
  - You must receive the following fields:
    - `email`
    - `password`
  - As we don't have a proper backend, we don't do real, security-aware authentication yet, but users should only be able to log in with an account with an email of 'swpp@snu.ac.kr' and password of 'iluvswpp'.
  - After signing in, users should find themselves at the articles list page.
- Articles list page (/articles)
  - Users should be able to clearly make out the followings:
    - `article` `id`s
    - `article` `title`s
    - `author` `name`s
  - Upon clicking on the article title, users should be able to access the article's detail page.
  - Users should have access to the arcitle write(create) page from the articles list page.
- Article write(create) page (/articles/create)
  - You must receive the following fields:
    - `title`
    - `content`
  - The created article, of course, should be tagged with your own author id.
  - After creating the article, the user should be redirected to the created article's detail page
  - While creating the article, the user should be able to preview the contents (under a preview tab), in the way that it will be shown in the details page.
  - The back button will go back to the articles list page
- Article detail page (/articles/:id)
  - Users should be able to clearly make out the followings:
    - `article` `title`
    - `article` `content`
    - `author` `name`
  - Comments list of the corresponding article
    - Simple comments functionality (Create for everyone / Edit/Delete for the comment author)
    - user should make out the followings on the page:
      - `comment` `author` `name`
      - `comment` `content`
  - Edit/Delete button for the article
  - Upon clicking 'back', user should be able to go back to the articles list page.
- Article edit page (/articles/:id/edit)
  - You must receive and edit the following fields:
    - `title`
    - `content`
  - While editing the article, the user should be able to preview the contents, as it will be shown in the details page, under a 'preview' tab.
  - The back button will go back to the article detail page
- Common thing for all pages:
  - The user should be able to sign out from any of the pages. Upon signing out, the user should end on the initial Sign In page. (shown as dotted lines on the storyboard)
  - Each user should be able to update or delete articles and comments only which they have created.
  - **All pages/components should have proper unit tests to test its functionalities**, written in Jasmine, run by Karma (as shown in [this link](https://angular.io/guide/testing) and the practice session). Your tests are expected to cover all of your code, and we will give credits according to your coverage results. You can see the coverage information of your application as shown [here](https://www.angularonrails.com/add-test-coverage-report-angular-cli-project/).


We provide a [in-memory mock backend](https://angular.io/tutorial/toh-pt6) with our skeleton code.
Due to its simplicity, we do not go over too much into authentication and security for now, but later on (with HW3 and your project), it should be considered.

You should be able to implement your service component by sending appropriate http requests to the following URLs:

| API                    | GET | POST | PUT | DELETE |
|------------------------|-----|------|-----|--------|
| `api/user/1`      | Get user information containing whether or not the user is signed_in | X | Update user's `signed_in` value to sign-in/sign-out | X |
| `api/articles`             | Get article list | Create new article | X | X |
| `api/articles/:id`         | Get specified article | X | Edit specified article | Delete specified article |
| `api/comments`        | Get comments | Create new comment | X | X |
| `api/comments/:id`         | Get specified comment | X | Edit specified comment | Delete specified comment |

Articles should have an `id` (number), `author_id` (number), `title` (string), and `content` (string).
Comments should have an `id` (number), `author_id` (number), `article_id` (number), and `content` (string).
Users should have an `id` (number), `email` (string), `password` (string), `name` (string), and `signed_in` (boolean).

Each field names are as specified above. You should be able to implement the pages required with these APIs.

## Comments on files

Files that are created inside the `skeleton` (root) and `src` folder have been already discussed during the practice session (contents in [this link](https://angular.io/guide/quickstart#project-file-review)). You are not expected to create e2e tests just yet, but each `*.ts` files under your `src/app` directory should have corresponding `*.spec.ts` files that performs unit tests on your code. As we have done so in our practice sessions, you are expected to add components under the `src/app` directory freely, according to your needs. Nicely refactored code will result in better readability and is recommended. 

The `in-memory-data.service.ts` file is added to provide mock-backend for you to test out your application, and serves as specified above. Please do not modify this file. Under `src/app/*`, You are expected to create `Services` that communicate using HTTP, and `Components` that produce each pages meeting the requirements. The existing `AppCompoenent` is expected to be the root component of the entire application.


## Tips

- All things have been covered in the tutorial during the lab session. Please look carefully through the slides and the tips provided.
- It might be useful and more pleasing to the eyes by using a CSS framework like [Bootstrap](http://getbootstrap.com). However, this is optional, please proceed on your own willings. You might be needing them for your projects ahead, so it would be nice to have some head start.

## Grading

This assignment is composed of a total of 70 points:

#### Sign In page (5 points)

- Meets all requirements and provides meaningful, relevant tests (5)
- Meets most of (over 70%) of requirements (3)
- Meets some (over 40%) requirements(2)
- Doesn't meet any requirements (0)

#### Articles list page (15 points)

- Meets all requirements and provides meaningful, relevant tests (15)
- Meets most of (over 70%) of requirements (10)
- Meets some (over 40%) requirements(6)
- Doesn't meet any requirements (0)

#### Article write(create) page (8 points)

- Meets all requirements and provides meaningful, relevant tests (8)
- Meets most of (over 70%) of requirements (5)
- Meets some (over 40%) requirements(3)
- Doesn't meet any requirements (0)

#### Article detail page (20 points)

- Meets all requirements and provides meaningful, relevant tests (20)
- Meets most of (over 70%) of requirements (14)
- Meets some (over 40%) requirements(8)
- Doesn't meet any requirements (0)

#### Article edit page (7 points)

- Meets all requirements and provides meaningful, relevant tests (7)
- Meets most of (over 70%) of requirements (5)
- Meets some (over 40%) requirements(3)
- Doesn't meet any requirements (0)

#### Overall Testing and coverage (15 points)

- Overall coverage and tests meet the requirements (15)
- Meets most of (over 70%) of requirements (10)
- Meets some (over 40%) requirements(6)
- Doesn't meet any requirements (0)


## Submission

**Due: 10/7 (Sat) 20:59 (This is a hard deadline)**

We will check the snapshot of the *master* branch of your Github repository at the deadline and grade it.
Please name your repository as `swpp-hw2-YOUR_USERNAME`, and replace YOUR_USERNAME with you own GitHub username.
Refer to HW1 to create another private repository.

Please put your angular application files in the root folder (not inside another `hw2` or `skeleton` folder) and push your commits on time, appropriately.
Make sure to push your work on Github on time. You won't need to send us an email for submission, but we will pull each repositories at the time specified.
