from django.db import models

from ninjas.models import Ninja

class OperationType(models.TextChoices):
    SET = 'set', 'Set'
    SWAP = 'swap', 'Swap'

class OperationStatus(models.TextChoices):
    AVAILABLE = 'available', 'Available'
    ONGOING = 'ongoing', 'Ongoing'
    UNSUCCESSFUL = 'unsuccessful', 'Unsuccessful'
    FUTURE = 'future', 'Future'


# Create your models here.
class Operation(models.Model):
    type = models.CharField(max_length=4, choices=OperationType.choices)
    status = models.CharField(max_length=14, choices=OperationStatus.choices)
    ninja = models.ForeignKey(Ninja, on_delete= models.CASCADE, blank = True, null = True)
    created = models.DateTimeField(auto_now=True)
    updated = models.DateTimeField(auto_now= True, blank = True)
    
    def __str__(self):
        return self.type
