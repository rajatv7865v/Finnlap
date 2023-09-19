interface IInfoCardDetail {
  displayName: string;
  value: string;
}

interface IInfoCard {
  title?: string;
  data?: IInfoCardDetail[];
}

export function InfoCard({ title, data }: IInfoCard) {
  return (
    <div>
      <div className="font-bold my-4 text-[16px] leading-5">{title}</div>
      {/* <div className="mt-4">
        {data?.map((item, index) => {
          return (
            <>
              <div key={index} className="my-2 grid w-3/4 lg:w-96 grid-cols-2">
                <div className="flex justify-between text-sm font-semibold text-darkGray">
                  <span>{item.displayName}</span>
                  <span>:</span>
                </div>
                <div className="pl-4 text-sm font-semibold text-lightDark">
                  {item.value}
                </div>
              </div>
            </>
          );
        })}
      </div> */}
    </div>
  );
}
