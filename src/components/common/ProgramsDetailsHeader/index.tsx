import { useRouter } from "next/router";
import ScfWhiteBtn from "src/components/common/Button/scfwhitebtn";
import ViewMoreBtn from "src/components/common/Button/viewmorebtn";
interface PropTypes {
  Icon?: any;
  IconSize?: any;
  Iconcolor?: any;
  Name?: string;
  Id?: any;
  TableHeaderData?: any;
  className?: string;
  wrapperName?: string;
  IconClasses?: string;
  handleViewMoreClick?: any;
}
useRouter;

export default function ProgramsDetails(props: PropTypes) {
  const {
    Icon,
    IconSize,
    Iconcolor,
    TableHeaderData,
    Name,
    Id,
    IconClasses,
    className,
    wrapperName,
    handleViewMoreClick,
  } = props;

  const { push } = useRouter();

  const handleBlockBtn = () => {};

  return (
    <>
      <div className="grid grid-cols-2 bg-[#243665]  border rounded-t-2xl gap-x-4 py-4 px-0  ">
        <div className="flex col-span-1">
          <Icon size={IconSize} color={Iconcolor} className={IconClasses} />
          <div>
            <h1 className="text-white">{TableHeaderData.name || "N/A"}</h1>

            <p className="text-grayShapes text-sm">
              {TableHeaderData.pan || "N/A"}
            </p>
          </div>
        </div>
        <div className="flex col-span-1 items-center justify-center lg:gap-x-4">
          <ScfWhiteBtn
            buttonname="View SOA"
            onClick={() => {
              push("view-soa");
            }}
          />
          <ScfWhiteBtn
            buttonname="Request for Block Limit"
            onClick={handleBlockBtn}
          />

          <ViewMoreBtn buttonname="View More" onClick={handleViewMoreClick} />
        </div>
      </div>
    </>
  );
}
