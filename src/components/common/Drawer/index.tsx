const Drawer = ({ isOpen, onClose, children }: any) => {
  return (
    <div className={`flex `}>
      <div
        className={` absolute z-[9999] inset-y-0 left-0 w-56 md:w-80  bg-white  shadow-md ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transform transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4">{children}</div>
      </div>
      <div
        onClick={onClose}
        className={` ${
          isOpen &&
          "p-0 absolute top-0 left-0 z-[6] bg-black opacity-50 w-screen h-screen "
        }`}
      ></div>
    </div>
  );
};

export default Drawer;
