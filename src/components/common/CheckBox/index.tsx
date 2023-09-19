interface sortInter {
  name: string;
  value: boolean;
  label: string;
}
interface props {
  list: [];
  onChange?: any;
}

const Checkbox = ({ list, onChange }: props) => {
  return (
    <div className="text-[16px] font-semibold leading-6 text-[#1F3D94]">
      {list.map((item: sortInter, ind: number) => {
        return (
          <div className="flex gap-4 items-center">
            <input
              id={`${ind}`}
              type="checkbox"
              name={item.name}
              value={`${item.value}`}
              onChange={onChange}
              className="appearance-none h-4 w-4 rounded-full border border-[#1F3D94] checked:bg-[#2B84EA] checked:border-4 checked:border-white checked:border-double "
            />
            <label htmlFor={`${ind}`}>{item.label}</label>
          </div>
        );
      })}
    </div>
  );
};

export default Checkbox;

{
  /* <div className="flex gap-4">
              <input
                id="1"
                type="checkbox"
                name="sort"
                className="appearance-none h-4 w-4 rounded-full border border-[#1F3D94] checked:bg-[#2B84EA] checked:border-4 checked:border-white checked:border-double "
              />
              <label htmlFor="1">Higher ROI</label>
            </div>
            <div className="flex gap-4">
              <input
                id="2"
                type="checkbox"
                name="sort"
                className="appearance-none h-4 w-4 rounded-full border border-[#1F3D94] checked:bg-[#2B84EA] checked:border-4 checked:border-white checked:border-double "
              />
              <label htmlFor="2">Latest Invoices</label>
            </div>
            <div className="flex gap-4">
              <input
                id="3"
                type="checkbox"
                name="sort"
                className="appearance-none h-4 w-4 rounded-full border border-[#1F3D94] checked:bg-[#2B84EA] checked:border-4 checked:border-white checked:border-double "
              />
              <label htmlFor="3">Company Name A - Z</label>
            </div>

            <div className="flex gap-4">
              <input
                id="4"
                type="checkbox"
                name="sort"
                className="appearance-none h-4 w-4 rounded-full border border-[#1F3D94] checked:bg-[#2B84EA] checked:border-4 checked:border-white checked:border-double "
              />
              <label htmlFor="4">Company Name Z - A</label>
            </div>
            <div className="flex gap-4">
              <input
                id="5"
                type="checkbox"
                name="sort"
                className="appearance-none h-4 w-4 rounded-full border border-[#1F3D94] checked:bg-[#2B84EA] checked:border-4 checked:border-white checked:border-double "
              />
              <label htmlFor="5">Seller Name A - Z</label>
            </div>
            <div className="flex gap-4">
              <input
                id="6"
                type="checkbox"
                name="sort"
                className="appearance-none h-4 w-4 rounded-full border border-[#1F3D94] checked:bg-[#2B84EA] checked:border-4 checked:border-white checked:border-double "
              />
              <label htmlFor="6">Seller Name Z - A</label>
            </div> */
}
