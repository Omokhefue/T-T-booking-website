import React, { useState, useEffect } from "react";

import "./notification.css";

const Notification = ({ message, localStorageKey, duration = 3000 }) => {
  const [showMessage, setShowMessage] = useState(
    localStorage.getItem(localStorageKey) === "true"
  );
  useEffect(() => {
    if (showMessage) {
      const timeoutId = setTimeout(() => {
        localStorage.removeItem(localStorageKey);
        setShowMessage(false);
      }, duration);

      return () => clearTimeout(timeoutId);
    }
  }, [showMessage, localStorageKey, duration]);

  return <div>{showMessage && <p>{message}</p>}</div>;
};

export default Notification;
