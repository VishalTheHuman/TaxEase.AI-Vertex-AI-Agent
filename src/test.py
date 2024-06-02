import os

for x in os.listdir("data\\instructions"):
    print(x[:-4],end="\\n")