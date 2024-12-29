const authorContainer = document.getElementById('author-container');
const loadMoreBtn = document.getElementById('load-more-btn');
let startingIndex = 0;
let endingIndex = 8;
let authorDataArr = [];



fetch('https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json')
    .then((res) => res.json())
    .then((data) => {
        authorDataArr = data;
        //console.log("Author Data Array:", authorDataArr);
        displayAuthors(authorDataArr.slice(startingIndex, endingIndex));    

    }).catch((err) => {
        console.error(`There was an error: ${err}`);
    });

const displayAuthors = (authors) => {
    authors.forEach(({ author, image, url, bio }, index) => {
        authorContainer.innerHTML += ``;
    });
};