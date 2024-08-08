from django.urls import path
from .views import *
urlpatterns = [
    path('resume/', ai_resume.as_view(), name='resume'),
]