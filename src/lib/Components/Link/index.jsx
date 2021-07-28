import React from "react";

import useRouter from "../../hooks/useRouter";

export default function Link({ href, children, ...rest }) {
  const {navigateTo} = useRouter();

  function handleClick(event) {
    event.preventDefault();
    navigateTo(href)
  }

  return (
    <a href={href} {...rest} onClick={handleClick}>
      {children}
    </a>
  );
}
