import Image from "next/image";
function OfficeCard({ image, title, description }) {
  return (
    <div className="group md:min-w-[544px] min-w-[320px] cursor-pointer">
      <Image src={image} alt="" />
      <div className="flex md:items-center gap-4">
    

        <div className=" cursor-pointer my-5">
          <h4 className="group-hover:text-blue-600 my-2 font-semibold text-lg">
            {title}
          </h4>
          <p className="group-hover:text-blue-600 text-gray-600 ">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default OfficeCard;