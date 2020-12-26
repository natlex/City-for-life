from rest_framework.views import APIView
from rest_framework.response import Response

class TestAPIView(APIView):
	def get(self,request):
		data = "test"
		return Response(data)