import { add_dialog_html, edit_dialog_html } from '../utils/dialog.js';
import { handle_form_submission } from '../part3/dialog_handler.js';
import {create_styled_post} from "./styledposts.js";
import {populate_from_local_storage, save_to_local_storage} from "../utils/local_storage_utils.js";

let data = [];
let dialog, posts_container;
document.addEventListener('DOMContentLoaded', () => {
    populate_from_local_storage();
    data = JSON.parse(localStorage.getItem("data")) || [];
    posts_container = document.getElementById("posts-container")

    dialog = document.createElement("dialog")
    dialog.innerHTML = add_dialog_html();
    document.body.appendChild(dialog);

    const add_post_btn = document.getElementById("add-post-btn");
    add_post_btn.addEventListener('click', () => {
        dialog.innerHTML = add_dialog_html();
        document.body.appendChild(dialog);
        dialog.showModal();
    })

    document.getElementById("cancel-btn").addEventListener('click', () => {
        dialog.close();
    })
});

function render_posts(data, posts_container) {
    posts_container.innerHTML = '';
    for (let i = 0; i < data.length; i++) {
        const post = document.createElement("div");
        post.innerHTML = create_styled_post(data[i]['title'], data[i]['date'], data[i]["summary"]);
        posts_container.appendChild(post);
    }
}

document.addEventListener('submit', function (event) {
    event.preventDefault();
    if (event.target && event.target.nodeName === 'FORM') {
        const buttonData = event.target.elements.submitButton.getAttribute('data-action');
        if (buttonData === 'add') {
            data.push(handle_form_submission(event));
            dialog.close();
            console.log(data);
            save_to_local_storage(data);
            render_posts(data, posts_container);
        }
    }
});

document.addEventListener('click', function (event) {
    
    const posts_container = document.getElementById("posts-container")

    // Check if event target is an edit button inside an article element
    if (event.target && event.target.classList.contains('edit-btn') && event.target.closest('article')) {
        // Handle button click
        const editButtons = document.querySelectorAll('.edit-btn');
        const buttonIndex = Array.from(editButtons).indexOf(event.target);
        dialog.innerHTML = edit_dialog_html(data[buttonIndex]['title'], data[buttonIndex]['date'], [data[buttonIndex]['summary']]);
        document.body.appendChild(dialog);
        dialog.showModal();

        document.addEventListener('submit', function (event) {
            event.preventDefault();
            dialog.close()
            if (event.target && event.target.nodeName === 'FORM') {
                const buttonData = event.target.elements.submitButton.getAttribute('data-action');
                if (buttonData === 'edit') {
                    data[buttonIndex] = handle_form_submission(event);
                    console.log(data);
                    localStorage.setItem("data", JSON.stringify(data));
                    
                    render_posts(data, posts_container)
                }
            }
        });
    }

    if (event.target && event.target.classList.contains('delete-btn') && event.target.closest('article')) {
        const editButtons = document.querySelectorAll('.delete-btn');
        const buttonIndex = Array.from(editButtons).indexOf(event.target);
        console.log('Delete button clicked:', event.target);
        console.log(buttonIndex)
        data.splice(buttonIndex, 1);
        render_posts(data, posts_container);
    }
});










