from rest_framework import serializers
from .models import Motel,Room


class MotelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Motel
        # fields = ('fullname', 'nickname')
        fields = '__all__'
        
class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        # fields = ('fullname', 'nickname')
        fields = '__all__'
        
