from django.shortcuts import render
from rest_framework import generics
from .serializers import *
from .models import *
from django.http import JsonResponse

class add_user(generics.CreateAPIView):
    queryset = user.objects.all()
    serializer_class = UserSerializer

class list_user(generics.ListAPIView):
    queryset = user.objects.all()
    serializer_class = UserSerializer


def check_user_id(request):
    user_id = request.GET.get('user_id', None)
    if user_id is not None:
        exists = user.objects.filter(userId=user_id).exists()
        return JsonResponse({'exists': exists})
    return JsonResponse({'error': 'No user_id provided'}, status=400)
