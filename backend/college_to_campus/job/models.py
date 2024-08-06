from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Tag(models.Model):
    name = models.CharField(max_length=100, unique=True)
    def __str__(self):
        return self.name
    
class Company(models.Model):
    name = models.CharField(max_length=255, primary_key=True)
    description = models.TextField()
    location = models.CharField(max_length=255)
    website = models.URLField(blank=True, null=True)
    email = models.EmailField(max_length=254)

    def __str__(self):
        return self.name
    
class Job(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name='jobs')
    
    salary_from = models.IntegerField()
    salary_to = models.IntegerField()
    
    category = models.CharField(max_length=255)
    location = models.CharField(max_length=255) #multiple
    #location = models.JSONField(default=list)
    type = models.CharField(max_length=50, choices=[('Full Time', 'Full Time'), ('Part Time', 'Part Time'), ('Contract', 'Contract')])
    posted_by = models.CharField(max_length=255)
    posted_date = models.DateTimeField(auto_now_add=True)
    application_deadline = models.DateField(null=True, blank=True)
    tags = models.ManyToManyField(Tag, related_name='jobs', blank=True)
    def __str__(self):
        return self.title
    
class Application(models.Model):
    job = models.ForeignKey(Job, on_delete=models.CASCADE, related_name='applications')
    applicant =  models.CharField(max_length=255)
    cover_letter = models.TextField(blank=True, null=True)
    resume = models.FileField(upload_to='resumes/')
    applied_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.applicant.username} applied for {self.job.title}"

