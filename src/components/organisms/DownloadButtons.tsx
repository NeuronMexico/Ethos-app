import { Container } from 'components/atoms';
import { Button } from 'components/molecules';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Theme from 'theme';

const DownloadButtons = () => {
  const { t } = useTranslation();

  return (
    <Container center style={{ gap: 16 }}>
      <Button
        label={t('expenses:exportXML')}
        onPress={() => {}}
        backgroundColor="transparent"
        textColor={Theme.Colors.DarkSoul}
        borderColor={Theme.Colors.PlaceboBlue}
      />
      <Button
        label={t('expenses:exportPDF')}
        onPress={() => {}}
        backgroundColor="transparent"
        textColor={Theme.Colors.DarkSoul}
        borderColor={Theme.Colors.PlaceboBlue}
      />
    </Container>
  );
};

export { DownloadButtons };
