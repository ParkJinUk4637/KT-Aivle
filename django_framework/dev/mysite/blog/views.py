from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from blog.models import Post

# Create your views here.
def test1(request):
    # 서비스 구현
    return HttpResponse('hello~')

def test2(request,no):
    return HttpResponse(no)

# 전체 목록
def list(request):
    post_all = Post.objects.all()
    return HttpResponse(post_all)

# 상세 보기
def detail(request, no):
    post = get_object_or_404(Post,id=no)

    return HttpResponse(post.title)
