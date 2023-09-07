"use client";
import { Button, Input } from "@nextui-org/react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { ChangeEvent, useState } from "react";

const DATA_INITIAL_STATE = {
  email: "",
  password: "",
  confirmPassword: "",
  name: "",
};

export default function Signin() {
  const [userData, setUserData] = useState<{
    email: string;
    password: string;
    confirmPassword: string;
    name: string;
  }>(DATA_INITIAL_STATE);
  const [isInvalidSubmit, setIsInvalidSubmit] = useState<boolean>(false);
  const supabase = createClientComponentClient();
  const handleSignIn = async () => {
    if(!userData.email || !userData.confirmPassword || !userData.password) {
      setIsInvalidSubmit(true)
    } else if(userData.confirmPassword !== userData.password) {
      setIsInvalidSubmit(true)
    } else {
      await supabase.auth.signUp({
        email: userData.email,
        password: userData.password,
      });
    }
  };
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <main>
      <h2>Crear cuenta</h2>
      <form action="">
        <>
          <Input
            name="name"
            value={userData.email}
            onChange={handleOnChange}
          />
           <Input
            name="email"
            value={userData.email}
            onChange={handleOnChange}
            errorMessage=" "
          />
          <Input
            name="password"
            value={userData.password}
            onChange={handleOnChange}
            errorMessage=" "
          />
          <Input
            name="confirmPassword"
            value={userData.password}
            onChange={handleOnChange}
            errorMessage=" "
          />
          <Button type="button">Continuar</Button>
        </>
      </form>
    </main>
  );
}
