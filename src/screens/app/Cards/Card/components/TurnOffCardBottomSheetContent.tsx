import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, SwipeableSwitch } from 'components';

interface Props {
  cardOn: boolean;
  onChange: (value: boolean) => void;
}

const TurnOffCardBottomSheetContent: React.FC<Props> = ({ cardOn, onChange }) => {
  const { t } = useTranslation();

  return (
    <Container>
      <SwipeableSwitch
        config={{ label: { active: t('cards:turnOffCard'), inactive: t('cards:turnOnCard') } }}
        defaultValue={cardOn}
        onChange={onChange}
      />
    </Container>
  );
};

export { TurnOffCardBottomSheetContent };
