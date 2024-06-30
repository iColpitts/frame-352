<template>
  <div class="sightings-wrapper">
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
  padding: 0.5rem;
  max-width: 250px;
}
</style>