# ReportDataServer
Serving report JSON data of powerbi reports


meta.json format

js
```
{
"reportTitle":{
         "location":"folderName/",
         "name": "reportName",
         "pages": [
             {
                 "label":"pageLabel",
                 "fileName":"fileName.json"
             }
         ]
     }
}
```