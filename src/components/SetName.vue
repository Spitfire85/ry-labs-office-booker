<template>
  <div>
    <button class='ui basic button icon button-change' v-on:click="openForm" v-show="!isCreating">
        Change your name and floor
        <i class='edit icon'></i>
    </button>

    <div class="modal-bg" v-show="isCreating" v-if="!checkLocalStorage()">

      <div class="ui two column stackable grid">
        <div class="column">
          <div class="ui"><h1>Welcome to your <span>booking</span> helper</h1></div>
        </div>
        <div class="column">
          <div class='ui basic content aligned'>      
            <div class='ui centered card'>
              <div class='content'>
                <div class='ui form'>
                  <h2>Please enter your credentials and floor you'll be using.</h2>
                  <div class='field'>
                    <label>First Name</label>
                    <input v-model="nameFirstText" placeholder="Please insert your first name" type='text'>
                  </div>
                  <div class='field'>
                    <label>Last Name</label>
                    <input v-model="nameLastText" placeholder="Please insert your last name" type='text'>
                  </div>
                  <div class='field'>
                    <label>Floor</label>
                    <input v-model="floorText" placeholder="Please insert your floor number" type='text'>
                  </div>
                  <div class='ui two button attached buttons'>                
                    <button class='ui basic blue button' v-on:click="sendForm()">
                      Go to bookings
                    </button>

                    <!-- <button class='ui basic red button' v-on:click="closeForm">
                      Cancel
                    </button> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div>      
    </div>
  </div>
</template>

<script>
import sweetalert from 'sweetalert';
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
      if (this.nameFirstText.length > 0 && this.nameLastText.length > 0 && this.floorText.length > 0) {
        this.$store.commit('SET_NAME_FIRST', this.nameFirstText);
        this.$store.commit('SET_NAME_LAST', this.nameLastText);
        this.$store.commit('SET_FLOOR', this.floorText);
        
        localStorage.setItem('SET_NAME_FIRST', this.nameFirstText);
        localStorage.setItem('SET_NAME_LAST', this.nameLastText);
        localStorage.setItem('SET_FLOOR', this.floorText);
        this.isCreating = false;
      } else {
        sweetalert('Please fill in all fields', '', 'error');
      }
    },
    checkLocalStorage() {
      return localStorage.getItem('SET_NAME_FIRST');      
    },
    addLocaltoStorage() {
      if (localStorage.getItem('SET_NAME_FIRST')) {
        const nameFirstText = localStorage.getItem('SET_NAME_FIRST');
        const nameLastText = localStorage.getItem('SET_NAME_LAST');
        const floorText = localStorage.getItem('SET_FLOOR');

        this.$store.commit('SET_NAME_FIRST', nameFirstText);
        this.$store.commit('SET_NAME_LAST', nameLastText);
        this.$store.commit('SET_FLOOR', floorText);
      }
    }
  },
  mounted(){
    this.addLocaltoStorage();
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

  .modal-bg h1 {
    color: #fff;
    font-size: 80px;
    line-height: 1.3
  }

  .modal-bg h1:before {
    content: '';
    width: 100px;
    height: 3px;
    background-color: #fff;
    position: absolute;
    top: 0;
  }

  .modal-bg h1 span {
    color: #91b496;
  }

  .modal-bg .grid {
    max-width: 1000px;
    width: 100%;
  }

  .modal-bg input {
    background-color: transparent !important;
    border-bottom: 1px solid #fff !important;
    border-radius: 0 !important;
    color: #fff !important;
    margin-bottom: 20px !important;
    padding-left: 0 !important;
  }

  .modal-bg input:focus {
    background-color: transparent !important;
  }

  .modal-bg input::placeholder {
    font-style: italic;
  }

  .modal-bg .ui.basic.blue.button {
    background: #91b496 !important;
    box-shadow: none !important;
    color: #fff !important;
  }

  .modal-bg .ui.basic.blue.button:hover,
  .modal-bg .ui.basic.blue.buttons .button:hover {
    background: #77947b !important;
  }

  .ui.card {
    background-color: transparent;
    box-shadow: none;
    color: #fff;
    width: 360px;
  }

  .ui.form .field>label {
    color: #fff;
    font-weight: 400;
  }

  .button-change {
    position: absolute;      
    right: 0;
    top: 10px;
  }
</style>
