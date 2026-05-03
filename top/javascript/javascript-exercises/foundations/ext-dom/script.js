const container = document.querySelector("#container");

const paragraph = document.createElement("p");
paragraph.textContent = "Hey I'm red!";
paragraph.setAttribute("style", "color: red");
container.appendChild(paragraph);

const head3 = document.createElement("h3");
head3.textContent = "I'm a blue h3!";
head3.setAttribute("style", "color: blue");
container.appendChild(head3);

const newDiv = document.createElement("div");
newDiv.setAttribute("style", "border: 1px solid black; background-color: pink;")

const head1 = document.createElement("h1")
newDiv.appendChild(head1);
head1.textContent = "I'm in a div"

const divParagraph = document.createElement("p")
divParagraph.textContent = "ME TOO!"
newDiv.appendChild(divParagraph);

container.appendChild(newDiv);
