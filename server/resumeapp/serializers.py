from rest_framework import serializers
from .models import CustomUser

class UserRegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id','firstName','lastName','email','password']
        extra_fields = {'password' : {'write_only':True}}
    def create(self,validated_data):
        password = validated_data.pop('password')
        user = self.Meta.model(**validated_data)
        user.set_password(password)
        user.save()
        return user
    
class UserLoginSerializer(serializers.Serializer):
    email= serializers.EmailField()
    password = serializers.CharField()