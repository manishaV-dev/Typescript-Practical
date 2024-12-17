import { fetchTours } from "./types";
import { useQuery } from "@tanstack/react-query";

function FetchDataAxios() {
  // no need to set isloading or is error state just use useQuery and we are good to go as we get all by default no need to initialize by self
  const {
    isPending,
    isError,
    error,
    data: tours, // here you can use data also aur set other name as tours and from tours we map the data 👇
  } = useQuery({
    queryKey: ["tours"], //any name

    // as fetchTours fn return promise the queryfn also have to return promise
    queryFn: fetchTours,
  });

  if (isPending) return <h2>Loading .... </h2>;
  if (isError) return <h2>Error : {error.message}</h2>;

  return (
    <div>
      <h2>Fetch Data Using Axios</h2>
      {tours.map((tour) => {
        return (
          <div key={tour.id}>
            <h3>{tour.name}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default FetchDataAxios;
