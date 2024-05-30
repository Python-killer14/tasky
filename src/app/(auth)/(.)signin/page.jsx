import Login from "@/components/Login";
import { Modal } from "@mui/material";
import React from "react";

function SignInPageIntercepted() {
  return (
    <div>
      <h1>Inter</h1>
      <Modal open={true}>
        <Login />
      </Modal>
    </div>
  );
}

export default SignInPageIntercepted;
