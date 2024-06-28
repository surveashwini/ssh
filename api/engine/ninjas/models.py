from django.db import models

# Create your models here.
class Ninja(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    contact = models.BigIntegerField()
    created = models.DateTimeField(auto_now=True)
    updated = models.DateTimeField(auto_now= True, blank = True)

    def __str__(self):
        return self.email