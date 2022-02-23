import { Loader } from "@visualbi/ibcs-variancechart/dist";
import { SAMPLE_DATA } from './sample-data'
import '@visualbi/ibcs-variancechart/dist/css/index.css';
import { DEFAULT_PROPS } from "./default-props";
import { EVENTS, getJsonString } from './utils';


async function fetchData() {
    // baseDomain/reportName

    // console.log(window.location.href)
    // console.log(document.referrer)


    const metaData = JSON.parse(await getJsonString(`${window.baseDomain}meta.json`));
    console.log(metaData)

    const reportName = "amd";
    const reportData = metaData[reportName]

    console.log('reportData',reportData)

    const jsonLocation = reportData.location;
    const reportPages = reportData.pages;
    
    const getPageProps = await reportPages.map( async page => {
        const  confProps = JSON.parse(await getJsonString(`${window.baseDomain}${jsonLocation}${page.fileName}`));
        confProps.isPlayGroundReadView = true;
        confProps.isPlayGround = true;
        return confProps;
    })

    pageJsons = await Promise.all(getPageProps);
    init(1,pageJsons,reportPages);
}

async function init(selectedPage,pageJsons,pages) {
    const container = document.querySelector("#container");
    const matrix = new Loader(container, EVENTS);
    
    const navBar = document.getElementById('navBar');
    navBar.innerHTML  ="";
    
    const changePage = function (e)  {
        init(e.target.pageId,pageJsons,pages);
    }
    
    for(let i=0;i<pages.length;i++) {
        const page = pages[i];
        const navItem = document.createElement('div');
        if (i+1 == selectedPage){
            navItem.className = `navItem selected`;
        }else{
            navItem.className = "navItem";
        }
        navItem.textContent = page.label;
        navItem.pageId =i+1; 
        navItem.addEventListener("click", changePage);        
        navBar.appendChild(navItem);
    }

    matrix.update(pageJsons[selectedPage-1])
    // matrix.update(SAMPLE_DATA)
    window.addEventListener('resize', () => {
        matrix.reflow();
    });    
}

let pageJsons = [];
fetchData()


