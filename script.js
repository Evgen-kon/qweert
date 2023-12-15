function butstyle(){
function Povorot(a,b){
    let elem = document.querySelector('.kvad');
    elem.style.backgroundImage =`linear-gradient(${a}deg,black ,47%, #66ff00 ,53%,black ), linear-gradient(${b}deg,black 50%,transparent 50%)` ;
    return true;
}
let grada = 180;
let gradb = 270;
for (i=0;i<360;i++){
    grada++;
    gradb++;
    setTimeout(Povorot,2*(i+1),grada,gradb);
}
}
let Gl = document.querySelector(".glavnoe");
let centergrib = Gl.querySelector(".centergrib");
let gribs = Gl.querySelectorAll(".grib");
gribs.forEach(element => {
element.addEventListener('click',function(e){

    if(e.target.classList.contains("grib")){
    let centergrib = Gl.querySelector(".centergrib");
    let newcentergrib = e.target.cloneNode(true);
    newcentergrib.classList.add("centergrib");
    newcentergrib.classList.remove("grib");
    centergrib.remove();
    Gl.appendChild(newcentergrib);
    

    }})});
    let eventclick = new Event('click');
    let btnext = document.querySelector(".next");
    btnext.addEventListener('click',function(e){
        let centergrib = Gl.querySelector(".centergrib");
        for (i=0;i<gribs.length-1;i++)
        if(gribs[i].src === centergrib.src)
        gribs[i+1].dispatchEvent(eventclick);
        if(gribs[gribs.length-1].src===centergrib.src)
        gribs[0].dispatchEvent(eventclick);
});
let btbefore = document.querySelector(".before");
btbefore.addEventListener('click',function(e){
    let centergrib = Gl.querySelector(".centergrib");
    for (i=1;i<gribs.length;i++)
    if(gribs[i].src === centergrib.src)
    gribs[i-1].dispatchEvent(eventclick);
    if(gribs[0].src===centergrib.src)
    gribs[gribs.length-1].dispatchEvent(eventclick);
});



