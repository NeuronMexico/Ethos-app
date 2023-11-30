import React, { useRef, useState } from 'react';
import { StyleSheet } from 'react-native';
import PagerView from 'react-native-pager-view';
import { Container, Header, Text } from 'components';

interface Props {
  prop?: string
}

const UserValidationScreen: React.FC<Props> = (props: Props) => {
  const pagerViewRef = useRef<PagerView>(null);

  const [currentPage, setCurrentPage] = useState<number>(0);

  return (
    <Container flex>
      <Header
        title=""
        ethosHeader
        showBackButton={currentPage > 0}
        backAction={() => pagerViewRef.current?.setPage(currentPage - 1)}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 14
  }
});

export default UserValidationScreen;
