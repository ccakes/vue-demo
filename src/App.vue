<template>
  <div>
    <strong>IP:</strong> {{ ip }}<br />
    <strong>City:</strong> {{ city }}, {{ country }}<br />
    <hr />
    <Map :latitude="latitude" :longitude="longitude" />
  </div>
</template>

<script>
import Map from './components/map.vue'

export default {
  name: 'app',
  components: {
    Map
  },
  data() {
    return {
      ip: "",
      city: "",
      country: "",
      latitude: 50,
      longitude: 14
    }
  },
  mounted() {
    // fetch() is the new $.get()
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // it uses Promises which are a concept I found pretty tricky to grasp but once I did
    // I found they're pretty handy
    // cors-anywhere is a hack to get around browser security for cross-origin requests
    // don't worry about that now
    fetch('https://cors-anywhere.herokuapp.com/https://ipapi.co/json')
      .then(response => response.json())
      .then(json => {
        this.ip = json.ip;
        this.city = json.city;
        this.country = json.country_name;
        this.latitude = json.latitude;
        this.longitude = json.longitude;
      });
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
