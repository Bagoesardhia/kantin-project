import { React, useEffect, useState } from "react";
import { Input, Button } from "@material-tailwind/react";
import useHistory from "use-history";
import swal from "sweetalert2";
// import  { Redirect } from 'react-router-dom'

export default function loginForm() {
  const [id, setID] = useState("");
  const [name, setName] = useState("");
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("list")) {
      // history.push("/dashboard")
      console.log("berhasil");
    }
  }, []);

  // debug
  function cekparam() {
    console.log(id);
    console.log(name);
  }

  async function login() {
    let item = { id, name };
    let result = await fetch("http://localhost:5522/api/v1/signIn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();

    localStorage.setItem("list", JSON.stringify(item.name));
    console.log(localStorage);
    console.log(result.id)

    if (!result.user) {
      swal.fire({
        icon: "success",
        title: "berhasil",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didDestroy: (toast) => {
          window.location = "/dashboard";
        },
      });
    } else
      swal.fire({
        icon: "error",
        title: "Login Gagal",
        timer: 2000,
      });
  }

  return (
    <div className="loginForm">
      <div className="flex w-full items-end gap-4">
        <Input
          variant="outlined"
          label="ID"
          onChange={(e) => setID(e.target.value)}
        />
        <Input
          variant="outlined"
          label="Name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="flex w-max gap-4">
        <Button variant="filled" onClick={login}>
          Login
        </Button>
      </div>
    </div>
  );
}
