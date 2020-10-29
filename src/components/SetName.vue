<template>
  <div class='ui basic content center aligned segment'>
    <button class='ui basic button icon' v-on:click="openForm" v-show="!isCreating">
      <i class='plus icon'></i>
    </button>
    <div class='ui centered card' v-show="isCreating">
      <div class='content'>
        <div class='ui form'>
          <h2>Hello, please enter your name and the floor you'll be using</h2>
          <h3>{{ message }}</h3>
          <div class='field'>
            <label>Name</label>
            <input v-model="nameText" type='text'>
          </div>
          <div class='field'>
            <label>Floor</label>
            <input v-model="floorText" type='text'>
          </div>
          <div class='ui two button attached buttons'>
            <button class='ui basic blue button' v-on:click="sendForm()">
              Ok
            </button>
            <button class='ui basic red button' v-on:click="closeForm">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nameText: '',
      floorText: '',
      isCreating: false
    };
  },
  computed: {
    message() {
      return this.$store.state.name;
    }
  },
  methods: {
    openForm() {
      this.isCreating = true;
    },
    closeForm() {
      this.isCreating = false;
    },
    sendForm() {
      if (this.nameText.length > 0 && this.nameText.length > 0) {
        this.$store.commit('SET_NAME', this.nameText);
        const name = this.nameText;
        const floor = this.floorText;
        this.$emit('create-booking', {
          name,
          floor,
          checkIn: false
        });
        this.nameText = '';
        this.floorText = '';
        this.isCreating = false;
      }
    }
  }
};
</script>
