# Generated by Django 5.0.7 on 2024-08-06 06:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0005_alter_user_gender'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='id',
        ),
        migrations.AddField(
            model_name='user',
            name='userId',
            field=models.CharField(default='a', max_length=100, primary_key=True, serialize=False),
            preserve_default=False,
        ),
    ]
