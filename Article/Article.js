class Article {
  constructor(article) {
    this.article = article;
    this.expandButton = this.article.querySelector('.expandButton');
    this.articleOpen = this.article.querySelector('.article-open');

    this.expandButton.addEventListener('click', () => this.toggleArticle());
    console.log("clicked");
    this.expandButton.innerHTML = "Expand";
  }

  toggleArticle() {
    this.article.classList.toggle('article-open');
  }
}

const articles = document.querySelectorAll('.article');

articles.forEach(function(article){
  return new Article(article);
});

