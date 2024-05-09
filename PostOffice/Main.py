import os
import json
import webapp2
import urllib
from google.appengine.ext.webapp import template

class MainPage(webapp2.RequestHandler):
    def get(self):
        temp_values = {}
        path = os.path.join(os.path.dirname(__file__),'index.html')
        self.response.out.write(template.render(path, temp_values))

    def post(self):
        pincode = self.request.get('zipCode')
        url = "https://api.postalpincode.in/pincode/" + pincode
        data = urllib.urlopen(url).read()
        data = json.loads(data)

        if(data[0]['Status'] == 'Success'):
            name = data[0]['PostOffice'][0]['Name']
            block = data[0]['PostOffice'][0]['Block']
            District = data[0]['PostOffice'][0]['District']

            temp_values = {
                "name" : name,
                "block": block,
                "District": District
            }        

            path = os.path.join(os.path.dirname(__file__), 'result.html')
            self.response.out.write(template.render(path, temp_values))

app = webapp2.WSGIApplication([('/', MainPage)], debug=True)        