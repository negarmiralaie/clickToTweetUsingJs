const textarea = document.querySelector("textarea");
const button = document.querySelector(".btn");
const limit = document.querySelector("span");
const max = 50;

const updateLimit = () => {
    limit.textContent = max;
    textarea.addEventListener("input", () => {
        const userInputLength = textarea.value.length;
        limit.textContent = max - userInputLength;
        if (userInputLength > max) {
            btn.disabled = true;
            limit.style.color = "red";
        } else {
            btn.disabled = false;
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