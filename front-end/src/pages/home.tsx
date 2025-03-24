import { useEffect, useState } from "react";
import { Counter } from "../components/Counter";
import { Toggle } from "../components/Toggle";
import { AttractionsTable } from "../components/AttractionTable";
import { Attraction, Status } from "../types.d";


export default function HomePage() {
  const [attractions, setAttractions] = useState<Attraction[]>([{
    "id": 1,
    "name": "Red Square",
    "description": "Red Square is one of the oldest and largest squares in Moscow, Russia. It is located in Moscow's historic centre, along the eastern walls of the Kremlin",
    "addedDate": new Date(),
    "rating": 2.5,
    "photoUrl": "https://i.ibb.co/wMkFry0/ff.jpg",
    "location": "Moscow, Russia",
    "lat": 55.754093,
    "lng": 37.474093,
    "status": Status.PLANNED
  } 
]);
  const [hideVisited, setHideVisited] = useState(false);

  useEffect(() => {
    // fetch('/api/attractions')
    //   .then(res => res.json())
    //   .then(data => setAttractions(data));
  }, []);

  const filtered = attractions.filter(a => 
    !hideVisited || a.status !== Status.VISITED
  );

  return (
    <div className="home">
      <Counter count={filtered.length} />
      <Toggle
        checked={hideVisited}
        onChange={() => setHideVisited(!hideVisited)}
      />
      <AttractionsTable data={filtered} />
    </div>
  );
};