from django.urls import path
from .views import CursoAPIView, CursoDetailAPIView

urlpatterns = [
    path('', CursoAPIView.as_view(), name='curso-list'),
    path('<int:pk>/', CursoDetailAPIView.as_view(), name='curso-detail'),
]