import { useEffect, useState } from 'react';
import { Keyboard } from 'react-native';

export function useKeyboard(): { isShown: boolean } {
  const [isShown, setIsShown] = useState<boolean>(false);

  useEffect(() => {
    const keyboardShowsListener = Keyboard.addListener(
      'keyboardDidShow',
      () => setIsShown(true),
    );
    const keyboardHidesListener = Keyboard.addListener('keyboardDidHide', () => setIsShown(false));

    return () => {
      keyboardShowsListener.remove();
      keyboardHidesListener.remove();
    };
  }, []);

  return { isShown };
}
