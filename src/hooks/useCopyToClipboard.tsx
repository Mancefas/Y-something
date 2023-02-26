import { useDataContext } from 'context/DataContext';

const useCopyToClipboard = (): {
  copyToClipboard: (value: string) => Promise<void>;
} => {
  const { setShowClipboard, setClipboardError } = useDataContext();

  const copyToClipboard = async (value: string): Promise<void> => {
    try {
      await navigator.clipboard.writeText(`${value}`);
      setShowClipboard(true);
    } catch (err: any) {
      setShowClipboard(false);
      setClipboardError(
        `klaida! nepavyko nukopijuoti - ${err.message as string}`
      );
    }
  };
  return { copyToClipboard };
};

export default useCopyToClipboard;
