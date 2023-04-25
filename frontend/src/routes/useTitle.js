import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

const useTitle = title => {
  const { setTitle } = useOutletContext();

  useEffect(() => {
    setTitle(title);
  }, [setTitle, title]);
};

export { useTitle };
