from django.urls import path
from .views import AdministradorAPIView, AdministradorDetailAPIView, LoginView

urlpatterns = [
    path('', AdministradorAPIView.as_view(), name='administrador-list'),
    path('<int:pk>/', AdministradorDetailAPIView.as_view(), name='administrador-detail'),
    path('login/', LoginView.as_view(), name='login'),
]

