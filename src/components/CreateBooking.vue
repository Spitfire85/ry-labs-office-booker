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
      const nameFirst = this.$store.state.nameFirst;
      const nameLast = this.$store.state.nameLast;
      const floor = this.$store.state.floor;
      if (nameFirst && nameLast && floor !== '') {
        this.$emit('create-booking', {
          nameFirst,
          nameLast,
          floor,
          checkedIn: false
        });
      }      
    }
  }
};
</script>