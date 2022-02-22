# ReportDataServer
Serving report JSON data of powerbi reports


meta.json format

js```
{
"nameFromUrl":{
         "location":"folder",
         "name": "reportName",
         "pages": [
             {
                 "id":"uniqueIDStartsFrom1",
                 "lable":"pageLabel",
                 "filename":"nameOfTheFile"
             }
         ]
     }
}```