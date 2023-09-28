import React, {
  ReactNode, useCallback, useMemo, useState,
} from 'react';
import { Alert, AlertDataInterface } from 'components/organisms/Alert';
import { sleep } from 'utils';

export interface AlertInterface {
  visible: boolean;
  data: AlertDataInterface;
}

interface Props {
  children: ReactNode
}

interface AlertContextInterface {
  show: (data: AlertDataInterface, dismissible?: boolean) => void,
  hide: () => void
}

export const AlertContext = React.createContext<AlertContextInterface>({} as AlertContextInterface);

const initialState: AlertInterface = { visible: false, data: { title: '' } };

export const AlertContextProvider = ({ children }: Props) => {
  const [alertState, setAlertState] = useState<AlertInterface>(initialState);

  const show = useCallback(async (data: AlertDataInterface) => {
    await sleep(500);
    setAlertState({ visible: true, data });
  }, []);

  const hide = useCallback(() => {
    setAlertState(initialState);
  }, []);

  const value = useMemo(() => ({ show, hide }), [show, hide]);

  return (
    <AlertContext.Provider value={value}>
      {children}
      <Alert
        visible={alertState.visible}
        data={alertState.data}
        onDismiss={() => setAlertState(initialState)}
      />
    </AlertContext.Provider>
  );
};

export const useAlert = () => React.useContext(AlertContext);
