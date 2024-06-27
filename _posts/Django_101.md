---
title: "Django 101"
excerpt: "How to start Django"
date: "2024-06-24"
---

## How Django Works?
![Django](/posts/Django/django-tutorial.png)
**Django MVT**

MVC is a software design pattern that has three components namely Model (back-end), View (front-end) and Controller. Django uses a modified version of MVC called MVT where:

- Model is the data storage layer

- Template is the data presentation layer

- View is the logical layer that interacts with Model to fetch and render data to Template.

## Request and response cycle in Django
![Django1](/posts/Django/download.png)
A request starts when the user submits a URL in the web browser. The request is forwarded by middlewares to match a urlpattern. These urls path map to view functions or return error. A view function may take the request further to models to access data or directly render response to a template page.

>[Reference](https://www.programink.com/django-tutorial/django-urls-views.html)

## Installation

1. Create a virtual environment:
    ```shell
    pipenv shell
    ```

2. Install Django:
    ```shell
    pip install django
    ```

3. Start a new project:
    ```shell
    django-admin startproject PROJECT
    cd PROJECT
    python manage.py startapp myapp
    python manage.py runserver
    ```

To run the server on a different port, use:

```shell
python manage.py runserver <your_desired_port>
```

## Basics for apps

1. Create an app:
    ```shell
    python manage.py startapp APPNAME
    ```

    Add the app to `settings.py`.

2. Create views:
    ```python
    def index(request):
        return HttpResponse("hello")
    ```

3. Create `urls.py`:
    ```python
    from . import views
    from django.urls import path

    urlpatterns = [
        path("", views.index)
    ]
    ```

4. Connect the project's URL configuration:
    ```python
    path("", include(APP.urls))
    ```

## Database Setup

1. Create a model:
    ```python
    from django.db import models

    class Tour(models.Model):
        destination_country = models.CharField(max_length=64)
        number_of_nights = models.IntegerField()
        ...

        # The __str__ method controls the string representation of an object.
        def __str__(self):
        return (f"ID:{self.id}: From {self.origin_country} to {self.destination_country}, {self.number_of_nights} nights costs ${self.price}") 
    ```

2. Run migrations:
    ```shell
    python manage.py makemigrations
    python manage.py migrate
    ```

## Interact with the Shell

### Create Data

1. Open the shell:
    ```shell
    python manage.py shell
    ```
    If IPython is not installed, use:
    ```shell
    python manage.py shell -i ipython
    ```

    Or install IPython in your pipenv environment.

2. Create data with shell:
```shell
python manage.py shell 
#create data
>>> from asiatoursagency.models import Tour
>>> to3 = Tour(origin_country="Malasia", destination_country="Japan", number_of_nights=7, price=888)
>>> to3
<Tour: ID:None: From Malasia to Japan, 7 nights costs $888>
#ID:None beforesave
>>> to3.save()
>>> to3
<Tour: ID:5: From Malasia to Japan, 7 nights costs $888>
```

## Render HTML Template

1. Use render in `views.py`:
    ```python
    from django.shortcuts import render

    def index(request):
        return render(request, 'tours/index.html')
    ```

2. Create an HTML file.

3. Interact with data in `views.py`:
    ```python
    from django.shortcuts import render
    from .models import Tour

    def index(request):
        tours = Tour.objects.all()
        context = {'tours': tours}
        return render(request, 'tours/index.html', context)
    ```

4. Edit the HTML template (similar to Jinja2):
    ```html
    <ul>
        {% for tour in tours %}
            <li>{{ tour }}</li>
        {% endfor %}
    </ul>
    ```

## Admin Dashboard

You can manage the database without using the shell.

1. Go to `APP/admin.py` and register your models:
    ```python
    from django.contrib import admin
    from .models import Tour

    admin.site.register(Tour)
    ```

2. Set up a superuser account:
    ```shell
    python manage.py createsuperuser
    ```

3. Access the admin dashboard at `/admin`.

