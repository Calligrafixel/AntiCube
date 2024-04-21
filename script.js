const body = document.querySelector("body");
const header = document.querySelector("header");
const footer = document.querySelector("footer");

const colorList = [
    "#E53D35", "#E57D25", "#E6D12E", "#40E641", "#485CE5"
];
var colorIndex = 0;
const spanCubeList = document.querySelectorAll(".span_cube");
for (const spanCube of spanCubeList) {
    spanCube.onclick = function() {
        spanCube.innerHTML = '<span class="span_hexagon">⬢</span>';
    }
}

const adList = document.querySelectorAll(".ad");

function changeColor(target, originalColor) {
    let newColorIndex = Math.floor(Math.random() * 5);

    if (colorIndex != newColorIndex) {
        colorIndex = newColorIndex;
    } else {
        colorIndex = (colorIndex - 1) % 5;
    }

    target.style.backgroundColor = colorList[colorIndex];
    setTimeout(() => target.style.backgroundColor = originalColor, 400);
}

function emergeAd() {
    const adIndex = Math.floor(Math.random() * 6);
    const nowAd = adList[adIndex];
    
    nowAd.style.display = "block";
    nowAd.style.top = Math.floor(Math.random() * 90) + 5 + "vh";
    nowAd.style.left = Math.floor(Math.random() * 90) + 5 + "vw";

    nowAd.addEventListener("mouseover", () => {
        nowAd.style.display = "none";
    });
}

window.onkeydown = function() {
    const funcIndex = Math.floor(Math.random() * 4);
    
    if (funcIndex == 0) {
        changeColor(body, "#111");
    }
    else if (funcIndex == 1) {
        changeColor(header, "white");
    }
//    else if (funcIndex == 2) {
//        continue;
//    }
    else if (funcIndex == 2) {
        nowSrc = image.src;
        image.src = "image/333_cube.png";
        setTimeout(() => image.src = nowSrc, 400);
    }
    else if (funcIndex == 3) {
        emergeAd();
        emergeAd();
        emergeAd();
    }
}
const image = document.querySelector("#image > img");
document.addEventListener("scroll", e => {
    const yOff = window.pageYOffset;
//    document.onclick = function() {alert(yOff)};
    if (yOff < 40) {
        image.src = "image/image0.png";
    }
    else if (yOff < 1050) {
        image.src = "image/image1.png"
    }
    else if (yOff < 2513) {
        image.src = "image/image2.png"
    }
    else if (yOff < 3268) {
        image.src = "image/image3.png"
    }
    else {
        image.src = "image/image4.png"
    }

});
