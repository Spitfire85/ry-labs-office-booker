<template>
  <div class='ui basic content center aligned segment'>
    <button class='ui basic button icon' v-on:click="sendForm()">
      <i class='plus icon'></i>
      Create booking
    </button>    
  </div>
</template>

<script>
import sweetalert from 'sweetalert';
export default {
  props: ['bookings'],
  methods: {
    sendForm() {
      const nameFirst = this.$store.state.nameFirst;
      const nameLast = this.$store.state.nameLast;
      const floor = this.$store.state.floor;
      if (this.bookings.length <= 5) {
        if (nameFirst && nameLast && floor !== '') {
          this.$emit('create-booking', {
            nameFirst,
            nameLast,
            floor,
            checkedIn: false
          });
        }      
      } else {
        sweetalert('Unable to book that day', 'That day has reached the maximum of 20 people!', 'error');
      }     
    }
  }
};
</script>