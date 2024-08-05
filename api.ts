
import axios from "axios";

export const getData = async () => {
  const res = await axios.get(
    `https://run.mocky.io/v3/69f60a58-3a36-48c5-a9cf-b100b015950c`
  );
  return res.data;
};
