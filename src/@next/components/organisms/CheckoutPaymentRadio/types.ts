export interface IProps {
  /**
   * Label or additional content which belongs to the radio.
   */
  children?: React.ReactNode;
  checked: boolean;
  onChange: () => void;
  /**
   * If true, it will not wrap radio input in label tag.
   */
}
