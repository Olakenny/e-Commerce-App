from unicodedata import name
from django.urls import path
from base.views.order_view import *

urlpatterns = [
    path('add/', addOrderItems, name='orders-add'),
    path('myorders/', getMyOrders, name='myorders'),

    path('<str:pk>/', getOrderById, name='user-order'),
    path('<str:pk>/pay/', updateOrderToPaid, name='pay'),

]