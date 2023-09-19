interface PropTypes {
  wrapperClass?: string;
  TableData?: any;
  TableHeaderData?: any;
}

export default function Table(props: PropTypes) {
  const { TableData, wrapperClass, TableHeaderData } = props;

  return (
    <div className="">
      <div
        className={`grid ${wrapperClass} bg-darkBlue border border-darkBlue rounded-t-xl`}
      >
        {TableHeaderData.map((el: any, index: number) => {
          return (
            <div
              className={`p-3  ${
                TableHeaderData?.length - 1 !== index && "border-r border-white"
              } text-sm py-5 font-semibold text-white text-center flex justify-center items-center`}
              key={index}
            >
              {el}
            </div>
          );
        })}
      </div>
    </div>
  );
}
