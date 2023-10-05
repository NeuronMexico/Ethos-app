import React, { ForwardedRef, forwardRef } from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Container, SwipeableSwitch } from 'components';

interface Props {
  cardOn: boolean;
  onChange: (value: boolean) => void;
}

const TurnOffCardBottomSheetContent = forwardRef(({ cardOn, onChange }: Props, ref: ForwardedRef<View>) => {
  const { t } = useTranslation();

  return (
    <Container ref={ref}>
      <SwipeableSwitch
        config={{ label: { active: t('cards:turnOffCard'), inactive: t('cards:turnOnCard') } }}
        defaultValue={cardOn}
        onChange={onChange}
      />
    </Container>
  );
});
export { TurnOffCardBottomSheetContent };
