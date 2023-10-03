import React, { useEffect, useRef, useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Container } from 'components/atoms';
import Theme from 'theme';
import PagerView from 'react-native-pager-view';
import { DotIndicator } from './DotIndicator';

interface Props {
  images: string[];
}

const ImageCarousel: React.FC<Props> = ({ images }: Props) => {
  const {
    swiper, slide, image,
  } = styles;

  const pagerViewRef = useRef<PagerView>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      pagerViewRef.current?.setPage(currentIndex === (images.length - 1) ? 0 : currentIndex + 1);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [currentIndex, images]);

  return (
    <Container middle flex>
      <Container style={swiper}>
        <PagerView
          ref={pagerViewRef}
          style={{ flex: 1 }}
          initialPage={0}
          onPageSelected={(event) => {
            setCurrentIndex(event.nativeEvent.position);
          }}
        >
          {images.map((url, index) => (
            <Container middle center key={index} style={slide}>
              <Image source={{ uri: url }} style={image} />
            </Container>
          ))}
        </PagerView>
      </Container>
      <DotIndicator
        totalDots={images.length}
        currentIndex={currentIndex}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  swiper: {
    height: 90,
    width: '100%',
    marginBottom: Theme.Sizes.Padding,
  },
  slide: {
    width: '100%',
    borderRadius: 25,
    backgroundColor: Theme.Colors.WhiteSmoke,
  },
  image: {
    width: '100%',
    height: 90,
    borderRadius: 25,
    // TODO: BACKEND IMAGE CHANGE TO 'contain'
    resizeMode: 'cover',
  },
});

export { ImageCarousel };
