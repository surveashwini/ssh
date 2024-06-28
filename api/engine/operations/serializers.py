from rest_framework import serializers
from .models import Operation

class OperationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Operation
        fields = ["type", "status", "ninja", "created", "updated"]