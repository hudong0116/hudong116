FROM 192.168.1.27:5000/dotnet-sdk3.1:v1
ADD . /usr/local/work/
WORKDIR /usr/local/work/
CMD ["/usr/bin/dotnet","XinGuan.XinGuanWeb.dll","--urls","http://*:5000"]
