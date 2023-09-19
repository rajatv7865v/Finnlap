// import { getAppDetails } from 'src/store/slices/commonSlice';
interface PropTypes {
  children?: React.ReactChild | React.ReactChild[];
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
  variant?: "contained" | "outlined";
  // eslint-disable-next-line no-unused-vars
  onClick?: ((event: React.MouseEvent<HTMLButtonElement>) => void) | undefined;
  fullWidth?: boolean;
  color?: "red" | "warning" | "green" | "lightBlueDull" | "black" | "darkBlue";
  disabled?: boolean;
  loaderColor?: string;
  loadingState?: true | false;
  value?: any;
}
// To-do's Button state shold come from the component
export default function Button(props: PropTypes) {
  //   const appDetails = useSelector(getAppDetails);
  const {
    children,
    type,
    className,
    variant,
    onClick,
    fullWidth,
    color,
    disabled,
    loaderColor = "#fff",
    loadingState = false,
    value,
  } = props;

  return (
    <button
      onClick={onClick}
      type={type}
      className={`border-2 flex justify-center items-center py-1 2xl:px-4 md:px-2 ${className}
      disabled:text-grayText disabled:bg-lightGray disabled:border-none disabled:cursor-not-allowed
      ${
        variant === "outlined"
          ? `text-${color} border-${color} rounded-full`
          : `text-white bg-${color}  hover:shadow-md`
      }
      ${fullWidth && "w-full"}
      `}
      disabled={disabled}
      value={value}
    >
      {children}
    </button>
  );
}
