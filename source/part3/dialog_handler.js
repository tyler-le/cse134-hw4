import { add_dialog_html, edit_dialog_html } from '../utils/dialog.js';

function handle_form_submission(event) {
    event.preventDefault();
    let title = document.getElementById("title").value;
    let date = document.getElementById("date").value;
    let summary = document.getElementById("summary").value;
    return { title, date, summary };
}


export { handle_form_submission };