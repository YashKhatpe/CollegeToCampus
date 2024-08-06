from django.urls import path
from .views import *

urlpatterns = [
    path('add_user',add_user.as_view()),
    path('user_listing',list_user.as_view()),
    path('check_user_id/', check_user_id, name='check_user_id'),
    
]
