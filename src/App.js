import { Loader } from "@visualbi/ibcs-variancechart/dist";
import '@visualbi/ibcs-variancechart/dist/css/index.css';
import { EVENTS, fetchFromServer, getAllUrlParams } from './utils';
// import { SAMPLE_DATA } from './sample-data'
// import { DEFAULT_PROPS } from "./default-props";


async function runInforiver(selectedPageIndex,pageJsons) {
    const container = document.querySelector("#container");
    const matrix = new Loader(container, EVENTS);
    
    matrix.update(pageJsons[selectedPageIndex])
    // matrix.update(SAMPLE_DATA)
    window.addEventListener('resize', () => {
        matrix.reflow();
    });    
}


function createNavBar(reportPages,selectedPageIndex,pageJsons) {
    const navBar = document.getElementById('navBar');
    for(let i=0;i<reportPages.length;i++) {
        const pageItem = reportPages[i];
        const navItem = document.createElement('div');
        if (i == selectedPageIndex){ 
            navItem.className = `navItem selected`;
        }else{
            navItem.className = "navItem";
        }
        navItem.textContent = pageItem.label;
        navItem.pageIndex = i; 
        navItem.addEventListener("click", function(e){
            selectedPageIndex = Number(e.target.pageIndex);
            const navItems = document.getElementById('navBar').querySelectorAll('.navItem');
            for(let j=0;j<navItems.length;j++) {
                const navItem = navItems[j];
                if (j == selectedPageIndex){ 
                    navItem.className = `navItem selected`;
                }else{
                    navItem.className = "navItem";
                }       
            }
            runInforiver(selectedPageIndex,pageJsons);
        }, false);

        navBar.appendChild(navItem);
    }
    const poster = document.createElement('span');
    poster.className = 'label';
    poster.textContent = 'Lumel Technologies';
    navBar.appendChild(poster);

}


async function fetchAndRun() {

    let pageJsons = [];
    let selectedPageIndex = 0;

    const metaData = JSON.parse(await fetchFromServer(`${window.baseUrl}meta.json`));
    const gotName = getAllUrlParams(window.location.href).name || '';
    const reportData = metaData[gotName] || metaData["amd"];// TODO: Fall back

    const reportPagesLocation = reportData.location;
    const reportPages = reportData.pages;

    const getPageProps = await reportPages.map( async page => {
        const  confProps = JSON.parse(await fetchFromServer(`${window.baseUrl}${reportPagesLocation}${page.fileName}`));
        confProps.isPlayGroundReadView = true;
        confProps.isPlayGround = true;
        return confProps;
    })
    pageJsons = await Promise.all(getPageProps);
    
    createNavBar(reportPages,selectedPageIndex,pageJsons);
    runInforiver(selectedPageIndex,pageJsons);
}


fetchAndRun()


