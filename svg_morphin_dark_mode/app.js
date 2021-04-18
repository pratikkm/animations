const moonPath = 
"M26 41.5C26 64.9721 43.5 84.9895 44.5 85C19.9233 85 0 65.9721 0 42.5C0 19.0279 19.9233 0 44.5 0C44.5 0 26 18.0279 26 41.5Z";

const sunPath = 
"M87 42.5C87 65.9721 67.5244 85 43.5 85C19.4756 85 0 65.9721 0 42.5C0 19.0279 19.4756 0 43.5 0C67.5244 0 87 19.0279 87 42.5Z";

const darkMode = document.querySelector("#darkMode");

let toggle = false;

// we need to click on the sun

console.log("In app js")
console.log(darkMode);
darkMode.addEventListener('click', () => {

    console.log("in click event")
    //we need to use anime.js
    //timeline setup
    const timeline = anime.timeline({
        duration : 750,
        easing : "easeOutExpo"
    });
    // add diff animation to timeline
    console.log("inside anime timeline",timeline);
    timeline.add({
        targets: ".sun",
        d: [
            {value: toggle ? sunPath : moonPath}
        ]
    })
    .add({
        targets: "#darkMode",
        rotate: 320 
    },'-= 350')
    .add({
        targets:"section", 
        backgroundColor: toggle ? "rgb(255,255,255)" : "rgb(22,22,22)" ,
        color: toggle ? "rgb(22,22,22)" : "rgb(255,255,255)"
    },'-= 700')
    console.log("after add anime timeline",timeline);
    if(!toggle){
        toggle = true;
    }else {
        toggle = false;
    }
});