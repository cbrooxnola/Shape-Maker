// const ul = document.querySelector('ul');
// const data = [1, 2, 3];

// function render(){
//   const html = data.map(function(num){
//     return `<li>${num}</li>`;
//   });
//   ul.innerHTML = html.join('');
// }

// render();

// const i = setInterval(function(){
//   const rnd = Math.ceil(Math.random() * 10);
//   //console.log(rnd);
//   data.push(rnd);
//   render();
//   if (data.length === 10){
//     clearInterval(i);
//   }
// }, 1000);
const container = document.querySelector('.container');
const shapes = [
{
  color: 'red',
  size: 'md'
},
{
  color: 'green',
  size: 'lg'
}
];
function render(){
  const html = shapes.map(function(shape){
    return `<div> class='${shape.color} ${shape.size}'</div>`;
  });
  container.HTML = html.join('');
}
render();
