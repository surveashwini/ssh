from django.utils import timezone
from django.db import models

        
class Customer(models.Model):
    name = models.CharField(max_length=100)
    elite = models.BooleanField()
    created = models.DateTimeField(default=timezone.now, blank=True)
    updated = models.DateTimeField(default=timezone.now, blank=True, null=True)

    def __str__(self):
        return self.name
    
    def save(self, *args, **kwargs):
        if not self.id: 
            self.created = timezone.now()
        self.updated = timezone.now()  
        super().save(*args, **kwargs)