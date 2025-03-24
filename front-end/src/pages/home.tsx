import { useEffect, useState } from "react";
import { Counter } from "../components/Counter";
import { AttractionsTable } from "../components/AttractionTable";
import { fetchAttractionsThunk } from "../store/attractionSlice";
import { RootState } from "../store";
import YandexMap from "../components/YandexMap";
import { Modal } from "@gravity-ui/uikit";
import { AttractionsControls } from "../components/AttractionControls";
import { useAttractionsFilters } from "../hooks/useAttractionsFilters";
import  "../styles/attractionControls.css"
import { useAppDispatch, useAppSelector } from "../hooks/hooks";

export default function HomePage() {
  const dispatch = useAppDispatch();
  const attractions = useAppSelector((state: RootState) => state.attractions);
  let [mapCoords, setMapCoords] = useState([0, 0]);
  let [isOpen, setIsOpen] = useState(false);
  const {
    filteredData,
    setSearchQuery,
    setHideViewed,
    setSortBy,
    searchQuery,
    hideViewed,
    sortBy,
  } = useAttractionsFilters(attractions)

console.log(searchQuery,hideViewed,sortBy)
  useEffect(() => {
    dispatch(fetchAttractionsThunk());
  }, []);

  function showMap(lat: number, lng: number) {
    setMapCoords(() => [lat, lng]);
    setIsOpen(true);
  }

  return (
    <div className="home">
      <Counter count={attractions.length} />
      <AttractionsControls
        onSearch={setSearchQuery}
        onFilter={setHideViewed}
        onSort={setSortBy}
      />
      <AttractionsTable data={filteredData} showMap={showMap} />
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="ymap">
          <YandexMap lat={mapCoords[1]} lng={mapCoords[0]} />
        </div>
      </Modal>
    </div>
  );
}
