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

    const location = reportData.location;
    const pages = reportData.pages;
    
    const promises = await pages.map( async page => {
        const  json = JSON.parse(await getJsonString(`${window.baseDomain}${location}${page.fileName}`));
        json.isPlayGroundReadView = true;
        json.isPlayGround = true;
        return json;
    })

    pageJsons = await Promise.all(promises);
    init(1,pageJsons,pages);
}

async function init(selectedPage,pageJsons,pages) {
    const container = document.querySelector("#container");
    const matrix = new Loader(container, EVENTS);
    
    const boardElement = document.getElementById('board');
    boardElement.innerHTML  ="";
    
    const changeLink = function (e)  {
        init(e.target.pageId,pageJsons,pages);
    }
    
    for(let i=0;i<pages.length;i++) {
        const page = pages[i];
        const singlePage = document.createElement('div');
        if (i+1 == selectedPage){
            singlePage.className = `blah selected`;
        }else{
            singlePage.className = "blah";
        }
        singlePage.textContent = page.label;
        singlePage.pageId =i+1; 
        singlePage.addEventListener("click", changeLink);        
        boardElement.appendChild(singlePage);
    }

    matrix.update(pageJsons[selectedPage-1])
    // matrix.update(SAMPLE_DATA)
    window.addEventListener('resize', () => {
        matrix.reflow();
    });    
}

let pageJsons = [];
fetchData()


