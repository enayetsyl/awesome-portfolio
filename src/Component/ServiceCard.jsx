import { CardBody, CardContainer, CardItem } from "../Component/ui/3s-card";


 function ServiceCard({service}) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-[#373f77] relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[23rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-white/90 dark:text-white"
        >
          {service?.name}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-white/80 text-sm max-w-sm mt-2 px-2 dark:text-neutral-300"
        >
          {service?.desc}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4 bg-slate-400 rounded-xl">
          <img
            src={service?.image?.url}
         
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt={service?.image?.public_id}
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as='a'
            href="https://twitter.com/mannupaaji"
            target="_blank"
            className="px-4 py-2 rounded-xl text-base font-normal dark:text-white text-white/80"
          >
            Charge <span className="font-bold">{service?.charge}</span> →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Book
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}


export default ServiceCard