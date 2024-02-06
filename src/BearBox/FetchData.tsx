import { useState } from "react";
import { useAsyncStore } from "../store/bearStore";

export const FetchData = () => {
  const [user, setUser] = useState({});
  const fetchUser = useAsyncStore((state) => state.fetchUser);

  const handleFetch = async (id: number) => {
    const data = await fetchUser(id);
    setUser(data);
  };

  return (
    <div className="box">
      <button onClick={() => handleFetch(1)}>fetch</button>
      <pre style={{ textAlign: "left" }}>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
};
