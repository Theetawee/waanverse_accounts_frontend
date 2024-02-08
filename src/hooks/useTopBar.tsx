import { useContext, useEffect } from "react";
import {TopBarContext} from "../context/TopBarContext";

const useTopBar = (title:string) => {
  const { setTitle } = useContext(TopBarContext);

  useEffect(() => {
      setTitle(title);
      return () => {
          setTitle("");
      };
  }, [setTitle, title]);


}

export default useTopBar
