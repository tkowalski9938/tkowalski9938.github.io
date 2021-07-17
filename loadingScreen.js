let spinnerWrapper = document.querySelector(".loader-wrapper");
let entireDocument = document.querySelector(".entireDocument");

async function main() {
    const waitForLoad = new Promise(function(res) {
    window.addEventListener("load", res);
});

const wait1500ms = new Promise(function(res) {
    setTimeout(res, 1500);
});

entireDocument.style.display = 'none';

await Promise.all([waitForLoad, wait1500ms]);

spinnerWrapper.style.display = "none";
entireDocument.style.display = 'initial';
}

main()