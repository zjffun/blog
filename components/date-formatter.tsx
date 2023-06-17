import { format } from "date-fns";

type Props = {
  unixTime: number;
};

const DateFormatter = ({ unixTime }: Props) => {
  const date = new Date(unixTime);
  return (
    <time title={format(date, "yyyy-MM-dd hh:mm")}>
      {format(date, "yyyy-MM-dd")}
    </time>
  );
};

export default DateFormatter;
