<template>
  <div>
    <h1>Hello {{ this.$store.state.nameFirst }}</h1>    
    
    <div class="booking__wrapper">

      <div class="booking__day" v-for="(bookingDay, index) in bookings" :key="index">
        <h2>{{ bookingDay.day }}</h2>
        <p class="booking__checked-in">Checked in: {{ bookingDay.people.filter(booking => { return booking.checkedIn === true}).length }} / {{ bookingDay.people.length }} (Max 20)</p>

        <div class='ui basic content center aligned segment'>
          <button class='ui basic button icon' v-on:click="createBooking(index)">
            <i class='plus icon'></i>
            Create booking
          </button>    
        </div>

        <!-- <Booking v-on:delete-booking="deleteBooking, index" v-on:complete-booking="completeBooking"  v-for="booking in bookingDay.people" :booking.sync="booking" ></Booking>  -->

        <div class='ui centered card' v-for="(person, personIndex) in bookingDay.people" :key="personIndex">    
          <div class="content" v-show="!person.isEditing">
          <!-- <div class="content"> -->
            <div class='header'>
                {{ person.nameFirst }} {{ person.nameLast }}
            </div>
            <div class='meta'>
                Floor {{ person.floor }}
            </div>
            <div class='extra content'>
                <span class='right floated edit icon' v-on:click="editBooking(index, personIndex);">
                  <i class='edit icon'></i>
                </span>
              <span class='right floated trash icon' v-on:click="deleteBooking(index, personIndex)">
                <i class='trash icon'></i>
              </span>
            </div>
          </div>
          <div class="content" v-show="person.isEditing">
            <div class='ui form'>
              <div class='field'>
                <label>First Name</label>
                <input type='text' v-model="person.nameFirst" >
              </div>
              <div class='field'>
                <label>Last Name</label>
                <input type='text' v-model="person.nameLast" >
              </div>
              <div class='field'>
                <label>Floor</label>
                <input type='text' v-model="person.floor">
              </div>
              <div class='ui two button attached buttons'>
                <button class='ui basic blue button' v-on:click="hideForm(index, personIndex)">
                  Close X
                </button>
              </div>
            </div>
          </div>
          <div class='ui bottom attached green basic button' v-show="!person.isEditing && person.checkedIn" disabled>
              Checked in
          </div>
          <div class='ui bottom attached red basic button' v-on:click="checkIn(index, personIndex)" v-show="!person.isEditing && !person.checkedIn">
              Not checked in yet
          </div>
        </div>       
      </div>

    </div>  
    
  </div>
</template>

<script type = "text/javascript" >
import sweetalert from 'sweetalert';

export default {
  methods: {
    deleteBooking(index, personIndex) {
      sweetalert({
        title: 'Are you sure?',
        text: 'This booking will be permanently deleted!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'Yes, delete it!',
        closeOnConfirm: false
      }).then(() => {       
        this.bookings[index].people.splice(personIndex, 1);
        sweetalert('Deleted!', 'Your booking has been deleted.', 'success');
      });
    },
    editBooking(index, personIndex) {
      this.bookings[index].people[personIndex].isEditing = true;
    },
    checkIn(index, personIndex) {
      this.bookings[index].people[personIndex].checkedIn = true;
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
        isEditing: false,
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
    },
    hideForm(index, personIndex) {
      this.bookings[index].people[personIndex].isEditing = false;
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
          isEditing: false,
          checkedIn: false
        }, {
          nameFirst: 'Laura',
          nameLast: 'Studd',
          floor: '1',
          isEditing: false,
          checkedIn: true
        }, {
          nameFirst: 'Filipa',
          nameLast: 'Rolo',
          floor: '3',
          isEditing: false,
          checkedIn: false
        }]
      },{
        id: 1,
        day: 'Tuesday',
        people: [{
          nameFirst: 'John',
          nameLast: 'Sheard',
          floor: '2',
          isEditing: false,
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

