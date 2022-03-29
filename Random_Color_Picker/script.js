// let div = null;

//Step 1 = create onload handler
window.onload = () => {
  main();
};

function main() {
  const main = document.getElementById("main");
  const button = document.getElementById("button");
  const output = document.getElementById("output");
  const copyBtn = document.getElementById("copy-btn");

  button.addEventListener("click", function () {
    const bgColor = generateHexColor();
    main.style.backgroundColor = bgColor;
    output.value = bgColor;
  });

  copyBtn.addEventListener("click", function () {
    navigator.clipboard.writeText(output.value);
    // if(div !== null){
    // 	div.remove();
    // 	div = null;
    // }

    generateToastMessage(`${output.value} Copied`);
  });
}

//Step 1 = random color generator function
function generateHexColor() {
  // #000000 #ffffff
  // 255, 255, 255 -> #FFFFFF
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}

function generateToastMessage(msg) {
  const div = document.createElement("div");
  div.className = "toast-Message toast-message-slide-in";
  div.innerHTML = msg;


  div.addEventListener("click", function () {
    div.classList.remove("toast-message-slide-in");
    div.classList.add("toast-message-slide-out");

    const div = div.addEventListener("animationend", function () {
      div.remove();
      // div = null;
    });
  });

  document.body.appendChild(div);
}
