import { useContext, useEffect } from "react";
import {TopBarContext} from "../context/TopBarContext";

const useTopBar = (title:string) => {
  const { setTitle } = useContext(TopBarContext);

  useEffect(() => {
      setTitle(title);
      console.log('called')
      return () => {
          setTitle("");
      };
  }, [setTitle, title]);


}

export default useTopBar
