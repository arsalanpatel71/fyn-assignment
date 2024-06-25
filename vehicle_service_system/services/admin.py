from django.contrib import admin
from .models import Component, Vehicle, Issue

admin.site.register(Component)
admin.site.register(Vehicle)
admin.site.register(Issue)
