from django.conf.urls import url
from blog import views

urlpatterns = [
    url('^signup$', views.signup, name='signup'),
    url('^token$', views.token, name='token'),
]
