const textarea = document.querySelector("textarea");
const button = document.querySelector(".btn");
const limit = document.querySelector(".limit");
const max = 50;

const updateLimit = () => {
    limit.textContent = max;
    textarea.addEventListener("input", () => {
        let userInputLength = textarea.value.length;
        limit.textContent = max - userInputLength;
        if (userInputLength > max) {
            button.disabled = true;
            limit.style.color = "red";
        } else {
            button.disabled = false;
            limit.color = "black";
        }
    })
};

updateLimit();

button.addEventListener("click", event => {
    event.preventDefault();
    tweet();
})

const tweet = () => {
    const tweetInput = "https://twitter.com/intent/tweet?text=";
    // opens a new window
    window.open(`${tweetInput}${textarea.value}`);
}