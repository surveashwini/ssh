from django.urls import path

from . import views


urlpatterns = [
    path('', views.NinjaList.as_view()),
    path('<int:pk>/', views.NinjaDetail.as_view()),
]