const button = document.querySelector("#like");
const entryInput = document.querySelector(".input__content")

function updateButtonList(data) {
    const options = [];
    for (const name of data.buttons) {
        options.push(`<option value="${name}">`);
        button.innerHTML = options.join('');
    };
};

button.addEventListener("click", () => {
    console.log("hi")
    const entryId = document.querySelector('#like');
    const url = `entries/${entryId}/like`;

    fetch(url)
        .then(response => response.json())
        .then(updateButtonList);
});