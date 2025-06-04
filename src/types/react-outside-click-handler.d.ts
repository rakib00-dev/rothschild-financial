declare module 'react-outside-click-handler' {
  import * as React from 'react';

  export interface OutsideClickHandlerProps {
    onOutsideClick: (event: MouseEvent | TouchEvent) => void;
    children: React.ReactNode;
    disabled?: boolean;
    useCapture?: boolean;
  }

  export default class OutsideClickHandler extends React.Component<OutsideClickHandlerProps> {}
}
