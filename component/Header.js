import html from "../core.js";

function header() {

    return html`
        <header class="header">
            <h1>To Do List</h1>
            <input 
            class="new-todo" 
            placeholder="What's need to do?" 
            autofocus
            onkeyup = "event.keyCode === 13 &&  dispatch('ADD', this.value.trim())"
            >
        </header>`

}

export default header