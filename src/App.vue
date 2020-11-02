<template>
  <div id="app">
    <set-name></set-name>
    <div class='ui three column centered grid'>
      <div class='column'>        
        <main-page v-bind:bookings="bookings"></main-page>
        <create-booking v-bind:bookings="bookings" v-on:create-booking="CreateBooking"></create-booking>
      </div>
    </div>
  </div>
</template>

<script>
import sweetalert from 'sweetalert';
import SetName from './components/SetName';
import MainPage from './components/MainPage';
import CreateBooking from './components/CreateBooking';

export default {
  name: 'app',
  components: {
    SetName,
    MainPage,
    CreateBooking    
  },
  data() {
    return {
      bookings: [{
        nameFirst: 'Matt',
        nameLast: 'Clark',
        floor: '2',
        checkedIn: false
      }, {
        nameFirst: 'Laura',
        nameLast: 'Studd',
        floor: '1',
        checkedIn: true
      }, {
        nameFirst: 'Filipa',
        nameLast: 'Rolo',
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
