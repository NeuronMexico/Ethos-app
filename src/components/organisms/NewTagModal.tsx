import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Container, Input } from 'components';
import Theme from 'theme';
import { CustomText as Text } from 'components/atoms/CustomText';
import { useTranslation } from 'react-i18next';

interface NewTagModalProps {
  onClose: () => void;
  onTagCreated: (name: string, color: string) => void;
}

const colorOptions = [
  Theme.Colors.MintCream,
  Theme.Colors.CeladonGreen,
  Theme.Colors.MagicMint,
  Theme.Colors.EtonBlue,
  Theme.Colors.GreenSheen,
  Theme.Colors.ForestGreenTraditional,
  Theme.Colors.GlacierBlue,
  Theme.Colors.CadetBlue,
  Theme.Colors.SteelBlue,
  Theme.Colors.RichElectricBlue,
  Theme.Colors.BlueRibbon,
  Theme.Colors.PrussianBlue,
  Theme.Colors.SpaceCadet,
  Theme.Colors.Wistful,
  Theme.Colors.DarkBlue,
  Theme.Colors.Midnight,
  Theme.Colors.BossaNovaBlue,
  Theme.Colors.DarkSoul,
  Theme.Colors.BarberryYellow,
  Theme.Colors.Purception,
  Theme.Colors.SonicBlue,
  Theme.Colors.ToyBlue,
  Theme.Colors.AdamantineBlue,
  Theme.Colors.SpringBouquet,
  Theme.Colors.GreenGlow,
  Theme.Colors.HotCoral,
  Theme.Colors.ShadowSteel,
  Theme.Colors.OranzhewyiOrange,
  Theme.Colors.TangledWeb,
  Theme.Colors.BlueBuzz,
];

const NewTagModal: React.FC<NewTagModalProps> = ({ onClose, onTagCreated }) => {
  const { t } = useTranslation();
  const [tagName, setTagName] = useState('');
  const [selectedColor, setSelectedColor] = useState(colorOptions[0]);

  const createTag = () => {
    if (tagName && selectedColor) {
      onTagCreated(tagName, selectedColor);
      onClose();
    }
  };

  const colorsInRows = [];
  const rowSize = 6;

  for (let i = 0; i < colorOptions.length; i += rowSize) {
    const rowColors = colorOptions.slice(i, i + rowSize);
    colorsInRows.push(rowColors);
  }

  return (
    <Container style={styles.modalContainer}>
      <Text typography="header">{t('expenses:newTagTitle')}</Text>
      <Input
        onChangeText={(text) => setTagName(text)}
        value={tagName}
      />
      <Container style={styles.colorPicker}>
        {colorsInRows.map((row, rowIndex) => (
          <Container key={rowIndex} style={styles.colorRow}>
            {row.map((color, colorIndex) => (
              <Container width={32} height={32} key={colorIndex}>
                <TouchableOpacity
                  key={colorIndex}
                  style={[
                    styles.colorCircle,
                    { backgroundColor: color },
                    selectedColor === color && styles.selectedColorCircle,
                  ]}
                  onPress={() => setSelectedColor(color)}
                />
              </Container>
            ))}
          </Container>
        ))}
      </Container>
      <Button onPress={createTag} label={t('expenses:saveTag')} />
    </Container>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    padding: 20,
    marginVertical: 13,
    backgroundColor: Theme.Colors.White,
    borderRadius: 10,
    shadowColor: Theme.Colors.Carbon,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 8,
  },
  colorRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  input: {
    marginVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
  colorPicker: {
    justifyContent: 'space-around',
    display: 'flex',
    marginBottom: 16,
    marginTop: 16,
  },
  colorCircle: {
    width: 24,
    height: 24,
    borderRadius: 20,
  },
  selectedColorCircle: {
    width: 30,
    height: 30,
    borderWidth: 5,
    borderColor: Theme.Colors.PlaceboBlue,
  },
  createButton: {
    backgroundColor: Theme.Colors.PlaceboBlue,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  createButtonText: {
    color: Theme.Colors.DarkSoul,
    fontWeight: 'bold',
  },
  closeButton: {
    padding: 10,
    marginTop: 10,
  },
  closeButtonText: {
    color: Theme.Colors.PlaceboBlue,
  },
});

export { NewTagModal };
