import { useRef, useEffect } from 'react';
import { Icon, Marker } from 'leaflet';
import useMap from '../hooks/use-Map';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../const';
import 'leaflet/dist/leaflet.css';
import { OffersType, City } from '../types/types';
import { MapClasses } from '../const';

type MapProps = {
  city: City;
  points: OffersType[];
  activeOfferId: number;
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

function Map({ city, points, activeOfferId, isMainPage }: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      map.eachLayer((layer) => {
        if (layer.options.pane === 'markerPane') {
          map.removeLayer(layer);
        }
      });
      points.forEach((point: OffersType) => {
        const marker = new Marker({
          lat: point.city.location.latitude,
          lng: point.city.location.longitude,
        });
        marker.setIcon(
          activeOfferId !== undefined && point.id === activeOfferId ? currentIcon : defaultCustomIcon
        )
          .addTo(map);
      });
    }
  }, [map, points, activeOfferId]);

  useEffect(() => {
    if (map) {
      map.flyTo([city.location.latitude, city.location.longitude], city.location.zoom);
    }
  }, [map, city]);

  return (
    <section
      className={
        isMainPage ? MapClasses.SectionPropertyMapClass : MapClasses.SectionMainMapClass
      }
      ref={mapRef}
      key={city.name}
    >
    </section>
  );
}

export default Map;
