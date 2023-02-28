function create_styled_post(title, date, summary) {
    return `
    <article>
        <div>
            <ul>
                <li> Title: ${title} </li>
                <li> Date: ${date} </li>
                <li> Summary: ${summary} </li>
            </ul>
        </div>

        <div>
            <input class="delete-btn" type="image" src="../assets/icons/trash-solid.svg" />
            <input class="edit-btn" type="image" src="../assets/icons/pen-solid.svg" />
        </div>
    </article>
    `;
}



function add_post(post_html) {
    let div = document.createElement('div');
    div.innerHTML = post_html;
    document.body.appendChild(div);
}



export { create_styled_post, add_post };