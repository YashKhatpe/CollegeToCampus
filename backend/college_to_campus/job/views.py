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
    
class add_company(generics.CreateAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

class list_company(generics.ListAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
    
class add_application(generics.CreateAPIView):
    queryset = Application.objects.all()
    serializer_class = ApplicationSerializer

class list_application(generics.ListAPIView):
    queryset = Application.objects.all()
    serializer_class = ApplicationSerializer