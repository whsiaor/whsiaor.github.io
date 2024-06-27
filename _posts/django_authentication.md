---
title: "Django Authentication"
excerpt: "Setting Up Authentication in Django"
date: "2024-06-26"
---
## Setting Up Authentication in Django

[Django Basic Setup](https://whsiaor.github.io/posts/Django_StaticAssets)

1. **Create `forms.py`:**
```python
from django import forms
from django.contrib.auth.models import User

class RegisterForm(forms.ModelForm):
    password = forms.CharField(widget=forms.PasswordInput)
    password_confirm = forms.CharField(widget=forms.PasswordInput, label="Confirm Password")

    class Meta:
        model = User
        fields = ['username', 'password', 'password_confirm']

    def clean(self):
        cleaned_data = super().clean()
        password = cleaned_data.get('password')
        password_confirm = cleaned_data.get('password_confirm')
        # Check if the passwords match
        if password and password_confirm and password != password_confirm:
            raise forms.ValidationError("Passwords do not match!")
        return cleaned_data
```

**The `Meta` class** in Django Forms is a built-in class that allows you to customize the behavior and appearance of the form, such as:
- **`model`:** Specifies the Django model associated with the form. Here, you specify the `User` model, meaning the `RegisterForm` is used to create or update `User` objects.
- **`fields`:** Specifies which model fields should be included in the form. Here, you listed `username`, `password`, and `password_confirm`, which will be included in the form.

**The `clean()` method:**
- Retrieves and cleans the submitted form data.
- Performs additional custom validation to ensure the data meets specific requirements.
- Returns the validated data for further processing.

Using the `clean()` method, you can perform more granular validation on the form data, ensuring the user input meets the expected criteria and enhancing the robustness of your application.

2. **In `views.py`**:
Import necessary libraries:
```python
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.mixins import LoginRequiredMixin
from django.views import View
from django.contrib.auth.models import User
from .forms import RegisterForm
```

Create functions:
```python
# Create your views here.
def register_view(request):
    ...

def login_view(request):
    ...

def logout_view(request):
    ...

@login_required
def home_view(request):
    ...
```

In the `register_view` function:
```python
def register_view(request):
    if request.method == "POST":
        form = RegisterForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data.get("username")
            password = form.cleaned_data.get("password")
            user = User.objects.create_user(username=username, password=password)
            login(request, user)
            return redirect('home')
    else:
        form = RegisterForm()
    return render(request, 'accounts/register.html', {'form': form})
```
- **`render` for displaying pages:** The `render` function renders a template into an HTML page and returns it to the browser. User forms need to be displayed on the page for the user to fill out, so you use `render` to render the form template.
- **`redirect` for navigation:** The `redirect` function redirects the user to another URL. After form submission, if the data is processed successfully (e.g., user registration is successful), you can use `redirect` to send the user to another page, like the home page or a success message page.

In the `login_view` function:
```python
def login_view(request):
    error_message = None
    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            next_url = request.POST.get('next') or request.GET.get('next') or 'home'
            return redirect(next_url)
        else:
            error_message = "Invalid credentials!"
    return render(request, 'accounts/login.html', {'error': error_message})
```
**Implementing the `next` parameter:**

1. **On the login-required pages, add a hidden field and set the `next` parameter to the current page URL.**
2. **After successful login, retrieve the `next` parameter from the request and redirect to that page.**

In the `logout_view` function:
```python
def logout_view(request):
    if request.method == "POST":
        logout(request)
        return redirect('login')
    else:
        return redirect('home')
```

In the `home_view` function:
```python
@login_required
def home_view(request):
    return render(request, 'home/home.html')
```

Adding another `Protected view`:
```python
# Protected view
class ProtectedView(LoginRequiredMixin, View):
    login_url = '/login/'
    redirect_field_name = 'redirect_to'

    def get(self, request):
        return render(request, 'registration/protected.html')
```
The `ProtectedView` class uses `LoginRequiredMixin` to protect the view, ensuring only logged-in users can access it. It also uses the `redirect_field_name` attribute to store the redirect URL, making it easy to redirect users back to their original page after logging in.

3. **Create HTML templates:**
```shell
static/
├── images/
├── js/
└── styles/
    └── styles.css
templates/
├── accounts/
│   ├── login.html
│   ├── logout.html
│   └── register.html
├── auth1_app/
│   └── home.html
└── registration/
    └── protected.html
```

4. **Create URLs**

5. **In `settings.py`:**
```python
LOGIN_REDIRECT_URL = 'home'
```
The `LOGIN_REDIRECT_URL` is a built-in Django setting that controls the page to which users are redirected after successful login.

## Q&A

**Q: Where are the username and password stored?**

A: Encrypted passwords are stored in the `password` field of the **`auth_user` table** in your Django project's database. The `auth_user` table is automatically created by Django when you create the project and is usually found in the `db.sqlite3` file in your project.

<br>

**Q: What are the differences between the two ways of protecting views that require login?**

Both `@login_required` and `LoginRequiredMixin` are used to protect views in Django by ensuring that only authenticated users can access them. However, they have different use cases and offer different levels of flexibility:

 `@login_required` Decorator:

Applicable to: Function-based views (FBVs).
Implementation method: Applied as a decorator to view functions.
Customization options: Limited customization options.
Flexibility: Lower flexibility compared to `LoginRequiredMixin`.

`LoginRequiredMixin` Mixin:

Applicable to: Class-based views (CBVs).
Implementation method: Inherited as a mixin by view classes.
Customization options: Supports custom login_url and redirect_field_name.
Flexibility: Higher flexibility and more customization options compared to `@login_required`.

In summary, use @login_required for simple protection of function-based views, and use `LoginRequiredMixin` for more flexible protection of class-based views with additional customization options.