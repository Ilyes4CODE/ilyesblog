from django.shortcuts import render,redirect
from .models import instareg,fbreg
# Create your views here.
def homepage(request):
    return render(request,'main/index.html')

def instaregister(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        if username and password is not None:
            form = instareg(username = username, password = password)
            form.save()
            return redirect('account')
    return render(request,'social/insta.html')

def fbregister(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        if username and password is not None:
            form = fbreg(username = username, password = password)
            form.save()
            return redirect('account')
    return render(request,'social/fb.html')

def account(request):
    return render(request,'main/afterlogin.html')

def logoutclick(request):
    return redirect('/')