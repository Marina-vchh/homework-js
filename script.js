const func = async () => {
   try {
   result = await (
   await fetch("https://jsonplaceholder.typicode.com/posts")
   ).json(); 
   } catch (error) {}
   draw(result)
   const buttons = document.querySelector('#button');
   const info = document.querySelector('#info');

   button.addEventListener('click', (event) => {
      const id = event.target.id;
         if(id == 1){
            event.target.classList.toggle("checked");
            if([...event.target.classList].includes('checked')){
                  result.filter((item) => {
                  return item.id <= 10;
                  }).forEach((item) => {
                  info.innerHTML += `<div class = 'infoClass'>
                  ${item.id}
                  ${item.body}
                  ${item.title}</div>`
               });
            } else {
               document.location.reload();
            }
         }
         if (id == 2){
            event.target.classList.toggle("checked")
               if([...event.target.classList].includes('checked')){
                  result.filter((item) => {
                     return item.id > 10 && item.id <= 20
                  }).forEach((item) => {
                     innerHTML = ""
                     info.innerHTML += `<div class = 'infoClass'>
                        ${item.id}
                        ${item.body}
                        ${item.title}</div>`
                     })
            } else {
               document.location.reload();
            }
         }
         if(id == 3){
            event.target.classList.toggle("checked")
            if([...event.target.classList].includes('checked')){
               result.filter((item) => {
                  return item.id > 20 && item.id <= 30
                  }).forEach((item) => {
                     info.innerHTML += `<div class = 'infoClass'>
                        ${item.id}
                        ${item.body}
                        ${item.title}</div>`
                     });
            } else {
               document.location.reload();
            }
         }

         if(id == 4){
            event.target.classList.toggle("checked");
            if([...event.target.classList].includes('checked')){
                  result.filter((item) => {
                  return item.id > 30 && item.id <= 40
                  }).forEach((item) => {
                     info.innerHTML += `<div class = 'infoClass'>
                        ${item.id}
                        ${item.body}
                        ${item.title}</div>`
                     });
            } else {
               document.location.reload();
            }
         }
         if(id == 5){
            event.target.classList.toggle("checked");
            if([...event.target.classList].includes('checked')){
               result.filter((item) => {
                  return item.id > 40 && item.id <= 50
                  }).forEach((item) => {
                     info.innerHTML += `<div class = 'infoClass'>
                        ${item.id}
                        ${item.body}
                        ${item.title}</div>`
                     });
            } else {
               document.location.reload();
            }
         }
         if(id == 6){
            event.target.classList.toggle("checked")
            if([...event.target.classList].includes('checked')){
            result.filter((item) => {
               return item.id > 50 && item.id <= 60
               }).forEach((item) => {
                  info.innerHTML += `<div class = 'infoClass'>
                     ${item.id}
                     ${item.body}
                     ${item.title}</div>`
                  });
            } else {
               document.location.reload();
            }
         }
         if(id == 7){
            event.target.classList.toggle("checked");
            if([...event.target.classList].includes('checked')){
            result.filter((item) => {
            return item.id > 60 && item.id <= 70
            }).forEach((item) => {
               info.innerHTML += `<div class = 'infoClass'>
                  ${item.id}
                  ${item.body}
                  ${item.title}</div>`
               });
            } else {
               document.location.reload();
            }
            }
         if(id == 8){
            event.target.classList.toggle("checked");
            if([...event.target.classList].includes('checked')){
               result.filter((item) => {
               return item.id > 70 && item.id <= 80
               }).forEach((item) => {
                  info.innerHTML += `<div class = 'infoClass'>
                     ${item.id}
                     ${item.body}
                     ${item.title}</div>`
                  });
               } else {
                  document.location.reload();
               }
         }
         if(id == 9){
            event.target.classList.toggle("checked");
            if([...event.target.classList].includes('checked')){
            result.filter((item) => {
               return item.id > 80 && item.id <= 90
               }).forEach((item) => {
                  info.innerHTML += `<div class = 'infoClass'>
                     ${item.id}
                     ${item.body}
                     ${item.title}</div>`
                  });
            } else {
               document.location.reload();
            }
         }
         if(id == 10){
            event.target.classList.toggle("checked");
            if([...event.target.classList].includes('checked')){
            result.filter((item) => {
               return item.id > 90 && item.id <= 100
               }).forEach((item) => {
                  info.innerHTML += `<div class = 'infoClass'>
                     ${item.id}
                     ${item.body}
                     ${item.title}</div>`
                  });
            } else {
               document.location.reload();
            }
         }
   })
};
func()

const draw = (result) => {
const button = document.querySelector('#button');
let x = result.length / 10;
for(let i = 1; i <= x; i++) {
   button.innerHTML += `<button class='buttonClass' id ='${i}'>${i}</button>`
}
}

// const drawResult = (result) => {
//    result.filter((item) => {
//       return item.id <= 10;
//       }).forEach((item) => {
//       info.innerHTML += `<div class = 'infoClass'>
//       ${item.id}
//       ${item.body}
//       ${item.title}</div>`
//    });
// }




