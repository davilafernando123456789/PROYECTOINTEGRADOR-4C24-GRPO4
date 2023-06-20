from django.urls import path
from .views import ProfesorViewSet

urlpatterns = [
    path('', ProfesorViewSet.as_view({'get': 'list', 'post': 'create'}), name='administrador-list'),
    path('<int:pk>/', ProfesorViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='administrador-detail'),
]
