from django.contrib.auth import get_user_model
from django.db import models
from django.db.models import fields
from rest_framework import serializers
from django.contrib.auth.models import User
from rest_auth.registration.serializers import RegisterSerializer
from rest_auth.serializers import UserDetailsSerializer


User = get_user_model()


class UserDetailSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = User
        fields = ('pk', 'username','profile_picture', 'admin', 'staff', 'verified', 'get_full_name', 'first_name', 'middle_name', 'last_name', 'email')
        read_only_fields = ('email', 'pk', 'admin', 'staff', 'verified')

class UserRegistrationSerializer(RegisterSerializer):
    first_name = serializers.CharField(required=True)
    last_name = serializers.CharField(required=True)
    middle_name = serializers.CharField(required=False)
    email = serializers.EmailField(required=False)
   
    def get_cleaned_data(self):
        super(UserRegistrationSerializer, self).get_cleaned_data()
        return {
            'email': self.validated_data.get('email', ''),
            'first_name': self.validated_data.get('first_name', ''),
            'middle_name': self.validated_data.get('middle_name', ''),
            'last_name': self.validated_data.get('last_name', ''),
            'username': self.validated_data.get('username', ''),
            'password1': self.validated_data.get('password1', ''),
            'password2': self.validated_data.get('password2', ''),
            
        }
        
 