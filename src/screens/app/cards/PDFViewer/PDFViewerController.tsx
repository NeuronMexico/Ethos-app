import React, { useCallback } from 'react';
import { useDispatch } from 'reactRedux';
import { MultipleTextButton, SafeArea } from 'components';
import { useBottomSheet } from 'context';
import Theme from 'theme';
import PDFViewerScreen from './PDFViewerScreen';

const PDFViewerController: React.FC = () => {
  const dispatch = useDispatch();

  const bottomSheet = useBottomSheet();

  const onPressExport = useCallback(() => {
    bottomSheet.show(
      <MultipleTextButton
        title="Exportar.pdf"
        borderRadius={24}
        borderColor={Theme.Colors.PlaceboBlue}
        labelColor={Theme.Colors.DarkSoul}
        alignContent="flex-start"
        androidRippleColor={Theme.Colors.DarkSoul}
        paddingHorizontal={0}
        fontWeight="Semibold"
        fontSize={16}
        onPress={() => bottomSheet.hide()}
      />,
    );
  }, [bottomSheet]);

  return (
    <SafeArea bottomSafeArea={false}>
      <PDFViewerScreen onPressExport={onPressExport} />
    </SafeArea>
  );
};

export default PDFViewerController;
