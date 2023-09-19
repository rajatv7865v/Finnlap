export function getFormData(object: any) {
  const formData = new FormData();
  Object.keys(object).forEach((key) => {
    if (object[key] != "") {
      formData.append(key, object[key]);
    }
  });
  return formData;
}
