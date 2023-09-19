interface PropTypes {
  data?: any;
  wrapperClass?: string;
  className?: string;
}

export default function Carts(props: PropTypes) {
  const { wrapperClass, data } = props;

  return (
    <>
      {/* <div
        className={`${wrapperClass} lg:rounded-xl shadowonbox border-[6px] border-darkBlue min-h-[122px]`}
      >
        {data.map((el: any, index: number) => {
          return (
            <div
              className={`grid col-span-1 ${
                data?.length - 1 !== index && 'cartsideborder'
              } `}
              key={index}
            >
              <div className='flex flex-col justify-between px-4 py-2 '>
                <p className='font-semibold text-base text-grayShapes underline flex items-center '>
                  {el?.labelText}
                </p>
                <p className='flex items-center text-2xl  text-white font-bold '>
                  {el?.value}
                </p>
              </div>
            </div>
          );
        })}
      </div> */}

      <style jsx>{`
        .shadowonbox {
          background: #243665;

          box-shadow: 0px 0px 10px 1px rgba(36, 54, 101, 0.25);
        }

        .cartsideborder {
          border-right: 2px solid #ffffff;
        }
      `}</style>
    </>
  );
}
