from __future__ import unicode_literals
from django.contrib.auth import get_user_model
from django.contrib import admin
from django.contrib.auth.models import User

User = get_user_model()

from django.contrib.auth.models import Group
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin

from .forms import UserAdminCreationForm, UserAdminChangeForm, PasswordChangeForm


class UserAdmin(BaseUserAdmin):
    form = UserAdminChangeForm
    add_form = UserAdminCreationForm
    change_password_form = PasswordChangeForm



    list_display = ('first_name', 'middle_name', 'last_name', 'phone_number', 'username', 'admin')
    list_filter = ('staff', 'active', 'admin', "author")
    fieldsets = (
        ('User Details', {'fields': ('username',  'password', 'verified',)}),
        ('Personal info', {'fields': ('first_name',   'middle_name', 'last_name', 'email','phone_number', 'profile_picture')}),
        ('Permissions', {'fields': ('admin', 'staff', 'active', "author")}),
    )

    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('phone_number', 'first_name', 'middle_name', 'last_name', 'password1', 'password2')
        }),
    )

    search_fields = ('phone_number', 'username', 'first_name', 'last_name')
    ordering = ('phone_number', 'username')
    filter_horizontal = ()



admin.site.register(User, UserAdmin)

admin.site.unregister(Group)

