from django.db import models

from operations.models import Operation

class ProcedureArea(models.TextChoices):
    INTERNAL = 'internal', 'Internal'
    EXTERNAL = 'external', 'External'

# Create your models here.
class Procedure(models.Model):
    name = models.CharField(max_length=100)
    operation_type = models.ForeignKey(Operation, on_delete= models.CASCADE, blank = True, null = True)
    area = models.CharField(max_length=8, choices=ProcedureArea.choices)
    created = models.DateTimeField(auto_now=True)
    updated = models.DateTimeField(auto_now= True, blank = True)

    def __str__(self):
        return self.name
