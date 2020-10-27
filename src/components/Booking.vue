<template>
  <div class='ui centered card'>
    <div class="content" v-show="!isEditing">
      <div class='header'>
          {{ booking.name }}
      </div>
      <div class='meta'>
          Floor {{ booking.floor }}
      </div>
      <div class='extra content'>
          <span class='right floated edit icon' v-on:click="showForm">
          <i class='edit icon'></i>
        </span>
        <span class='right floated trash icon' v-on:click="deletebooking(booking)">
          <i class='trash icon'></i>
        </span>
      </div>
    </div>
    <div class="content" v-show="isEditing">
      <div class='ui form'>
        <div class='field'>
          <label>Name</label>
          <input type='text' v-model="booking.name" >
        </div>
        <div class='field'>
          <label>Floor</label>
          <input type='text' v-model="booking.floor" >
        </div>
        <div class='ui two button attached buttons'>
          <button class='ui basic blue button' v-on:click="hideForm">
            Close X
          </button>
        </div>
      </div>
    </div>
    <div class='ui bottom attached green basic button' v-show="!isEditing &&booking.checkedIn" disabled>
        Checked in
    </div>
    <div class='ui bottom attached red basic button' v-on:click="completeBooking(booking)" v-show="!isEditing && !booking.checkedIn">
        Not checked in yet
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    props: ['booking'],
    data() {
      return {
        isEditing: false,
      };
    },
    methods: {
      completeBooking(booking) {
        this.$emit('complete-booking', booking);
      },
      deletebooking(booking) {
        this.$emit('delete-booking', booking);
      },
      showForm() {
        this.isEditing = true;
      },
      hideForm() {
        this.isEditing = false;
      },
    },
  };
</script>
