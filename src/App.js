import { Loader } from "@visualbi/ibcs-variancechart/dist";
import "@visualbi/ibcs-variancechart/dist/css/index.css";
import { EVENTS, fetchFromServer, getAllUrlParams } from "./utils";

async function runInforiver(selectedPageIndex, pageConfigs, enableReadMode) {
  const container = document.querySelector("#container");
  const matrix = new Loader(container, EVENTS);

  const selectedConfig = pageConfigs[selectedPageIndex];
  if (enableReadMode) {
    selectedConfig.isEditMode = false;
  } else {
    selectedConfig.isEditMode = true;
  }
  matrix.update(selectedConfig);
  window.addEventListener("resize", () => {
    matrix.reflow();
  });
}

function createNavBar(labels, selectedPageIndex, pageConfigs, enableReadMode) {
  const navBar = document.getElementById("navBar");
  for (let i = 0; i < labels.length; i++) {
    const pageLabel = labels[i];
    const navItem = document.createElement("div");
    if (i == selectedPageIndex) {
      navItem.className = `navItem selected`;
    } else {
      navItem.className = "navItem";
    }
    navItem.textContent = pageLabel;
    navItem.pageIndex = i;
    navItem.addEventListener(
      "click",
      function (e) {
        selectedPageIndex = Number(e.target.pageIndex);
        const navItems = document
          .getElementById("navBar")
          .querySelectorAll(".navItem");
        for (let j = 0; j < navItems.length; j++) {
          const navItem = navItems[j];
          if (j == selectedPageIndex) {
            navItem.className = `navItem selected`;
          } else {
            navItem.className = "navItem";
          }
        }
        runInforiver(selectedPageIndex, pageConfigs, enableReadMode);
      },
      false
    );

    navBar.appendChild(navItem);
  }
}

async function fetchAndRun() {

  const pageConfigs = [];
  let selectedPageIndex = 0;
  const reportName = getAllUrlParams(window.location.href)["name"] || "amd"; // TODO: Fall back
  const reportLocation = `${reportName}/`;
  const metaData = JSON.parse(
    await fetchFromServer(`${window.baseDomain}${reportLocation}meta.json`)
  );
  const labels = Object.keys(metaData);
  const files = Object.values(metaData);

  let enableReadMode =
    getAllUrlParams(window.location.href)["read-mode"] === "true"
      ? true
      : false;

  const getPageProps = await files.map(async (fileName) => {
    const confProps = JSON.parse(
      await fetchFromServer(`${window.baseDomain}${reportLocation}${fileName}`)
    );
    confProps.isPlayGroundReadView = true;
    confProps.isPlayGround = true;
    return confProps;
  });
  pageConfigs.push(...(await Promise.all(getPageProps)));

  createNavBar(labels, selectedPageIndex, pageConfigs, enableReadMode);
  runInforiver(selectedPageIndex, pageConfigs, enableReadMode);
}

fetchAndRun();
