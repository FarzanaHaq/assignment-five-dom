const taskButton = document.querySelectorAll(".task-btn");
for (let index = 0; index < taskButton.length; index++) {
  const taskBtn = taskButton[index];
  taskBtn.addEventListener("click", function () {
    //reduce number
    const taskAssign = document.getElementById("task").innerHTML;
    const newNum = parseInt(taskAssign) - 1;
    document.getElementById("task").innerHTML = newNum;
    if (newNum !== 0) {
      alert("Board Updated Successfully");
    } else {
      alert("Board Updated Successfully");
      alert("All Board Completed Successfully");
    }
    //increase number
    const taskDone = document.getElementById("com-task").innerHTML;
    const newNumTwo = parseInt(taskDone) + 1;
    document.getElementById("com-task").innerHTML = newNumTwo;

    //disable button
    taskBtn.setAttribute("disabled", "true");
    taskBtn.style.backgroundColor = "gray";

    //get the title
    const card = taskBtn.closest(".bg-blue-100");
    const h1Element = card.querySelector("h1.new");
    const h1Text = h1Element.innerText;

    //add the paragraphs
    const addContainer = document.querySelector(".para-contain");
    const paragraph = document.createElement("div");
    const time = new Date().toLocaleTimeString();
    paragraph.innerHTML = `
          <div class="add -para px-5 mt-[20px]">
            <p class="bg-blue-100 rounded-lg p-5">
              You have Completed ${h1Text} at ${time}
            </p>
          </div> 
    `;
    addContainer.appendChild(paragraph);
  });
}

const clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener("click", function () {
  const paragraphs = document.querySelectorAll(".para-contain p");
  for (let index = 0; index < paragraphs.length; index++) {
    const element = paragraphs[index];
    element.remove();
  }
});

const date = new Date();
const formattedDate = date.toLocaleDateString("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric",
});

const displayDate = document.getElementById("date-display");
displayDate.innerText = formattedDate;

const colorChange = document.getElementById("color");
colorChange.addEventListener("click", function () {
  const colorChange = document.getElementById("full-body");
  const colorArray = ["pink", "yellow", "green", "red", "blue"];
  const randomIndex = Math.floor(Math.random() * colorArray.length);
  const randomColor = colorArray[randomIndex];
  colorChange.style.backgroundColor = randomColor;
});

const newRedirect = document.getElementById("discover");
newRedirect.addEventListener("click", function () {
  window.location.href = "./main.html";
});


