import { useState } from "react";
import BoxFoodMenu from "./Box-food-menu";
import ModalMenuFood from "./ModalFoodMenu";

const FoodList = ({ title, list }: any) => {
  const [showModal, setShowModal] = useState(false);
  const [informationFood, setInforamtionFood] = useState(null);

  console.log(informationFood);
  
  return (
    <>
      <div className="px-[20px] my-3 md:my-4 md:px-[60px] lg:px-[90px]">
        <p className="text-[16px] my-2 pt-4 pb-2 md:text-[20px] lg:text-[24px] font-[700]">
          {title}
        </p>
        <div className="grid grid-cols-1 grid-rows-1 md:grid-rows-2 md:grid-cols-2 gap-3">
          {list.map((item: any) => (
            <BoxFoodMenu setData={setInforamtionFood} setShow={setShowModal} key={item.id} {...item} />
          ))}
        </div>
      </div>
      {showModal && <ModalMenuFood data={informationFood} setShow={setShowModal} />}
    </>
  );
};
export default FoodList;
