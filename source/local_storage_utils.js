import { create_styled_post, add_post } from "./part4/styledposts.js";

function save_to_local_storage(item) {
    const data = JSON.parse(localStorage.getItem('data')) || [];
    data.push(item);
    localStorage.setItem('data', JSON.stringify(data));
}

function populate_from_local_storage() {
    // Get items from localStorage
    const data = JSON.parse(localStorage.getItem('data')) || [];

    for (let i = 0; i < data.length; i++) {
        add_post(create_styled_post(data[i][0], data[i][1], data[i][2]));
    }
}

export { save_to_local_storage, populate_from_local_storage }