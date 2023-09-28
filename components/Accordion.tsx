import react, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const AccordionBS = ({
  title,
  caption,
  id,
}: {
  title: string;
  caption: string;
  id: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-3 border">
      <div
        onClick={() => setOpen((prev) => !prev)}
        className="flex cursor-pointer py-2 items-center justify-between w-full"
      >
        <p className={`${open && 'text-primary font-bold'}`}>{title}</p>
        <IoIosArrowDown className={`${open && 'rotate-180'} duration-300`} />
      </div>
      <div
        className={`${
          open
            ? "max-h-[800px] opacity-1 transition-all duration-1000"
            : "max-h-0 overflow-hidden opacity-0 duration-700"
        }`}
      >
        {caption}
      </div>
    </div>
  );
};
export default AccordionBS;
