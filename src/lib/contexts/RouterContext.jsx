/* eslint-disable react-hooks/rules-of-hooks */
import { useState, createContext, useEffect, useCallback } from "react";

const withSlash = (str = "") => (/^\//.test(str) ? str : `/${str}`);

const RouterContext = createContext({});

function RouterProvider({ initialPath, children }) {
  const [currentPath, setCurrentPath] = useState(initialPath || "/");

  if (typeof window === "undefined") {
    return (
      <RouterContext.Provider
        value={{ currentPath, navigateTo: () => {}, goBack: () => {} }}
      >
        {children}
      </RouterContext.Provider>
    );
  }

  const goBack = useCallback(() => {
    window.history.back();
  }, []);

  const navigateTo = useCallback((location) => {
    const newPath = withSlash(location);
    window.history.pushState(null, "", newPath);
    setCurrentPath(newPath);
  }, []);

  const handlePopStatEvent = useCallback(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  useEffect(() => {
    window.addEventListener("popstate", handlePopStatEvent);

    return () => {
      window.removeEventListener("popstate", handlePopStatEvent);
    };
  }, [handlePopStatEvent]);

  useEffect(() => {
    if (!initialPath) {
      setCurrentPath(window?.location?.pathname);
    }
  }, [initialPath]);

  return (
    <RouterContext.Provider value={{ currentPath, navigateTo, goBack }}>
      {children}
    </RouterContext.Provider>
  );
}

export { RouterProvider, RouterContext };
