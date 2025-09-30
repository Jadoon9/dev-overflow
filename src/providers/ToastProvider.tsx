"use client";

import { Bounce, ToastContainer } from "react-toastify";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ToastProvider = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={theme === "dark" ? "dark" : "light"}
      transition={Bounce}
    />
  );
};

export default ToastProvider;
