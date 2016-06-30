import { v4 } from 'node-uuid';

export const addTodo = (text) => ({
	type : 'ADD_TODO',
	completed : false,
	id : v4(),
	text
});

export const toggleTodo = (id) => ({
	type : 'TOGGLE_TODO',
	id
});