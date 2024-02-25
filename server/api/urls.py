from django.urls import path
from .views import Post,Interest,Posts,Interests,User,Users,login_view

urlpatterns=[
    path('post/',Posts.as_view()),
    path('interest/',Interests.as_view()),
    path('post/<int:pk>',Post.as_view()),
    path('interest/<int:pk>',Interest.as_view()),
    path('user/',Users.as_view()),
    path('user/<int:pk>',User.as_view()),
    path('lv',login_view)


]