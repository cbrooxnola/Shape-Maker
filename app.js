const ul = document.querySelector('ul');
const data = [1, 2, 3];

// function render(){
//   const html = data.map(function(num){
//     return `<li>${num}</li>`;
//   });
//   ul.innerHTML = html.join('');
// }

// render();

setInterval(function(){
  const rnd = Math.ceil(Math.random() * 10);
 // console.log(rnd);
  data.push(rnd);
}, 1000);