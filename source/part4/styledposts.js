function create_styled_post(title, date, summary) {
    const styled_posts = `
    <article>
        <div>
            <ul>
                <li> Title: ${title} </li>
                <li> Date: ${date} </li>
                <li> Summary: ${summary} </li>
            </ul>
        </div>

        <div>
            <input class="delete-icon" type="image" src="../assets/icons/trash-solid.svg" />
            <input class="edit-icon" type="image" src="../assets/icons/pen-solid.svg" />
        </div>
    </article>
    `;
    return styled_posts;
}

function post_css() {
    return `
    article {
        background: grey;
        padding: 10px 25px;
        border: 2px solid black;
        margin: 10px 0;
        display:flex;        
    }

    ul {
        list-style: none;
    }

    .delete-icon, .edit-icon {
      cursor: pointer;
      width: 1.0rem;
    }
    
    `
}

function add_post(post_html) {
    let div = document.createElement('div');
    div.innerHTML = post_html;
    document.body.appendChild(div);
}



export { create_styled_post, add_post, post_css };