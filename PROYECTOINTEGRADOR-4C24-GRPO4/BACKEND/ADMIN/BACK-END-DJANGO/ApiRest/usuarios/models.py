import bcrypt
from django.db import models

class Usuario(models.Model):
    idUsuario = models.BigAutoField(primary_key=True)
    nombres = models.CharField(max_length=100)
    apellidos = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=100)

    def save(self, *args, **kwargs):
        self.password = bcrypt.hashpw(self.password.encode(), bcrypt.gensalt()).decode()
        super().save(*args, **kwargs)

    def __str__(self):
        return self.email