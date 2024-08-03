from django.shortcuts import render
from rest_framework import generics
from .serializers import *
from .models import *

class add_job(generics.CreateAPIView):
    queryset = Job.objects.all()
    serializer_class = JobSerializer

class list_job(generics.ListAPIView):
    queryset = Job.objects.all()
    serializer_class = JobSerializer