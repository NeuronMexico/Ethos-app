import React, {
  ReactNode, useCallback, useMemo, useRef, useState,
} from 'react';
import { FloatingAlert, FloatingAlertDataInterface } from 'components';

export interface FloatingAlertInterface {
  visible: boolean;
  data: FloatingAlertDataInterface;
}

interface Props {
  children: ReactNode
}

interface FloatingAlertContextInterface {
  show: (data: FloatingAlertDataInterface) => void
}

export const FloatingAlertContext = React.createContext<FloatingAlertContextInterface>({} as FloatingAlertContextInterface);

const initialState: FloatingAlertInterface = { visible: false, data: { message: '', type: 'success' } };

export const FloatingAlertContextProvider = ({ children }: Props) => {
  const timeoutRef = useRef<any>(0);
  const timeout2Ref = useRef<any>(0);

  const [floatingAlertState, setFloatingAlertState] = useState<FloatingAlertInterface>(initialState);

  const show = useCallback(async (data: FloatingAlertDataInterface) => {
    clearTimeout(timeoutRef.current);
    clearTimeout(timeout2Ref.current);

    setFloatingAlertState({ visible: true, data });

    timeoutRef.current = setTimeout(() => setFloatingAlertState({ visible: false, data }), 5000);
    timeout2Ref.current = setTimeout(() => setFloatingAlertState(initialState), 6000);
  }, []);

  const value = useMemo(() => ({ show }), [show]);

  return (
    <FloatingAlertContext.Provider value={value}>
      {children}
      <FloatingAlert visible={floatingAlertState.visible} data={floatingAlertState.data} />
    </FloatingAlertContext.Provider>
  );
};

export const useFloatingAlert = () => React.useContext(FloatingAlertContext);
