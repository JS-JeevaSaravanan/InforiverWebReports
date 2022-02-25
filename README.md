# InforiverWebReports

Serving Inforiver Standlone for inforiver demo reports... https://inforiver.com/demos




### ReportDataServer

* Each folder have meta.json file which have the details of that report pages
* Folder name must be that same meta name that is used in the url

```
{
  "Page1 Label": "page1_file.json",
  "Page2 Label": "page2_file.json",
  "Page3 Label": "page3_file.json"
}

```


#### Things to handle :

* "cases_country_wise_trend.json" -> chart are not commming...

* covid_19_global_trends -> "cases_daily_report.json" -> json is not compatible with inforiver, so error...

* sales_report/ "salesbyregion1.json","salesbyregion2.json","salesbyregion3.json" -> json is not compatible with inforiver, so error...

* sales_performance_report/ "sales_performance.json" -> json is not compatible with inforiver, so error...

* https://inforiver.com/demos/interactive-feature-demo-of-inforiver-professional-edition/ - This report is not downloadable, so jsons are not added for this report...


#### Things to note:

* All json data is acquired from QA Inforiver Build

* https://inforiver.com/demos/sales-report-using-microsoft-power-bi/ - This one page has 3 reports on same page.. so 3 jsons files were created and mapped into 3 pages..



## Links


### StandAlone Inforiver running at https://visualbis.github.io/InforiverWebReports/?name=MetaName[&read-mode=true]


### Professional

