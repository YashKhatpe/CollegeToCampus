from django.shortcuts import render
from rest_framework import generics
from .serializers import *
from .models import *

class add_user(generics.CreateAPIView):
    queryset = user.objects.all()
    serializer_class = UserSerializer

class list_user(generics.ListAPIView):
    queryset = user.objects.all()
    serializer_class = UserSerializer