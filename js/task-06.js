const dataInput = document.querySelector("#validation-input");

dataInput.addEventListener("blur", (event) => {
const element = event.currentTarget;
const inputValue = element.value;

if (inputValue.length === +dataInput.dataset.length) {
updateClass(element, "valid", "invalid");
} else {
updateClass(element, "invalid", "valid");
}
});

function updateClass(element, addC, remC) {
element.classList.remove(remC);
element.classList.add(addC);
}