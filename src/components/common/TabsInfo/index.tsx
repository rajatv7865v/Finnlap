interface PropTypes {
  Icon?: any;
  IconSize?: any;
  Iconcolor?: any;
  Name?: string;
  Id?: any;
  className?: string;
  wrapperName?: string;
  onClick?: any;
}

export default function TabsInfo(props: PropTypes) {
  const {
    Icon,
    IconSize,
    Iconcolor,
    Name,
    Id,
    className,
    wrapperName,
    onClick,
  } = props;
  return (
    <>
      <div
        className={` ${wrapperName} flex cursor-pointer  shadowonbox border-solid border-2 rounded-r-3xl border-white py-2.5 px-3 `}
        onClick={onClick}
      >
        <Icon size={IconSize} color={Iconcolor} />
        <h1
          className={` mt-1 ${className}  font-semibold text-sm sideTextcolor`}
        >
          {Name}
        </h1>
        <h1
          className={` mt-1 ${className}  font-semibold text-sm sideTextcolor`}
        >
          {Id}
        </h1>
      </div>

      <style jsx>{`
        .shadowonbox {
          box-shadow: 0px 0px 8px 0px #d6d0d0;
        }

        .sideTextcolor {
          font-weight: 700;
          font-size: 14px;
          line-height: 17px;
          color: #2f2f2f;
        }
      `}</style>
    </>
  );
}
