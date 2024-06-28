from rest_framework import generics
from .models import Ninja
from .serializers import NinjaSerializer

class NinjaList(generics.ListCreateAPIView):
    queryset = Ninja.objects.all()
    serializer_class = NinjaSerializer

class NinjaDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Ninja.objects.all()
    serializer_class = NinjaSerializer
