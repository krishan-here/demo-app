import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./DragDrop.css";

function Dragdrop() {
  const [dragItems, setDragItems] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [dropItems, setDropItems] = useState([]);

  const suffleDragItems = [...dragItems];
  suffleDragItems.sort(() => Math.random() - 0.5);

  function handleDragStart(event, widgetType) {
    event.dataTransfer.setData("widgetType", widgetType);
    event.target.classList.add("dragging");
  }

  function handleDragEnd(event) {
    // Remove the added class when dragging ends
    event.target.classList.remove("dragging");
  }

  function handleOnDrop(event) {
    const widgetType = event.dataTransfer.getData("widgetType");
    event.target.classList.remove("dragging");
    event.target.classList.remove("drag-over");
    setDropItems((prev) => [...prev, widgetType]);
    setDragItems((prev) => {
      const updateDragItems = [...prev.filter((item) => item != widgetType)];
      return updateDragItems;
    });
  }

  function handleDragLeave(event) {
    event.target.classList.remove("drag-over");
  }

  function handleDragOver(event) {
    event.preventDefault();
    event.target.classList.add("drag-over");
  }

  let DropElement = (
    <div className="drop-text">
      <FontAwesomeIcon icon={faArrowDown} />
      <p>Drop here</p>
    </div>
  );

  if (dropItems.length > 0) {
    DropElement = dropItems.map((item) => (
      <li key={item} className="drop-item">
        {item}
      </li>
    ));
  }
  return (
    <div className="drag-drop">
      <ul className="drag-items">
        {suffleDragItems.map((item) => (
          <li
            key={item}
            className="item"
            draggable
            onDragStart={(event) => handleDragStart(event, item)}
            onDragEnd={handleDragEnd}
          >
            {item}
          </li>
        ))}
      </ul>

      <ul
        className={`drop ${dropItems.length == 0 && "drop-center"}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleOnDrop}
      >
        {DropElement}
      </ul>
    </div>
  );
}

export default Dragdrop;
