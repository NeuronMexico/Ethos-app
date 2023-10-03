import { Button, Container, Text } from 'components';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Theme from 'theme';

interface Props {
  onPressButton?: () => void;
}

const PersonalProjectInfoSection: React.FC<Props> = ({
  onPressButton = () => {},
}: Props) => {
  const { t } = useTranslation();

  return (
    <Container flex>
      <Text
        text={t('tabProducts:personalProjectDescription')}
        textColor={Theme.Colors.White}
        textAlign="center"
        fontSize={15}
        marginBottom={11}
      />
      <Button
        label={t('tabProducts:personalProjectButton')}
        backgroundColor={Theme.Colors.White}
        textColor={Theme.Colors.DarkSoul}
        onPress={onPressButton}
      />
    </Container>
  );
};

export default PersonalProjectInfoSection;
