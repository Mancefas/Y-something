import { useEffect } from "react";
import CheckMark from "./CheckMark";
import { useDataContext } from "../context/DataContext";

const ClipboardShowing = () => {
  const { showClipboard, setShowClipboard } = useDataContext();

  useEffect(() => {
    const timer = setTimeout(() => setShowClipboard(false), 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [showClipboard]);

  return <>{showClipboard && <CheckMark />}</>;
};

export default ClipboardShowing;
