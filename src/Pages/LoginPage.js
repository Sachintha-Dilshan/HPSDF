"use client";
import { Link } from "react-router-dom";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";

function LoginPage() {
  return (
    <div
      className="flex items-center justify-center h-screen "
      style={{ backgroundImage: "url('/Images/background.png')" }}
    >
      <form className="flex flex-col gap-4 md:w-1/4 bg-slate-300 w-full mx-10 px-10 py-28 rounded-3xl opacity-85">
        <div className="flex flex-col items-center justify-center gap-5">
            <h2 className="text-2xl text-slate-700 uppercase text-center">Hakmana Pradeshiya Sabha</h2>
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
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput id="password1" type="password" required />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Link to="/HR/dashboard">
            <Button type="submit" className="uppercase w-full">Submit</Button>
        </Link>
       
      </form>
    </div>
  );
}

export default LoginPage;
