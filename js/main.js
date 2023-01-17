/**
 *  OMDb template
 *	Documentation: http://www.omdbapi.com/
 *  Generate an API key here: http://www.omdbapi.com/apikey.aspx
 */

/**
 * According to documentation, you need at least 2 parameters when calling the API http://www.omdbapi.com/
 * 1 Required parameter: apikey
 * 2 Required parameter: One of the following i=, t= or s=
 *
 *
 * Example with parameter s=star trek
 * http://www.omdbapi.com/?apikey=[yourkey]&s=star trek
 *
 * Example with parameter s=star trek AND y=2020
 * http://www.omdbapi.com/?apikey=[yourkey]&s=star trek&y=2020
 *
 * Example with parameter s=star trek AND type=series
 * http://www.omdbapi.com/?apikey=[yourkey]&s=star trek&type=series
 *
 */
const inputs = document.getElementById("x");
const languege = document.getElementById("y");
const content = document.getElementById("content");
languege_api = "en";

async function fechdata() {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${inputs.value}&from=2022-12-16&sortBy=publishedAt&apiKey=6f06195d9012453a89ce7893db5df367&language=${languege_api}`
    );
    //qInTitle=${inputs.value}
    const data = await response.json();
    console.log(data);
    if ((data.status = "ok")) {
      for (let article of data.articles) {
        content.innerHTML += `
        <div class="box">
        <hr>
        <h1 v>${article.title}</h1>
        <h4>${article.description}</h4>
        <img src="${article.urlToImage}"></img>
        <p>${article.content}</p>
        <i>${article.author},${article.publishedAt}</i>
        </div>
        `;
      }
    }
  } catch (error) {
    console.log(error);
  }
}
//serch funktion
inputs.addEventListener("input", fechdata);
//languege togler
let i = 0;
languege.addEventListener("click", () => {
  i++;
  if (i % 2 || i == 0) {
    languege_api = "jp";
    document.getElementById("lang").innerHTML = "JAP";
  } else {
    languege_api = "en";
    document.getElementById("lang").innerHTML = "ENG";
  }
});