<template>
  <div class='ui basic content center aligned segment'>
    <button class='ui basic button icon' v-on:click="sendForm()">
      <i class='plus icon'></i>
      Create booking
    </button>    
  </div>
</template>

<script>
export default {
  methods: {
    sendForm() {
      const name = this.$store.state.name;
      const floor = this.$store.state.floor;
      if (name && floor !== '') {
        this.$emit('create-booking', {
          name,
          floor,
          checkIn: false
        });
      }      
    }
  }
};
</script>
