from django.urls import path
from .views import ProfesorAPIView, ProfesorDetailAPIView

urlpatterns = [
    path('', ProfesorAPIView.as_view(), name='curso-list'),
    path('<int:pk>/', ProfesorDetailAPIView.as_view(), name='curso-detail'),
]