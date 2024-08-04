from django.urls import path
from .views import *

urlpatterns = [
    path('add_job',add_job.as_view()),
    path('job_listing',list_job.as_view()),
    
    path('add_company',add_company.as_view()),
    path('company_listing',list_company.as_view()),
    
    path('add_application',add_application.as_view()),
    path('application_listing',list_application.as_view()),
]
