import html from "../core.js";
import { connect } from "../store.js";

function footer({todos, filter, filters}) {
    
    return html`
    <footer class="footer">
				
				<span class="todo-count">
					<strong>${todos.filter(filters.active).length}</strong> 
					item left
				</span>
				
				<ul class="filters">
					${Object.keys(filters).map(type =>html`

						<li>
							<a class="${filter === type && `selected`}" href="#/"
							onclick = "dispatch('SWITCH', '${type}')"
							>
							${type[0].toUpperCase() + type.slice(1, type.length)}</a>
						</li>`
					)}
					
				</ul>
				${todos.filter(todo => todo.completed).length>0 
					&& html`<button class="clear-completed"
					onclick ="dispatch('CLEAR')"
					>Clear completed</button>`}
				
	</footer>`

}

export default connect()(footer)