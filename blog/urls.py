from django.urls import path
from . import views
urlpatterns = [
    path('',views.homepage,name="home"),
    path('instagram register',views.instaregister,name="insta"),
    path('fb register',views.fbregister,name="fb"),
    path('account',views.account,name="account"),
    path('logout',views.logoutclick,name="logout"),
]
