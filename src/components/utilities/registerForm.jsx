import { React, useEffect, useState } from "react";
import { Input, Button } from "@material-tailwind/react";
import swal from "sweetalert2";

export default function registerForm() {
  const [name, setName] = useState();
  const [role, setRole] = useState();
  const [isActive, setIsActive] = useState();

  async function register() {
    let item = {
      name,
      role,
      isActive,
    };

    if (
      item.name === "" ||
      item.name === undefined ||
      item.role === "" ||
      item.role === undefined ||
      item.isActive === "" ||
      item.isActive === undefined
    ) {
      swal.fire({
        icon: "error",
        title: "Login Gagal",
      });
    } else {
        let result = await fetch("http://localhost:5522/api/v1/setupUser", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(item),
        });
        result = await result.json();
      swal.fire({
        icon: "success",
        title: "berhasil",
        position: "center",
        showConfirmButton: false,
        timerProgressBar: true,
      });
    }

    // let result = await fetch("http://localhost:5522/api/v1/setupUser", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(item),
    // });
    // result = await result.json();
    console.log(item.name);
  }

  return (
    <div className="registerform">
      <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg flex flex-col items-start">
        <Input
          variant="outlined"
          label="First Name"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          variant="outlined"
          label="Role"
          onChange={(e) => setRole(e.target.value)}
        />
        <Input
          variant="outlined"
          label="Active"
          onChange={(e) => setIsActive(e.target.value)}
        />
      </div>
      <div className="flex w-max gap-4">
        <Button variant="filled" onClick={register}>
          Register
        </Button>
        <a
          className="text-sm text-gray-600 underline hover:text-gray-900"
          href="/dashboard"
        >
          Already registered?
        </a>
      </div>
    </div>
  );
}
