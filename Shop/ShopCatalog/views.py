from django.shortcuts import render
from .models import *
from django.http import JsonResponse

# Create your views here.
def show_catalog(request):
    

    all_categories = Category.objects.all()
    all_transports = Transport.objects.all()
    context = {'all_categories': all_categories, 'all_transports': all_transports}
    
    return render(request, 'index.html', context=context) 
# 
def get_category(request):
    # 
    category = request.GET.get('category')
    # 
    filter_transport = Transport.objects.filter(category__name = category).values()
    # 
    filter_transport = list(filter_transport)
    # 
    return JsonResponse({'filtered_transport' : filter_transport})