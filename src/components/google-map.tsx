'use client';

import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';

const GOOGLE_MAPS_API_KEY: string =
  process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';
const position: { lat: number; lng: number } = {
  lat: 44.82808586965494,
  lng: 20.41232354232935,
};
const MapTypeId = {
  HYBRID: 'hybrid',
  ROADMAP: 'roadmap',
  SATELLITE: 'satellite',
  TERRAIN: 'terrain',
};
export type MapConfig = {
  id: string;
  label: string;
  mapId?: string;
  mapTypeId?: string;
  styles?: google.maps.MapTypeStyle[];
};

const mapConfig: MapConfig = {
  id: 'greyblack',
  label: 'Grey & Black Map style',
  mapTypeId: MapTypeId.ROADMAP,
  // styles: googleMapStyling,
};

const GoogleMap = () => {
  return (
    <APIProvider apiKey={GOOGLE_MAPS_API_KEY}>
      <Map
        defaultCenter={position}
        defaultZoom={15}
        mapId={mapConfig.mapId || null}
        mapTypeId={mapConfig.mapTypeId}
        styles={mapConfig.styles}
        disableDefaultUI={true}
        keyboardShortcuts={false}
        // gestureHandling={'greedy'}
      >
        <Marker position={position} />
      </Map>
    </APIProvider>
  );
};

export default GoogleMap;
