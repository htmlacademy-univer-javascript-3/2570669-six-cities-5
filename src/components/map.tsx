import { useRef, useEffect } from 'react';
import { Icon, Marker, layerGroup } from 'leaflet';
import useMap from '../hooks/use-Map';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../const';
import 'leaflet/dist/leaflet.css';
import { OffersType, City } from '../types/types';
import { MapClasses } from '../const';
import { useAppSelector } from '../hooks';

type MapProps = {
  city: City;
  points: OffersType[];
  isMainPage: boolean;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map({ city, points, isMainPage }: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  const selectedMarker = useAppSelector((state) => state.selectedMarker);

  useEffect(() => {
    if (map) {
      map.setView([city.location.latitude, city.location.longitude], city.location.zoom);
    }
  }, [map, city]);

  useEffect(() => {
    if (map) {
      const markers = layerGroup().addTo(map);
      points.forEach((point: OffersType) => {
        new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude,
        }).setIcon(
          selectedMarker !== null && point.id === selectedMarker.id ? currentIcon : defaultCustomIcon
        ).addTo(markers);
      });
      return () => {
        map.removeLayer(markers);
      };
    }
  }, [map, points, selectedMarker]);

  const mapClassName = isMainPage ? MapClasses.SectionPropertyMapClass : MapClasses.SectionMainMapClass;

  return (
    <div className={mapClassName} style={{ height: '100%' }} ref={mapRef}></div>
  );
}

export default Map;
