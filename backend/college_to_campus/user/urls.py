from django.urls import path
from .views import *

urlpatterns = [
    path('add_student',add_student.as_view()),
    path('add_employee',add_employee.as_view()),
    
    path('student_listing',list_student.as_view()),
    path('employee_listing',list_employee.as_view()),
    
    path('check_user_id/', check_user_id, name='check_user_id'),
    
]
