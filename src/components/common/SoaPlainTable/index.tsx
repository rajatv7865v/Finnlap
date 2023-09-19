export default function SoaTable({
  WrapperClass,
  KeyClassName,
  ValueClassName,
  ChildOneClass,
  ChildTwoClass,
  ChildThreeClass,
  ChildFourClass,
  Key1,
  Value1,
  Key2,
  Value2,
  Key3,
  Value3,
  Key4,
  Value4,
}: any) {
  return (
    <>
      <div className={`${WrapperClass}  `}>
        <div className={`${ChildOneClass}`}>
          <p className={`${KeyClassName} text-xs text-lightDark font-semibold`}>
            {Key1}
          </p>
          <p className={`${ValueClassName} text-xs text-darKestGray`}>
            {Value1}
          </p>
        </div>
        <div className={`${ChildTwoClass}`}>
          <p className={`${KeyClassName} text-xs text-lightDark font-semibold`}>
            {Key2}
          </p>
          <p className={`${ValueClassName} text-xs text-darKestGray`}>
            {Value2}
          </p>
        </div>
        <div className={`${ChildThreeClass}`}>
          <p className={`${KeyClassName} text-xs text-lightDark font-semibold`}>
            {Key3}
          </p>
          <p className={`${ValueClassName} text-xs text-darKestGray`}>
            {Value3}
          </p>
        </div>
        <div className={`${ChildFourClass}`}>
          <p className={`${KeyClassName} text-xs text-lightDark font-semibold`}>
            {Key4}
          </p>
          <p className={`${ValueClassName} text-xs text-darKestGray`}>
            {Value4}
          </p>
        </div>
      </div>
    </>
  );
}

// grid grid-cols-3
//grid col-span-3 grid-cols-2
//col-span-1 flex flex-col
