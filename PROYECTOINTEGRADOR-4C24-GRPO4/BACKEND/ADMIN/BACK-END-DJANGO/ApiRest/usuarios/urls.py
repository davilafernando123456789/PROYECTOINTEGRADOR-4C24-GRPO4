from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UsuarioViewSet



urlpatterns = [
    path('', UsuarioViewSet.as_view({'get': 'list', 'post': 'create'}), name='usuario-list'),
    path('<int:pk>/', UsuarioViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='usuario-detail'),
]

