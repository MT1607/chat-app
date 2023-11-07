import { format } from "date-fns";
import moment from "moment";

const formatDay = () => {
  const dateString = "9/10/2023";
  const date = moment(dateString, "DD/MM/YYYY");
  const today = moment();
  const diffInDays = today.diff(date, "days");
  let formattedDate;
  if (diffInDays <= 7) {
    formattedDate = "T." + date.format("d");
  } else {
    formattedDate = format(date.toDate(), "d/MM");
  }
  return formattedDate;
};

export default formatDay;
