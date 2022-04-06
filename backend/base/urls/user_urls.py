from django.urls import path
from base.views.user_views import *
    

urlpatterns = [
    path('login/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('profile/', getUserProfile, name='user-profile'),
    path('profile/update/', updateUserProfile, name='user-profile-update'),
    path('register/', registerUser, name='register'),
    path('', getUser, name='users'),

    path('<str:pk>/', getUserById, name='user'),
    path('/update/<str:pk>/', updateUser, name='user-delete'),

    path('delete/<str:pk>/', deleteUser, name='user-delete')
]