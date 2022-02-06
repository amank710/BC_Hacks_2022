const githubURL = "https://api.github.com/users/";
const main = document.querySelector("main");
const username = document.querySelector("#search");
const form = document.querySelector("form");
const result = document.querySelector("#result");

function searchProfile(url) {
  fetch(url)
    .then((res) => res.json())
    .then(function (data) {
      const img = document.createElement("img");
      const h3 = document.createElement("h3");
      const h2 = document.createElement("h2");
      const p = document.createElement("p");
      result.appendChild(img);
      result.appendChild(h2);
      result.appendChild(h3);
      result.appendChild(p);
      img.src = `${data.avatar_url}`;
      h3.innerHTML = `Username : <a href="${data.html_url}" target="_blank">${data.login}</a>`;
      h2.innerHTML = `Name : ${data.name}`;
      p.innerHTML = `Bio : ${data.bio}`;
    });
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  result.innerHTML = "";

  const searchTerm = username.value;
  if (searchTerm) {
    searchProfile(githubURL + searchTerm);
    username.value = "";
  }
});




