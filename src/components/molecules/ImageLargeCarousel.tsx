import React, {
  useEffect, useRef, useState,
} from 'react';
import { Image, ImageSourcePropType, StyleSheet } from 'react-native';
import { Container } from 'components/atoms';
import Theme from 'theme';
import PagerView from 'react-native-pager-view';
import { DotSimpleIndicator } from './DotSimpleIndicator';

interface Props {
  images: Array<string | ImageSourcePropType>;
}

const ImageLargeCarousel: React.FC<Props> = ({ images }: Props) => {
  const {
    swiper, slide, image,
  } = styles;

  const pagerViewRef = useRef<PagerView>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      pagerViewRef.current?.setPage(currentIndex === (images.length - 1) ? 0 : currentIndex + 1);
    }, 8000);

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
          {images.map((url, index) => {
            if (typeof url === 'string') {
              return (
                <Container middle center key={index} style={slide}>
                  <Image source={{ uri: url }} style={image} />
                </Container>
              );
            }
            return (
              <Container middle center key={index} style={slide}>
                <Image source={url} style={image} />
              </Container>
            );
          })}
        </PagerView>
      </Container>
      <DotSimpleIndicator
        totalDots={images.length}
        currentIndex={currentIndex}
        sameDotWidth
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  swiper: {
    height: 280,
    width: '100%',
    // backgroundColor: 'pink',
  },
  slide: {
    width: '100%',
    // backgroundColor: Theme.Colors.WhiteSmoke,
  },
  image: {
    width: '100%',
    height: 280,
    resizeMode: 'cover',
  },
});

export { ImageLargeCarousel };
