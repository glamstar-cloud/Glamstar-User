import { useParams } from "react-router-dom";
import CardData from "../CardsData";
import Dp from '../../../Assets/Chats/CB2.png'
import SDBtn from "./SDBtn";

export default function ServiceDetails() {
  const { id } = useParams();

  const service = CardData.find((item) => item.id === Number(id));

  if (!service) return <p>Service not found</p>;

  return (
  <>
    <section className="bg-red-50">
      <div className="py-5 px-3">
        <div className="flex items-center gap-3 pb-5">
          <img src={Dp} alt="service.brand" className="rounded-full w-25 h-25 shadow-md" />
        <div className="space-y-1">
          <h1 className="font-playfair font-bold truncate">{service.title}</h1>
          <h2 className="font-semibold text-sm">By {service.brand}</h2>
          <p className="text-sm text-gray-500">{service.rating}</p>
          <p className="font-bold font-inter text-gray-500">{service.location}</p>
        </div>
        </div>
        <div className="ml-28">
          <SDBtn id={service.id}/>
        </div>
          
      
          
      </div>
    </section>
  </>
  );
}
