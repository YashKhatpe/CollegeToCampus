# Generated by Django 5.0.7 on 2024-08-06 15:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('job', '0006_remove_job_logo_job_company'),
    ]

    operations = [
        migrations.AddField(
            model_name='company',
            name='logo',
            field=models.ImageField(default='1.png', upload_to='media'),
            preserve_default=False,
        ),
    ]
