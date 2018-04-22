import axios from "axios";

export default{
  searchArticles: (topic, startYear, endYear) => {
    var authKey = "78c86847aae64e4d9e831ca862ba3634";
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=" + topic + "&begin_date=" + startYear + "0101" + "&end_date=" + endYear + "1231";
    return axios.get(queryURL);
  },

  // Gets all articles
  getArticles: () => {
    return axios.get("/api/article");
  },
  // Gets the article with the given id
  getArticle: (id) => {
    return axios.get("/api/article/" + id);
  },
  // Deletes the article with the given id
  deleteArticle: (id) => {
    return axios.delete("/api/article/" + id);
  },
  // Saves a article to the database
  saveArticle: (data) => {
    console.log('11111122222', data);   
    return axios.post("/api/article/", data);
  },
  // Get Saved Articles
  getArticleSaved: () => {
    return axios.get("/api/article/saved");
  },
}
