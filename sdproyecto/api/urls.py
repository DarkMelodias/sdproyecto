from django.urls import path, include
from rest_framework import routers
from api.views import MotelViews, RoomViews, consulta

router = routers.DefaultRouter()
router.register(r'motel', MotelViews)
router.register(r'room', RoomViews)

urlpatterns = [
    path('', include(router.urls)),
    path('consulta/', consulta, name='consulta'),
]
