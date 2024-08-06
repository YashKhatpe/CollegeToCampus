from django.db import models
from django.core.exceptions import ValidationError
from job.models import Company

def validate_mobile_number(value):
    if len(value) != 10:  
        raise ValidationError(
            f'The mobile number must be exactly 10 digits long. It currently has {len(value)} digits.'
        )

class studentUser(models.Model):
    GENDER = [
        ('male', 'male'),
        ('female','female'),
        ('others','others')
    ]
    userId = models.CharField(max_length=100, primary_key=True)
    firstName = models.CharField(max_length=100)
    lastName = models.CharField(max_length=100)
    profilePicture = models.ImageField(blank=True, null=True)
    
    email = models.EmailField(max_length=255)
    contactNumber = models.CharField(max_length=10, validators=[validate_mobile_number])
    gender = models.CharField(max_length=10,choices= GENDER,blank=True, null=True)
    city = models.CharField(max_length=255)
    
    clgName = models.CharField(max_length=255,blank=True, null=True)
    degree = models.CharField(max_length=255,blank=True, null=True)
    

class employeeUser(models.Model):
    GENDER = [
        ('male', 'male'),
        ('female','female'),
        ('others','others')
    ]
    userId = models.CharField(max_length=100, primary_key=True)
    firstName = models.CharField(max_length=100)
    lastName = models.CharField(max_length=100)
    profilePicture = models.ImageField(blank=True, null=True)
    
    email = models.EmailField(max_length=255)
    contactNumber = models.CharField(max_length=10, validators=[validate_mobile_number])
    gender = models.CharField(max_length=10,choices= GENDER,blank=True, null=True)
    city = models.CharField(max_length=255)
    
    company = models.ForeignKey(Company, on_delete=models.CASCADE, blank=True, null=True)
    
    desg =  models.CharField(max_length=255,blank=True, null=True)
    
    def __str__(self):
        return self.firstName
    
