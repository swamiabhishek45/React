import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <h1 className="text-2xl m-5">Your Todos</h1>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
          >
            <div className="text-white">{todo.text}</div>
            <button
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5"
                  stroke="#fff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5"
                  stroke="#fff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M9.5 16.5L9.5 10.5"
                  stroke="#fff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M14.5 16.5L14.5 10.5"
                  stroke="#fff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
