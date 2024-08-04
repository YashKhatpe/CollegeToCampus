from django.urls import path
from .views import *

urlpatterns = [
    path('add_job',add_job.as_view()),
    path('job_listing',list_job.as_view()),
]
