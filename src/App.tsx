import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Item from "./Item";

interface Item {
  itemName: string;
  quantity: number;
  price: number;
  id: string;
}

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
`;

const Heading = styled.h2`
  text-align: center;
`;

const Checkout = styled.div`
  position: sticky;
  top: 0;
  background-color: #fff;
  box-shadow: 0px 0px 14px 1px #9898989c;
  padding: 1em;
`;

const CheckoutItems = styled.div`
  height: 60vh;
  width: 25em;
  overflow-y: auto;
  background: #fff;
`;

const Button = styled.button`
  width: 100%;
  padding: 1em;
  border: none;
  background-color: #000;
  color: #fff;
  margin: 1em 0em;
  border-radius: 5px;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding: 0.5em 2em;
  justify-content: space-between;
`;

const styles = {
  heading: {
    fontWeight: 600
  },
  pad: {
    padding: "1em"
  }
};

export default function App() {
  const [menu, setMenu] = useState<Item[] | null>(null);
  const [totalItem, setTotalItem] = useState<Item[] | null>(null);
  const [totalPrice, setTotalPrice] = useState(0);

  const changeItem = (itemName: string, quantity: number) => {
    let temp = menu.map((item) => {
      if (item.itemName !== itemName) return item;
      return {
        itemName: item.itemName,
        quantity,
        price: item.price,
        id: item.id
      };
    });
    setMenu(temp);
  };

  useEffect(() => {
    // call the server of the menu
    setMenu([
      {
        id: "1",
        itemName: "Tea",
        quantity: 0,
        price: 100
      },
      { itemName: "coffee", quantity: 0, price: 150, id: "2" }
    ]);
  }, []);

  function handlePay() {
    console.log({
      totalPrice,
      items: totalItem
    });
  }

  useEffect(() => {
    if (menu) {
      setTotalItem(menu.filter((item) => item.quantity > 0));
    }
  }, [menu]);

  useEffect(() => {
    console.log("state Update");
  }, [totalItem]);

  if (!menu) {
    return <div>Loading</div>;
  }

  return (
    <>
      <Heading>Menu</Heading>
      <Container>
        <div style={styles.pad}>
          {menu.map((item) => {
            return (
              <Item
                {...item}
                key={item.id}
                totalPrice={totalPrice}
                changeItem={changeItem}
                setTotalPrice={setTotalPrice}
              />
            );
          })}
        </div>

        <Checkout>
          <CheckoutItems>
            <Wrapper>
              <div style={styles.heading}>Items</div>
              <div style={styles.heading}>Quantity</div>
            </Wrapper>
            {totalItem?.map((item) => {
              return (
                <Wrapper key={item.id}>
                  <div>{item.itemName}</div>
                  <div>{item.quantity}</div>
                </Wrapper>
              );
            })}
          </CheckoutItems>
          <Button type="button" onClick={handlePay}>
            Pay {totalPrice}
          </Button>
        </Checkout>
      </Container>
    </>
  );
}
