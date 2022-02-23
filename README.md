# InforiverWebReports

Serving report JSON data of powerbi reports to Inforiver Standlone and make Inforiver StandAlone functional...




### ReportDataServer

meta.json format

```
{
"report-title":{
         "location":"folder-name/",
         "name": "Report Name",
         "pages": [
             {
                 "label":"Page Lable",
                 "fileName":"file-name.json"
             }
         ]
     }
}
```


Things to note :

* "cases_country_wise_trend.json" -> chart are not commming...

* https://inforiver.com/demos/interactive-feature-demo-of-inforiver-professional-edition/ - This report is not downloadable, so jsons are not added for this report...

