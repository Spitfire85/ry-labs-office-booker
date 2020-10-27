<template>
  <div>
    <p class="tasks">Checked in: {{bookings.filter(booking => {return booking.checkedIn === true}).length}}</p>
    <p class="tasks">Non checked in: {{bookings.filter(booking => {return booking.checkedIn === false}).length}}</p>
    <booking v-on:delete-booking="deleteBooking" v-on:complete-booking="completeBooking" v-for="booking in bookings" :booking.sync="booking"></booking>
  </div>
</template>

<script type = "text/javascript" >
import sweetalert from 'sweetalert';
import Booking from './Booking';

export default {
  props: ['bookings'],
  components: {
    Booking,
  },
  methods: {
    deleteBooking(booking) {
      sweetalert({
        title: 'Are you sure?',
        text: 'This booking will be permanently deleted!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'Yes, delete it!',
        closeOnConfirm: false,
      },
      () => {
        const bookingIndex = this.bookings.indexOf(booking);
        this.bookings.splice(bookingIndex, 1);
        sweetalert('Deleted!', 'Your booking has been deleted.', 'success');
      });
    },
    completeBooking(booking) {
      const bookingIndex = this.bookings.indexOf(booking);
      this.bookings[bookingIndex].checkedIn = true;
      sweetalert('Success!', 'Checked in!', 'success');
    },
  },
};
</script>

<style scoped>
p.tasks {
  text-align: center;
}
</style>

