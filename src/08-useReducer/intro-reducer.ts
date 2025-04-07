interface Todo {
  id: number,
  todo: string,
  done: boolean
}

type TodoState = Todo[];

type AddTodoAction = {
  type: '[TODO] add Todo',
  payload: Todo
}

type TodoAction = AddTodoAction;

const initialState:TodoState = [{
  id: 1,
  todo: 'Soul stone',
  done: false
}];



const todoReducer = (state:TodoState = initialState, action: TodoAction) => {

  switch(action.type){
    case '[TODO] add Todo':
      return [...state, action.payload];
    default:
      return state
  }
}

const addTodo = (todo: Todo):AddTodoAction  => ({
  type: '[TODO] add Todo',
  payload: todo
});


const newTodo: Todo = {
  id: 2,
  todo: 'Power stone',
  done: false
}

const todos = todoReducer(initialState, addTodo(newTodo));
console.log({state: todos})