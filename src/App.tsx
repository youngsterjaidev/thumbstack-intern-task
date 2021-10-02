import React, { useEffect, useState } from "react";

import Item from "./Item";

interface Item {
  itemName: string;
  quantity: number;
}

export default function App() {
  const [menu, setMenu] = useState<any[]>([
    {
      itemName: "Burger",
      quantity: 0
    }
  ]);
  const [totalItem, setTotalItem] = useState<Item[] | null>([]);

  const changeItem = (itemName: string, quantity: number) => {
    let temp = menu.map((item) => {
      if (item.itemName !== itemName) return item;
      return {
        itemName: item.itemName,
        quantity
      };
    });
    setMenu(temp);
  };

  useEffect(() => {
    // call the server of the menu
    setMenu([
      {
        itemName: "Tea",
        quantity: 0
      },
      { itemName: "coffee", quantity: 0 }
    ]);
  }, []);

  useEffect(() => {
    setTotalItem(menu.filter((item) => item.quantity > 0));
  }, [menu]);

  useEffect(() => {
    console.log("state Update");
  }, [totalItem]);

  return (
    <div>
      <h2>Start editing to see some magic happen!</h2>
      <div>
        {menu.map((item) => {
          return <Item {...item} changeItem={changeItem} />;
        })}
      </div>

      <div>
        Okay
        {totalItem?.map((item) => {
          console.log(item);
          return (
            <div>
              Item {item.itemName} - {item.quantity}
            </div>
          );
        })}
      </div>
    </div>
  );
}
