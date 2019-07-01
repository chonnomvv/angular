import { Pipe, PipeTransform } from '@angular/core';
import { ITodo } from './i-todo';
import { NavItem } from './nav-item.type';

@Pipe({
  name: 'todosFilter'
})
export class TodosFilterPipe implements PipeTransform {

  transform(todos: ITodo[], navState: NavItem): ITodo[] {
    return todos.filter((todo) =>{
      if (navState === 'All') return todo;
      else if(navState === 'Active') return !todo.completed;
      else if(navState === 'Completed') return todo.completed;
    })
  }
}
