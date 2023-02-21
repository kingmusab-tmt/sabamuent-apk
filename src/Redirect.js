import { useEffect } from "react";

function RedirectComponent() {
  useEffect(() => {
    window.location.href = "https://sabamuent.com/login/";
  }, []);

  return null;
}

export default RedirectComponent;
