import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../../components/loader";
import Table from "../../components/table";
function ReportsPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const GetItem = async (start, end) => {
    setLoading(true);
    const token = localStorage.getItem("token");
    try {
      const res = await axios.get(
        `http://apialfa.apoint.uz/v1/reports/reports/materials?sort=name&start=${start}&end=${end}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setData(res.data);
      console.log(res.data);
      
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const now = new Date();
    const startDefault = new Date(now.getFullYear(), now.getMonth(), 1)
      .toISOString()
      .split("T")[0];
    const endDefault = new Date(now.getFullYear(), now.getMonth() + 1, 0)
      .toISOString()
      .split("T")[0];
    GetItem(startDefault, endDefault);
  }, []);

  return (
    <div className="p-4">
      {loading ? <Loader /> : <Table data={data} />}
    </div>
  );
}

export default ReportsPage;
