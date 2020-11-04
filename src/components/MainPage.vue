<template>
  <div>
    <h1>Hello {{ this.$store.state.nameFirst }}</h1>    
    
    <div class="booking__wrapper">

      <div class="booking__day" v-for="(bookingDay, index) in bookings" :key="index">
        <h2>{{ bookingDay.day }} {{ index }}</h2>
        <p class="booking__checked-in">Checked in: {{bookingDay.people.filter(booking => {return bookingDay.people.checkedIn === true}).length}} / {{ bookingDay.people.length }} (Max 20)</p>
        
        <div class='ui basic content center aligned segment'>
          <button class='ui basic button icon' v-on:click="createBooking(index)">
            <i class='plus icon'></i>
            Create booking
          </button>    
        </div>
        <Booking v-on:delete-booking="deleteBooking, index" v-on:complete-booking="completeBooking"  v-for="booking in bookingDay.people" :booking.sync="booking" ></Booking>        
      </div>

    </div>  
    
  </div>
</template>

<script type = "text/javascript" >
import sweetalert from 'sweetalert';
import Booking from './Booking';

export default {
  components: {
    Booking
  },
  methods: {
    deleteBooking(booking, index) {
      console.log(booking, index);
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
    createBooking(index) {
      const nameFirst = this.$store.state.nameFirst;
      const nameLast = this.$store.state.nameLast;
      const floor = this.$store.state.floor;
      const newBooking = {
        nameFirst,
        nameLast,
        floor,
        checkedIn: false
      }

      if (this.bookings[index].people.length <= 4) {
        if (nameFirst && nameLast && floor !== '') {
          this.bookings[index].people.push(newBooking);
          sweetalert('Success!', 'Booking successful', 'success');
        }      
      } else {
        sweetalert('Unable to book that day', 'That day has reached the maximum of 20 people!', 'error');
      }
    }
  },
  data() {
    return {
      bookings: [{
        id: 0,
        day: 'Monday',
        people: [{
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
      },{
        id: 1,
        day: 'Tuesday',
        people: [{
          nameFirst: 'John',
          nameLast: 'Sheard',
          floor: '2',
          checkedIn: false
        }]
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

