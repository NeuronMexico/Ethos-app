import React, {
  ReactElement,
  ReactNode, useCallback, useEffect, useMemo, useRef, useState,
} from 'react';
import { TextStyle, View } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { BottomSheet as Component, Container } from 'components';
import { calculateSnapPoints } from 'utils';

export interface BottomSheetInterface {
  content: ReactElement;
}

interface Props {
  children: ReactNode;
}

interface BottomSheetContextInterface {
  show: (content: ReactElement, bottomSheetConfig?: BottomSheetConfig) => void;
  hide: () => void;
}

export const BottomSheetContext = React.createContext<BottomSheetContextInterface>(
  {} as BottomSheetContextInterface,
);

const initialState: BottomSheetInterface = {
  content: <Container />,
};

type BottomSheetConfig = {
  title?: string;
  titleAlign?: TextStyle['textAlign'];
  enableTapOutsideToClose?: boolean;
  enablePanDownToClose?: boolean;
  snapPoints?: Array<string | number>;
};

export const BottomSheetContextProvider = ({ children }: Props) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const containerRef = useRef<View>(null);

  const [state, setState] = useState<number>(-1);
  const [child, setChild] = useState<ReactElement>(initialState.content);
  const [snapPoints, setSnapPoints] = useState<Array<string | number>>(['50%']);
  const [config, setConfig] = useState<BottomSheetConfig>();

  useEffect(() => {
    if (containerRef.current) {
      calculateSnapPoints(containerRef).then((points) => {
        setSnapPoints(points);
        setState(0);
        bottomSheetRef.current?.snapToIndex(0);
      });
    }
  }, [child]);

  const show = useCallback((content: ReactElement, bottomSheetConfig?: BottomSheetConfig) => {
    const render = (
      <Container ref={containerRef}>
        {content}
      </Container>
    );
    setConfig(bottomSheetConfig);
    setChild(render);
  }, []);

  const hide = useCallback(() => {
    setState(-1);
    bottomSheetRef.current?.close();
  }, []);

  const value = useMemo(() => ({ show, hide }), [show, hide]);

  useEffect(() => {
    if (state === -1) {
      setChild(initialState.content);
      setConfig(undefined);
    }
  }, [state]);

  return (
    <BottomSheetContext.Provider value={value}>
      {children}
      <Component
        ref={bottomSheetRef}
        state={state}
        snapPoints={config?.snapPoints || snapPoints}
        handleSheetChanges={(index) => {
          setState(index);
          if (index === -1) {
            hide();
          }
        }}
        blurBackground
        title={config?.title}
        titleAlign={config?.titleAlign}
        enableTapOutsideToClose={config?.enableTapOutsideToClose}
        enablePanDownToClose={config?.enablePanDownToClose}
      >
        {child}
      </Component>
    </BottomSheetContext.Provider>
  );
};

export const useBottomSheet = () => React.useContext(BottomSheetContext);
