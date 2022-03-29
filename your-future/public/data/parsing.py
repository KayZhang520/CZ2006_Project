import json
import os
import sys

# with open(path) as fp:
#     lines = fp.read().splitlines()
# with open(newPath, "w") as fp:
#     for line in lines:
#         print(line + ",", file=fp)
# entries = os.listdir('./')
# print(entries)
# dir=os.path.dirname(os.path.realpath(__file__))
# print(dir)

path=sys.path[0]+'/Appliances_5.json'
f = open(path)
data=json.load(f)

for i in data[0]:
    print(i)


