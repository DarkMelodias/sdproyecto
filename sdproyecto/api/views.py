from rest_framework import viewsets
from .models import Motel, Room
from .serializer import MotelSerializer,RoomSerializer
from rest_framework.permissions import (IsAuthenticated,IsAuthenticatedOrReadOnly,IsAdminUser,DjangoModelPermissions)

from rest_framework.permissions import AllowAny,IsAuthenticated,IsAuthenticatedOrReadOnly
from django.db import connection
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view, permission_classes
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
import json

from rest_framework.response import Response
from rest_framework.decorators import api_view
from .procedures import my_custom_sql


class MotelViews(viewsets.ModelViewSet):
    queryset = Motel.objects.all()
    serializer_class = MotelSerializer
    
class RoomViews(viewsets.ModelViewSet):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer
    
    
@api_view(['POST'])
def consulta(request):
    if request.method == 'POST':
        data = request.data
        result = my_custom_sql(
            data.get('id_motel','')
        )
        json_list = [json.loads(element[0]) for element in result]
        return Response(json_list)



