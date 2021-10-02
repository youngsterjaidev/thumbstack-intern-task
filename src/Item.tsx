import React from "react";
import styled from "styled-components";

interface Props {
  itemName: string;
  quantity: number;
  price: number;
  id: string;
  changeItem: any;
  totalPrice: any;
  setTotalPrice: any;
}

const App = styled.div`
  padding: 1em;
  background: #fff;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding: 1em;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.div`
  padding: 0.5em;
  color: #000;
  cursor: pointer;

  &:hover {
    background: #000;
    color: #fff;
  }
`;

const Item: React.FC<Props> = (props) => {
  const addItem = () => {
    console.log(props.quantity + 1);
    props.changeItem(props.itemName, props.quantity + 1);
    props.setTotalPrice(props.totalPrice + props.price);
  };

  const removeItem = () => {
    if (props.quantity >= 1) {
      props.changeItem(props.itemName, props.quantity - 1);
      props.setTotalPrice(props.totalPrice - props.price);
    } else {
      return null;
    }
  };

  return (
    <App>
      <Container>
        <Wrapper>
          <Button onClick={addItem}>
            <i class="im im-plus"></i>
          </Button>
          <Button onClick={removeItem}>
            <i class="im im-minus"></i>
          </Button>
          <div>{props.itemName}</div>
        </Wrapper>
        <div>
          <div>{props.price}</div>
        </div>
      </Container>
    </App>
  );
};

export default Item;
