import React, { useState, useEffect } from "react";
import "./itemDetails.css";

function ItemDetails({ itemId, itemName, getData, children}) {
  
    const [item, updateItem] = useState(null);

    useEffect(() => {
            setItem();
    }, [itemId]);

    function setItem() {
        if(!itemId) return;

        getData(itemId).then((newItem) => {
            updateItem(newItem);
          });

    }

  if (!item) {
    return <span className="select-error">Please select a {itemName}</span>;
  };

  const { name } = item;

  return (
    <div className="item-details rounded">
      <h4>{name}</h4>
      <ul className="list-group list-group-flush">
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, { item });
        })}
      </ul>
    </div>
  );

}

const Field = ({ item, field, label }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};

export { Field };

export default ItemDetails;
