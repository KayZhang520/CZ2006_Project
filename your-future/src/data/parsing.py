import json
import os
import sys

# entries = os.listdir('./')
# print(entries)
# dir=os.path.dirname(os.path.realpath(__file__))
# print(dir)
str=sys.path[0]+'/Appliances_5.json'
f=open(str)

data=json.load(f)



for i in data['overall']:
    print(i)