| Report Name     | Web Page Link                                                                                                                                                                                                                                                                | Meta Name |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| Getting Started | [https://inforiver.com/demos/interactive-feature-demo-of-inforiver-professional-edition/](https://inforiver.com/demos/interactive-feature-demo-of-inforiver-professional-edition/ "https://inforiver.com/demos/interactive-feature-demo-of-inforiver-professional-edition/") |           |
| Amazon          | [https://inforiver.com/demos/financial-statements-using-microsoft-power-bi-amazon/](https://inforiver.com/demos/financial-statements-using-microsoft-power-bi-amazon/ "https://inforiver.com/demos/financial-statements-using-microsoft-power-bi-amazon/")                   | amazon    |
| AMD             | [https://inforiver.com/demos/financial-statements-using-microsoft-power-bi-amd/](https://inforiver.com/demos/financial-statements-using-microsoft-power-bi-amd/ "https://inforiver.com/demos/financial-statements-using-microsoft-power-bi-amd/")                            | amd       |
| Apple           | [https://inforiver.com/demos/financial-statements-using-microsoft-power-bi-apple/](https://inforiver.com/demos/financial-statements-using-microsoft-power-bi-apple/ "https://inforiver.com/demos/financial-statements-using-microsoft-power-bi-apple/")                      | apple     |
| Chevron         | [https://inforiver.com/demos/financial-statements-using-microsoft-power-bi-chevron/](https://inforiver.com/demos/financial-statements-using-microsoft-power-bi-chevron/ "https://inforiver.com/demos/financial-statements-using-microsoft-power-bi-chevron/")                | chevron   |
| Nike            | [https://inforiver.com/demos/financial-statements-using-microsoft-power-bi-nike/](https://inforiver.com/demos/financial-statements-using-microsoft-power-bi-nike/ "https://inforiver.com/demos/financial-statements-using-microsoft-power-bi-nike/")                         | nike      |
| GE              | [https://inforiver.com/demos/financial-statements-using-microsoft-power-bi-ge/](https://inforiver.com/demos/financial-statements-using-microsoft-power-bi-ge/ "https://inforiver.com/demos/financial-statements-using-microsoft-power-bi-ge/")                               | ge        |
| Walmart         | [https://inforiver.com/demos/financial-statements-using-microsoft-power-bi-walmart/](https://inforiver.com/demos/financial-statements-using-microsoft-power-bi-walmart/ "https://inforiver.com/demos/financial-statements-using-microsoft-power-bi-walmart/")                | walmart   |

### Standard

| Report Name                     | Web Page Link                                                                                                                                                                                                                                                                      | Meta Name               |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| Profitability Analysis          | https://inforiver.com/demos/profitability-analysis-sample-report-in-microsoft-power-bi/                                                                                                                                                                                            | profitability\_analysis  |
| Comparitive P&L                 | [https://inforiver.com/demos/a-comparative-pl-report-in-microsoft-power-bi/](https://inforiver.com/demos/a-comparative-pl-report-in-microsoft-power-bi/ "https://inforiver.com/demos/a-comparative-pl-report-in-microsoft-power-bi/")                                              | comparitive\_pl         |
| Variance P&L                    | [https://inforiver.com/demos/variance-pl-statement-in-microsoft-power-bi/](https://inforiver.com/demos/variance-pl-statement-in-microsoft-power-bi/ "https://inforiver.com/demos/variance-pl-statement-in-microsoft-power-bi/")                                                    | variance\_pl            |
| Regional Profitability Analysis | [https://inforiver.com/demos/regional-profitability-analysis-report-in-microsoft-power-bi/](https://inforiver.com/demos/regional-profitability-analysis-report-in-microsoft-power-bi/ "https://inforiver.com/demos/regional-profitability-analysis-report-in-microsoft-power-bi/") | regional\_profitability |

### Other Features

| Report Name                   | Web Page Link                                                                                                                                                                                                                                                                                                                            | Meta Name                  |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| COVID-19 Global Trends        | [https://inforiver.com/demos/covid-19-global-trends-using-microsoft-power-bi/](https://inforiver.com/demos/covid-19-global-trends-using-microsoft-power-bi/ "https://inforiver.com/demos/covid-19-global-trends-using-microsoft-power-bi/")                                                                                              | covid\_19\_global\_trends  |
| Sales Report                  | [https://inforiver.com/demos/sales-report-using-microsoft-power-bi/](https://inforiver.com/demos/sales-report-using-microsoft-power-bi/ "https://inforiver.com/demos/sales-report-using-microsoft-power-bi/")                                                                                                                            | sales\_report              |
| Sales Performance Report      | [https://inforiver.com/demos/sales-performance-report-using-microsoft-power-bi/](https://inforiver.com/demos/sales-performance-report-using-microsoft-power-bi/ "https://inforiver.com/demos/sales-performance-report-using-microsoft-power-bi/")                                                                                        | sales\_performance\_report |
| Unemployment Rate in EU       | [https://inforiver.com/demos/unemployment-rate-analysis-using-microsoft-power-bi/](https://inforiver.com/demos/unemployment-rate-analysis-using-microsoft-power-bi/ "https://inforiver.com/demos/unemployment-rate-analysis-using-microsoft-power-bi/")                                                                                  |                            |
| History of Olympics           | [https://inforiver.com/demos/history-of-olympics-an-analysis-of-120-years-of-olympics-in-microsoft-power-bi/](https://inforiver.com/demos/history-of-olympics-an-analysis-of-120-years-of-olympics-in-microsoft-power-bi/ "https://inforiver.com/demos/history-of-olympics-an-analysis-of-120-years-of-olympics-in-microsoft-power-bi/") |                            |
| Forbes Billionaires           | [https://inforiver.com/demos/forbes-billionaires-sample-report-microsoft-power-bi/](https://inforiver.com/demos/forbes-billionaires-sample-report-microsoft-power-bi/ "https://inforiver.com/demos/forbes-billionaires-sample-report-microsoft-power-bi/")                                                                               |                            |
| Formula One                   | [https://inforiver.com/demos/formula-one-an-exhaustive-analysis-with-inforiver-in-power-bi/](https://inforiver.com/demos/formula-one-an-exhaustive-analysis-with-inforiver-in-power-bi/ "https://inforiver.com/demos/formula-one-an-exhaustive-analysis-with-inforiver-in-power-bi/")                                                    |                            |
| Legends of Basketball         | [https://inforiver.com/demos/analyzing-the-legends-of-basketball-using-inforiver-for-power-bi/](https://inforiver.com/demos/analyzing-the-legends-of-basketball-using-inforiver-for-power-bi/ "https://inforiver.com/demos/analyzing-the-legends-of-basketball-using-inforiver-for-power-bi/")                                           |                            |
| Demographic Analysis          | [https://inforiver.com/demos/demographic-analysis-using-microsoft-power-bi/](https://inforiver.com/demos/demographic-analysis-using-microsoft-power-bi/ "https://inforiver.com/demos/demographic-analysis-using-microsoft-power-bi/")                                                                                                    |                            |
| Correlation Matrix            | [https://inforiver.com/demos/correlation-matrix-using-microsoft-power-bi/](https://inforiver.com/demos/correlation-matrix-using-microsoft-power-bi/ "https://inforiver.com/demos/correlation-matrix-using-microsoft-power-bi/")                                                                                                          |                            |
| Variance Analysis             | [https://inforiver.com/demos/variance-analysis-using-microsoft-power-bi/](https://inforiver.com/demos/variance-analysis-using-microsoft-power-bi/ "https://inforiver.com/demos/variance-analysis-using-microsoft-power-bi/")                                                                                                             |                            |
| Regional Sales Report         | [https://inforiver.com/demos/regional-sales-report-using-microsoft-power-bi/](https://inforiver.com/demos/regional-sales-report-using-microsoft-power-bi/ "https://inforiver.com/demos/regional-sales-report-using-microsoft-power-bi/")                                                                                                 |                            |
| Rat Sightings in New York     | [https://inforiver.com/demos/rat-sightings-in-new-york-an-analysis-with-inforiver-in-microsoft-power-bi/](https://inforiver.com/demos/rat-sightings-in-new-york-an-analysis-with-inforiver-in-microsoft-power-bi/ "https://inforiver.com/demos/rat-sightings-in-new-york-an-analysis-with-inforiver-in-microsoft-power-bi/")             |                            |
| Spend Analysis                | [https://inforiver.com/demos/spend-analysis-using-microsoft-power-bi/](https://inforiver.com/demos/spend-analysis-using-microsoft-power-bi/ "https://inforiver.com/demos/spend-analysis-using-microsoft-power-bi/")                                                                                                                      |                            |
| Sales Dashboard               | [https://inforiver.com/demos/sales-dashboard-using-microsoft-power-bi/](https://inforiver.com/demos/sales-dashboard-using-microsoft-power-bi/ "https://inforiver.com/demos/sales-dashboard-using-microsoft-power-bi/")                                                                                                                   |                            |
| Potato Production and Pricing | [https://inforiver.com/demos/visualization-of-potato-production-and-pricing-in-microsoft-power-bi/](https://inforiver.com/demos/visualization-of-potato-production-and-pricing-in-microsoft-power-bi/ "https://inforiver.com/demos/visualization-of-potato-production-and-pricing-in-microsoft-power-bi/")                               |                            |
| Trend Analysis                | [https://inforiver.com/demos/trend-analysis-using-microsoft-power-bi/](https://inforiver.com/demos/trend-analysis-using-microsoft-power-bi/ "https://inforiver.com/demos/trend-analysis-using-microsoft-power-bi/")                                                                                                                      |                            |
