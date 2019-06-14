interface Todo {
  id: number;
  content: string;
  completed: boolean;
}

class TodoApp {
  todos: Todo[] = [
    { id:1, content: 'HTML', completed: false },
    { id:2, content: 'CSS', completed: true },
    { id:3, content: 'Javascript', completed: false}
  ];
  $input:HTMLInputElement = document.querySelector('.input-todo');
  $todos:HTMLUListElement = document.querySelector('.todos');
  $removeBtn:HTMLButtonElement = document.querySelector('.removeBtn');

  constructor() {
    this.render(this.todos);
    this.$input.addEventListener('keyup', (e:KeyboardEvent) => {
      if(e.keyCode === 13 && this.$input.value.trim().length) {
        this.addTodo(this.$input.value);
        this.$input.value = '';
      }
    })
    
    this.$todos.addEventListener('click', (e:MouseEvent) => {
      const target = <HTMLButtonElement>e.target;
      const id:number = +(<HTMLLIElement>target.parentNode).id;
     if(target.classList.contains('removeBtn')) {
      this.removeTodo(id);
     } else if(target.classList.contains('custom-checkbox')) {
       this.toggleTodo(id);
     }
    })
  }

  render(todos:Todo[]) {
    let html:string = '';
    todos.forEach(todo => {
      html +=`<li id = "${todo.id}" class="todo-item">
      <input class= "custom-checkbox" type = "checkbox" id = "ck-${todo.id}" ${todo.completed ? 'checked' : ''}>
      <label for="ck-${todo.id}">${todo.content}</label><i class="remove-todo far fa-times-circle"></i>
      <button class="removeBtn">X</button>
      </li>`;
    })
    this.$todos.innerHTML = html;
  }

  addTodo(input:string) {
    this.todos = [{ id: this.getId(), content: input, completed: false }, ...this.todos];
    this.render(this.todos);
  }

  removeTodo(id:number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
    // this.render(this.todos);
    this.render(this.todos);
  }

  getId():number {
    return this.todos.length? Math.max(...this.todos.map(todo => todo.id)) + 1 : 1 ;
  }

  toggleTodo(id:number) {
    console.log(id);
    this.todos = this.todos.map(todo =>{
      if(todo.id === id) todo.completed = !todo.completed;
      return todo;
    });
    console.log(this.todos);
  }
}

const todo = new TodoApp()