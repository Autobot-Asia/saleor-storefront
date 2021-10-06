export interface IProps {
  hideModal: () => void;
  target?: HTMLElement | null;
  formId?: string;
  title: string;
  children?: React.ReactNode;
}
