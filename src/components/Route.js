import { useEffect, useState } from "react";

const Route = ({ href, children }) => {
  const [currentHref, setCurrentHref] = useState(window.location.pathname);

  useEffect(() => {
    //the purpose of this piece of state is just to get route to re-render
    const onLocationChange = () => {
      setCurrentHref(window.location.pathname);
    };
    window.addEventListener("popstate", onLocationChange);
    return () => {
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []);
  return currentHref === href ? children : null;
};

export default Route;
