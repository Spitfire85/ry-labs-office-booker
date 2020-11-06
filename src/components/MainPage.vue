<template>
  <div>
    <h1>Hello <span>{{ this.$store.state.nameFirst }}</span></h1>    
    <p>Welcome to your booking assistant.</p>
    <p>A quick reminder that there are <strong>only 20 spots per day available</strong>.</p>
    <p>Please choose the days you'd like to come to the office below.</p>
    
    <div class="booking__wrapper">

      <div class="booking__day" v-for="(bookingDay, index) in bookings" :key="index">
        <h2>{{ bookingDay.day }}</h2>
        <p class="booking__checked-in">Checked in: <strong>{{ bookingDay.people.filter(booking => { return booking.checkedIn === true}).length }} / {{ bookingDay.people.length }}</strong> (Max 20)</p>

        <div class='ui basic content center aligned'>
          <button class='ui basic button icon button--check-in' v-on:click="createBooking(index)">
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
              Checked in <i class="calendar check icon"></i>
          </div>
          <div class='ui bottom attached red basic button' v-on:click="checkIn(index, personIndex)" v-show="!person.isEditing && !person.checkedIn">
              Not checked in yet <i class="calendar outline icon"></i>
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
        day: 'Tuesday',
        people: [{
          nameFirst: 'John',
          nameLast: 'Sheard',
          floor: '2',
          isEditing: false,
          checkedIn: false
        }]
      },{
        day: 'Wednesday',
        people: [{
          nameFirst: 'John',
          nameLast: 'Sheard',
          floor: '2',
          isEditing: false,
          checkedIn: false
        }]
      },{
        day: 'Thursday',
        people: [{
          nameFirst: 'John',
          nameLast: 'Sheard',
          floor: '2',
          isEditing: false,
          checkedIn: false
        }]
      },{
        day: 'Friday',
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
  .booking__wrapper {    
    border-top: 1px solid gainsboro;
    display: flex;
    margin-top: 50px;    
    width: 100%;
  }

  .booking__day {
    border-right: 1px solid gainsboro;
    margin-right: 20px;
    padding-right: 20px;
    padding-top: 10px;  
  }

  .booking__day:last-child {
    border-right: 0; 
  }

  .button {
    bottom: -1px;    
    border-radius: 0 !important;
    position: relative;
  }

  .ui .button.button--check-in {
    background: #91b496 !important;
    color: #fff !important;
    width: 100%;
  }

  .ui .button.button--check-in:hover {
    background: #77947b !important;
  }

  .card {
    border-radius: 0 !important;
        box-shadow: 0 1px 3px 0 #D4D4D5, 0 0 0 1px #000;
  }

  .ui.card > :last-child {
    border-radius: 0 !important;
  }

  .calendar {
    margin-left: 2px !important;
  }

  .ui.basic.green.button {
    box-shadow: 0 0 0 1px #77947b inset !important;
    color: #77947b !important;
  }

  .column h1 {
    font-size: 70px;
    line-height: 1.3
  }

  .column p {
    font-size: 16px;
  }

  .column h1:before {
    content: '';
    width: 100px;
    height: 3px;
    background-color: #000;
    position: absolute;
    top: 0;
  }

  .column h1 span {
    color: #91b496;
  }
</style>

