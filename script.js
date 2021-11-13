//Getting HTML elements//

var mainDiv = document.getElementById('topTen')

//Setting up JSON object, like as an array//
let pixarDatabase = [
  {
  "title" : "Ratatouille",
  "image" : "https://www.themoviedb.org/t/p/w500/npHNjldbeTHdKKw28bJKs7lzqzj.jpg",
  "releaseDate" : "2007",
  "runtime" : "1hr 51min",
},

  {
    "title" : "The Incredibles",
    "image" : "https://images.moviesanywhere.com/86a6d716a6c5ed372c4ee0c040c40304/096c182e-46e0-42f8-95b5-7889eaa08f9c.jpg",
    "releaseDate" : "2004",
    "runtime" : "1hr 55min",
  },

  {
    "title" : "Finding Nemo",
    "image" : "https://lumiere-a.akamaihd.net/v1/images/p_findingnemo_19752_05271d3f.jpeg?region=0%2C0%2C540%2C810",
    "releaseDate" : "2003",
    "runtime" : "1hr 40min",
  },

  {
    "title" : "Monsters University",
    "image" : "https://m.media-amazon.com/images/M/MV5BMTUyODgwMDU3M15BMl5BanBnXkFtZTcwOTM4MjcxOQ@@._V1_.jpg",
    "releaseDate" : "2013",
    "runtime" : "1hr 44min",
  },

  {
    "title" : "Up",
    "image" : "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Up_%282009_film%29.jpg/220px-Up_%282009_film%29.jpg",
    "releaseDate" : "2009",
    "runtime" : "1hr 36min",
  },

  {
    "title" : "Coco",
    "image" : "https://m.media-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMzk5NjA@._V1_.jpg",
    "releaseDate" : "2017",
    "runtime" : "1hr 45min",
  },

  {
    "title" : "Wall-E",
    "image" : "https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_.jpg",
    "releaseDate" : "2008",
    "runtime" : "1hr 38min",
  },

  {
    "title" : "Toy Story 3",
    "image" : "https://m.media-amazon.com/images/M/MV5BMTgxOTY4Mjc0MF5BMl5BanBnXkFtZTcwNTA4MDQyMw@@._V1_.jpg",
    "releaseDate" : "2010",
    "runtime" : "1hr 43min",
  },

  {
    "title" : "Luca",
    "image" : "https://upload.wikimedia.org/wikipedia/en/3/33/Luca_%282021_film%29.png",
    "releaseDate" : "2021",
    "runtime" : "1hr 35min",
  },

  {
    "title" : "Toy Story 4",
    "image" : "https://m.media-amazon.com/images/M/MV5BMTYzMDM4NzkxOV5BMl5BanBnXkFtZTgwNzM1Mzg2NzM@._V1_.jpg",
    "releaseDate" : "2019",
    "runtime" : "1hr 40min",
  }

];

//Creating for loop//

for (let i = 0; i < pixarDatabase.length; i++) {
  creatingElements(pixarDatabase[i]);
}

//Inserting content into HTML//

function creatingElements(pixarDatabase) {
  //DIV//
  let contentCard = document.createElement("div");
  contentCard.classList.add ("contentCard");

  //Header//

  let titleHeader = document.createElement("h2");
  titleHeader.classList.add ("titleHeader");
  titleHeader.innerText = pixarDatabase['title'];
  contentCard.appendChild(titleHeader);

  //Text//
  let innerCard = document.createElement("DIV");
  contentCard.appendChild(innerCard);
  innerCard.classList.add("innerCard");
  let innerTextOne = document.createElement("p");
  innerTextOne.innerText = pixarDatabase['releaseDate'];
  let innerTextTwo = document.createElement("p");
  innerTextTwo.innerText = pixarDatabase ['runtime']
  innerCard.appendChild(innerTextOne);
  innerCard.appendChild(innerTextTwo);

  //Image//
  let cardImage = document.createElement("IMG");
  cardImage.classList.add("cardImage");
  cardImage.src = pixarDatabase["image"];
  contentCard.appendChild(cardImage);

  //adding it all together//
  mainDiv.appendChild(contentCard);
}
