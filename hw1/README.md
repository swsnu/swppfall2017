# Homework 1 - Python and TypeScript Basics

**Due: 9/22 (Fri) 20:59 (This is a hard deadline)**

This assignment is for you to become familiar with Python and TypeScript.
You will be using Python to build the backend system, and TypeScript will be used to build the frontend system, using the Angular2 framework.
This is an **individual** assignment.

From the beginning to the end of the development, you must use **GitHub** for version control.
This will be used for your submission as well, so please keep it in mind.

## Python

### Objective

In this assignment, you will implement a JSON crawler based on the skeleton code.
[Crawler](https://en.wikipedia.org/wiki/Web_crawler) is a type of a program that can access web sites and parse them to collect useful data for your service.
This crawler can be useful for your term project if you wish to collect data from the web.

The goal of this assignment is to practice using various functions provided by the python language.
In this assignment, you will get familiar with:

  - Built-in functions
    - Python provides many useful built-in functions. You can write code more efficiently and effectively if you are fluent with such functions. 
  - Class
    - You will need to modularize and encapsulate your code to neatly manage your project. Class is a core concept to achieve such objectives. It is an important component in design patterns that you will learn in future classes.
    Since you will be defining your own models with classes in homework 3, you should be familiar with it.
  - Decorator
    - [Decorator](https://www.python.org/dev/peps/pep-0318/) is a special syntax in python for transforming functions using closure. It is also an important feature for applying design patterns in python, such as defining static methods or class methods.
    Many functions from Django are provided as decorators as well, especially with user authentication, which you will be using in homework 3.
  - Lambda function
    - Lambda function helps you write your python code in a functional programming style. In certain situations, functional style makes your code more concise and easy to modularize.
    For more information, read [Functional Programming HowTo](https://docs.python.org/3/howto/functional.html).

### 1. Complete `JsonCrawler`

In your skeleton code, `JsonCrawler` class is defined in `crawler.py`.
This crawler receives [JSON](http://www.json.org/json-en.html) format data from the web api and manages them.
Most of its core functions, including acquiring, storing and managing data are already implemented for your convenience.
To complete the crawler, you should implement the following functions:

#### `handle_exception`

In real projects, it is best to handle diffent types of exceptions separatly depending on the situation.
However, we will implement a general exception handler for simplicity.

This should be implemented as a decorator in order to be easily applied to other methods.
Please check out [this document](https://www.programiz.com/python-programming/decorator) to understand how to implement python decorator.
If any exception occurs in decorated functions, it should handle the exception and print it, rather than leaving the exception to be propagated.

For detailed information, check the execution example below.

#### `get_by_name`

This method returns the crawler instance identified with the given name.
The name of each crawler is provided in intialization, and you have to save name-instance mapping in `__init__` using the given class variable `crawlers` dictionary.
After that you can acquire the instance by name.

This method should be implemented as class method.
Please check out [this document](https://www.programiz.com/python-programming/methods/built-in/classmethod) to understand how class method works.

#### Usage

In `run.py` a sample code using the crawler is provided.
It uses the [MetaWeather API](https://www.metaweather.com/api/) to collect weather information.
Your task is to complete the part in the middle of the code to acquire 'Where On Earth' ID from crawlers, and spawn new crawlers to consistently collect weather data.
Check the API description to get what you need.

You should **NOT** edit parts other than those marked as `TODO`s in your skeleton code when you submit your assignment.
You don't have to understand the implemented methods provided in the skeleton code, but studying them can be useful for your future term project.

When you are done, you will get the following results:

```
 $ python3 run.py
 === Weather forecast ===
 seoul 2017-09-05T17:29:38.408330Z Showers
 new york 2017-09-05T17:19:43.923730Z Showers
 cairo 2017-09-05T17:54:23.013530Z Clear
 tokyo 2017-09-05T17:23:47.382190Z Light Rain
 london 2017-09-05T17:19:03.178500Z Light Rain
 === Weather forecast ===
 Caught Exception: 'seoul'
 new york 2017-09-05T17:19:43.923730Z Showers
 cairo 2017-09-05T17:54:23.013530Z Clear
 tokyo 2017-09-05T17:23:47.382190Z Light Rain
 london 2017-09-05T17:19:03.178500Z Light Rain
```

### 2. Custom Weather Notification

Now that you can successfully get the weather data periodcally, your next task is to create a custom weather notification service.
In `notify.py`, a sample code using the `WeatherForecast` class is provided.

The weather forecast should be initialized with a list of locations and a list of notification conditions.
Each notification condition is a tuple of length 2. The first element is a message to be printed when a condition is met, and the second element is a condition function.

In your forecast class, you should first initialize your class instance with a constructor, and then implement the `run` method which continuously gets data from crawlers and checks conditions. Each location should be checked with all conditions.

For practice, you should register 2 conditions using lambda expression:
  1. 'Light cloud' : whether the weather status is light cloud
  2. 'Ice age' : whether the minimum temperature is lower than -30 degrees celcius

When you are done, you will get the following results:

```
 $ python3 notify.py 
 Light cloud in seoul
 Light cloud in new york
 Light cloud in seoul
 Light cloud in new york
 Light cloud in seoul
 Light cloud in new york
 ...
```
(Hopefully no ice age yet)

## TypeScript

### How to run TypeScript programs

1. We assume that typescript is installed through npm: `$ npm install -g typescript`
2. With this set up, you can compile the typescript program as followings: `$ tsc form.ts`, under the directory you are working on. It will generate a new `form.js` file.
3. Validate that you have the newly generated `form.js` file, and you can use it in `form.html`, as provided in the skeleton code. In our case, you will simply need to open `form.html` on your favorite browser.

Each of the files serve the following roles:

- `form.html` : HTML file for layout for the form checking page.
- `form.ts` : TypeScript file for form checking and using JS components.

TIP: You will find `console.log()` function useful for printing and debugging. You will be able to access the console by using the developer tools and JavaScript console provided in each of the different browsers.

### TypeScript Form Checker

To complete this assignment, you will have to implement a form checker, with tooltips, and modal pop-ups using TypeScript. Through this assignment, we expect you to be able to:

- See usages of JavaScript/TypeScript
- Try out basic and most common usages of JavaScript/TypeScript
- Compare and learn the advantages of using TypeScript compared to JavaScript
- Some taste of TypeScript before diving into Angular2 with HW2.

 With the given form, upon clicking on the `check` button, it should first produce a pop-up listing out which forms to check and correct (see requirements). Even when closing the pop-up, it should tell once something is wrong with the form, with  an 'X' icon next to each fields. Hovering the mouse over the icon should tell what is wrong with a tooltip (see requirements). If there is no problem with the form, it should show a modal indicating that it had been successfully submitted.
You must only alter the code in the sections marked as TODO in the skeleton code and submit your code using GitHub. Do NOT alter the names of the forms in the provided HTML file. Refer to the HTML file to infer the form names.
Specific **requirements** are as listed below.
- Email: characters@characters.domain (characters other than @ or whitespace followed by an @ sign, followed by more characters, and then a ".". After the "." sign, you can only write 2 to 3 letters from a to z).
- Password: Must contain at least one number and one uppercase and one lowercase letter, and at least 8 or more characters.
- Password Confirmation: Must match password.
- Website: Should start with http:// or https:// followed by at least one character.
- Phone number: nnn-nnnn-nnnn: three numbers, then "-", followed by four numbers and a "-", then four numbers.
-  First name (English) : Start with a capital letter, followed by one or more lowercase letters. Should only contain alphabets (A-Z, a-z)
- Last name (English) : Start with a capital letter, followed by one or more lowercase letters. Should only contain alphabets (A-Z, a-z)
- Age : Must be a number between 0 and 200 (inclusive).
- Birth date (Month) : Must be one of "January", "February", ..., "December"
- Birth date (Day) : Must be a number of one or two digits.
- Birth date (Year) : Must be a number between 1800 and 2017 (inclusive).

Tip: using regex might be useful for detecting wrong forms

## Grading

### Python (10 points)

  - Crawler and `run.py` (5 points)
  - `notify.py` (5 points)
  - Partial points for minor errors

### TypeScript (10 points)

We will grade the `form.ts` and `form.html` file under the `typescript` directory in your GitHub repository. We will see the outputs  to validate your answers.

- Valid form checking (5 points)
- Tooltips (3 points)
- Modal pop-ups (2 points)
- Partial points for minor errors


## Submission

Due: 9/22 (Fri) 20:59 (This is a hard deadline)

You must create your own *private* repository under your account and **send them by email to `swpp-tas@spl.snu.ac.kr`**.
**Be sure to add the TAs as collaborators in your repository settings!** (Detailed instructions below).
We will check the snapshot of the *master* branch of your Github repository at the deadline and grade it.
Please create a `python` and `typescript` folders, and put your homework files in them appropriately.
Make sure to push your work on Github on time.

### Instructions on creating a private repository

#### I. Get GitHub Student Developer Pack

1. Go to `https://education.github.com`.
2. Follow instructions to `Request a discount`.

#### II. Make your private repository

1. Go to your github profile: `https://github.com/YOUR_USERNAME`.
2. Under `Repositories`, click on `New`.
3. Fill in `swpp-hw1-USERNAME` as your repository name, and mark is as `Private`.
4. Hit `Create repository`.
5. In terminal, go to the directory that you will be working in (e.g. `~/workspace/swpp-hw1-USERNAME` or `~/swpp-hw1-USERNAME`)
6. Type in and run the following commands, which is also shown on the page that you will be looking at after step 4:

```
echo "# asdf" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME
git push -u origin master
```

7. Under `Settings` then `Collaborators` tab, Add TAs as your collaborators: `wonook`, `LastOne817`.
8. You're all set! After finishing your homework, push your contents to your repository on time!
