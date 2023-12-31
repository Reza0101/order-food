import { imagesModal } from "@/types";
const ModalImage = ({ img, setShow }: imagesModal) => {
  return (
    <div
      onClick={() => setShow(false)}
      className="flex overflow-hidden items-center top-0 bottom-0 fixed z-50 w-[100%]  justify-center"
    >
      <div className="z-50 fixed top-0 bg-black opacity-[0.8] w-[100%] h-[100%]"></div>

      <img
        onClick={(e) => e.stopPropagation()}
        src={img}
        className="fixed modalAnimation z-50 w-[80%] md:w-[60%] mx-auto top-[200px] md:top-[150px]"
        alt=""
      />
    </div>
  );
};

export default ModalImage;
