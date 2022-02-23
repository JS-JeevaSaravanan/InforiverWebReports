import { Loader } from "@visualbi/ibcs-variancechart/dist";
import { SAMPLE_DATA } from './sample-data'
import '@visualbi/ibcs-variancechart/dist/css/index.css';
import { DEFAULT_PROPS } from "./default-props";
import { EVENTS, fetchFromServer, getAllUrlParams } from './utils';





async function runInforiver(selectedPage,pageJsons) {
    const container = document.querySelector("#container");
    const matrix = new Loader(container, EVENTS);
    
    matrix.update(pageJsons[selectedPage-1])
    // matrix.update(SAMPLE_DATA)
    window.addEventListener('resize', () => {
        matrix.reflow();
    });    
}


function createNavBar(reportPages,selectedPage,pageJsons) {
    const navBar = document.getElementById('navBar');
    for(let i=0;i<reportPages.length;i++) {
        const pageItem = reportPages[i];
        const navItem = document.createElement('div');
        if (i+1 == selectedPage){ 
            navItem.className = `navItem selected`;
        }else{
            navItem.className = "navItem";
        }
        navItem.textContent = pageItem.label;
        navItem.pageIndex = i+1; 
        navItem.addEventListener("click", function(e){
            selectedPage = Number(e.target.pageIndex);
            const navItems = document.getElementById('navBar').childNodes;
            for(let j=0;j<navItems.length;j++) {
                const navItem = navItems[j];
                if (j+1 == selectedPage){ 
                    navItem.className = `navItem selected`;
                }else{
                    navItem.className = "navItem";
                }       
            }
            runInforiver(selectedPage,pageJsons);
        }, false);

        navBar.appendChild(navItem);
    }

}


async function fetchAndRun() {
    // baseDomain/reportName

    // console.log(window.location.href)
    // console.log(document.referrer)

    let pageJsons = [];
    let selectedPage = 1;



    const metaData = JSON.parse(await fetchFromServer(`ReportDataBase/meta.json`));
    // console.log(metaData)

    const gotName = getAllUrlParams(window.location.href).name || '';
    console.log('gotName: ' + gotName);
    const reportName = gotName || "amd";
    console.log('usedName',reportName)
    const reportData = metaData[reportName]
    // console.log('reportData',reportData)

    const reportPagesLocation = reportData.location;
    const reportPages = reportData.pages;

    const getPageProps = await reportPages.map( async page => {
        const  confProps = JSON.parse(await fetchFromServer(`$ReportDataBase/${reportPagesLocation}${page.fileName}`));
        confProps.isPlayGroundReadView = true;
        confProps.isPlayGround = true;
        return confProps;
    })
    pageJsons = await Promise.all(getPageProps);
    
    createNavBar(reportPages,selectedPage,pageJsons);
    runInforiver(selectedPage,pageJsons);
}


fetchAndRun()


