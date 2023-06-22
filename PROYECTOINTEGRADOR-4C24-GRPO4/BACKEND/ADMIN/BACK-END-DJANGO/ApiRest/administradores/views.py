import bcrypt
from rest_framework import viewsets
from .models import Administrador
from .serializers import AdministradorSerializer
from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404

class LoginView(APIView):
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')

        try:
            administrador = Administrador.objects.get(email=email)
        except Administrador.DoesNotExist:
            return Response({'message': 'Credenciales inválidas'}, status=status.HTTP_401_UNAUTHORIZED)

        if administrador.verificar_credenciales(password):
            # Inicio de sesión exitoso
            return Response({'message': 'Inicio de sesión exitoso', 'nombres': administrador.nombres}, status=status.HTTP_200_OK)
        else:
            return Response({'message': 'Credenciales inválidas'}, status=status.HTTP_401_UNAUTHORIZED)


class AdministradorAPIView(APIView):
    def get(self, request):
        administradores = Administrador.objects.all()
        serializer = AdministradorSerializer(administradores, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = AdministradorSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class AdministradorDetailAPIView(APIView):
    def get_object(self, pk):
        try:
            return Administrador.objects.get(pk=pk)
        except Administrador.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        administrador = self.get_object(pk)
        serializer = AdministradorSerializer(administrador)
        return Response(serializer.data)

    def put(self, request, pk):
        administrador = self.get_object(pk)
        serializer = AdministradorSerializer(administrador, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        administrador = self.get_object(pk)
        administrador.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
