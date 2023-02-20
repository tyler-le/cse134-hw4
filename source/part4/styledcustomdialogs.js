// import { form } from './styled_utils.js'


function styled_dialog() {
  return `
    <form id="form" method="post">
        <label for="title">Title:</label>
        <input type="text" id="title" name="title"><br>

        <label for="date">Date:</label>
        <input type="date" id="date" name="date"><br>

        <label for="summary">Summary:</label>
        <textarea id="summary" name="summary"></textarea><br>

        <button type="submit">Submit </button>
    </form> 
    `;
}

function dialog_css() {
  return `
label {
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
}

input[type="text"],
input[type="date"],
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid black;
  box-sizing: border-box;
  margin-bottom: 20px;
}

button[type="submit"] {
  background-color: green;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
`
}
export { styled_dialog, dialog_css }