from django.shortcuts import render
import os
import pdfplumber
import csv
from werkzeug.utils import secure_filename
import json
from rest_framework.views import APIView
from rest_framework.response import Response

import google.generativeai as genai

genai.configure(api_key="AIzaSyCagTJGThZ1dGmuzUUTwZSoYAodoQLSYSA")

class ai_resume(APIView):

    def chat_gpt(self,conversation):
        try:
            message = conversation.pop()
            model = genai.GenerativeModel("gemini-pro")
            chat = model.start_chat(history=conversation)
            response = chat.send_message(message)
        except Exception as e:
            print("Error occurred",e)
        return response.text
        
    def pdf_to_text(self,file):
        
        text = ''
        with pdfplumber.open(file) as pdf:
            for page in pdf.pages:
                text += page.extract_text()
        return text

        
    def post(self, request, *args, **kwargs):
        print(request.data)
        resume_file = request.data.pop('resume')[0]
        print(resume_file)
        job_description = request.POST.get('jobDescription')

        if not resume_file or not job_description :
            return json.dumps(({"error": "Please provide resume files, a job description, and mandatory keywords."})), 400

        results = []
        # for resume_file in resume_files:
        resume_text = self.pdf_to_text(resume_file)

        conversation = [
            {"role": "user", "parts": "You are a helpful assistant who helps students get good placements."},
            # {"role": "user", "parts": f"Mandatory keywords: {mandatory_keywords}"},
            {"role": "user", "parts": f"Is this resume suitable for the job? and recommend chages to better fit the profile, what more skills should the user learn for this job positon. Job description: {job_description}, Resume: {resume_text}  (also at the end of the prompt write is the candidate is Suitable,Not Suitable or Maybe Suitable and the labels is mandatory to have)"}
        ]

        response = self.chat_gpt(conversation)

        # Replace newline characters with spaces in the response
        response = response.replace('**','')
        response = response.replace('*','•')
        
        # Determine the suitability category
        response_lower = response.lower()
        if "not suitable" in response_lower:
            suitability = "Not Suitable"
        elif "maybe suitable" in response_lower:
            suitability = "Maybe Suitable"
        else:
            suitability = "Suitable"

        results.append([response, suitability])
        print(results)
        return Response({"response": response,
                "suitability": suitability})