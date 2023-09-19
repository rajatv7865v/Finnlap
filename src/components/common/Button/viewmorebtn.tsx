interface PropTypes {
  buttonname?: string;

  onClick?: any;
  disabled?: any;
}
export default function ScfWhiteBtn(props: PropTypes) {
  const { buttonname, onClick, disabled } = props;
  return (
    <>
      <div className={`cursor-pointer   `} onClick={onClick}>
        <p className='text-white text-sm underline'>{buttonname}</p>
      </div>
    </>
  );
}
