
const alert_btn = document.getElementById("alert-btn");
const confirm_btn = document.getElementById("confirm-btn");
const prompt_btn = document.getElementById("prompt-btn");
const safer_prompt_btn = document.getElementById("safer-prompt-btn");

const output = document.querySelector('output');
const dialog_2 = document.createElement("dialog");
const label = document.createElement('label');
const input = document.createElement('input');
const cancel_btn = document.createElement('button');
const proceed_btn = document.createElement('button');
proceed_btn.innerText = "Ok"
cancel_btn.innerText = "Cancel"
label.innerText = "What is your name?";
label.setAttribute("for", "name");
input.setAttribute("id", "name");
input.setAttribute("name", "name");
dialog_2.appendChild(label);
dialog_2.appendChild(document.createElement('br'));
dialog_2.appendChild(input);
dialog_2.appendChild(document.createElement('br'));
dialog_2.appendChild(cancel_btn);
dialog_2.appendChild(proceed_btn);
document.body.appendChild(dialog_2);


alert_btn.addEventListener("click", () => {
    dialog_2.innerHTML = "<p>Alert Clicked</p>";
    document.body.appendChild(dialog_2);
    dialog_2.showModal();

    const btn = document.createElement('button');
    btn.innerText = "Ok"
    dialog_2.appendChild(btn);

    btn.addEventListener("click", () => { dialog_2.close(); });

});

confirm_btn.addEventListener('click', () => {

    dialog_2.innerHTML = "<p>Do You Confirm This?</p>";
    document.body.appendChild(dialog_2);
    dialog_2.showModal();


    const cancel_btn = document.createElement('button');
    cancel_btn.innerText = "Cancel";

    const proceed_btn = document.createElement('button');
    proceed_btn.innerText = "Ok";
    dialog_2.appendChild(cancel_btn);
    dialog_2.appendChild(proceed_btn);

    proceed_btn.addEventListener("click", () => {
        dialog_2.close();
        output.textContent = `Confirm Result: True`;
    })

    cancel_btn.addEventListener("click", () => {
        dialog_2.close();
        output.textContent = `Confirm Result: False`;
    })
    output.style.border="2px double black";
});

prompt_btn.addEventListener("click", () => {
    dialog_2.showModal();
    proceed_btn.addEventListener("click", () => {
        dialog_2.close();
        let value = input.value;
        if (value == null || value === "") { output.textContent = `User didn't enter anything`; }
        else { output.textContent = `The value returned by the prompt method is : ${value}` }
    })

    cancel_btn.addEventListener("click", () => {
        dialog_2.close();
        output.textContent = `User didn't enter anything`;
    })

    output.style.border="2px double black";


});

safer_prompt_btn.addEventListener("click", () => {
    dialog_2.showModal();

    proceed_btn.addEventListener("click", () => {
        dialog_2.close();
        let dirty = input.value
        let clean = DOMPurify.sanitize(dirty);
        if (clean == null || clean === "") { output.textContent = `User didn't enter anything`; }
        else { output.textContent = `The value returned by the safer prompt method is : ${clean}` }
    })

    cancel_btn.addEventListener("click", () => {
        dialog_2.close();
        output.textContent = `User didn't enter anything`;
    })
    output.style.border="2px double black";

});



export { alert_btn, confirm_btn, prompt_btn, safer_prompt_btn, output };
