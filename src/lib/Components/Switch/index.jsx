import React, { useMemo } from "react";

import useRouter from "../../hooks/useRouter";
import matchPath from "../../utils/matchPath";

function Switch({ notFoundComponent: NotFoundComponent, children }) {
  const { currentPath } = useRouter();

  const hasRouteToRender = useMemo(() => {
    if (!children) return false;

    const routes = children instanceof Array ? children : [children];

    const someRouteWillRender = routes.some((route) => {
      const { path, exact, component } = route?.props || {};

      if (!path || !component) return false;

      const match = matchPath(currentPath, { path, exact });

      return !!match;
    });

    return someRouteWillRender;
  }, [currentPath, children]);

  return (
    <>
      {hasRouteToRender && children}
      {!hasRouteToRender && NotFoundComponent && <NotFoundComponent />}
    </>
  );
}

export default Switch;
