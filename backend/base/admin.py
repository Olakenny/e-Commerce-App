import imp
from django.contrib import admin

# # Register your models here.

from .models import *

admin.site.register(Product)
admin.site.register(Review)
admin.site.register(Order)
admin.site.register(OrdeItem)
admin.site.register(ShippingAddress)
