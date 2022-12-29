import { useState } from "react";
import { useEffect } from "react";

const api = (url) => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const request = await fetch(url);
        if (!request.ok) {
          throw new Error("Network error");
        }
        const data = await request.json();
        setData(data);
        setStatus("done");
      } catch (error) {
        console.error(error);
        setStatus("error");
      }
    };
    setStatus("loading");
    fetchApi();
  }, []);

  return { data, status };
};

export default api;
