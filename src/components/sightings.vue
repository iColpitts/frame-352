<template>
  <div class="sightings-wrapper">
    <p class="nothingness" v-if="sightings.length == 0">We have yet to record any sightings. Come back later to see if evidence has been submitted, to join the hunt grab a copy of <a href="https://maxwellander.itch.io/frame-352">Frame 352</a> on itch or submit your sightings <a href="/submit">here</a></p>
    <div v-for="sighting in sightings" class="sighting">
      <img :src="sighting.file.url"/>
      <p class="subtitle">{{ sighting.date }}</p>
      <p>{{ sighting.note }}</p>
    </div>
  </div>
</template>

<script>
    export default {
  name: "Sightings",
  props: {
    sightings: {
      type: Array,
      default: [],
    },
  },
}
</script>

<style>
img{
  max-width:300px;
  width: 100%;
}

.nothingness {
  text-align: center;
  color: red;
}

.subtitle {
  color: grey;
  font-size: 10px;
  padding-top: 0;
}

.text {
  padding: 2px;
  padding-top: 0px;
  margin-top: 0px;
}

.sightings-wrapper {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

.sighting {
  outline: 1px solid black;
  background-color: white;
  padding: 0.5rem;
  max-width: 250px;
}
</style>