from django.urls import path
from .views import Post,Interest,Posts,Interests

urlpatterns=[
    path('post/',Posts.as_view()),
    path('interest/',Interests.as_view()),
    path('post/<int:pk>',Post.as_view()),
    path('interest/<int:pk>',Interest.as_view()),
]