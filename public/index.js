const addBlog = document.getElementById("addBlog");
const form = document.querySelector("form");
const username = document.getElementById("myUsername");
const name = document.getElementById("myName");
const textArea = document.getElementById("myTextArea");
const searchBlogs = document.getElementById("searchBlogs");


//send create blog (add blog buttom) to server
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const objData = {
        username: username.value,
        name: name.value,
        textArea: textArea.value
    };
    fetch("localHost:3000/submit", {
        method: "POST",
        body: JSON.stringify(objData),
        headers: { "content-type": "application/json" },
    })
        .then(response => {
            if (!response.ok) throw new Error(response.status);
            return response.json();
        })
        .then(json => console.log(json))
        .catch(error => console.error(error));

})

const arr = [{ username: "jirkh", name: "jiries", blog: "hello world" }];
arr.forEach(user => {
    console.log(user);
    const paraBlog = document.createElement('p');
    const paraUserName = document.createElement('div');
    const paraDiv = document.createElement('div');
    paraDiv.id = "div2";
    const paraContainer = document.createElement('.container');
    paraDiv.appendChild(paraBlog);
    paraDiv.appendChild(paraUserName);
    paraContainer.appendChild(paraDiv);
    const container = document.querySelector(".container");
    container.appendChild(paraContainer);


});
//receive blogs from the server
    // fetch("/getdata")
    //     .then(response => {
    //         if (!response.ok) throw new Error(response.status);
    //         return response.json();

    //     })

    //     .then(data => {






    //         console.log(data)
    //     })
    //     .catch(error => console.log(error));


