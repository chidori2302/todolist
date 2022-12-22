import storage from "./ulti/storage.js";

const init = {
    todos: storage.get(),
    filter: `all`,
    filters:{
        all: () => true,
        active: todo => !todo.completed,
        completed: todo => todo.completed,
    },
    editIndex: null,
}

const actions = {
    ADD({todos}, title){
        if (title)
        todos.push({title, completed: false})
        storage.set(todos)
    },
    CHECK({todos}, index){
        todos[index].completed = !todos[index].completed
        storage.set(todos)
    },
    CHECK_ALL({todos}, completed){
        todos.forEach(todo => {
            todo.completed = completed
        });
        storage.set(todos)
    },
    DEL({todos}, index){
        todos.splice(index, 1)
        storage.set(todos)
    },
    SWITCH(state, type){
        state.filter = type
        // storage.set(todos)
    },
    CLEAR(state){
        state.todos = state.todos.filter(state.filters.active)
        storage.set(state.todos)
    },
    EDIT(state, index){
        state.editIndex = index,
        storage.set(state.todos)
    },
    SAVE(state, agrs){
        if (state.editIndex !== null) {
            if (agrs) {
                
                state.todos[state.editIndex].title = agrs
                state.editIndex=null
                storage.set(state.todos)
            }
            else{
                state.todos.splice(state.editIndex, 1)
                state.editIndex=null
                storage.set(state.todos) 
            }
        }
    },
    END(state, agrs){
        state.editIndex=null
        storage.set(state.todos)
    },

    
}

export default function reducer(state=init, action, args) {
    actions[action] && actions[action](state, ...args)
    return state
}