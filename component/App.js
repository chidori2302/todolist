import html from "../core.js";
import { connect } from "../store.js";

import header from "./Header.js";
import TodoList from "./TodoList.js";
import footer from "./Footer.js";

function App({todos}) {
    
    return html`
    <section class="todoapp">
        ${header()}
        ${todos.length >0 && TodoList()}
        ${todos.length >0 && footer()}

    </section>`

}

export default connect()(App)