from django.shortcuts import render
from rest_framework import generics
from rest_framework import response

from .serializers import *
from .models import *
from django.http import JsonResponse

class add_student(generics.CreateAPIView):
    queryset = studentUser.objects.all()
    serializer_class = StudentUserSerializer

class add_employee(generics.CreateAPIView):
    queryset = employeeUser.objects.all()
    serializer_class = EmployeeUserSerializer

class list_student(generics.ListAPIView):
    queryset = studentUser.objects.all()
    serializer_class = StudentUserSerializer
    
class list_employee(generics.ListAPIView):
    queryset = employeeUser.objects.all()
    serializer_class = EmployeeUserSerializer
    
def add_user(request):
    if request.method == 'POST':
        print(request.data)
        serializer = UserSerializer(request.data)
        if serializer.is_valid():
            serializer.save()
        return response(serializer.data)


def check_user_id(request):
    user_id = request.GET.get('user_id', None)
    if user_id is not None:
        exists = user.objects.filter(userId=user_id).exists()
        return JsonResponse({'exists': exists})
    return JsonResponse({'error': 'No user_id provided'}, status=400)
