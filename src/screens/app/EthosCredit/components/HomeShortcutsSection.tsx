import React, { useCallback } from 'react';
import { FlatList } from 'react-native';
import { useTranslation } from 'react-i18next';
import i18n from 'i18n';

import { Container, DirectAccess, OptionButton } from 'components';
import { ShortcutType } from 'utils';
import {
  CardPayIcon,
  CellphoneIcon,
  EthosQRIcon,
  FilmIcon,
  LampIcon,
  LockClosedIcon,
  PawIcon,
  PeopleIcon,
  TackIcon,
  TimeIcon,
  UmbrellaIcon,
  WaterIcon,
} from 'assets/svg';
import Theme from 'theme';

export const LOCKED_SHORTCUTS: ShortcutType[] = [
  {
    id: 'turnOffCard',
    label: i18n.t('shortcuts:turnOffCard'),
    icon: <LockClosedIcon color={Theme.Colors.DarkSoul} />,
  },
  {
    id: 'contacts',
    label: i18n.t('shortcuts:contacts'),
    icon: <PeopleIcon color={Theme.Colors.DarkSoul} />,
  },
  {
    id: 'payCard',
    label: i18n.t('shortcuts:payCard'),
    icon: <CardPayIcon color={Theme.Colors.DarkSoul} />,
  },
  {
    id: 'scheduledPayments',
    label: i18n.t('shortcuts:scheduledPayments'),
    icon: <TimeIcon color={Theme.Colors.DarkSoul} />,
  },
  {
    id: 'topUps',
    label: i18n.t('shortcuts:topUps'),
    icon: <CellphoneIcon color={Theme.Colors.DarkSoul} />,
  },
  {
    id: 'ethosPlusBenefits',
    label: i18n.t('shortcuts:ethosPlusBenefits'),
    icon: <UmbrellaIcon color={Theme.Colors.DarkSoul} />,
  },
  {
    id: '2x1Cinema',
    label: i18n.t('shortcuts:2x1Cinema'),
    icon: <FilmIcon color={Theme.Colors.DarkSoul} />,
  },
  {
    id: 'petBenefits',
    label: i18n.t('shortcuts:petBenefits'),
    icon: <PawIcon color={Theme.Colors.DarkSoul} />,
  },
  {
    id: 'electricityAndGas',
    label: i18n.t('shortcuts:electricityAndGas'),
    icon: <LampIcon color={Theme.Colors.DarkSoul} />,
  },
  {
    id: 'water',
    label: i18n.t('shortcuts:water'),
    icon: <WaterIcon color={Theme.Colors.DarkSoul} />,
  },
  {
    id: 'ethosCreditQR',
    label: i18n.t('shortcuts:ethosCreditQR'),
    icon: <EthosQRIcon color={Theme.Colors.DarkSoul} />,
  },
];

interface Props {
  onPressShortcut?: (id: string) => void;
  onPressShortcuts?: () => void;
}

const HomeShortcutsSection: React.FC<Props> = ({
  onPressShortcut = () => {},
  onPressShortcuts = () => {},
}: Props) => {
  const { t } = useTranslation();

  const handlePressShortcut = useCallback(
    (id: string) => {
      onPressShortcut(id);
    },
    [onPressShortcut],
  );

  const renderItem = ({ item }: { item: ShortcutType }) => (
    <Container style={{ width: '33.33%', marginBottom: Theme.Sizes.Padding }}>
      <OptionButton
        onPress={() => {
          if (item.action) item.action();
          else handlePressShortcut(item.id);
        }}
        label={t(`shortcuts:${item.id}`)}
        icon={item.icon}
      />
    </Container>
  );

  return (
    <Container flex>
      <DirectAccess
        label={t('home:shortcuts')}
        onPress={onPressShortcuts}
        customIcon={<TackIcon />}
      />
      <Container style={{ marginVertical: 18 }}>
        <FlatList
          data={[...LOCKED_SHORTCUTS]}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={3}
          scrollEnabled={false}
        />
      </Container>
    </Container>
  );
};

export default HomeShortcutsSection;
