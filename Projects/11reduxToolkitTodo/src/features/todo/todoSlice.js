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
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );
    },
  },
});

// export methods one by one
export const {addTodo, removeTodo, updateTodo} = todoSlice.actions


// export reducers
export default todoSlice.reducer
