

// body shapes
const path3304 = document.getElementById('path3304')
const path2675 = document.getElementById('path2675')

// headstock shapes
const path2688 = document.getElementById('path2688')


function changeBodyColor(color) {
    path3304.style.fill = color
    path2675.style.fill = color
}

function changeHeadstockColor(color) {
    path2688.style.fill = color
}


function saveCustomization() {
    svgExport.downloadSvg(
        document.getElementById("svg"), // SVG DOM Element object to be exported. Alternatively, a string of the serialized SVG can be passed
        "myguitar", // chart title: file name of exported image
        { width: 900, height: 2400 } // options (optional, please see below for a list of option properties)
    );


}