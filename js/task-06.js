const dataInput = document.querySelector('#validation-input');

dataInput.addEventListener("blur", event => {
  const inputValue = event.currentTarget.value;
    
  if (inputValue.length <  dataInput.dataset.length) {
    event.currentTarget.classList.add("invalid");
  } 

  else {
    event.currentTarget.classList.remove("invalid");
    event.currentTarget.classList.add("valid");
  };
});