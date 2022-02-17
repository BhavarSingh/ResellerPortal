import React, { Component } from "react";

import { AppShell, Title } from "@mantine/core";
import { BsShop } from "react-icons/bs";
export default class NavbarCustom extends Component {
  render() {
    return (
      <div>
        <div>
          <Title order={2} className="mx-5 text-light ">
            <BsShop className="mx-2" />
            {this.props.shopName}
          </Title>
        </div>
      </div>
    );
  }
}
