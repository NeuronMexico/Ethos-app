import React, { useCallback, useRef, useState } from 'react';
import {
  StyleProp, StyleSheet, TextInput, ViewStyle,
} from 'react-native';
import { useTranslation } from 'react-i18next';

import { LensIcon } from 'assets/svg';
import { Container } from 'components/atoms/Container';
import { Input } from 'components/atoms/Input';
import Theme from 'theme';

interface Props {
  onSearch: (searchTerm: string) => void;
  style?: StyleProp<ViewStyle>;
}

const SearchInput: React.FC<Props> = ({ onSearch, style }) => {
  const { t } = useTranslation();
  const { container } = styles;

  const searchRef = useRef<TextInput>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearch = useCallback((value: string) => {
    setSearchTerm(value);
    setTimeout(() => {
      onSearch(value);
    }, 300);
  }, [onSearch]);

  return (
    <Container style={[container, style]}>
      <Input
        ref={searchRef}
        placeholder={t('global:search')}
        prefixIcon={<LensIcon />}
        onChangeText={handleSearch}
        value={searchTerm}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: Theme.Sizes.Padding,
    marginBottom: Theme.Sizes.Padding,
  },
});

export { SearchInput };
