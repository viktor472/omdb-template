const inputs = document.getElementById("x");
const languege = document.getElementById("y");
const content = document.getElementById("content");
languege_api = "en";

async function fechdata() {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${inputs.value}&from=2022-12-16&sortBy=publishedAt&apiKey=6f06195d9012453a89ce7893db5df367&language=${languege_api}`
    );
    //the api has a pay wall to use the full serch funcktion.
    //but the programing workes. you can pytt in:
    //qInTitle=${inputs.value}
    //then it will show aktual artikles
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
