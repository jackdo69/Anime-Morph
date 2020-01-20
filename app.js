const moonPath = "M15 27C15 41.9117 27 54 27 54C12.0883 54 0 41.9117 0 27C0 12.0883 12.0883 0 27 0C27 0 15 12.0883 15 27Z";
const sunPath = "M54 27C54 41.9117 41.9117 54 27 54C12.0883 54 0 41.9117 0 27C0 12.0883 12.0883 0 27 0C41.9117 0 54 12.0883 54 27Z";
const darkMode = document.querySelector("#darkMode");
let toggle = false;

//WE NEED TO CLICK ON THE SUN
darkMode.addEventListener("click", () => {
    //We need to use anime.js
    //Here we set up the TIMELINE
    
    
    const timeline = anime.timeline({
        duration: 750,
        easing: "easeOutExpo"
    });
    //ADD DIFFERENT ANIMATIONS TO THE TIMELINE
    timeline.add({
        targets: ".sun",
        d: [
            {value: toggle ? sunPath : moonPath}
        ]
    })
    .add({
        targets: "#darkMode",
        rotate: toggle ? 0 : 320
    }, '-= 700')
    .add({
        targets: "section",
        backgroundColor: toggle ? 'rgb(255,255,255)' : 'rgb(22,22,22)',
        color: toggle ? 'rgb(22,22,22)' : 'rgb(255,255,255)'
    }, '-=700');
    //Everytime we click on the son, I want toggle to switch
    if (!toggle) {
        toggle = true;
    } else {
        toggle = false;
    }
});
