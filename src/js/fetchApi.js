const base_url = "https://api.jikan.moe/v4/anime";

function pageLoaded() {
    fetch(base_url)
    .then(res => res.json())
    .then(data => console.log(data.data[2].title))
    .catch(err => console.warn(err.message));
}

window.addEventListener("load",pageLoaded);

// fetch("https://api.jikan.moe/v4/anime").then((data)=> {
//     return data.json();
// }).then((completeData) => {
//     console.log(completeData.data[0].title);
// })