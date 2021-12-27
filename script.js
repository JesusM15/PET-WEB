const img = document.getElementById('img');
const btnGenerator = document.getElementById('btn-generator');

const getImg = async ()=>{
	let request = await fetch("https://dog.ceo/api/breeds/image/random")
	let resultado = await request.json();
	img.src = resultado.message;
	console.log(resultado)
}

btnGenerator.addEventListener("click", getImg);
