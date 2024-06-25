from django.db import models

class Component(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)

class Vehicle(models.Model):
    name = models.CharField(max_length=100)  # Change 'model' to 'name'
    registration_number = models.CharField(max_length=100, blank=True, null=True) 


class Issue(models.Model):
    vehicle = models.ForeignKey(Vehicle, on_delete=models.CASCADE)
    description = models.TextField()
    component = models.ForeignKey(Component, on_delete=models.SET_NULL, null=True, blank=True)
    repair_price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    is_new_component = models.BooleanField(default=False)
