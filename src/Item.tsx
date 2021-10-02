import React, { useState } from "react";

interface Props {
  itemName: string;
  quantity: number;
  changeItem: any;
}

const Item: React.FC<Props> = (props) => {
  const [itemName, setItemName] = useState<string>(props.itemName);

  const addItem = () => {
    console.log(props.quantity + 1);
    props.changeItem(props.itemName, props.quantity + 1);
  };

  const removeItem = () => {
    if (props.quantity >= 1) {
      props.changeItem(props.itemName, props.quantity - 1);
    } else {
      return null;
    }
  };

  return (
    <div>
      {props.itemName}
      <button type="button" onClick={addItem}>
        Add
      </button>

      <button type="button" onClick={removeItem}>
        Remove
      </button>
    </div>
  );
};

export default Item;
