const textarea = document.querySelector("textarea");
const button = document.querySelector(".btn");
const limit = document.querySelector(".limit");
let max = 50;

const updateLimit = () => {
    limit.textContent = max;
    textarea.addEventListener("input", () => {
        let userInputLength = textarea.value.length;
        limit.textContent = max - userInputLength;
        if (userInputLength > max) {
          button.disabled = true;
          button.style.cursor = "not-allowed";
          limit.style.color = "red";
        } else {
          button.disabled = false;
          button.style.cursor = "pointer";
          limit.style.color = "black";
        }
        console.log(document.querySelector(".btn").style.cursor);
    });
};

updateLimit();

button.addEventListener("click", (event) => {
    event.preventDefault();
    tweet();
});

const tweet = () => {
    const tweetInput = "https://twitter.com/intent/tweet?text=";
    // opens a new window
    window.open(`${tweetInput}${textarea.value}`);
};