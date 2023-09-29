import { EasterEggAnimation } from 'components/organisms/EasterEggAnimation';
import React, { ReactNode, useMemo, useState } from 'react';

interface Props {
  children: ReactNode
}

interface EasterEggAnimationContextInterface {
  show: () => void
}

export const EasterEggAnimationContext = React
  .createContext<EasterEggAnimationContextInterface>({} as EasterEggAnimationContextInterface);

export const EasterEggAnimationContextProvider = ({ children }: Props) => {
  const [showState, setShowState] = useState<boolean>(false);

  const show = () => setShowState(true);
  const hide = () => setShowState(false);

  const value = useMemo(() => ({ show }), [show]);

  return (
    <EasterEggAnimationContext.Provider value={value}>
      {children}
      <EasterEggAnimation visible={showState} onFinish={hide} />
    </EasterEggAnimationContext.Provider>
  );
};

export const useEasterEggAnimation = () => React.useContext(EasterEggAnimationContext);
