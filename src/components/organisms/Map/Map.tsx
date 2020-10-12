import React from 'react';
import { Map as ReactMap, TileLayer, Marker } from 'react-leaflet';
import clsx from 'clsx';
import { makeStyles, Theme } from '@material-ui/core/styles';
import 'leaflet/dist/leaflet.css';
import './index.scss';
import L from 'leaflet';

// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

type Props = {
  className?: string;
  zoom?: any;
  center?: any;
  pins?: any;
};

const Map = (props: Props) => {
  const { zoom, center, pins, className, ...rest } = props;

  const classes = useStyles();

  return (
    <ReactMap
      zoom={zoom}
      center={center}
      className={clsx('map', classes?.root, className)}
      {...rest}
    >
      <TileLayer
        className="map__tile-layer"
        detectRetina={true}
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {pins &&
        pins.length &&
        pins.map((item, i) => (
          <Marker
            className="map__marker"
            position={[item?.location?.y, item?.location?.x]}
            key={i}
          />
        ))}
    </ReactMap>
  );
};

// Map.defaultProps = {
//   zoom: 10,
//   center: [0, 0],
// };

export default Map;

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
}));
