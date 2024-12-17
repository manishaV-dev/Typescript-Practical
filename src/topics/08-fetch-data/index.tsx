import { useEffect, useState } from "react";
import { type Tour, tourSchema } from "./types";

const url = "https://www.course-api.com/react-tours-project";

function FetchDataComponent() {
  const [tours, setTours] = useState<Tour[]>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [isError, setIsError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Failed to fetch`);
        }
        const data: Tour = await response.json();
        const result = tourSchema.array().safeParse(data);
        // console.log(data);

        if (!result.success) {
          console.log(result.error.message);
          throw new Error("Falied to Parse");
        }
        setTours(result.data);
      } catch (error) {
        const message =
          error instanceof Error ? error.message : "There was an error...";
        setIsError(message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <h3>Loading....</h3>;
  }

  if (isError) {
    return <h3>Error...{isError} </h3>;
  }

  return (
    <div>
      <h2>Fetch Data </h2>

      {tours.map((tour) => {
        return (
          <div key={tour.id}>
            <h2>{tour.name}</h2>
            <p>{tour.info}</p>
            <h4>{tour.price}</h4>
            <hr />
          </div>
          
        );
      })}
    </div>
  );
}

export default FetchDataComponent;
