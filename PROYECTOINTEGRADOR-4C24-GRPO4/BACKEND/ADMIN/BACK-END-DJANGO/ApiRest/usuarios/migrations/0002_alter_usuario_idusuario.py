# Generated by Django 4.2.2 on 2023-06-22 07:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('usuarios', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usuario',
            name='idUsuario',
            field=models.BigAutoField(primary_key=True, serialize=False),
        ),
    ]