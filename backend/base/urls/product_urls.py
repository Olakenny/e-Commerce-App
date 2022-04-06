from django.urls import path
from base.views.product_views import *

urlpatterns = [
    path('', getProducts, name='products'),

    path('create/', createProduct, name='product-create'),
    path('<str:pk>/', getProduct, name='product'),

    path('delete/<str:pk>/', deleteProduct, name='product-delete'),
    
]
