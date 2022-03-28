import {
  View,
  Text,
  StyleSheet,
  Alert,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import MapView, {Marker, Callout} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Icon from 'react-native-vector-icons/FontAwesome';
import Pusher from 'pusher-js/react-native';
import Geocoder from 'react-native-geocoding';
import axios from 'axios';
import {regionFrom, getLatLonDiffInMeters} from '../lib/location';
import Tapper from '../components/Tapper';

const google_api_key = 'YOUR GOOGLE PROJECT API KEY';
const base_url = 'https://gorest.co.in/public/v2/posts';
const pusher_app_key = 'YOUR PUSHER APP KEY';
const pusher_app_cluster = 'YOUR PUSHER APP CLUSTER';

const search_timeout = 1000 * 60 * 10; // 10 minutes
const share_timeout = 1000 * 60 * 5; // 5 minutes

const default_region = {
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

let device_width = Dimensions.get('window').width;

const MapPage = props => {
  const {navigation} = props;
  const username = navigation.getParam('username');

  let from_region = null;
  let watchId = null; // unique ID for the geolocation watcher
  let pusher = null; // variable for storing the Pusher instance
  let user_channel = null; // the Pusher channel for the current user
  let journey_id = null;
  let riders_channel = null; // if current user is a hiker, the value of this will be the riders channel
  let users_channel = null; // the current user's channel
  let hiker = null;

  const [startLocation, setStartLocation] = useState(null);
  const [endLocation, setEndLocation] = useState(null);
  const [region, setRegion] = useState(default_region);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [riderLocation, setRiderLocation] = useState(null);
  const [hikerLocation, setHikerLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hasJourney, setHasJourney] = useState(false);

  useEffect(() => {
    Geocoder.init(google_api_key);
    const pusher = new Pusher(pusher_app_key, {
      authEndpoint: `${base_url}/pusher-auth.php`,
      cluster: pusher_app_cluster,
      encrypted: true,
    });
    users_channel = pusher.subscribe(`private-user-${username}`);
  }, []);

  return (
    <View>
      <Text>MapPage</Text>
    </View>
  );
};

export default MapPage;
