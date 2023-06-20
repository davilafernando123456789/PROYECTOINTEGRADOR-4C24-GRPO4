from django.urls import path
from .views import UsuarioAPIView, UsuarioDetailAPIView

urlpatterns = [
    path('', UsuarioAPIView.as_view(), name='curso-list'),
    path('<int:pk>/', UsuarioDetailAPIView.as_view(), name='curso-detail'),
]