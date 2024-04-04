import { useSharedContext } from "../context/SharedContext";
import { FollowerPointerCard } from "../constant/index";
import avatar from "../../public/avatar.webp";

function EducationCard({ education }) {
  const { userData } = useSharedContext();
  return (
    <div className="w-80 mx-auto ">
      <FollowerPointerCard
        title={<TitleComponent title={userData?.about?.name} avatar={avatar} />}
      >
        <div className="relative overflow-hidden h-[600px] rounded-2xl transition duration-200 group bg-[#3c2a52] hover:shadow-xl border border-zinc-100 flex flex-col">
          <div className="w-full  relative p-4 rounded-t-2xl flex-1 flex flex-col">
            <h2 className="font-bold my-4 text-lg text-white/90 flex-1">
              {education?.company_name}
            </h2>
            <p className="text-end text-white/80 flex-1">
              {education?.jobTitle}
            </p>

            <p className="text-white/80 text-sm pt-4 flex-1">
              {education?.summary}
            </p>

            <div className=" flex justify-center">
              <p
                className="text-black/80  text-sm bg-gray-300 my-5 rounded-xl py-1 px-2 inline  
            "
              >
                <span>
                  {new Date(education?.startDate).toLocaleDateString()}
                </span>{" "}
                to
                <span>
                  {" "}
                  {new Date(education?.endDate).toLocaleDateString()}
                </span>
              </p>
            </div>
          </div>
          <div className=" p-4 h-[340px] ">
            <h2 className="font-bold my-4 text-lg text-white/90">
              Responsibilities:
            </h2>
            <h2 className="font-normal my-4 text-sm text-white/80">
              {education?.bulletPoints?.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </h2>
          </div>
        </div>
      </FollowerPointerCard>
    </div>
  );
}

export default EducationCard;

const TitleComponent = ({ title, avatar }) => (
  <div className="flex space-x-2 items-center">
    <img
      src={avatar}
      alt="thumbnail"
      className="rounded-full border-2 border-white h-6 w-6"
    />
    <p>{title}</p>
  </div>
);
