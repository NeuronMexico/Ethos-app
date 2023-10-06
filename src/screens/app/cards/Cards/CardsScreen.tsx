import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Header, Touchable } from 'components';
import { DefaultCard, MedCard, ShieldIcon } from 'assets/svg';
import Theme from 'theme';

interface Props {
  onSelectCard: () => void;
}

const CardsScreen: React.FC<Props> = ({ onSelectCard }) => {
  const { t } = useTranslation();

  return (
    <Container flex>
      <Header
        title={t('cards:card')}
        showBackButton={false}
        rightIcon={<ShieldIcon />}
        rightIconContainerBackgroundColor={Theme.Colors.White}
      />

      <Container center style={{ marginTop: 32 }}>
        <Touchable onPress={onSelectCard} opacityEffect>
          <DefaultCard />
        </Touchable>

        <Touchable onPress={onSelectCard} opacityEffect marginTop={32}>
          <MedCard />
        </Touchable>
      </Container>
    </Container>
  );
};

export default CardsScreen;
