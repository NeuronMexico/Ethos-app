import React, { useRef, useState } from 'react';
import {
  FlatList, Keyboard, ScrollView, TextInput, TouchableWithoutFeedback,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import {
  Container, Header, Input, OptionButton, Text,
} from 'components';
import Theme from 'theme';
import { SHORTCUTS_ARRAY, ShortcutType } from 'utils';
import { LensIcon, MoreIcon } from 'assets/svg';

interface Props {
  onPressShortcutAction?: (id: string) => void;
}

const ShortcutsScreen: React.FC<Props> = ({
  onPressShortcutAction = () => {},
}: Props) => {
  const { t } = useTranslation();

  const searchRef = useRef<TextInput>(null);
  const [search, setSearch] = useState<string>('');

  const renderItem = ({ item }: { item: {
    key: string,
    value: ShortcutType[]
  } }) => (
    <Container style={{ marginVertical: 16 }}>
      <Text text={t(`shortcutsCategories:${item.key}`)} fontWeight="Medium" marginLeft={Theme.Sizes.Padding} />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ flex: 1 }}
        contentContainerStyle={{ flexGrow: 1, paddingLeft: Theme.Sizes.Padding }}
      >
        {item.value.map((shortcut) => (
          <Container
            key={shortcut.id}
            style={{ marginTop: 19, marginRight: 24 }}
          >
            <OptionButton
              icon={shortcut.icon}
              label={shortcut.label}
              onPress={() => onPressShortcutAction(shortcut.id)}
              actionIcon={<MoreIcon color={Theme.Colors.PlaceboBlue} />}
            />
          </Container>
        ))}
      </ScrollView>
    </Container>
  );

  return (
    <Container flex>
      <Header title={t('home:shortcuts')} />
      <Container style={{ marginHorizontal: Theme.Sizes.Padding, marginBottom: Theme.Sizes.Padding }}>
        <Input
          ref={searchRef}
          placeholder={t('global:search')}
          prefixIcon={<LensIcon />}
          onChangeText={setSearch}
          value={search}
          editable={false}
        />
      </Container>
      <TouchableWithoutFeedback onPress={() => {
        searchRef.current?.blur();
        Keyboard.dismiss();
      }}
      >
        <FlatList
          data={SHORTCUTS_ARRAY}
          renderItem={renderItem}
          keyExtractor={(item) => item.key}
          style={{ flex: 1 }}
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
        />
      </TouchableWithoutFeedback>
    </Container>
  );
};

export default ShortcutsScreen;