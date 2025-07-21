declare module 'react-awesome-slider/dist/with-autoplay' {
  import { ComponentType } from 'react';
  import { AwesomeSliderProps } from 'react-awesome-slider';

  export interface AutoplayProps {
    play?: boolean;
    cancelOnInteraction?: boolean;
    interval?: number;
  }

  const withAutoplay: (
    slider: ComponentType<AwesomeSliderProps>
  ) => ComponentType<AwesomeSliderProps & AutoplayProps>;

  export default withAutoplay;
}
