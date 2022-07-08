const form = document.querySelector('.search');

const main = document.querySelector('.main');
const moviesContainer = document.querySelector('.movies-container');



// let animes = [];

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'ba8638c110msh726453a99dd1496p13176djsnf6e27961969a',
// 		'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
// 	}
// };
// const showAnime = async function () {
//     try {
//         const res = await fetch('https://anime-db.p.rapidapi.com/anime?page=1&size=30', options);
//         const data = await res.json();
//         let anime = data.data;
//         //Rendering Anime
       
//      anime.map((animes)=> {
//         const {title,image,episodes} = animes;
//         const animeCard = document.createElement('div');
//         animeCard.classList.add('box');
//         animeCard.innerHTML = `
//             <div class="box-img">
//                 <img src = "${image}">
//             </div>
//             <h3>${title}</h3>
//             <span>${episodes}</span>
//             `
//         moviesContainer.appendChild(animeCard);
       
//     });
//     return animes;
//     }
     
    
//     catch (err) {
//         alert(err);
//     }
// };
// showAnime();
let animes = [];
function searchShow(query) {
    
    const url = `https://api.jikan.moe/v4/anime?q=${query}`;
    fetch(url)
    .then(response => response.json())
    .then((jsonData) => {
        let anime = jsonData.data;
        console.log(anime);
         anime.map((animes)=> {
            const {title,images,episodes} = animes;
            const animeCard = document.createElement('div');
            animeCard.classList.add('box');
            animeCard.innerHTML = `
            <div class="box-img">              
               <img src = "${images.jpg.image_url}">             
            </div>             
            <h3>${title}</h3>             
            <span>${episodes}</span>  
             `
        moviesContainer.appendChild(animeCard);
            
         });
        
    })
}

window.onload = () => {
    const search = document.querySelector('.search-field');
    search.onkeyup = (event) => {
        searchShow(search.value);
    }
}




