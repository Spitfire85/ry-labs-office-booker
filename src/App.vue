<template>
  <div id="app">
    <div class='ui three column centered grid'>
      <div class='column'>
        <set-name v-on:create-booking="SetName"></set-name>
        <booking-list v-bind:bookings="bookings"></booking-list>
        <create-booking v-on:create-booking="CreateBooking"></create-booking>
      </div>
    </div>
  </div>
</template>

<script>
import sweetalert from 'sweetalert';
import BookingList from './components/BookingList';
import SetName from './components/SetName';
import CreateBooking from './components/CreateBooking';

export default {
  name: 'app',
  components: {
    BookingList,
    CreateBooking,
    SetName
  },
  data() {
    return {
      bookings: [{
        name: 'Matt Clark',
        floor: '2',
        checkedIn: false
      }, {
        name: 'Laura Studd',
        floor: '1',
        checkedIn: true
      }, {
        name: 'Filipa Rolo',
        floor: '3',
        checkedIn: false
      }]
    };
  },
  methods: {
    CreateBooking(newbooking) {
      this.bookings.push(newbooking);
      sweetalert('Success!', 'Booking successful', 'success');
    }
  }
};
</script>
