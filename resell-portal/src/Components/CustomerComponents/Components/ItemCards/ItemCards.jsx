import React, { Component } from "react";
import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  useMantineTheme,
} from "@mantine/core";
import { BsStar } from "react-icons/bs";
import Shirt from "../../../../assets/images/Shirt.jpg";
import "./ItemCards.css";

export default class ItemCards extends Component {
  render() {
    return (
      <div>
        <div style={{ width: 320 }}>
          <Card shadow="sm" padding="lg">
            <Card.Section>
              <Image
                src={Shirt}
                height={250}
                className="p-5 w-100 h-75"
                alt="Norway"
              />
            </Card.Section>

            <Group position="apart" style={{ marginBottom: 1, marginTop: 1 }}>
              <Text className="lead py-1">Nylon Shirt</Text>
              <Badge color="pink" variant="light">
                On Sale
              </Badge>
            </Group>

            <Group position="left" style={{ marginBottom: 5, marginTop: 1 }}>
              <Text
                size="sm"
                position="apart"
                style={{ color: "black", lineHeight: 1 }}
                className="text-muted "
              >
                Rating 5 <BsStar className="star"></BsStar>
              </Text>
            </Group>

            <Button
              variant="light"
              color="blue"
              fullWidth
              style={{ marginTop: 14 }}
            >
              Buy
            </Button>
          </Card>
        </div>
      </div>
    );
  }
}
