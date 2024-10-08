# Generated by Django 5.0.7 on 2024-08-06 14:43

import django.db.models.deletion
import user.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('job', '0006_remove_job_logo_job_company'),
        ('user', '0008_remove_user_cmpname_remove_user_cmpurl'),
    ]

    operations = [
        migrations.CreateModel(
            name='studentUser',
            fields=[
                ('userId', models.CharField(max_length=100, primary_key=True, serialize=False)),
                ('firstName', models.CharField(max_length=100)),
                ('lastName', models.CharField(max_length=100)),
                ('profilePicture', models.ImageField(blank=True, null=True, upload_to='')),
                ('email', models.EmailField(max_length=255)),
                ('contactNumber', models.CharField(max_length=10, validators=[user.models.validate_mobile_number])),
                ('gender', models.CharField(blank=True, choices=[('male', 'male'), ('female', 'female'), ('others', 'others')], max_length=10, null=True)),
                ('city', models.CharField(max_length=255)),
                ('clgName', models.CharField(blank=True, max_length=255, null=True)),
                ('degree', models.CharField(blank=True, max_length=255, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='employeeUser',
            fields=[
                ('userId', models.CharField(max_length=100, primary_key=True, serialize=False)),
                ('firstName', models.CharField(max_length=100)),
                ('lastName', models.CharField(max_length=100)),
                ('profilePicture', models.ImageField(blank=True, null=True, upload_to='')),
                ('email', models.EmailField(max_length=255)),
                ('contactNumber', models.CharField(max_length=10, validators=[user.models.validate_mobile_number])),
                ('gender', models.CharField(blank=True, choices=[('male', 'male'), ('female', 'female'), ('others', 'others')], max_length=10, null=True)),
                ('city', models.CharField(max_length=255)),
                ('desg', models.CharField(blank=True, max_length=255, null=True)),
                ('company', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='job.company')),
            ],
        ),
        migrations.DeleteModel(
            name='user',
        ),
    ]
