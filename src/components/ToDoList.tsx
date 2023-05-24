import { useEffect, useState } from "react";
import "./ToDoList.css";
import { FcCheckmark, FcCancel } from "react-icons/fc";

type toDoListProps = {
  activities?: {
    id: number;
    text: string;
    checked: boolean;
  }[];
};

export const ToDoList = (list?: toDoListProps) => {
  const [activity, setActivity] = useState("");

  const [newArray, setNewArray] = useState<toDoListProps>({
    activities: [
      {
        id: 1,
        text: "Initial Activity",
        checked: false,
      },
    ],
  });

  useEffect(() => {
    if (list?.activities) {
      setNewArray(list);
    }
  }, []);

  function handleAddActivity() {
    if (newArray.activities && activity) {
      setNewArray({
        activities: [
          ...newArray.activities,
          {
            id:
              newArray?.activities?.length === 0
                ? 1
                : newArray.activities[newArray.activities.length - 1].id + 1,
            text: activity,
            checked: false,
          },
        ],
      });
    } else {
      alert("The Activity field is empty");
    }
  }

  function handleDeleteActivity(id: number) {
    setNewArray({
      activities: newArray?.activities?.filter((item) => item.id != id),
    });
  }

  function handleChangeActivity(id: number, checked: boolean) {
    setNewArray((prevState) => {
      // creating temporary array from the previous state
      const newState = { ...prevState };
      // finding the object of id specified inside the temporary array
      const activityToUpdate = newState?.activities?.find(
        (activity) => activity.id === id
      );
      // once the object is found, update its properties
      // the updated properties are done in the temporary array
      // there is no need to specify new arrays due javascript pointing to temporary array
      if (activityToUpdate) {
        activityToUpdate.checked = !checked;
      }
      // the modified temporary array is returned
      return newState;
    });
  }

  return (
    <>
      <div className="title">TypeScript To Do List</div>
      <div className="addContainer">
        <div className="addTextColumn">
          Activity:{" "}
          <input
            className="inputText"
            type="text"
            onChange={(event) => setActivity(event.target.value)}
          ></input>
        </div>
        <div className="addButtonColumn">
          <button className="addButton" onClick={handleAddActivity}>
            <span style={{ color: "#ffffff" }}>Add</span>
          </button>
        </div>
      </div>
      <div className="listContainer">
        <div className="leftSpace"></div>
        <div className="centerSpace">
          <div className="listDescription" key={0}>
            <div className="idColumn">Id</div>
            <div className="textColumn">Activity</div>
            <div className="checkColumn">Done</div>
            <div className="deleteColumn">Delete Activity</div>
          </div>
          {newArray?.activities?.map((activities) => {
            return (
              <div className="listItem" key={activities.id}>
                <div className="idColumn">{activities.id}</div>
                <div className="textColumn">{activities.text}</div>
                <div
                  className="checkColumn"
                  onClick={() =>
                    handleChangeActivity(activities.id, activities.checked)
                  }
                >
                  {activities.checked ? (
                    <FcCheckmark size={25} />
                  ) : (
                    <FcCancel size={25} />
                  )}
                </div>
                <div className="deleteColumn">
                  <button
                    className="deleteButton"
                    onClick={() => handleDeleteActivity(activities.id)}
                  >
                    <span style={{ color: "#ffffff" }}>Delete</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="rightSpace"></div>
      </div>
      <div className="title">github.com/rasjr1305</div>
    </>
  );
};

export default ToDoList;
