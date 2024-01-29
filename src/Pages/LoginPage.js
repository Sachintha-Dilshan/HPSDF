"use client";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../Services/AuthService";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";

function LoginPage() {
  let navigate = useNavigate();
  const form = React.useRef();

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [message, setMessage] = React.useState("");

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("");

    //form.current.validateAll();

    AuthService.login(username, password).then(
      () => {
        navigate("/HR/dashboard");
        window.location.reload();
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setMessage(resMessage);
      }
    );
  };

  return (
    <div
      className="flex items-center justify-center h-screen "
      style={{ backgroundImage: "url('/Images/background.png')" }}
    >
      <form
        className="flex flex-col gap-4 md:w-1/4 bg-slate-300 w-full mx-10 px-10 py-28 rounded-3xl opacity-85"
        onSubmit={handleLogin}
      >
        <div className="flex flex-col items-center justify-center gap-5">
          <h2 className="text-2xl text-slate-700 uppercase text-center">
            Hakmana Pradeshiya Sabha
          </h2>
          <div className="flex text-center justify-center">
            <img
              src="Images/governmentLogo.png"
              className="mr-2 h-14 "
              alt="Government Logo"
            />
            <img
              src="Images/hakmanaSabhaLogo.png"
              className="h-14"
              alt="Sabha Logo"
            />
          </div>
          <h2 className="text-3xl text-slate-600 text-center">Sign In</h2>
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your username" />
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder="name@flowbite.com"
            onChange={onChangeUsername}
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput
            id="password1"
            type="password"
            required
            onChange={onChangePassword}
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        {/* <Link to="/HR/dashboard"> */}
        <Button type="submit" className="uppercase w-full">
          Submit
        </Button>
        {/* </Link> */}
      </form>
    </div>
  );
}

export default LoginPage;
