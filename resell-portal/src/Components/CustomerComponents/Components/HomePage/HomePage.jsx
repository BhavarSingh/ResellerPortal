import React, { Component } from "react";
import { AppShell, Header } from "@mantine/core";
import NavbarCustom from "../NavBarCustom/NavbarCustom";
import ItemList from "../ItemList/ItemList";
export default class HomePage extends Component {
  render() {
    return (
      <div>
        <AppShell
          padding="md"
          header={
            <Header height={60} padding="xs" className="bg-primary">
              <NavbarCustom shopName="Vani Shop" />
            </Header>
          }
          styles={(theme) => ({
            main: {
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[8]
                  : theme.colors.gray[0],
            },
          })}
        >
          <div>
            <ItemList></ItemList>
          </div>
        </AppShell>
      </div>
    );
  }
}
