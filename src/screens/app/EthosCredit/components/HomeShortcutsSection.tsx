import React, { useCallback } from 'react';
import { Alert, FlatList } from 'react-native';
import { useTranslation } from 'react-i18next';
import i18n from 'i18n';

import { Container, DirectAccess, OptionButton } from 'components';
import { ShortcutType } from 'utils';
import { LockClosedIcon, PeopleIcon } from 'assets/svg';
import Theme from 'theme';

const LOCKED_SHORTCUTS: ShortcutType[] = [
  {
    id: 'turnOffCard',
    label: i18n.t('shortcuts:turnOffCard'),
    icon: <LockClosedIcon color={Theme.Colors.DarkSoul} />,
  },
  {
    id: 'contacts',
    label: i18n.t('shortcuts:contacts'),
    icon: <PeopleIcon color={Theme.Colors.DarkSoul} />,
    action: () => Alert.alert('Contacts'),
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
      <DirectAccess label={t('home:shortcuts')} onPress={onPressShortcuts} />
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
