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


Things to handle :

* "cases_country_wise_trend.json" -> chart are not commming...

* covid_19_global_trends -> "cases_daily_report.json" -> json is not compactible with inforiver, so error...

* sales_report/ "salesbyregion1.json","salesbyregion2.json","salesbyregion3.json" -> json is not compactible with inforiver, so error...

* sales_performance_report/ "sales_performance.json" -> json is not compactible with inforiver, so error...

* https://inforiver.com/demos/interactive-feature-demo-of-inforiver-professional-edition/ - This report is not downloadable, so jsons are not added for this report...


Things to note:

* All json data is acquired from QA Inforiver Build

* https://inforiver.com/demos/sales-report-using-microsoft-power-bi/ - This one page has 3 reports on same page.. so 3 jsons files were created and mapped into 3 pages..
