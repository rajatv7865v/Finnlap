export default function SoaTable({
  WrapperClass,
  Key,
  Value,
  keyClassName,
  ValueClassName,
}: any) {
  return (
    <>
      <div className={`${WrapperClass}  `}>
        <p className={`${keyClassName}`}>{Key}</p>
        <p className={`${ValueClassName}`}>{Value}</p>
      </div>
    </>
  );
}
