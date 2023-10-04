import React, {
  ReactElement,
  ReactNode, useCallback, useEffect, useMemo, useRef, useState,
} from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import { BottomSheet as Component, Container } from 'components';
import { calculateSnapPoints } from 'utils';
import { View } from 'react-native';

export interface BottomSheetInterface {
  content: ReactElement;
}

interface Props {
  children: ReactNode;
}

interface BottomSheetContextInterface {
  show: (content: ReactElement) => void;
  hide: () => void;
}

export const BottomSheetContext = React.createContext<BottomSheetContextInterface>(
  {} as BottomSheetContextInterface,
);

const initialState: BottomSheetInterface = {
  content: <Container />,
};

export const BottomSheetContextProvider = ({ children }: Props) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const containerRef = useRef<View>(null);

  const [state, setState] = useState<number>(-1);
  const [child, setChild] = useState<ReactElement>(initialState.content);
  const [snapPoints, setSnapPoints] = useState<Array<string | number>>(['50%']);

  useEffect(() => {
    if (containerRef.current) {
      calculateSnapPoints(containerRef).then((points) => {
        setSnapPoints(points);
        setState(0);
        bottomSheetRef.current?.snapToIndex(0);
      });
    }
  }, [child]);

  const show = useCallback((content: ReactElement) => {
    const render = (
      <Container ref={containerRef}>
        {content}
      </Container>
    );
    setChild(render);
  }, []);

  const hide = useCallback(() => {
    setState(-1);
    bottomSheetRef.current?.close();
  }, []);

  const value = useMemo(() => ({ show, hide }), [show, hide]);

  return (
    <BottomSheetContext.Provider value={value}>
      {children}
      <Component
        ref={bottomSheetRef}
        state={state}
        snapPoints={snapPoints}
        handleSheetChanges={(index) => {
          setState(index);
          if (index === -1) {
            hide();
          }
        }}
        blurBackground
        enableTapOutsideToClose
      >
        {child}
      </Component>
    </BottomSheetContext.Provider>
  );
};

export const useBottomSheet = () => React.useContext(BottomSheetContext);
