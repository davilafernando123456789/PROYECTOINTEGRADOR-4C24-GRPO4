from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/usuarios/', include('usuarios.urls')),
    path('api/administradores/', include('administradores.urls')),
    path('api/profesores/', include('Profesores.urls')),
]
