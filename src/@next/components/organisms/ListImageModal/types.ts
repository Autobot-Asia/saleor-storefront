export interface IProps {
  showModal: boolean;
  setShowModal: (stt: boolean) => void;
  selectedImage: number;
  listImage: any;
  onChangeIndex?: any;
  title?: string;
}
