import { ReactNode } from "react";
import styles from "styles/Home.module.css";
import SearchComponent from "src/components/common/Search";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/router";

interface IPageLabel {
  title: string;
  icon?: ReactNode | ReactNode[];
  showSearch?: boolean;
  to: string;
}

export function PageLabel({ icon, title, showSearch, to }: IPageLabel) {
  const { push } = useRouter();
  return (
    <>
      <div className={`flex justify-between items-center my-12`}>
        <div
          className={` flex cursor-pointer  ${styles.shadowonbox} border-solid border-2 rounded-r-3xl border-white py-2.5 px-3 `}
          onClick={() => push(to)}
        >
          {icon ? icon : <FaArrowLeft />}
          <h1 className={`mx-4 font-semibold text-sm ${styles.sideTextcolor}`}>
            {title}
          </h1>
        </div>
        {showSearch && (
          <div className=" mr-24">
            <div className="">{/* <SearchComponent /> */}</div>
          </div>
        )}
      </div>
    </>
  );
}
