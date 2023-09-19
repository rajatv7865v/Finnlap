interface PropTypes {
  KeyName?: string;
  KeyValue?: any;
}

export default function ProgramsCommonGrid(props: PropTypes) {
  const { KeyName, KeyValue } = props;
  return (
    <div className="grid grid-cols-3">
      <div className="col-span-2 ml-8">
        <h3 className="text-lightDark text-xs font-semibold">{KeyName}</h3>
      </div>
      <div className="col-span-1">
        <p className="text-lightDark text-xs">{KeyValue}</p>
      </div>
    </div>
  );
}
