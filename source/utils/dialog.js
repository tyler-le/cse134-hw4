function add_dialog_html() {
    return `
    <form>
    <label for='title'> Title </label>
    <input type='text' id='title' name='title'>

    <br>

    <label for='date'> Date </label>
    <input type='date' id='date' name='date'>

    <br>

    <label for='summary'> Summary </label>
    <input type='text' id='summary' name='summary'>

    <br>

    <button id="cancel-btn"> Cancel </button>
    <button name="submitButton" data-action="add" id="submit-btn"> Submit </button>
    </form>
    `;
}

function edit_dialog_html(title, date, summary) {
    return `
    <form>
    <label for='title'> Title </label>
    <input type='text' id='title' name='title' value='${title}' >

    <br>

    <label for='date'> Date </label>
    <input type='date' id='date' name='date' value='${date}' >

    <br>

    <label for='summary'> Summary </label>
    <input type='text' id='summary' name='summary' value='${summary}'>

    <br>

    <button id="cancel-btn"> Cancel </button>
    <button name="submitButton" data-action="edit" id="submit-btn"> Edit </button>
    </form>
    `;
}


export { add_dialog_html, edit_dialog_html };