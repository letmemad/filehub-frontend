import React from "react";

import { Container } from "./styles";

const ChangePassword = () => {
  return (
    <Container>
      <form>
        <h1>Change your password</h1>
        <div>
          <label htmlFor="currentPassword">Current password</label>
          <input
            type="password"
            placeholder="Your current password"
            id="currentPassword"
          />
        </div>
        <div>
          <label htmlFor="newPassword">New password</label>
          <input
            type="password"
            placeholder="Write your new password"
            id="newPassword"
          />
        </div>
        <div>
          <label htmlFor="repeatPassword">Repeat your new password</label>
          <input
            type="password"
            placeholder="Re-write your new password"
            id="repeatPassword"
          />
        </div>
      </form>
    </Container>
  );
};

export default ChangePassword;
