"use client"
import TableComponent from "@/components/Table";
import Table from "@/components/Table";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState({});
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`https://run.mocky.io/v3/69f60a58-3a36-48c5-a9cf-b100b015950c`);
      // setData(res.data);
      // console.log(res.data);
      
    };

    getData();
  }, []);

  
  return (
    <div>
      <TableComponent />
    </div>
  );
}
