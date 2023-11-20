from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def test1(request):
    # 서비스 구현
    return HttpResponse('hello~')

def test2(request,no):
    return HttpResponse(no)