import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  // todos: [{ id: "1", text: "Learn Redux Toolkit" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  //   initialState: {
  //     todos: [{ id: "1", text: "Learn Redux Toolkit" }],
  //   },
  reducers: {
    addTodo: (state, action) => {
      const todo = { id: nanoid(), text: action.payload };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    // editTodo: (state, action) => {
    //     const { id, newText } = action.payload;
    // },
  },
});


export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer