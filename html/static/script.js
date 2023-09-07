const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const more = document.getElementById("show_more");

const btn = document.getElementById("search-btn");
btn.addEventListener("click", () => {
	let inpWord = document.getElementById("inp-word").value;
	more.innerHTML = "More >>";
	more.href = "https://www.google.com/search?q=" + inpWord 
	fetch(`${url}${inpWord}`)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			result.innerHTML = `
  <div class="word">
    <h3>${inpWord}</h3>
  </div>
  <div class="details">
    <p>${data[0].meanings[0].partOfSpeech}</p>
    <p>/${data[0].phonetic}/</p>
  </div>
  <p class="word-meaning">
    ${data[0].meanings[0].definitions[0].definition}
  </p>
  <p class="word-example">${
			data[0].meanings[0].definitions[0].example || ""
		}</p>
  `;
		
		})
		.catch((error) => {
			result.innerHTML = `<h3 class="error">Couldn't Find The Word!</h3>`;
		});
});
