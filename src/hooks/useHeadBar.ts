import { useEffect } from "react";

interface Iprops {
  title: string;
}

const useHeadBar = (args: Iprops) => {
  const { title } = args;
  useEffect(() => {
    document.title = title;
  }, []);

  return;
};


export default useHeadBar;