import Image from "next/image";

function ProductCard({image, description, title,background }) {
  return (
    <div className="lg:my-32 my-16">
      <div className={`${background}`} >
        <Image
          src={image}
          className="group-hover:scale-105 transition-all duration-500"
          alt=""
        />
      </div>
      <div className="my-10">
        <h4
          className="text-4xl leading-3.125 font-MontBold "  
        >{title}</h4>
        <p className="text-base max-w-2xl leading-8 text-gray-500 my-4">
          {description}
        </p>
      </div>
    </div>
  );
}

export default ProductCard;