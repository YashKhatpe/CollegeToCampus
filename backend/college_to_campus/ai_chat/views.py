from rest_framework.views import APIView
from rest_framework.response import Response
import json
import requests
import google.generativeai as genai

import textwrap

# from IPython.display import display
# from IPython.display import Markdown

# Create your views here.
genai.configure(api_key="AIzaSyCagTJGThZ1dGmuzUUTwZSoYAodoQLSYSA")

class ChatView(APIView):
    def to_markdown(text):
        text = text.replace('','**')
        text = text.replace('•', '*')
        return text
    def post(self, request):
        data = request.data.get('body')
        user_message = data.get('message')
        user_history = data.get('history')
        print(user_message)
        try:
            
            # print(request.data,data,user_message)
            # print(request.data['body'].get('message'))
            # Send message to Ollama server and get response
            # ollama_response = requests.post("OLLAMA_API_URL", data={"message": user_message})
            print(user_history)
            model = genai.GenerativeModel("gemini-pro")
            # send_data = '**'
            
            chat = model.start_chat(history=user_history)
            response = chat.send_message(user_message)
            send_data = response.text
            track = True
            
            # while '**' in send_data:
            #     if track:
            #         send_data = send_data.replace('**','<b>',1)
            #         track = False
            #     else:
            #         send_data = send_data.replace('**','</b>',1)
            #         track = True
            send_data = send_data.replace('**','')
            
            send_data = send_data.replace('*','  •')
            print(response.text,send_data)

            # send_data = self.to_markdown(response.text)
        except:
            print("Error occurred")
        return Response({"reply": send_data})