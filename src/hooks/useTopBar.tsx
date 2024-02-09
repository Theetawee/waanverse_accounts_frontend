import { useContext, useEffect } from "react";
import {TopBarContext} from "../context/TopBarContext";

const useTopBar = (title:string,back=true) => {
  const { setTitle,setBack } = useContext(TopBarContext);

  useEffect(() => {
    setTitle(title);
    setBack(back);
      return () => {
        setTitle("");
        setBack(false);
      };
  }, [back, setBack, setTitle, title]);


}

export default useTopBar
