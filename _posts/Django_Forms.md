---
title: "Django Forms"
excerpt: "Setting Up Forms in Django"
date: "2024-06-25"
---
## Start

[Working with forms](https://docs.djangoproject.com/en/5.0/topics/forms/)

[Django Basic Setup](https://whsiaor.github.io/posts/Django_StaticAssets)

1. ### Create `forms.py`:
```python
from django import forms

class ContactForm(forms.Form):
    name = forms.CharField(max_length=100)
    email = forms.EmailField()
    message = forms.CharField(widget=forms.Textarea)

    def send_email(self):
        print(f"Sending email from {self.cleaned_data['email']} with message: {self.cleaned_data['message']}")
```

>**What is `cleaned_data`?**
>
>- **Form Submission:** When a user submits a form, Django saves the raw input data in the `self.data` dictionary.
>- **Data Validation:** Django validates the data in `self.data` to ensure it meets the rules you’ve defined (e.g., correct email format, proper phone number format, or input length requirements).
>- **Data Cleaning:** If the validation is successful, Django stores the validated data in `self.cleaned_data`. This dictionary contains only the cleaned and validated data, making it safe to use for processing or storage.



2. ### In `views.py`

inside `form_app`, create 3 views to handle different situations:
```python
from django.shortcuts import render, redirect
from .forms import ContactForm

# Create your views here.
def home_view(request):
    return render(request, 'form_app/home.html')

def contact_view(request):
    if request.method == "POST":
        form = ContactForm(request.POST)
        if form.is_valid():
            form.send_email()
            return redirect('contact-success')
    else:
        form = ContactForm()

    context = {'form': form}
    return render(request, 'form_app/contact.html', context)

def contact_success_view(request):
    return render(request, 'form_app/contact-success.html')
```

3. ### Create `urls.py` in `form_app`:
```python
from django.urls import path
from . import views

urlpatterns = [
    path('', views.home_view, name='home'),
    path('contact/', views.contact_view, name='contact'),
    path('contact/success', views.contact_success_view, name='contact-success'),
]
```

4. ### Static folders:
 Create folders for static assets (images, styles, js). In `settings.py`, add `STATICFILES_DIRS` similar to how it was done in [DjangoStaticAssets](https://whsiaor.github.io/posts/Django_StaticAssects).

5. ### Create templates:

```html
<!-- home.html -->
...
<form action="{% url 'contact' %}" method="get">
    <button type="submit">Form</button>
</form>
...
```

>`action="{% url 'contact' %}"`: <br>
>This is Django template syntax for URL reverse resolution to dynamically generate a URL.

>`{% url 'contact' %}` :<br>
>fetches the URL pattern named 'contact'.
Django replaces 'contact' with the corresponding URL path based on your URL configuration.

### 6. Create contact.html:

```html
<!-- contact.html -->
<form method="POST">
    {% csrf_token %} <!-- Used for security to prevent CSRF attacks -->
    {{ form.as_p }} <!-- Renders the form, making it easy to generate form code -->
    <button type="submit">Submit</button>
</form>
```

>**`{% csrf_token %}`**
>
>- **Purpose:** To prevent Cross-Site Request Forgery (CSRF) attacks.
>- **Mechanism:** Django generates a random CSRF token for each form and hides it within the form. When the user submits the form, Django checks if the submitted token matches the server-generated token. If they match, the request is considered legitimate; otherwise, the request is denied.

>**`{{ form.as_p }}`**
>
>- **Purpose:** To render a Django form in a web page.
>- **Mechanism:** `form.as_p` is a method of the Django form object that wraps each field in `<p>` tags and automatically generates the corresponding input fields, labels, and error messages.

## Q&A

 ### Q: After setting CSS, why is nothing changing?

A: Try clearing the cache by pressing `Command + Shift + R`


### Q: If it can’t find the templates?

A: In `settings.py`, add the following to the `TEMPLATES` configuration:
```python
'DIRS': [
    os.path.join(BASE_DIR, 'form_app', 'templates'),
],
```
#### Final Folder Structure
```shell
form_app/
├── static/
│   ├── images/
│   ├── js/
│   └── styles/
├── templates/
│   └── form_app/
│       └── home.html
│       └── contact.html
```