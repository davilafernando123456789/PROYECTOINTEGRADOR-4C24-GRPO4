from django.db import models


class Curso(models.Model):
    idCurso = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=100)
    descripcion = models.CharField(max_length=200)
