(function() {
  'use strict';

  // const nothing = document.querySelector('textarea');
  // nothing.addEventListener('mousehover' , e => {
  //   nothing.textContent =''
  // })

  var vm = new Vue({
    el: '#app',
    data: {
      country: '',
      selected: '',
      dated:'',
      address:'都道府県から記述してください',
      work:'',
      tell:'',
      people:'',
      name:''
    },
    
    methods: {
      // addItem: function(e) {
      //   e.preventDefault();
      //   this.todos.push(this.country);
      // }
      mouseover: function(){
        this.address = ''
      },
      mouseleave: function(){
        this.address = 'Hover Me!'
      },

      completeItem: function() {
        console.log(this.country);
        console.log(this.selected);
        console.log(this.dated);
        console.log(this.address);
        console.log(this.work);
        console.log(this.tell);
        console.log(this.people);
        console.log(this.name);
      }
    }
  });
})();




// const a = document.querySelectorAll('div');
//   const button = document.querySelector('button');

//   button.addEventListener('click', e => {
//     e.preventDefault();
//     console.log(a);
//   });