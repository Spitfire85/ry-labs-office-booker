<template>
  <div>
    <h1>Hello {{ this.$store.state.nameFirst }}</h1>    
    
    <div class="booking__wrapper">

      <div class="booking__day">
        <h2>Monday</h2>
        <p class="booking__checked-in">Checked in: {{bookings.filter(booking => {return booking.checkedIn === true}).length}} / {{ bookings.length }} (Max 20)</p>
        <create-booking v-bind:bookings="bookings" v-on:create-booking="createBooking"></create-booking>
        <Booking v-on:delete-booking="deleteBooking" v-on:complete-booking="completeBooking"  v-for="booking in bookings" :booking.sync="booking" ></Booking>        
      </div>

      <div class="booking__day">
        <h2>Tuesday</h2>
        <p class="booking__checked-in">Checked in: {{bookingsTuesday.filter(bookingTuesday => {return bookingTuesday.checkedIn === true}).length}} / {{ bookingsTuesday.length }} (Max 20)</p>
        <create-booking v-bind:bookingsTuesday="bookingsTuesday" v-on:create-booking="createBooking"></create-booking>
        <Booking v-on:delete-booking="deleteBooking" v-on:complete-booking="completeBooking"  v-for="bookingTuesday in bookingsTuesday" :booking.sync="bookingTuesday" ></Booking>        
      </div>

    </div>  
    
  </div>
</template>

<script type = "text/javascript" >
import sweetalert from 'sweetalert';
import Booking from './Booking';
import CreateBooking from './CreateBooking';

export default {
  components: {
    Booking,
    CreateBooking
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
        closeOnConfirm: false
      }).then(() => {
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
    createBooking(newbooking) {
      this.bookings.push(newbooking);
      sweetalert('Success!', 'Booking successful', 'success');
    }
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
      }],
      bookingsTuesday: [{
        nameFirst: 'John',
        nameLast: 'Sheard',
        floor: '2',
        checkedIn: false
      }]
    }
  }
};
</script>

<style scoped>
  .booking__checked-in,
  h1,
  h2 {
    text-align: center;
  }

  .booking__wrapper {
    display: flex;
    justify-content: space-between;
  }
</style>

