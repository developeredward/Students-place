from django import forms
from django.contrib.auth.forms import ReadOnlyPasswordHashField, PasswordChangeForm
from django.db.models import fields

from .models import User

class LoginForm(forms.Form):
    username = forms.CharField(label= 'Your username')
    password = forms.CharField(widget= forms.PasswordInput)

class VerifyForm(forms.Form):
    key = forms.IntegerField(label="Please Enter OTP here")


class RegisterForm(forms.ModelForm):
    password = forms.CharField(label='Password', widget=forms.PasswordInput)
    password2 = forms.CharField(label='Confirm password', widget=forms.PasswordInput)
   
    class Meta:
        model = User
        fields = ('username',)
    
    def clean_username(self):
        username = self.cleaned_data.get('username')
        qs = User.objects.filter(username=username)
        if qs.exists():
            raise forms.ValidationError("username is taken")
        return username
    def clean_password2(self):
        password1 = self.cleaned_data.get("password1")
        password2 = self.cleaned_data.get("password2")
        if password1 and password2 and password1 != password2:
            raise forms.ValidationError("Passwords don't match")
        return password2 

class TempRegisterForm(forms.Form):
    username = forms.IntegerField()
    otp = forms.IntegerField()


class SetPasswordForm(forms.Form):
    pasword = forms.CharField(label='Password', widget=forms.PasswordInput)
    password2 = forms.CharField(label='Password Confirmation', widget=forms.PasswordInput)



class UserAdminCreationForm(forms.ModelForm):
    password1 = forms.CharField(label= 'Password', widget=forms.PasswordInput)
    password2 = forms.CharField(label='Confirm password', widget=forms.PasswordInput)
   
    class Meta:
        model = User
        fields = ('username',)
    

    def clean_password2(self):
        password1 = self.cleaned_data.get("password1")
        password2 = self.cleaned_data.get("password2")
        if password1 and password2 and password1 != password2:
            raise forms.ValidationError("Passwords don't match")
        return password2 


    def save(self, commit=True):
        user = super(UserAdminCreationForm, self).save(commit=False)
        user.set_password(self.cleaned_data["password1"])

        if commit:
            user.save()
        return user


class UserAdminChangeForm(forms.ModelForm):
    password = ReadOnlyPasswordHashField()

    class Meta:
        model = User
        fields= ('username', 'first_name', 'last_name', 'password', 'active', 'admin')
    
    def clean_password(self):
        return self.initial["password"]


class PasswordChangeForm(forms.ModelForm):
    old_password = forms.CharField(label="Enter Old Password", widget=forms.PasswordInput)
    new_password = forms.CharField(label="Enter New Password", widget=forms.PasswordInput)
    reenter_password = forms.CharField(label="Reenter New Password", widget=forms.PasswordInput)


    class Meta:
        model = User
        fields= ('old_password', 'new_password', 'reenter_password')


    def clean(self):
        old_password = self.cleaned_data.get('old_password')
        new_password = self.cleaned_data.get('new_password')
        reenter_password = self.cleaned_data.get('reenter_password')

        if new_password and new_password != reenter_password:
            raise forms.ValidationError("Passwords don't match")
        if new_password == old_password:
            raise forms.ValidationError("Old password cannot be thesame as new password")

        return self.cleaned_data
        
    def save(self, request):
        user = super(PasswordChangeForm, self).save()
        user.set_password(self.cleaned_data['new_password'])
        user.save()
        return user