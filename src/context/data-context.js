import React from "react";
import { data } from "../store/data";

const Data = React.createContext({
  intData: data,
});

export default Data;
