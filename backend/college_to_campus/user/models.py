from django.db import models
from django.core.exceptions import ValidationError

def validate_mobile_number(value):
    if len(value) != 10:  
        raise ValidationError(
            f'The mobile number must be exactly 10 digits long. It currently has {len(value)} digits.'
        )

class user(models.Model):
    GENDER = [
        ('male', 'male'),
        ('female','female')
    ]
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=255)
    phone = models.CharField(max_length=10, validators=[validate_mobile_number])
    gender = models.CharField(max_length=10,choices= GENDER)
    address = models.CharField(max_length=255)
    college = models.CharField(max_length=255)
    degree = models.CharField(max_length=255)
    cgpa = models.FloatField()
