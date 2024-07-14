let filmssByDirectors = {
  "Michaël Dudok de Wit": ["The Red Turtle"],
  "Hiromasa Yonebayashi": ["When Marnie Was There", "Arrietty"],
  "Gorō Miyazaki": [
    "Earwig and the Witch",
    "From Up on Poppy Hill",
    "Tales from Earthsea"
  ],
  "Hiroyuki Morita": ["The Cat Returns"],
  "Yoshifumi Kondō": ["Whisper of the Heart"],
  "Isao Takahata": [
    "The Tale of the Princess Kaguya",
    "My Neighbors the Yamadas",
    "Pom Poko",
    "Only Yesterday",
    "Grave of the Fireflies"
  ],
  "Hayao Miyazaki": [
    "The Wind Rises",
    "Ponyo",
    "Howl's Moving Castle",
    "Spirited Away",
    "Princess Mononoke",
    "Porco Rosso",
    "Kiki's Delivery Service",
    "My Neighbor Totoro",
    "Castle in the Sky"
  ]
  
  
};

let filmsAndDirectorsElement = document.getElementById('filmsBy');
let directorsElement = document.getElementById('directors');
let directorsfilmsListElement = document.getElementById('directorsfilmsList');

//afficher les filmes
function createFilmAndDirectorElement(director, film){
    let movieElement = document.createElement('li');
    movieElement.textContent = film + ' : ' + director;
    if (director=="Hayao Miyazaki") {
      movieElement.style.color="red" ;
    }
    return movieElement;
}

function createDirectorElment(content){ 
    let directorElement = document.createElement('li');
    directorElement.textContent = content;
    return directorElement;
}


function createFilmByDirectorElement(content){
    let movieElement = document.createElement('li');
    movieElement.textContent = content;
    return movieElement;
}

function createFilmByDirectorChildrenElement(){
    return document.createElement('ul');
}


