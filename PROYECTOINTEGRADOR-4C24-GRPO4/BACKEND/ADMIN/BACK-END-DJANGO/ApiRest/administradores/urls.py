from django.urls import path
from .views import AdministradorViewSet, LoginView

urlpatterns = [
    path('', AdministradorViewSet.as_view({'get': 'list', 'post': 'create'}), name='administrador-list'),
    path('<int:pk>/', AdministradorViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='administrador-detail'),
    path('login/', LoginView.as_view(), name='login'),
]
