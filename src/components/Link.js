import React, { useState, useEffect } from "react";

const Link = ({ href, className, children }) => {
  const [currentHref, setCurrentHref] = useState(window.location.pathname);

  const onClick = (event) => {
    // following if statement allows user to hold ctrl or cmd + click to open link in new tab
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    window.history.pushState({}, "", href);
    //he doesn't explain the next two lines, just says to roll with it
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

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

  if (currentHref === href) {
    return (
      <a onClick={onClick} href={href} className={`current-${className}`}>
        {children}
      </a>
    );
  } else
    return (
      <a onClick={onClick} href={href} className={className}>
        {children}
      </a>
    );
};

export default Link;
