---
title: "Django StaticAssets"
excerpt: "Setting Up a Django Project with Static Files"
date: "2024-06-24"
---

# Django Basic Setup

## Setting Up a Django Project with Static Files

1. **1. Activate your virtual environment:**

   ```bash
   pipenv shell
   ```

2. **2. Install Django:**

   ```bash
   pipenv install django
   ```

3. **3. Create a Django project:**

   ```bash
   django-admin startproject django_project
   ```

4. **4. Create a Django app:**

   ```bash
   cd django_project
   python manage.py startapp django_app
   ```

5. **5. Create necessary folders and an `index.html` file:**
   ```shell
   django_app/
   ├── static/
   │   ├── images/
   │   ├── js/
   │   └── styles/
   ├── templates/
   │   └── django_app/
   │       └── index.html
   ```

**Q: Is it necessary to create this many folders?**

The key is to ensure Django can locate your static files:

- In the `settings.py` file of your Django project, configure the `STATIC_URL` and `STATICFILES_DIRS` settings so Django can correctly collect and serve static files.

6. **6. Configure `settings.py` to find static files**

```python
import os

# Add your app
INSTALLED_APPS = [
    ...
    'django_app',
]

STATIC_URL = 'static/'  # Do not change this
# MEDIA_URL = 'images/'  # for image files
STATICFILES_DIRS = (
    os.path.join(BASE_DIR, 'static'),  # The comma is crucial because it defines a tuple
)
```

**Why is `STATICFILES_DIRS` necessary?**

- If all your static files are in a `static` folder located directly in your Django project root, you can omit the `STATICFILES_DIRS` setting because Django will look there by default.
- However, if you place static files in other directories, such as inside the `django_app` folder, you need `STATICFILES_DIRS` to tell Django where to find them.

## Create a view

```python
from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'django_app/index.html')
```

- **`django_app/index.html`:** Django will first look for `index.html` inside the `django_app` folder because you specified `'django_app/index.html'` as the template path.
- **`templates/index.html`:** If it doesn't find `index.html` in the `django_app` folder, Django will then check the `templates` folder. The `templates` folder is a default directory where project-wide templates are usually stored.

## Create a route

```python
from django.urls import path
from .views import index

urlpatterns = [
    path('', index, name='index'),  # The comma is important
]
```

## Connect the app route to the project

```python
# project/urls.py
path('', include('django_app.urls')),  # Add this to urlpatterns
```

## Build Pages

Edit `index.html` and create `styles.css` and `script.js`

```html
{% load static %}
<!DOCTYPE html>
<html lang="en">
  <head>
    ...
    <link rel="stylesheet" href="{% static 'styles/styles.css' %}" />
  </head>
  <body>
    ...
    <script src="{% static 'js/script.js' %}"></script>
    <img src="{% static 'images/logo.png' %}" alt="logo" />
    ...
  </body>
</html>
```

## Conclusion

### Commas are very important in Django

## Q&A

**Q:**

```shell
WARNINGS:
?: (staticfiles.W004) The directory '/Users/seanwang/Documents/Django/StaticAssets/djangoProject/static' in the STATICFILES_DIRS setting does not exist.
```

**A:** The `static` folder can be placed anywhere within the project, as Django will search for it. If you want to avoid seeing this warning, place the `static` folder at the project root level.
