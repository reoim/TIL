## How to build path
settings.py
```python
import os

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TEMPLATE_DIR = os.path.join(BASE_DIR, "templates")
```
Add the path to setting dictonary

settings.py
```python
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [TEMPLATE_DIR,],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]
```
## How to set up url for app
project/urls.py
```python
from django.conf.urls import url
from django.contrib import admin
from django.conf.urls import include

urlpatterns = [
    url(r'^first_app/', include('first_app.urls')),
    url(r'^admin/', admin.site.urls),
]
```

app/urls.py
```python
from django.conf.urls import url
from first_app import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
]
```


## How to render
index.html
```html
<!DOCTYPE>
<html>
    <head>
        <meta charset="utf-8">
        <title>First App</title>
    </head>
    <body>
        <h1>Hello this is index.thml!</h1>
        {{ insert_me }}
    </body>
</html>
```

views.py
```python
from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def index(request):
    my_dict = {'insert_me': "Hello I am from first_app/views.py!"}
    return render(request, 'first_app/index.html', context=my_dict)
```


