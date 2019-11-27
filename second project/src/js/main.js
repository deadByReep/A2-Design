const mapButton = document.getElementById('mapButton');
/*function getMap(){
	if(mapButton.value() == "Map") {
		alert('fgsdgf');
	}
}
console.log(mapButton.value)*/
const mapBlock = document.getElementById('map');
const hero = document.getElementById('hero');
getMap = (btn) => {
    if(btn.value == "Map") {
    	btn.value = "List";
    	mapBlock.style.display = "flex";
    	hero.style.display = "none";
    } else{
    	btn.value = "Map";
    	mapBlock.style.display = "none";
    	hero.style.display = "flex";
    }
}

document.getElementById('filter').addEventListener('click', () => {
  	document.querySelector('.menu_mobile').classList.add('active');
  	document.querySelector('.close-menu').classList.add('close-menu-active');
})
document.querySelector('.close-menu').addEventListener('click', () => {
 	document.querySelector('.menu_mobile').classList.remove('active');
 	document.querySelector('.close-menu').classList.remove('close-menu-active')
})
