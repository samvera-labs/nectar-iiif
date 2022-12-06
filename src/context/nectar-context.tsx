import { createContext, useContext } from "react";

type NectarContextStore =
  | {
      delimiter: string; // Separator for multi-value items
    }
  | undefined;
interface ProviderProps {
  children: React.ReactNode;
  initialState?: NectarContextStore;
}

const defaultState = {
  delimiter: ", ",
};

const NectarContext = createContext<NectarContextStore>(undefined);

const useNectarContext = () => {
  const context = useContext(NectarContext);
  if (context === undefined) {
    throw new Error("useNectarContext must be used with a NectarProvider");
  }
  return context;
};

const NectarProvider: React.FC<ProviderProps> = ({
  children,
  initialState = defaultState,
}) => {
  const delimiter = getRealPropertyValue(initialState, "delimiter");

  return (
    <NectarContext.Provider value={{ delimiter }}>
      {children}
    </NectarContext.Provider>
  );
};

const getRealPropertyValue = (
  obj: { [key: string]: any },
  property: string
) => {
  const value = Object.hasOwn(obj, property)
    ? obj[property].toString()
    : undefined;
  return value;
};

export {
  NectarContext,
  NectarProvider,
  getRealPropertyValue,
  useNectarContext,
};
