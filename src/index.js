//import { crearTodoHtml, saludar } from './js/componentes.js';

import {Todo,TodoList} from './classes';
import {crearTodoHtml} from './js/componentes';

import './styles.css';

export const todoList = new TodoList ();
todoList.todos.forEach(crearTodoHtml); 

const newTodo = new Todo('comprar un unicornio');
todoList.nuevoTodo(newTodo);





