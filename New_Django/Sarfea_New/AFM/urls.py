from django.contrib import admin
from django.urls import path
from . import views
#http://127.0.0.1:8000/      =>Home Page
#http://127.0.0.1:8000/home     =>Home Page




urlpatterns = [
    #path("admin/", admin.site.urls),
    path("", views.home),
    path("home", views.home, name='home'),
    path("projects/", views.projects, name='projects'),
    path('project_details/<str:project_name>/', views.project_details, name='project_details'),
    path("realized_cost/<str:project_name>/", views.realized_cost, name='realized_cost'),
    path('income_details/<str:project_name>/', views.income_details, name='income_details'),
    path("client/", views.client, name='client'),
    path("supplier/", views.supplier, name='supplier'),
]