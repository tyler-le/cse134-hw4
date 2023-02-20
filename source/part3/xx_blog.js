
import { dialog_html } from '../dialog.js';
import { save_to_local_storage, populate_from_local_storage } from '../local_storage_utils.js';

const add_post_btn = document.getElementById("add-post-btn");
const data = []

document.addEventListener('DOMContentLoaded', init);
add_post_btn.addEventListener("click", () => {
    show_post_dialog();
})

function init() {
    //console.log('The page successfully loaded!');
    // const data = JSON.parse(localStorage.getItem('data')) || [];
    // data.forEach(element => {
    //     create_post(element[0], element[1], element[2]);
    // });
    // populate_from_local_storage();
    //console.log(all_edit_icons)

}



document.addEventListener('click', function (event) {
    let all_delete_btns = document.querySelectorAll(".delete-btn")
    for (let i = 0; i < all_delete_btns.length; i++) {
        all_delete_btns[i].addEventListener('click', () => {
            console.log(`delete button ${i} clicked`)
            data.splice(i, 1);
        })
    }
    console.log(data)
    //render_posts();
});
render_posts();





function create_post(title, date, summary) {
    data.push([title, date, summary])

    const article = document.createElement('article');
    article.innerHTML = `
    <article>
        <ul>
            <li>Title: ${title} </li>
            <li>Date: ${date} </li>
            <li>Summary: ${summary} </li>
        </ul>

        <div>
            <button class="edit-btn"> Edit </button>
            <button class="delete-btn"> Delete </button>
        </div>
    </article>
    `;

    document.body.appendChild(article);
    // all_edit_icons = document.querySelectorAll('.edit-btn');
    //(all_edit_icons);
    //save_to_local_storage(data);

}

function show_post_dialog() {
    const dialog = document.createElement("dialog")

    dialog.innerHTML = dialog_html();
    document.body.appendChild(dialog);
    dialog.showModal();


    document.getElementById("submit-btn").addEventListener('click', () => {
        //console.log('submit clicked')
        let title_val = document.getElementById("title").value;
        let date_val = document.getElementById("date").value;
        let summary_val = document.getElementById("summary").value;
        create_post(title_val, date_val, summary_val);
        dialog.close();
    });

    document.getElementById("cancel-btn").addEventListener('click', () => {
        dialog.close();
    });

    dialog.addEventListener('close', () => {
        dialog.remove();
    });
}

export { add_post_btn };