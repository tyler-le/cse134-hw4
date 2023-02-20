import { styled_dialog, dialog_css } from './styledcustomdialogs.js'
import { create_styled_post, add_post, post_css } from './styledposts.js';
import { save_to_local_storage, populate_from_local_storage } from '../local_storage_utils.js'

const dialog = document.createElement('dialog')
const add_post_btn = document.getElementById('add-post-btn');



document.addEventListener('DOMContentLoaded', () => {
    const style = document.createElement('style');
    style.innerHTML = dialog_css() + post_css();
    console.log(style)
    document.body.appendChild(style);

    dialog.innerHTML = styled_dialog();
    document.body.appendChild(dialog)

    const form = document.querySelector('form')
    form.addEventListener('submit', handle_submit);

    populate_from_local_storage();

    const trash_icon = document.getElementsByClassName('delete-icon');
    const edit_icon = document.getElementsByClassName('edit-icon');

    console.log(trash_icon)


});

add_post_btn.addEventListener('click', () => { dialog.showModal(); })

function handle_submit() {

    const title = document.getElementById('title').value;
    const date = document.getElementById('date').value;
    const summary = document.getElementById('summary').value;


    let post_html = create_styled_post(title, date, summary);
    add_post(post_html);
    save_to_local_storage([title, date, summary])
    dialog.close()
}


export { add_post_btn }