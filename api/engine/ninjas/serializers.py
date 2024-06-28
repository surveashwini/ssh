from rest_framework import serializers
from .models import Ninja

class NinjaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ninja
        fields = ["id", "name", "email", "contact", "created", "updated"]