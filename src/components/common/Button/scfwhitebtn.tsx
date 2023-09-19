interface PropTypes {
  buttonname?: string;
  onClick?: any;
  rounded?: any;
  disabled?: any;
  textstyle?: any;
}
export default function ScfWhiteBtn(props: PropTypes) {
  const { buttonname, onClick, rounded, disabled, textstyle } = props;
  return (
    <>
      <div
        className={`cursor-pointer bg-white ${
          rounded ? rounded : 'rounded-lg'
        }`}
        onClick={disabled ? null : onClick}
      >
        <p className={`text-steelBlue ${textstyle} py-[8px] px-[40px] text-xs`}>
          {buttonname}
        </p>
      </div>
    </>
  );
}
