const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
const arrows = document.querySelectorAll('.arrow')
let cursor = 1
arrows.forEach(arrow =>{
	arrow.addEventListener("click",()=>{
		document.getElementById('dot'+cursor).className = 'dot'
		if(arrow.classList.contains('arrow_right')){
			cursor+1==5 ? cursor=1:cursor++
		}else{
			cursor-1==0 ? cursor=4:cursor--
		}
		document.getElementById('dot'+cursor).className = 'dot dot_selected'
		document.querySelector('.banner-img').src = `./assets/images/slideshow/${slides[cursor-1].image}`
		document.getElementById('tagline').innerHTML=slides[cursor-1].tagLine
	})
})