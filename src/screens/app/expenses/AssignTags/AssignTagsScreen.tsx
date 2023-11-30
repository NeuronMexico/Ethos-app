import React, { useState } from 'react';
import {
  Button,
  ButtonGroup,
  ButtonGroupOption,
  Container, Header, Input, MultipleTextButton, Touchable,
} from 'components';
import Theme from 'theme';
import { LensIcon, MessageDotsIcon, MoreIcon } from 'assets/svg';
import { useTranslation } from 'react-i18next';
import { StyleSheet } from 'react-native';
import { NewTagModal } from 'components/organisms/NewTagModal';

interface Props {
  item: any
}

const OPTIONS: Array<ButtonGroupOption> = [{
  label: 'Departamental',
  onPress: () => {},
  buttonStyle: {
    backgroundColor: Theme.Colors.SpaceCadet,
    textColor: Theme.Colors.White,
  },
},
{
  label: 'Gastos en general',
  onPress: () => {},
  buttonStyle: {
    backgroundColor: Theme.Colors.BossaNovaBlue,
    textColor: Theme.Colors.White,
  },
},
{
  label: 'Gasolina',
  onPress: () => {},
  buttonStyle: {
    backgroundColor: Theme.Colors.DarkSoul,
    textColor: Theme.Colors.White,
  },
},
{
  label: 'Entretenimiento',
  onPress: () => {},
  buttonStyle: {
    backgroundColor: Theme.Colors.BlueBuzz,
    textColor: Theme.Colors.White,
  },
},
{
  label: 'Salud',
  onPress: () => {},
  buttonStyle: {
    backgroundColor: Theme.Colors.GreatFalls,
    textColor: Theme.Colors.White,
  },
},
{
  label: 'Súper',
  onPress: () => {},
  buttonStyle: {
    backgroundColor: Theme.Colors.Wistful,
    textColor: Theme.Colors.White,
  },
},
{
  label: 'Gastos hogar',
  onPress: () => {},
  buttonStyle: {
    backgroundColor: Theme.Colors.DarkBlue,
    textColor: Theme.Colors.White,
  },
},
];

const AssignTagsScreen: React.FC<Props> = ({ item }) => {
  const { t } = useTranslation();
  const [isCreateTagModalVisible, setCreateTagModalVisible] = useState(false);
  const [searchTagName, setSearchTagName] = useState('');
  const [newTagName, setNewTagName] = useState('');
  const [newTagColor, setNewTagColor] = useState(Theme.Colors.LiquidLava);

  const handlerTagModal = () => {
    setCreateTagModalVisible(!isCreateTagModalVisible);
  };

  const createNewTag = (name: string, color: string) => {
    setNewTagColor(color);
    setNewTagName(name);
    handlerTagModal();
  };

  return (
    <Container>
      <Header
        title={t('expenses:assignTags')}
        rightAction={() => {}}
        rightIcon={<MessageDotsIcon />}
      />
      <Container style={{ paddingHorizontal: Theme.Sizes.Padding }}>
        <MultipleTextButton
          onPress={() => {}}
          title={item?.title}
          label={item?.description}
          rightText={item?.amount}
          rightTextColor={item?.description === 'Pago TDC' ? Theme.Colors.DarkBlue : ''}
          barColor={item?.color}
          alignContent="space-between"
          marginTop={32}
        />
        <Container row style={styles.inputContainer}>
          <Input
            value={searchTagName}
            onChangeText={setSearchTagName}
            placeholder={t('expenses:search')}
            width="85%"
            prefixIcon={<LensIcon width={20} height={20} />}
          />
          <Touchable onPress={handlerTagModal}>
            <Container middle style={styles.rightButtonContainer} backgroundColor={Theme.Colors.PlaceboBlue}>
              <MoreIcon width={30} height={30} />
            </Container>
          </Touchable>
        </Container>
        {newTagName && newTagColor && (
        <Button
          label={newTagName}
          onPress={() => {}}
          backgroundColor={newTagColor ?? Theme.Colors.WhiteSmoke}
          paddingVertical={8}
          paddingHorizontal={16}
          textColor={Theme.Colors.DarkSoul}
          marginTop={16}
        />
        )}
        {isCreateTagModalVisible ? (
          <NewTagModal
            onClose={handlerTagModal}
            onTagCreated={createNewTag}
          />
        ) : (
          <ButtonGroup options={OPTIONS} buttonVerticalPadding={10} buttonHorizontalPadding={30} marginTop={13} />
        )}
      </Container>
    </Container>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  filterContainer: {
    gap: 16,
    width: '100%',
    paddingVertical: Theme.Sizes.Padding,
    marginBottom: 0,
    paddingHorizontal: Theme.Sizes.Padding,
    backgroundColor: Theme.Colors.White,
    borderRadius: 24,
    shadowColor: Theme.Colors.Carbon,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 8,
  },
  rightButtonContainer: {
    width: 40,
    height: 40,
    borderRadius: 14,
    margin: 'auto',
  },
});

export default AssignTagsScreen;
