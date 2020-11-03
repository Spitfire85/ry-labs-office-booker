<template>
  <div id="app">
    <set-name></set-name>
    <div class='ui three column centered grid'>
      <div class='column'>        
        <main-page></main-page>        
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
  }  
};
</script>
