// document.querySelector("img").addEventListener("click", function () {
//     alert("别戳我，我好怕疼。");
//   });
let myImage = document.querySelector("img");

myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/grumpy-cat.jpg") {
        myImage.setAttribute("src", "images/grumpy-dog.jpg");
    } else {
        myImage.setAttribute("src", "images/grumpy-cat.jpg");
    }
};


let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    let myName = prompt("请输入你的名字。");
    if (!myName || myName === null) {
        setUserName();
    } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = myName + ", Mozilla 酷毙了";
    }
  }

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = storedName + ", Mozilla 酷毙了";
}

myButton.onclick = function () {
    setUserName();
  };

  