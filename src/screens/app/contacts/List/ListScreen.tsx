import React from 'react';
import {
  FlatList, StyleSheet,
} from 'react-native';
import { useTranslation } from 'react-i18next';

import {
  Button, Container, Header, ProfilePhoto, Text, Touchable,
} from 'components';
import { SearchInput } from 'components/molecules/SearchInput';
import Theme from 'theme';

interface ContactHeaderProps {
  data: any[];
  onSearch: (value: string) => void;
  onPressContact: (id: number) => void;
}

interface ContactsListProps {
  data: any[];
  horizontal?: boolean;
  onPressContact: (id: number) => void;
}

interface Props {
  data: any[];
  onSearch?: (value: string) => void;
  onPressContact?: (id: number) => void;
  onPressNewContact?: () => void;
}

const ListScreen: React.FC<Props> = ({
  data,
  onSearch = () => {},
  onPressContact = () => {},
  onPressNewContact = () => {},
}: Props) => {
  const { content, button } = styles;
  const { t } = useTranslation();

  return (
    <Container flex>
      <Header title={t('contacts:contacts')} />
      <Container style={button}>
        <Button
          label={t('contacts:newContact')}
          onPress={onPressNewContact}
        />
      </Container>
      <Container style={content}>
        <ContactHeader data={data} onSearch={onSearch} onPressContact={onPressContact} />
      </Container>
      <Container flex style={{ marginTop: Theme.Sizes.MarginTop }}>
        <Text
          text={t('contacts:contacts')}
          fontWeight="Medium"
          marginHorizontal={Theme.Sizes.Padding}
        />
        <ContactsList data={data} onPressContact={onPressContact} />
      </Container>
    </Container>
  );
};

const ContactHeader: React.FC<ContactHeaderProps> = ({
  data,
  onSearch,
  onPressContact,
}: ContactHeaderProps) => {
  const { t } = useTranslation();

  return (
    <Container>
      <SearchInput onSearch={onSearch} style={{ marginHorizontal: 0 }} />
      <Container>
        <Text text={t('contacts:last')} fontWeight="Medium" marginBottom={Theme.Sizes.Padding} />
        <ContactsList data={data} horizontal onPressContact={onPressContact} />
      </Container>
    </Container>
  );
};

const ContactsList: React.FC<ContactsListProps> = ({
  data,
  horizontal = false,
  onPressContact,
}: ContactsListProps) => {
  const { content, contentContainerStyle } = styles;
  const { t } = useTranslation();

  const renderEmpty = () => (
    <Text textAlign="center" text={t('contacts:noneContacts')} fontWeight="Medium" />
  );

  const renderItemHorizontal = ({ item }: { item: { id: number; name: string } }) => (
    <Touchable onPress={() => onPressContact(item.id)}>
      <Container key={item.id.toString()} style={{ marginRight: Theme.Sizes.Padding }}>
        <ProfilePhoto
          size={56}
          fadeIn
          withName
          info={{
            name: item.name,
            // eslint-disable-next-line max-len
            uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          }}
          textProps={{
            fontSize: 12,
            fontWeight: 'Medium',
            textAlign: 'center',
          }}
          bottomStyle={{ marginTop: 8 }}
        />
      </Container>
    </Touchable>
  );

  const renderItem = ({ item }: { item: { id: number; name: string } }) => (
    <Touchable onPress={() => onPressContact(item.id)}>
      <Container
        flex
        row
        center
        style={{
          padding: Theme.Sizes.Padding,
          borderBottomWidth: 1,
          borderBottomColor: Theme.Colors.PlaceboBlue,
        }}
      >
        <Container>
          <ProfilePhoto
            size={36}
            fadeIn
            info={{
              name: item.name,
              // eslint-disable-next-line max-len
              uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            }}
            textProps={{
              fontSize: 12,
              fontWeight: 'Medium',
              textAlign: 'center',
            }}
            bottomStyle={{ marginTop: 0 }}
          />
        </Container>
        <Container style={{ marginHorizontal: Theme.Sizes.Padding }}>
          <Text text={item.name} fontSize={16} fontWeight="Medium" />
        </Container>
      </Container>
    </Touchable>
  );

  return (
    <FlatList
      data={data}
      ListEmptyComponent={renderEmpty}
      contentContainerStyle={[{ flexGrow: 1 }, content, {
        marginHorizontal: horizontal ? 0 : Theme.Sizes.Padding,
      }, !horizontal && contentContainerStyle]}
      renderItem={horizontal ? renderItemHorizontal : renderItem}
      keyExtractor={(item) => item.id.toString()}
      horizontal={horizontal}
      bounces
    />
  );
};

const styles = StyleSheet.create({
  content: {
    marginHorizontal: Theme.Sizes.Padding,
  },
  button: {
    marginTop: 40,
    marginBottom: 16,
    marginHorizontal: Theme.Sizes.Padding,
  },
  contentContainerStyle: {
    backgroundColor: Theme.Colors.DrWhite,
    borderRadius: 24,
    marginTop: Theme.Sizes.Padding,
    marginHorizontal: Theme.Sizes.Padding,
  },
});

export default ListScreen;
