import { useEffect } from "react";

import CheckMark from "./CheckMark";
import { useDataContext } from "../../../context/DataContext";

export const Clipboard = () => {
  const { showClipboard, setShowClipboard } = useDataContext();

  useEffect(() => {
    const timer = setTimeout(() => setShowClipboard(false), 1000);
    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [showClipboard]);

  return <>{showClipboard && <CheckMark />}</>;
};
