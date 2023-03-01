import { add_dialog_html, edit_dialog_html } from '../utils/dialog.js';
import { handle_form_submission } from './dialog_handler.js';
import { save_to_local_storage } from "../utils/local_storage_utils.js";
let data = [{"title":"My First Post","date":"2023-03-06","summary":"Wow! This is my first post. So Cool!"},{"title":"I can make more?!","date":"2023-02-28","summary":"Amazing! Such a cool website"}];
let dialog;
let posts_container = document.getElementById("posts-container");
let edit_index = 0;


/*
* Initializes all the proper variables when everything loads
* */
document.addEventListener('DOMContentLoaded', () => {
    data = JSON.parse(localStorage.getItem("data"));
    if (data == null || data.length === 0) {
        data = [{"title":"My First Post","date":"2023-03-06","summary":"Wow! This is my first post. So Cool!"},{"title":"I can make more?!","date":"2023-02-28","summary":"Amazing! Such a cool website"}];
    }
        
    posts_container = document.getElementById("posts-container")
    render_posts(data, posts_container);
    
    // Add dialog to dom
    dialog = document.createElement("dialog")
    dialog.innerHTML = add_dialog_html();
    document.body.appendChild(dialog);

    const add_post_btn = document.getElementById("add-post-btn");
    add_post_btn.addEventListener('click', () => {
        dialog.innerHTML = add_dialog_html();
        document.body.appendChild(dialog);
        dialog.showModal();
    })

});

/* Make changes to DOM when post is edit/added/deleted */
function render_posts(data, posts_container) {
    posts_container.innerHTML = '';

    for (let i = 0; i < data.length; i++) {

        const article = document.createElement('article');
        article.innerHTML = `
            <div>
            <ul>
                <li>Title: ${data[i]['title']} </li>
                <li>Date: ${data[i]['date']} </li>
                <li>Summary: ${data[i]['summary']} </li>
            </ul>
            </div>

            <div>
                <button class='edit-btn'> Edit </button>
                <button class='delete-btn'> Delete </button>
            </div>
        `;
        posts_container.appendChild(article);
    }
}

/* Handle Form Edit and Add Submission */
document.addEventListener('submit', function (event) {
    event.preventDefault();

    // Find out whether we are adding or editing
    if (event.target && event.target.nodeName === 'FORM' && event.submitter !== document.getElementById('cancel-btn')) {
        const buttonData = event.target.elements.submitButton.getAttribute('data-action');

        if (buttonData === 'add') {
            data.push(handle_form_submission(event));
            save_to_local_storage(data);
            render_posts(data, posts_container);
        }

        else if (buttonData === 'edit') {
            data[edit_index] = handle_form_submission(event);
            localStorage.setItem("data", JSON.stringify(data));
            render_posts(data, posts_container)
        }
    }
    dialog.close();

});


/* Model for edit */
posts_container.addEventListener('click', event => {
    if (event.target.classList.contains('edit-btn')) {
        // Get the index of the button that was clicked
        const editBtns = document.querySelectorAll('button[class="edit-btn"]');
        const buttonIndex = Array.from(editBtns).indexOf(event.target);
        dialog.innerHTML = edit_dialog_html(data[buttonIndex]['title'], data[buttonIndex]['date'], [data[buttonIndex]['summary']]);
        document.body.appendChild(dialog);
        dialog.showModal();
        edit_index = buttonIndex;
    }
});


/* Delete Handler */
posts_container.addEventListener('click', event => {
    if (event.target.classList.contains('delete-btn')) {
        // Get the index of the button that was clicked
        const deleteBtns = document.querySelectorAll('input[class="delete-btn"]');

        let delete_index = Array.from(deleteBtns).indexOf(event.target);
        data.splice(delete_index, 1);
        localStorage.setItem("data", JSON.stringify(data));
        render_posts(data, posts_container);
    }
});





