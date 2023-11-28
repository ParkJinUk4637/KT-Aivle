from django.contrib.auth.models import User
from rest_framework import viewsets
from .serializers import *
from blog.models import Post, Comment
from rest_framework.generics import *
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import *
from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination
from collections import OrderedDict

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

# class PostListAPIView(ListAPIView):
#     queryset = Post.objects.all()
#     serializer_class = PostListSerializer

class PostRetrieveAPIView(RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializerDetail

    def get_serializer_context(self):
        return {
            'request' : None,
            'format' : self.format_kwarg,
            'view' : self
        }

class CommentCreateAPIView(CreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

# class PostLikeAPIView(UpdateAPIView):
#     queryset = Post.objects.all()
#     serializer_class = PostListSerializer

#     def update(self, request, *args, **kwargs):
#         partial = kwargs.pop('partial',False)
#         instance = self.get_object()
#         data = {'like':instance.like+1}
#         serializer = self.get_serializer(instance,data=data,partial=partial)
#         serializer.is_valid(raise_exception=True)
#         self.perform_update(serializer)

#         if getattr(instance, '_prefetched_objects_cache',None):
#             instance._prefetched_objects_cache = {}

#         return Response(data['like'])
    

class CateTagAPIView(APIView):

    def get(self,request,*args, **kwargs):
        cateList = Category.objects.all()
        tagList = Tag.objects.all()
        data={
            'cateList':cateList,
            'tagList':tagList
        }

        serializer = CateTagSerializer(instance=data)
        return Response(serializer.data)
    
class PostLikeAPIView(GenericAPIView):
    queryset = Post.objects.all()

    def get(self,request,*args,**kwargs):
        instance = self.get_object()
        instance.like += 1
        instance.save()
        return Response(instance.like)
    
class PostPageNumberPagination(PageNumberPagination):
    page_size=3
    def get_paginated_response(self, data):
        return Response(OrderedDict([
            ('pageCnt',self.page.paginator.num_pages),
            ('curPage', self.page.number),
            ('postList', data)
        ]))

class PostListAPIView(ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostListSerializer
    pagination_class = PostPageNumberPagination

    def get_serializer_context(self):
        return {
            'request' : None,
            'format' : self.format_kwarg,
            'view' : self
        }
    

def get_prev_next(instance):
    try:
        prev = instance.get_previous_by_update_dt()
    except instance.DoesNotExist:
        prev = None
        
    try:
        next_ =  instance.get_next_by_update_dt()
    except instance.DoesNotExist:
        next_ = None
    return prev, next_