<template>
  <div id="map"></div>
</template>

<script>
  import L from 'leaflet';

  export default {
    props: [ 'latitude', 'longitude' ],
    watch: {
      // eslint-disable-next-line
      latitude: function(n, o) {
        this.map.flyTo([n, this.longitude], 12);
        // this.map.
      }
    },
    data() {
      return { map: null }
    },
    mounted() {
      this.map = L.map('map').setView([this.latitude, this.longitude], 4);

      L.tileLayer('https://mt{s}.google.com/vt/v=w2.106&x={x}&y={y}&z={z}&s=', {
        attribution: '&copy; Google',
        maxZoom: 19,
        subdomains: '0123'
      }).addTo(this.map);
    }
  }
</script>

<style>
#map {
  height: 45vh !important;
}
</style>