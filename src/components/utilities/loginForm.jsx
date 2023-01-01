import { React, useEffect, useState } from "react";
import { Input, Button } from "@material-tailwind/react";
import useHistory from "use-history";
import swal from "sweetalert";

export default function loginForm() {
  const [id, setID] = useState("");
  const [name, setName] = useState("");
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
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
    localStorage.setItem("user-info", JSON.stringify(result));
    console.log(result);

    if (!result.user) {
      swal("Welcome", item.name, "success", {
        buttons: false,
        timer: 2000,
        target: "/dashboard"
      });
    } else
      swal("Failed", result.user, "error", {
        buttons: false,
        timer: 2000,
      });

    // window.location.href = "/dashboard";
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
