import { useContext } from "react";
import { RouterContext } from "../contexts/RouterContext";

function useRouter() {
  const context = useContext(RouterContext);

  if (!context) {
    throw new Error(`ReactTinyRouter: useRouter must be used within a Router`);
  }

  return context;
}

export default useRouter;
