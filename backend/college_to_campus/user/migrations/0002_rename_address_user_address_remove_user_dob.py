# Generated by Django 5.0.7 on 2024-08-05 13:41

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='Address',
            new_name='address',
        ),
        migrations.RemoveField(
            model_name='user',
            name='DOB',
        ),
    ]
