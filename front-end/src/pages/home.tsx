import { useEffect, useState } from "react";
import { Counter } from "../components/Counter";
import { AttractionsTable } from "../components/AttractionTable";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { fetchAttractionsThunk } from "../store/attractionSlice";
import { RootState } from "../store";
import YandexMap from "../components/YandexMap";
import { Modal } from "@gravity-ui/uikit";

export default function HomePage() {
  const dispatch = useAppDispatch();
  const attractions = useAppSelector((state: RootState) => state.attractions);
  let [mapCoords, setMapCoords] = useState([0, 0]);
  let [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchAttractionsThunk());
  }, []);
  function showMap(lat: number, lng: number) {
    setMapCoords(prev => [lat, lng]);
    setIsOpen(true);
  }

  return (
    <div className="home">
      <Counter count={attractions.length} />
      <AttractionsTable data={attractions} showMap={showMap} />
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <div style={{width:"500px",height:"500px"}}>
          <YandexMap lat={mapCoords[1]} lng={mapCoords[0]} />
        </div>
      </Modal>
    </div>
  );
}
