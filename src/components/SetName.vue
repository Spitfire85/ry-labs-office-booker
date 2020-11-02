<template>
  <div>
    <button class='ui basic button icon button-change' v-on:click="openForm" v-show="!isCreating">
        Change your name and floor
        <i class='edit icon'></i>
    </button>
    <div class="modal-bg" v-show="isCreating">
      <div class='ui basic content aligned segment'>      
        <div class='ui centered card'>
          <div class='content'>
            <div class='ui form'>
              <h2>Hello, please enter your name and the floor you'll be using</h2>
              <div class='field'>
                <label>First Name</label>
                <input v-model="nameFirstText" type='text'>
              </div>
              <div class='field'>
                <label>Last Name</label>
                <input v-model="nameLastText" type='text'>
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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nameFirstText: '',
      nameLastText: '',
      floorText: '',
      isCreating: true
    };
  },
  methods: {
    openForm() {
      this.isCreating = true;
    },
    closeForm() {
      this.isCreating = false;
    },
    sendForm() {
      if (this.nameFirstText.length > 0 && this.nameLastText.length > 0) {
        this.$store.commit('SET_NAME_FIRST', this.nameFirstText);
        this.$store.commit('SET_NAME_LAST', this.nameLastText);
        this.$store.commit('SET_FLOOR', this.floorText);
        const nameFirst = this.nameFirstText;
        const nameLast = this.nameLastText;
        const floor = this.floorText;
        this.$emit('create-booking', {
          nameFirst,
          nameLast,
          floor,
          checkIn: false
        });
        this.isCreating = false;
      }
    }
  }
};
</script>


<style scoped>
  .modal-bg {
    align-items: center;
    background-color: #1a2933;    
    display: flex;    
    justify-content: center;
    height: calc(100% + 15px);
    position: fixed;
    width: 100%;
    z-index: 10;
  }

  .button-change {
    position: absolute;      
    right: 0;
    top: 10px;
  }
</style>
