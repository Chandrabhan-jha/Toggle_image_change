let flage = false;
let container = document.querySelector("#container");
let toggle = document.querySelector("#toggle");

toggle.addEventListener("click", Toggle);

function Toggle() {
  let url1 =
    "https://images.unsplash.com/photo-1562975444-d910f117a84f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8&w=1000&q=80";
  let url2 =
    "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D";
  let img = document.createElement("img");
  img.setAttribute("src", url1);

  if (flage === true) {
    container.innerHTML = null;
    console.log(1);
    img.setAttribute("src", url1);
    container.append(img);
    flage = false;
  } else {
    console.log(5);
    container.innerHTML = null;

    img.setAttribute("src", url2);
    container.append(img);
    flage = true;
  }
}
