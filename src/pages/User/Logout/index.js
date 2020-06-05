import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function Logout() {
  const history = useHistory();
  useEffect(() => {
    localStorage.clear();
    return history.push("/signin");
  }, [history]);
  return null;
}
