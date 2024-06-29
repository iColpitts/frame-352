<template>
    <form
      class="form"
      method="POST"
      name="sightings"
      id="form"
      netlify
    >
      <label for="name">Name</label>
      <input type="text" id="name" name="name" />

      <label for="conclusion">Conclusion</label>
      <textarea name="conclusion"></textarea>

    <div v-for="index in count" :key="index">
        <section class="sighting" :id="`sighting-${ index }`">
          <p>#{{ index }}</p>
          <img :id="`img_file_${index}`" src="https://placehold.co/600x400/orange/white?text=upload+image" alt="your image" /> <br>
          <input type="file" :id="`file_${ index }`" :name="`file_${ index }`" v-on:change="readURL"/><br>

          <label :for="`date_${index}`">Date</label><br>
          <input type="datetime-local" :id="`date-${index}`" :name="`date-${index}`"/><br>

          <label :for="`notes_${index}`">Notes</label><br>
          <textarea :name="`notes_${index}`"></textarea>
        </section>
    </div>
  <input type="button" @click="addSighting" value="Add Sighting" />
  <label><input type="checkbox" id="consent" name="consent"/> I consent to have my sightings published by Maxwell Lander.</label>
      
      <button type="submit" class="button">
        Submit
      </button>
    </form>
</template>

<script>
export default {
  name: "SightingsForm",
  data: () => ({
      count: [1],
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
      this.count.push(this.count.length + 1)
    },
  }
}
</script>

<style>
.form {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 35ch;
}

.form label {
  color: var(--heading);
  font-size: 0.625rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  margin-top: 1rem;
  text-transform: uppercase;
}

.form label:first-of-type {
  margin-top: 0;
}

.form input,
.form textarea {
  color: var(--text);
  font-family: inherit;
  font-size: 1rem;
  margin-top: 0.25rem;
  padding: 0.25rem 0.5rem;
}

.form textarea {
  height: 100px;
}

.button {
  margin-top:1rem;
  border:none;
}


.heading,
.docs {
  text-align: center;
}

.sighting {
  border: 1px solid black;
  padding: 0 1rem;
}

img{
  max-width:250px;
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