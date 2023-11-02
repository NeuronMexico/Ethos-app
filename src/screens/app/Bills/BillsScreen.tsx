import { DownloadIcon } from 'assets/svg';
import { Container, Header, MultipleTextButton } from 'components';
import { CustomText as Text } from 'components/atoms/CustomText';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Theme from 'theme';

interface Props {
  onPressBill: () => void;
}

const BillsScreen: React.FC<Props> = ({
  onPressBill,
}) => {
  const { t } = useTranslation();

  const mockData = [
    {
      date: 'Agosto 13, 2023',
      bills: [{ title: 'ethoscrédito' }],
    },
    {
      date: 'Agosto 13, 2023',
      bills: [
        { title: 'ethosbeneficios' },
        { title: 'ethoscrédito' },
      ],
    },

  ];

  return (
    <Container style={{ marginHorizontal: Theme.Sizes.Padding }}>
      <Header title={t('bills:title')} />
      <Container style={{ paddingHorizontal: Theme.Sizes.Padding, marginTop: 16 }}>
        <Text
          text={t('bills:lastBills')}
          fontWeight="Bold"
          marginTop={16}
          marginBottom={16}
        />
        {mockData.map((date, index) => (
          <React.Fragment key={index}>
            <Text
              text={date.date}
              textColor={Theme.Colors.GreatFalls}
              fontWeight="Medium"
              marginTop={16}
            />
            {date.bills.map((item, nIndex) => (
              <MultipleTextButton
                onPress={onPressBill}
                key={nIndex}
                title={item.title}
                borderRadius={24}
                borderColor={Theme.Colors.PlaceboBlue}
                labelColor={Theme.Colors.DarkSoul}
                marginTop={16}
                rightIcon={(
                  <Container
                    center
                    width={40}
                    height={40}
                    style={{ backgroundColor: Theme.Colors.PlaceboBlue, borderRadius: 14, justifyContent: 'center' }}
                  >
                    <DownloadIcon />
                  </Container>
                )}
                alignContent="space-between"
              />
            ))}
          </React.Fragment>
        ))}
      </Container>
    </Container>
  );
};

export default BillsScreen;
