from django.db import models
from django.core.exceptions import ValidationError

def validate_mobile_number(value):
    if len(value) != 10:  
        raise ValidationError(
            f'The mobile number must be exactly 10 digits long. It currently has {len(value)} digits.'
        )

class user(models.Model):
    GENDER = [
        ('Male', 'Male'),
        ('Female','Female'),
        ('Others','Others')
    ]
    USER_TYPE = [
        ('Student', 'Student'),
        ('Employee', 'Employee')
    ]
    firstName = models.CharField(max_length=100)
    lastName = models.CharField(max_length=100)
    profilePicture = models.ImageField(blank=True, null=True)
    
    email = models.EmailField(max_length=255)
    contactNumber = models.CharField(max_length=10, validators=[validate_mobile_number])
    gender = models.CharField(max_length=10,choices= GENDER)
    city = models.CharField(max_length=255)
    
    clgName = models.CharField(max_length=255,blank=True, null=True)
    degree = models.CharField(max_length=255,blank=True, null=True)
    
    cmpName = models.CharField(max_length=255,blank=True, null=True)
    cmpUrl = models.CharField(max_length=255,blank=True, null=True)
    desg =  models.CharField(max_length=255,blank=True, null=True)
    
    user_type = models.CharField(choices=USER_TYPE,max_length=20)


