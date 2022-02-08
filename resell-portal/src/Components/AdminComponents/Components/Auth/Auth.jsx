import React from "react";
import AuthBgimage from "../../../../assets/images/admin_auth_bg.svg";
import {
  useMantineTheme,
  TextInput,
  Image,
  Card,
  Button,
} from "@mantine/core";
import "./Auth.css";
import { HiOutlineMail } from "react-icons/hi";
import { BsGoogle } from "react-icons/bs";
import { CgPassword } from "react-icons/cg";
import { VscSignIn } from "react-icons/vsc";

export default function Auth() {
  const theme = useMantineTheme();
  console.log(theme.colors);
  return (
    <div className="container-fluid h-100 mt-5 pt-5">
      <div className="row mt-5 g-0">
        <div className="col-6 ">
          <Image src={AuthBgimage} fit="cover" className="ms-5" />
        </div>
        <div className="col-4  px-5 mx-auto">
          <Card shadow={"xl"} padding={"xl"}>
            <Card.Section>
              <div className="px-4 py-4 text-left">
                <h3
                  className="h2 text-left"
                  style={{
                    color: theme.fn.rgba(theme.colors["blue"][6], 1),
                  }}
                >
                  Sign in
                </h3>
              </div>
            </Card.Section>
            <div className="px-1">
              <div className="my-4 py-1">
                <TextInput
                  icon={<HiOutlineMail />}
                  placeholder="Enter your email or phone number"
                  type="email"
                />
              </div>
              <div className="my-4 py-1">
                <TextInput
                  icon={<CgPassword />}
                  placeholder="Enter your password"
                  type="password"
                />
              </div>
              <div className="my-4 py-1">
                <Button
                  leftIcon={<VscSignIn />}
                  variant="filled"
                  className="w-100"
                  color="teal"
                >
                  Sign in
                </Button>
              </div>
              <div className="my-2 text-center">
                <span className="text-muted">Or</span>
              </div>
              <div className="my-4 py-1 w-100">
                <Button
                  leftIcon={<BsGoogle />}
                  variant="filled"
                  className="w-100"
                >
                  Sign in with google
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
