import React, { Component } from "react";
import ItemCards from "../ItemCards/ItemCards";
import {
  Container,
  Tabs,
  Text,
  Badge,
  Button,
  Group,
  useMantineTheme,
} from "@mantine/core";
import { BsShop } from "react-icons/bs";
export default class ItemList extends Component {
  constructor(props) {
    super(props);
    // // Don't call this.setState() here!
    // this.state = { counter: 0 };
    // this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const listOfItems = () => {
      let content = [];
      for (let i = 0; i < 10; i++) {
        content.push(<ItemCards></ItemCards>);
      }
      return content;
    };
    console.log(listOfItems);
    return (
      <Container fluid>
        <Tabs>
          <Tabs.Tab label="Tops" icon={<BsShop />}></Tabs.Tab>
          <Tabs.Tab label="Hoodies" icon={<BsShop />}>
            Messages tab content
          </Tabs.Tab>
          <Tabs.Tab label="Top Rated" icon={<BsShop />}>
            Settings tab content
          </Tabs.Tab>
        </Tabs>
        <div>
          <Group>{listOfItems()}</Group>
        </div>
      </Container>
    );
  }
}
