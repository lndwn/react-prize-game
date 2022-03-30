import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState
} from "react";

const IsMutedContext = createContext<
  | { isMuted: boolean; setIsMuted: Dispatch<SetStateAction<boolean>> }
  | undefined
>(undefined);
export const useIsMuted = () => {
  const value = useContext(IsMutedContext);
  if (value === undefined) {
    throw new Error("`IsMutedContext` requires a provider with a value");
  }
  return value;
};
export const WithIsMuted = (props: {
  children: (provided: ReturnType<typeof useIsMuted>) => JSX.Element;
}) => props.children(useIsMuted());

export const IsMutedProvider = (props: {
  children: ReactNode | ReactNode[];
}) => {
  const [isMuted, setIsMuted] = useState(false);
  return (
    <IsMutedContext.Provider value={{ isMuted, setIsMuted }}>
      {props.children}
    </IsMutedContext.Provider>
  );
};
