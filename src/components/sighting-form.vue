<template>
      <div class="wrapper">
        <div class="sightings-wrapper">
          <section v-for="index in maxSightings" :key="index" v-show="count >= index" class="sighting" :id="`sighting-${ index }`">
            <!-- <p>#{{ index }}</p> -->
            <img :id="`img_file_${index}`" src="https://placehold.co/600x400/red/white?text=Evidence" alt="your image" /> <br>
            <input type="file" :id="`file_${ index }`" :name="`file_${ index }`" v-on:change="readURL"/><br>

            <label :for="`date_${index}`">Date</label><br>
            <input type="datetime-local" :id="`date_${index}`" :name="`date_${index}`"/><br>

            <label :for="`notes_${index}`">Notes</label><br>
            <textarea :name="`notes_${index}`"></textarea>
          </section>
        </div>
      <input class="button-secondary" v-if="count < maxSightings.length" type="button" @click="addSighting" value="Add Sighting" /><br>
      <!-- help the netlify bots -->
      <!-- <input type="hidden" name="form-name" value="sightings-vue" /> -->
      </div>
</template>

<script>
export default {
  name: "SightingsForm",
  data: () => ({
      count: 1,
      maxSightings: [1,2,3,4,5]
    }),
  // props: {
  //   count: {
  //     type: Array,
  //     default: [1],
  //   },
  // },
  methods: {
    readURL(e) {
      const input = e.target
      const imgID=`#img_${input.id}`
        if (input.files && input.files[0]) {
          var reader = new FileReader();
          console.log(imgID)

          const image =  document.querySelector(imgID)
          console.log(image)

          reader.onload = function (e) {
            image.src = e.target.result
          };

          reader.readAsDataURL(input.files[0]);
      }
    },
    addSighting() {
      console.log("add sighitng")
      console.log(this.count)
      this.count++
    },
  }
}
</script>

<style>
.wrapper {
  display: flex;
  flex-direction: column;
}

.sightings-wrapper {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.sighting {
  outline: 1px solid black;
  padding: 2px;
  margin: 1rem;
  max-width: 250px;
  width: 100%;
}

.form {
  display: flex;
  flex-direction: column;
  width: 100%;
}

label {
  color: var(--heading);
  font-size: 0.625rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  margin-top: 1rem;
  text-transform: uppercase;
}

label:first-of-type {
  margin-top: 0;
}

input,
textarea {
  color: var(--text);
  font-family: inherit;
  font-size: 1rem;
  margin-top: 0.25rem;
  padding: 0.25rem 0.5rem;
  width: 100%;
}

textarea {
  height: 100px;
}

.button {
  margin-top:1rem;
  border:none;
}

.button-secondary {
  max-width: 300px;
  justify-self: center;
  margin: auto;
}

.consent {
  display: flex;
  align-items: center;
}

.checkbox {
  max-width: 15px;
}


.heading,
.docs {
  text-align: center;
}

img{
  max-width:250px;
  width: 100%;
}
</style>

<!-- <script setup lang="ts">
import { ref } from 'vue';

const count = ref<array>([1])

const addSighting = () => {
  console.log(this.count)
  this.count.push(this.count.length + 1)
  console.log(this.count)
}
</script> -->