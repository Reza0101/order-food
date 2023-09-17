const ModalImage = ({ img,setShow }: any) => {
  console.log(img);

  return (
    <div onClick={() => setShow(false)} className="flex items-center fixed z-50 w-[100%] h-[100%] justify-center">
      <div className="z-50 fixed top-0 bg-black opacity-[0.8] w-[100%] h-[100vh] px-[30px]"></div>

      <img
        onClick={(e) => e.stopPropagation()}
        src={img}
        className="fixed z-50 w-[90%] md:w-[70%] mx-auto top-[200px] md:top-[150px]"
        alt=""
      />
    </div>
  );
};

export default ModalImage;
