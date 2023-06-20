from django.db import models

class Profesor(models.Model):
    idProfesor = models.AutoField(primary_key=True)
    nombres = models.CharField(max_length=100)
    apellidos = models.CharField(max_length=100)
    fecha_nacimiento = models.DateField()
    genero = models.CharField(max_length=1)
    direccion = models.CharField(max_length=100)
    telefono = models.CharField(max_length=20)
    email = models.EmailField()
    fecha_ingreso = models.DateField()

    def __str__(self):
        return self.email
