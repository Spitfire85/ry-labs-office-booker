<template>
  <div id="app">
    <set-name></set-name>
    <div class='ui three column centered grid'>
      <div class='column'>        
        <main-page v-bind:bookings="bookings"></main-page>        
      </div>
    </div>
  </div>
</template>

<script>
import sweetalert from 'sweetalert';
import SetName from './components/SetName';
import MainPage from './components/MainPage';

export default {
  name: 'app',
  components: {
    SetName,
    MainPage  
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
  }
};
</script>
