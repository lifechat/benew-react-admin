import { useEffect } from "react";

interface Iprops {
  title: string;
}

const useHeadTitle = (args: Iprops) => {
  const { title } = args;
  useEffect(() => {
    document.title = title;
  }, []);

  return;
};


export default useHeadTitle;