class TodoApp {
    constructor() {
        this.todos = [
            { id: 1, content: 'HTML', completed: false },
            { id: 2, content: 'CSS', completed: true },
            { id: 3, content: 'Javascript', completed: false }
        ];
        this.$input = document.querySelector('.input-todo');
        this.$todos = document.querySelector('.todos');
        this.$removeBtn = document.querySelector('.removeBtn');
        this.render(this.todos);
        this.$input.addEventListener('keyup', (e) => {
            if (e.keyCode === 13 && this.$input.value.trim().length) {
                this.addTodo(this.$input.value);
                this.$input.value = '';
            }
        });
        this.$todos.addEventListener('click', (e) => {
            const target = e.target;
            const id = +target.parentNode.id;
            if (target.classList.contains('removeBtn')) {
                this.removeTodo(id);
            }
            else if (target.classList.contains('custom-checkbox')) {
                this.toggleTodo(id);
            }
        });
    }
    render(todos) {
        let html = '';
        todos.forEach(todo => {
            html += `<li id = "${todo.id}" class="todo-item">
      <input class= "custom-checkbox" type = "checkbox" id = "ck-${todo.id}" ${todo.completed ? 'checked' : ''}>
      <label for="ck-${todo.id}">${todo.content}</label><i class="remove-todo far fa-times-circle"></i>
      <button class="removeBtn">X</button>
      </li>`;
        });
        this.$todos.innerHTML = html;
    }
    addTodo(input) {
        this.todos = [{ id: this.getId(), content: input, completed: false }, ...this.todos];
        this.render(this.todos);
    }
    removeTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
        // this.render(this.todos);
        this.render(this.todos);
    }
    getId() {
        return this.todos.length ? Math.max(...this.todos.map(todo => todo.id)) + 1 : 1;
    }
    toggleTodo(id) {
        console.log(id);
        this.todos = this.todos.map(todo => {
            if (todo.id === id)
                todo.completed = !todo.completed;
            return todo;
        });
        console.log(this.todos);
    }
}
const todo = new TodoApp();
