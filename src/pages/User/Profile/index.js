import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiMail, FiUpload, FiEdit, FiArrowLeft } from "react-icons/fi";
import TextField from "@material-ui/core/TextField";
import { HeaderContainer, Container } from "./styles";

import api from "../../../services/api";

import Logo from "../../../components/Logo";
import Error from "../../../components/Error";

const Profile = () => {
  const history = useHistory();
  const [user, setUser] = useState({});
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState({});

  useEffect(() => {
    async function loadData() {
      let token = localStorage.getItem("@u_id");
      if (!token) {
        localStorage.clear();
        return history.push("/signin");
      } else {
        const response = await api.get("/getUser", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setFirstname(response.data.user.first_name);
        setLastname(response.data.user.last_name);

        return setUser(response.data.user);
      }
    }

    loadData();
  }, [history]);

  async function handleUpdateUserDetails(e) {
    e.preventDefault();
    let token = localStorage.getItem("@u_id");

    if (!firstname || !lastname) {
      return setError({
        color: "#c40214",
        message: "Fill in all inputs.",
      });
    }
    const data = {
      first_name: firstname,
      last_name: lastname,
    };

    await api
      .put("/user/update", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        window.location.reload();
      });
  }

  async function handleUpdateProfilePicture(e) {
    e.preventDefault();
    const file = e.target.files[0];
    if (!file) return setError("Please, select an image file.");

    const allowedMimes = [
      "image/jpeg",
      "image/png",
      "image/pjpeg",
      "image/gif",
    ];

    if (!allowedMimes.includes(file.type)) {
      return setError("Please, select an image file.");
    } else {
      let token = localStorage.getItem("@u_id");
      const data = new FormData();

      data.append("file", file);

      await api
        .put("/user/picture", data, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        })
        .then(() => {
          window.location.reload();
        });
    }
  }

  async function handleChangePassword(e) {
    e.preventDefault();
    if (!currentPassword || !newPassword || !repeatPassword) {
      return setError({
        color: "c40214",
        message: "Please, write a corret password.",
      });
    } else if (newPassword !== repeatPassword) {
      return setError({
        color: "#c40214",
        message: "New password is not equals the repeat password",
      });
    } else {
      await api
        .post(
          "/user/change/password",
          {
            currentpassword: currentPassword,
            newpassword: newPassword,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("@u_id")}`,
            },
          }
        )
        .then(() => {
          return setError({
            color: "#17C054",
            message: "Your password have been updated.",
          });
        })
        .catch(() => {
          return setError({
            color: "#c40214",
            message: "Invalid password.",
          });
        });
    }
  }

  return (
    <>
      <HeaderContainer>
        <nav>
          <Logo />
          <Link to="/">
            <FiArrowLeft />
          </Link>
        </nav>
        <div>
          <div>
            <img src={user.picture_url} alt="" />
            <button>
              <label htmlFor="uploadpicture">
                <FiEdit size="18" color="fff" />
              </label>
            </button>
            <input
              type="file"
              id="uploadpicture"
              onChange={handleUpdateProfilePicture}
            />
          </div>
          <section>
            <h2>{`${user.first_name} ${user.last_name}`}</h2>
            <p>
              <FiMail /> {user.email}
            </p>

            <ul>
              <li>
                <FiUpload />
                &nbsp; 0
              </li>
            </ul>
          </section>
        </div>
      </HeaderContainer>
      {error.message && <Error color={error.color}>{error.message}</Error>}
      <Container>
        <div>
          <form
            noValidate
            autoComplete="off"
            onSubmit={handleUpdateUserDetails}
          >
            <h1>Edit your account details</h1>
            <TextField
              id="standard"
              label="First Name"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              style={{ margin: 0 }}
            />
            <TextField
              id="standard"
              label="Last Name"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              style={{ margin: 0 }}
            />
            <button type="submit">UPDATE</button>
          </form>
        </div>

        <div>
          <form onSubmit={handleChangePassword}>
            <h1>Change your password</h1>
            <TextField
              type="password"
              id="standard-basic"
              label="Current password"
              style={{ margin: 0 }}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
            <TextField
              type="password"
              id="standard-basic"
              label="New password"
              style={{ margin: 0 }}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <TextField
              type="password"
              id="standard-basic"
              label="Repeat the new password"
              style={{ margin: 0 }}
              className="repeatpassword"
              onChange={(e) => setRepeatPassword(e.target.value)}
            />
            <button type="submit">UPDATE</button>
          </form>
        </div>
      </Container>
    </>
  );
};

export default Profile;
