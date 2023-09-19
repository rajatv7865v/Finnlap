export const formatDate = (date: any) => {
  //check is data is valid
  if (!date) {
    return "";
  }

  //Adding Padding to day & month like 6 -> 06
  const paddingLeft = (prop: any) => {
    return prop.toString().padStart(2, "0");
  };

  const dateObj = new Date(date);
  const year = dateObj.getFullYear();
  const month = paddingLeft(dateObj.getMonth() + 1);
  const day = paddingLeft(dateObj.getDate());
  return `${day}/${month}/${year}`;
};

export const convertVintageDate = (str: any) => {
  const [DD, MM, YYYY] = str.split("/");
  return new Date(Number(YYYY), Number(MM) - 1, Number(DD));
};
