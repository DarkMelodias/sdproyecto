from django.db import models

# Create your models here.
class Motel(models.Model):
    id_motel = models.BigAutoField(auto_created=True,primary_key=True)
    name_motel = models.CharField(max_length=50)
    dirrecion = models.CharField(max_length=500)
    img_motel = models.CharField(max_length=500, null=True)
    
class Room(models.Model):
    id_room = models.BigAutoField(auto_created=True,primary_key=True)
    name_room = models.CharField(max_length=500)
    tip_room = models.CharField(max_length=500)
    jacuzzi = models.BooleanField()
    img_room = models.TextField()
    motel = models.ForeignKey(Motel, on_delete=models.CASCADE)