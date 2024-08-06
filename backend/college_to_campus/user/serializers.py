from rest_framework import serializers
from rest_framework import validators
from .models import *
from job.serializers import CompanySerializer

class StudentUserSerializer(serializers.ModelSerializer):
     class Meta:
        model = studentUser
        fields = '__all__'

class EmployeeUserSerializer(serializers.ModelSerializer):
    company = CompanySerializer(required=False)

    class Meta:
        model = employeeUser
        fields = '__all__'

    def run_validators(self, value):
        for validator in self.validators:
            if isinstance(validator, validators.UniqueTogetherValidator):
                self.validators.remove(validator)
        super(EmployeeUserSerializer, self).run_validators(value)

    def create(self, validated_data):
        print('validate')
        company_data = validated_data.pop('company', None)
        company_name = company_data['name']
        try:
            print('exists')
            company = Company.objects.get(name=company_name)
        except Company.DoesNotExist:
            print('does not exists')
            
            company = Company.objects.create(**company_data)
        validated_data['company'] = company
        return super().create(validated_data)