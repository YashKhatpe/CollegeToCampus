# Generated by Django 5.0.7 on 2024-08-05 18:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0004_user_cmpname_user_cmpurl_user_desg_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='gender',
            field=models.CharField(blank=True, choices=[('male', 'male'), ('female', 'female'), ('others', 'others')], max_length=10, null=True),
        ),
    ]
