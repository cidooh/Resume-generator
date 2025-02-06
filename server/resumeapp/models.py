from django.db import models
from django.contrib.auth.models import BaseUserManager,AbstractBaseUser, PermissionsMixin


# Create your models here.

class CustomUserManager(BaseUserManager):
    def createUser(self,email,password=None,**extra_kwargs):
        if not email:
            raise ValueError('Email Must be set')
        email = self.normalize_email(email)
        user = self.model(email=email,**extra_kwargs)
        user.set_password(password)
        user.save(using=self._db)
        return user
def create_superuser(self,email,password=None, **extra_kwargs):
    extra_kwargs.setdefault('is_staff',True)
    extra_kwargs.setdefault('is_superuser',True)
    if extra_kwargs.get('is_staff') is not True:
        raise ValueError('Superuser must have is_staff set to True')
    if extra_kwargs.get('is_superuser') is not True:
        raise ValueError('Superuser must have is_superuser set to True')
    return self.create_user(email,password, **extra_kwargs)

class CustomUser(AbstractBaseUser,PermissionsMixin):
    firstName = models.CharField(max_length=50)
    lastName = models.CharField(max_length=50)
    email = models.EmailField(unique=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_email_verified = models.BooleanField(default=False)
    objects = CustomUserManager()
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['firstName','lastName']
    def __str__(self):
        return f'{self.firstName} {self.lastName}' 