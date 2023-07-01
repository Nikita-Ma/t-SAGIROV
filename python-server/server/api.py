from django.http import HttpResponse
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt


def index(request):
    return HttpResponse('hi')


import json
from django.http import HttpResponse, JsonResponse


@csrf_exempt
def apiHandler(request):
    if request.method == 'POST':
        try:
            if request.body:
                body_unicode = request.body.decode('utf-8')
                body = json.loads(body_unicode)
                return JsonResponse(body)
            else:
                return JsonResponse({'error': 'Name not provided'}, status=400)
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON data'}, status=400)
    else:
        return HttpResponse('Only post')
