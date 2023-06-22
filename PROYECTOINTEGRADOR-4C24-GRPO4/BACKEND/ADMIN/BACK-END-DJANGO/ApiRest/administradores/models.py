from django.db import models
import bcrypt

class Administrador(models.Model):
    idAdministrador = models.BigAutoField(primary_key=True)
    nombres = models.CharField(max_length=100)
    apellidos = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=100)
    telefono = models.CharField(max_length=20)
    direccion = models.CharField(max_length=100)

    def __str__(self):
        return self.email

    def verificar_credenciales(self, password):
        return bcrypt.checkpw(password.encode('utf-8'), self.password.encode('utf-8'))

    def save(self, *args, **kwargs):
        if not self.idAdministrador:
            # Nuevo registro, encriptar la contraseña
            hashed_password = bcrypt.hashpw(self.password.encode('utf-8'), bcrypt.gensalt())
            self.password = hashed_password.decode('utf-8')
        super().save(*args, **kwargs)
