import { Loader } from "@visualbi/ibcs-variancechart/dist";
import '@visualbi/ibcs-variancechart/dist/css/index.css';
import { EVENTS, fetchFromServer, getAllUrlParams } from './utils';


async function runInforiver(selectedPageIndex,pageJsons, showToolBar) {
    const container = document.querySelector("#container");
    const matrix = new Loader(container, EVENTS);
    
    const selectedConfig = pageJsons[selectedPageIndex];
    if(!showToolBar){
        selectedConfig.toolbar.showOnHover = true;
        selectedConfig.toolbar.enableHoverToolbar = true;    
    }
    matrix.update(selectedConfig)
    window.addEventListener('resize', () => {
        matrix.reflow();
    });    
}


function createNavBar(reportPages,selectedPageIndex,pageJsons,showToolBar) {
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
            runInforiver(selectedPageIndex,pageJsons,showToolBar);
        }, false);

        navBar.appendChild(navItem);
    }

}


async function fetchAndRun() {

    let pageJsons = [];
    let selectedPageIndex = 0;

    const metaData = JSON.parse(await fetchFromServer(`${window.baseDomain}meta.json`));
    let reportName = getAllUrlParams(window.location.href).name || 'amd';// TODO: Fall back
    let showToolBar = getAllUrlParams(window.location.href).toolbar === "false" ? false : true;
    
    const reportData = metaData[reportName];
    const reportPagesLocation = reportData.location;
    const reportPages = reportData.pages;

    const getPageProps = await reportPages.map( async page => {
        const  confProps = JSON.parse(await fetchFromServer(`${window.baseDomain}${reportPagesLocation}${page.fileName}`));
        confProps.isPlayGroundReadView = true;
        confProps.isPlayGround = true;
        return confProps;
    })
    pageJsons = await Promise.all(getPageProps);
    
    createNavBar(reportPages,selectedPageIndex,pageJsons,showToolBar);
    runInforiver(selectedPageIndex,pageJsons,showToolBar);
}


fetchAndRun()


