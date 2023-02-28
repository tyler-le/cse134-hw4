import { create_styled_post, add_post } from "../part4/styledposts.js";

function save_to_local_storage(item) {
    const data = JSON.parse(localStorage.getItem('data')) || [{"title":"My First Post","date":"2023-03-06","summary":"Wow! This is my first post. So Cool!"},{"title":"I can make more?!","date":"2023-02-28","summary":"Amazing! Such a cool website"}];
    data.push(item);
    localStorage.setItem('data', JSON.stringify(data));
}

function populate_from_local_storage() {
    // Get items from localStorage
    const posts_container = document.getElementById("posts-container");
    let data = JSON.parse(localStorage.getItem("data")) || [{"title":"My First Post","date":"2023-03-06","summary":"Wow! This is my first post. So Cool!"},{"title":"I can make more?!","date":"2023-02-28","summary":"Amazing! Such a cool website"}];
    posts_container.innerHTML = '';

    for (let i = 0; i < data.length; i++) {
        const post = document.createElement("div");
        post.innerHTML = create_styled_post(data[i]['title'], data[i]['date'], data[i]["summary"]);
        posts_container.appendChild(post);
    }
}

export { save_to_local_storage, populate_from_local_storage }