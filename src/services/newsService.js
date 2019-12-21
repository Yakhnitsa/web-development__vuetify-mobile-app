class NewsService {
    getArticlesByType(articleType) {
        return fetch('/data/articles.json')
            .then((response) => {
            return response.json();
        })
            .then((serverArticles) => {
            const newsArticles = serverArticles
                .filter((serverArticle) => serverArticle.articleType === articleType)
                .map((serverArticle) => {
                return {
                    id: serverArticle.id,
                    title: serverArticle.title,
                    content: serverArticle.content,
                    dateString: serverArticle.dateString,
                    baseImageName: serverArticle.baseImageName,
                    articleType: serverArticle.articleType,
                    isFavourite: serverArticle.isFavourite
                };
            });
            return newsArticles;
        });
    }
}
export default new NewsService();
//# sourceMappingURL=newsService.js.map