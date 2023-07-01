from django.http import HttpResponse
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from django.http import HttpResponse, JsonResponse
import codecs


def index(request):
    return HttpResponse('hi')


@csrf_exempt
def apiHandler(request):
    if request.method == 'OPTIONS':
        # Handle the OPTIONS request and provide the appropriate response headers
        response = JsonResponse({'message': 'OK'})
        response['Access-Control-Allow-Origin'] = '*'  # Set the appropriate origin
        response['Access-Control-Allow-Methods'] = 'POST'  # Set the allowed methods
        response["Content-Type"] = "application/json; charset=utf-8"
        return response
    if request.method == 'POST':
        try:
            if request.body:
                decoded_text = request.body.decode('utf-8')
                python_object = json.loads(decoded_text)

                response = JsonResponse(python_object, safe=False, json_dumps_params={'ensure_ascii': False})
                response["Content-Type"] = "application/json; charset=utf-8"
                response["Content-Language"] = "ru"

                return response
            else:
                return JsonResponse({'error': 'Name not provided'}, status=400)
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON data'}, status=400)
    else:
        return HttpResponse('Only post')
