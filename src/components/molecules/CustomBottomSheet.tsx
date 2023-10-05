import React, {
  ReactNode, useEffect, useMemo, useRef, forwardRef, ForwardRefRenderFunction,
} from 'react';
import { StyleSheet, TextStyle, TouchableWithoutFeedback } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { Container, Text } from 'components';
import Theme from 'theme';
import { BlurView } from '@react-native-community/blur';

export interface BottomSheetProps {
  title?: string;
  state?: number;
  handleSheetChanges: (index: number) => void;
  children?: ReactNode;
  enablePanDownToClose?: boolean;

  snapPoints?: Array<string | number>;
  initialState?: number;
  blurBackground?: boolean;
  titleAlign?: TextStyle['textAlign'];
  enableTapOutsideToClose?: boolean;
}

const CustomBottomSheet: ForwardRefRenderFunction<BottomSheet, BottomSheetProps> = ({
  title,
  state,
  handleSheetChanges,
  children,
  snapPoints: customSnapPoints,
  initialState = -1,
  enablePanDownToClose = true,
  blurBackground,
  titleAlign = 'center',
  enableTapOutsideToClose = true,
}, ref) => {
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
      {blurBackground && state !== -1 && (
      <TouchableWithoutFeedback disabled={!enableTapOutsideToClose} onPress={() => handleSheetChanges(-1)}>
        <BlurView blurType="dark" blurAmount={3} style={StyleSheet.absoluteFill} />
      </TouchableWithoutFeedback>
      )}
      <BottomSheet
        ref={ref ?? bottomSheetRef}
        index={initialState}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        enablePanDownToClose={enablePanDownToClose}
        handleIndicatorStyle={styles.indicator}
        backgroundStyle={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
      >
        <BottomSheetScrollView
          style={{ paddingHorizontal: Theme.Sizes.Padding, paddingBottom: insets.bottom + 16 }}
          contentContainerStyle={{ flexGrow: 1 }}
          bounces={false}
          automaticallyAdjustKeyboardInsets
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode="interactive"
        >
          <Container style={{ marginTop: 16 }}>
            {!!title && (
            <Text
              text={title}
              textColor={Theme.Colors.DarkSoul}
              fontWeight="Bold"
              fontSize={20}
              marginBottom={16}
              textAlign={titleAlign}
            />
            )}
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
    marginTop: 22,
  },
});

export default forwardRef(CustomBottomSheet);
