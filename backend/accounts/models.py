from enum import unique
from django.contrib.auth.base_user import BaseUserManager
from django.core import validators
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, UserManager
from django.core.validators import RegexValidator
from django.db.models import QuerySet
from django.db.models.signals import pre_save, post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token

import random
import os
import requests

class UserManager(BaseUserManager):
    def create_user(self, username, first_name, last_name, password,  is_staff=False, is_active=True, is_admin=False):
        if not username:
            raise ValueError("username is required")
        if not password:
            raise ValueError("password is required")
        user_obj = self.model(
            username = username,
            first_name = first_name,
            last_name = last_name
        )
        user_obj.set_password(password)
        user_obj.staff = is_staff
        user_obj.admin = is_admin
        user_obj.active = is_active
        user_obj.save(using=self._db)

        return user_obj

    def create_staffuser(self, username, password=None):
        user = self.create_user(
            username=username,
            password=password,
            is_staff=True
        )
        return user

    def create_superuser(self, username, first_name,   last_name, password=None):
        user = self.create_user(
            username=username,
            first_name= first_name,
            last_name=last_name,
            password=password,
            is_staff=True,
            is_admin=True
        )

        return user


class User(AbstractBaseUser):
    phone_regex = RegexValidator(regex=r'^\+?1?\d{9,14}$', message="Phone number must be entered in the format: '+23411111111'. up to 14 digits allowed.")
    phone_number = models.CharField(validators=[phone_regex], max_length=15, blank=True, null=True, unique=True)
    first_name = models.CharField(max_length=50, blank=False, null=False)
    middle_name = models.CharField(max_length=50, blank=True, null=True)
    last_name = models.CharField(max_length=50, blank=False, null=False)
    username = models.CharField(max_length=40, blank=False, null=False, unique=True)
    email = models.EmailField(null=True,  blank=True, unique=True)
    first_login = models.BooleanField(default=False)
    verified = models.BooleanField(default=False)
    active = models.BooleanField(default=True)
    staff = models.BooleanField(default=False)
    admin = models.BooleanField(default=False)
    profile_picture = models.ImageField(null=True, blank=True)
    timestamp = models.DateTimeField(auto_now_add=True)

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['first_name', 'last_name']

    objects = UserManager()

    def __str__(self):
        return self.username

    def get_full_name(self):
        return (self.first_name + self.last_name)

    def get_short_name(self):
        return self.username

    def has_perm(self, perm, obj=None):
        return True
    
    def has_module_perms(self, app_label):
        return True


    @property
    def is_staff(self):
        return self.staff

    @property
    def is_admin(self):
        return self.admin
        
    @property
    def is_active(self):
        return self.active