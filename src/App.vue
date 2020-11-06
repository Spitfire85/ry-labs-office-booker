<template>
  <div id="app">
    <set-name></set-name>
    <div class='ui column grid'>
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

<style> 
  @font-face {
    font-family: 'Realist Bold';
    src: url('/fonts/realist-bold.woff');
  }

  @font-face {
    font-family: 'Realist Light';
    src: url('/fonts/realist-light.woff');
  }

  @font-face {
    font-family: 'Realist Medium';
    src: url('/fonts/realist-medium.woff');
  }

  @font-face {
    font-family: 'Realist Regular';
    src: url('/fonts/realist-regular.woff');
  }

  @font-face {
    font-family: 'Realist Thin';
    src: url('/fonts/realist-thin.woff');
  }

  @font-face {
    font-family: 'icons';
    src: url('/fonts/icons.woff');
    font-weight: normal;
    font-style: normal;
  }

  h1,
  h2,
  h3,
  h4,
  ul,
  ol,
  input,
  p {
    font-family: 'Realist Regular' !important;    
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 400;
  }

  .grid {
    padding: 50px !important;
  }
</style>
