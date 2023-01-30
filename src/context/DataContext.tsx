import { useState, createContext, useContext, type ReactNode } from 'react';
import { data } from '../store/data';

interface DataContextTypes {
  dataToShow: Array<{ name: string; text: string; mostUsed?: boolean }>;
  setDataToShow: (
    item: Array<{ name: string; text: string; mostUsed?: boolean }>
  ) => void;
  initialData: Array<{ name: string; text: string; mostUsed?: boolean }>;
  searchInput: string;
  setSearchInput: (item: string) => void;
  whatBtnsToShow: string;
  setWhatBtnsToShow: (item: string) => void;
  showClipboard: boolean;
  setShowClipboard: (item: boolean) => void;
  lastContract: number;
  setLastContract: (item: number) => void;
}

const DataContext = createContext<DataContextTypes>({
  dataToShow: [],
  setDataToShow: () => {},
  initialData: [],
  searchInput: '',
  setSearchInput: () => {},
  whatBtnsToShow: '',
  setWhatBtnsToShow: () => {},
  showClipboard: false,
  setShowClipboard: () => {},
  lastContract: 0,
  setLastContract: () => {},
});

export const useDataContext = (): DataContextTypes => {
  return useContext(DataContext);
};

interface DataContextProviderProps {
  children: ReactNode;
}

export function DataContextProvider({
  children,
}: DataContextProviderProps): React.ReactElement {
  const [dataToShow, setDataToShow] = useState(data);
  const [searchInput, setSearchInput] = useState('');
  const [whatBtnsToShow, setWhatBtnsToShow] = useState('regl');
  const [showClipboard, setShowClipboard] = useState(false);
  const [lastContract, setLastContract] = useState(0);

  const initialData = data;

  return (
    <DataContext.Provider
      value={{
        dataToShow,
        setDataToShow,
        initialData,
        searchInput,
        setSearchInput,
        whatBtnsToShow,
        setWhatBtnsToShow,
        showClipboard,
        setShowClipboard,
        lastContract,
        setLastContract,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
