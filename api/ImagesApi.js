const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const inicializado = false;
const catBtn = document.getElementById('change-cat');
console.log('hello word')

function iniciaCatBtn(){
    const catBtn = document.getElementById('change-cat');
}

const getCats = async () => {
    try {
        const data = await fetch(BASE_URL, {
            method:'GET',
            cache: 'no-cache'
        })
        const json = await data.json();
        return json.webpurl;
    } catch (e) {
        console.log(e.message)
    }
}

const loadImg = async () => {
    
    const catImg = document.getElementById('cat')
    catImg.src = await getCats();
}


catBtn.addEventListener('click', loadImg);

loadImg();
