import { useState } from "react";
import "./App.css";
import ToDoList from "./components/ToDoList";

function App() {
  const listArray = [
    {
      id: 1,
      text: "Donec nec dignissim ligula, et mattis risus. Sed volutpat magna sed sagittis bibendum",
      checked: true,
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit nec ipsum at pharetra. Nulla facilisi. ",
      checked: true,
    },
    {
      id: 3,
      text: "Vestibulum rhoncus lacus sit amet justo varius, id eleifend felis varius. Nunc sed turpis ligula. Fusce quis faucibus enim.",
      checked: false,
    },
    {
      id: 4,
      text: "Donec nec dignissim ligula, et mattis risus. Sed volutpat magna sed sagittis bibendum",
      checked: true,
    },
    {
      id: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit nec ipsum at pharetra. Nulla facilisi. ",
      checked: true,
    },
    {
      id: 6,
      text: "Vestibulum rhoncus lacus sit amet justo varius, id eleifend felis varius. Nunc sed turpis ligula. Fusce quis faucibus enim.",
      checked: false,
    },
    {
      id: 7,
      text: "Donec nec dignissim ligula, et mattis risus. Sed volutpat magna sed sagittis bibendum",
      checked: true,
    },
    {
      id: 8,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit nec ipsum at pharetra. Nulla facilisi. ",
      checked: true,
    },
    {
      id: 9,
      text: "Vestibulum rhoncus lacus sit amet justo varius, id eleifend felis varius. Nunc sed turpis ligula. Fusce quis faucibus enim.",
      checked: false,
    },
    {
      id: 10,
      text: "Donec nec dignissim ligula, et mattis risus. Sed volutpat magna sed sagittis bibendum",
      checked: true,
    },
    {
      id: 11,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit nec ipsum at pharetra. Nulla facilisi. ",
      checked: true,
    },
  ];
  return (
    <>
      <div className="container">
        <ToDoList activities={listArray}></ToDoList>
      </div>
    </>
  );
}

export default App;
