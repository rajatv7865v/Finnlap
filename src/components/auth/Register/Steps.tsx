const Steps = ({ subtitle, icons, counter, verify, active }: any) => {
  return (
    <>
      <div className={`flex flex-col   `}>
        <div className="flex items-center w-full ">
          {!verify ? (
            <li className="flex w-full items-center after:content-[''] after:w-full after:h-1  after:inline-block dark:after:border-gray-700">
              <span className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                <svg
                  className="w-4 h-4 text-gray-500 lg:w-5 lg:h-5 dark:text-gray-100"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" />
                </svg>
              </span>
            </li>
          ) : (
            <li className="flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1  after:inline-block dark:after:border-blue-800">
              <span className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0">
                <svg
                  className="w-3.5 h-3.5 text-blue-600 lg:w-4 lg:h-4 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  />
                </svg>
              </span>
            </li>
          )}
          <div>
            <span className="w-[216px]">
              
              <p className="hidden px-2 md:block text-[#fff] lg:text-base md:text-[10px] font-[400] my-2 whitespace-nowrap">
                {subtitle}
              </p>
            </span>
          </div>
        </div>

        <div>{active && <hr className="flex  mt-2"  />}</div>
      </div>
    </>
  );
};

export default Steps;
