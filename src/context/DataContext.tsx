import { useState, createContext, useContext, ReactNode } from "react";
import { data } from "../store/data";

type DataContextTypes = {
  dataToShow: { name: string; text: string; mostUsed?: boolean }[];
  setDataToShow: (
    item: { name: string; text: string; mostUsed?: boolean }[]
  ) => void;
  initialData: { name: string; text: string; mostUsed?: boolean }[];
};
const DataContext = createContext({} as DataContextTypes);

export function useDataContext() {
  return useContext(DataContext);
}

type DataContextProviderProps = {
  children: ReactNode;
};

export function DataContextProvider({ children }: DataContextProviderProps) {
  const [dataToShow, setDataToShow] = useState(data);
  const initialData = data;

  return (
    <DataContext.Provider
      value={{
        dataToShow,
        setDataToShow,
        initialData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
