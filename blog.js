const articles = [
{
id: 1,
title: 'Septimus Heap Book One: Magyk',
date: 'July 5, 2022',
description:
'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
imgSrc: 'magyk.jpg',
imgAlt: 'Book cover for Septimus Heap 1',
ages: '10-14',
genre: 'Fantasy',
stars: '⭐⭐⭐⭐',
},
{
id: 2,
title: 'Magnus Chase Book One: Sword of Summer',
date: 'December 12, 2021',
description:
'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus),and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good',
imgSrc: 'magnus',
imgAlt: 'Book cover for Magnus Chase 1',
ages: '12-16',
genre: 'Fantasy',
stars: '⭐⭐⭐⭐'
}
,{
id: 3,
title: "Belgariad Book One: Pawn of Prophecy",
date: "Feb 12, 2022",
description:
"A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
imgSrc:
"https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
imgAlt: "Book cover for Pawn of Prophecy",
ages: "12-16",
genre: "Fantasy",
stars: "⭐⭐⭐⭐⭐"
}
]
console.log(articles);

const articlesContainer = document.querySelector('#articles-container');
console.log("Container:", articlesContainer);

function createArticleHTML(article) {
    return `
    <div class="book-grid">
        <div class="book-details">
            <p><strong>Recommended Ages:</strong> ${article.ages}</p>
            <p><strong>Genre:</strong> ${article.genre}</p>
            <p><strong>Rating:</strong> ${article.stars}</p>
            <time datetime="${new Date(article.date).toISOString().split('T')[0]}">${article.date}</time>
        </div>
        <div class="book-content">
            <h2>${article.title}</h2>
            <img src = "${article.imgSrc}" alt="${article.imgAlt}">
            <p>${article.description}</p>
        </div>
    </div>
    `;
}
function renderArticles() {
    if (!articlesContainer) {
        console.error("Could not find #articles-container");
        return;
    }
    articles.forEach(article => {
        const articleElem = document.createElement('article');
        articleElem.classList.add('book');
        articleElem.innerHTML = createArticleHTML(article);
        articlesContainer.appendChild(articleElem);
    });
    console.log("Articles rendered");
}
renderArticles();
