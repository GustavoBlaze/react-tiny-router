import React from "react";

import useRouter from "../../hooks/useRouter";
import matchPath from "../../utils/matchPath";

function Route({ path, exact = false, component: Component }) {
  const { currentPath } = useRouter();
  const match = matchPath(currentPath, { path, exact });

  return match ? <Component navigation={match} /> : <></>;
}

export default Route;
