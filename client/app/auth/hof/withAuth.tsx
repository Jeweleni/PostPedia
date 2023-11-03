"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import isAuthenticated from "./isAuthenticated";

const withAuth = (WrappedComponent: any) => {
  const Wrapper = (props: any) => {
    const router = useRouter();

    useEffect(() => {
      const token = localStorage.getItem("ppt");
      const isLoggedIn = isAuthenticated(token as string);
      if (!isLoggedIn) {
        // router.replace("/auth");
        localStorage.removeItem("ppt");
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const wrappedComponent = React.createElement(WrappedComponent, props);
    return wrappedComponent;
  };

  return Wrapper;
};

export default withAuth;
