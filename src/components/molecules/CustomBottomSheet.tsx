import React, {
  ReactNode, useEffect, useMemo, useRef,
} from 'react';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { Container, Text } from 'components';
import Theme from 'theme';
import { BlurView } from '@react-native-community/blur';

export interface BottomSheetProps {
  title: string;
  state?: number;
  handleSheetChanges: (index: number) => void;
  children?: ReactNode;
  enablePanDownToClose?: boolean;

  snapPoints?: Array<string | number>;
  initialState?: number;
  blurBackground?: boolean;
}

const CustomBottomSheet: React.FC<BottomSheetProps> = ({
  title,
  state,
  handleSheetChanges,
  children,
  snapPoints: customSnapPoints,
  initialState = -1,
  enablePanDownToClose = true,
  blurBackground,
}) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const insets = useSafeAreaInsets();

  const snapPoints = useMemo(() => customSnapPoints || ['50%'], [customSnapPoints]);

  useEffect(() => {
    if (state !== undefined) {
      if (state === -1) bottomSheetRef.current?.close();
      else bottomSheetRef.current?.snapToIndex(state);
    }
  }, [state]);

  return (
    <>
      {blurBackground && state !== -1 && <BlurView blurType="light" blurAmount={3} style={StyleSheet.absoluteFill} />}
      <BottomSheet
        ref={bottomSheetRef}
        index={initialState}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        enablePanDownToClose={enablePanDownToClose}
        handleIndicatorStyle={styles.indicator}
      >
        <BottomSheetScrollView
          style={{ paddingHorizontal: Theme.Sizes.Padding, paddingBottom: insets.bottom + 16 }}
          contentContainerStyle={{ flexGrow: 1 }}
          bounces={false}
          automaticallyAdjustKeyboardInsets
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode="interactive"
        >
          <Container middle center>
            <Text
              text={title}
              textColor={Theme.Colors.DarkSoul}
              fontWeight="Bold"
              fontSize={20}
            />
          </Container>
          <Container>
            {children}
          </Container>
        </BottomSheetScrollView>
      </BottomSheet>
    </>
  );
};

const styles = StyleSheet.create({
  indicator: {
    width: 56,
    height: 4,
    borderRadius: 10,
    backgroundColor: Theme.Colors.DarkSoul,
  },
});

export { CustomBottomSheet };
