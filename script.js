const func = async () => {
   try {
   result = await (
   await fetch("https://jsonplaceholder.typicode.com/posts")
   ).json(); 
   } catch (error) {}
   draw(result)
   const info = document.querySelector('#info');

   button.addEventListener('click', (event) => {
      const buttonId = event.target.id;

      const posts = result.filter((el, i) => {
         if (i >= buttonId * 10 - 10 && i <= buttonId * 10 - 1) {
            return el
         }
      })
         posts.forEach((el) => {
            info.innerHTML += `<div class = 'infoClass'>
               ${el.id}
               ${el.body}
               ${el.title}</div>`
         })
   })
}
func()

const draw = (result) => {
const button = document.querySelector('#button');
let x = result.length / 10;
for(let i = 1; i <= x; i++) {
   button.innerHTML += `<button class='buttonClass' id ='${i}'>${i}</button>`
}
}


