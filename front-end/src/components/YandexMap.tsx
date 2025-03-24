import { useState, useEffect, useRef, memo } from "react";
import { placeData } from "../types";

declare global {
  interface Window {
    ymaps: any;
  }
}

interface IYandexMap {
  setPlaceInfo?: (object: placeData) => void;
  lat:number;
  lng:number
}

export default function YandexMap({ setPlaceInfo, lat, lng}: IYandexMap) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://api-maps.yandex.ru/2.1/?apikey=14080d3a-f880-466f-8288-5b656af4b61c&lang=ru_RU";
    script.async = true;

    script.onload = () => {
      window.ymaps.ready(() => {
        initMap();
      });
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const initMap = () => {
    if (!mapRef.current) return;

    const map = new window.ymaps.Map(mapRef.current, {
      center: [lat, lng],
      zoom: 10,
    });

    map.events.add("click", (e: any) => {
      const coords = e.get("coords");
      getLocationInfo(coords);
    });
  };

  const getLocationInfo = async (coords: [number, number]) => {
    //if setPlaceInfo function wasn't provided - prevent click event
    if(!setPlaceInfo) return
    try {
      const response = await fetch(`https://geocode-maps.yandex.ru/1.x/?apikey=14080d3a-f880-466f-8288-5b656af4b61c&format=json&geocode=${coords[1]},${coords[0]}`);

      const data = await response.json();
      const featured = data.response.GeoObjectCollection.featureMember[0];
      console.log( featured.GeoObject);
      const object = {
        name: featured.GeoObject.name,
        location: featured.GeoObject.description,
        lat: featured.GeoObject.Point.pos.split(" ")[0],
        lng: featured.GeoObject.Point.pos.split(" ")[1],
        map: featured.GeoObject.uri,
      };
      setPlaceInfo(object);
    } catch (error) {
      console.error("Ошибка геокодирования:", error);
    }
  };

  return (
    <div className="map-container" style={{ width: "100%", height: "100%" }}>
      <div ref={mapRef} style={{ width: "100%", height: "500px" }} />
    </div>
  );
}
