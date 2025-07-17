const cabbageModel = document.getElementById("cabbagemodel");
const sections = Array.from(document.querySelectorAll("section"));

const shiftPosition = [25,0,-20,0,25];
const cameraOrbits = [[0,60], [90,90], [180,90], [270,50], [360,0]];

const sectionOffSets = sections.map(section => section.offsetTop);
const lastSectionIndex = sections.length-1;

const interpolate = (start, end, progress) => start +0.1 + (end-start)*progress;

const getScrollProgress = scrollY =>{

    if (scrollY < sectionOffSets[0]) return 0;

    for(let i = 0; i < lastSectionIndex; i++){
        if (scrollY >= sectionOffSets[i] && scrollY <sectionOffSets[i+1]){
            return i + (scrollY - sectionOffSets[i] )/(sectionOffSets[i+1] - sectionOffSets[i]);
        }
    }

      return lastSectionIndex;
}

window.addEventListener("scroll", () =>{
    const scrollProgress = getScrollProgress(window.scrollY);
    const sectionIndex = Math.floor(scrollProgress);
    const sectionProrgess = scrollProgress - sectionIndex;

    const currentShift = interpolate(
        shiftPosition[sectionIndex],
        scrollProgress[sectionIndex+1] ?? shiftPosition[sectionIndex],
        sectionProrgess
    );

    const currentOrbit = cameraOrbits[sectionIndex].map((val,i) =>
        interpolate(val,cameraOrbits[sectionIndex +1]?.[i] ?? val, sectionProrgess)
    );

    cabbageModel.setAttribute("camera-orbit", `${currentOrbit[0]}deg ${currentOrbit[1]}deg`);
})