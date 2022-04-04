
//console.log(window);

//window.alert(1);
//single element
//console.log(document.getElementById('my-form'));
//console.log(document.querySelector('.container'));


//multiple element

//console.log(document.querySelectorAll('.item'));
//console.log(document.getElementsByClassName('item'));

//console.log(document.getElementsByTagName('li'));

 
//const ul =document.querySelector('.items');
//ul.remove();
//ul.lastElementChild.remove();


/*
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>'
*/
/*_____________change css style in btn____________*/
/*
const btn = document.querySelector('.btn');
//btn.style.background = 'red';
btn.addEventListener('click', (e)=>{//use for click=>mouseover ,mouseout
    e.preventDefault();
    //console.log('click');
    //console.log(e);
    //console.log(e.target.id);
    document.querySelector('#my-form')
    .style.background ='#ccc';
    document.querySelector('body').classList.add('bg-dark')
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>'
});
*/

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onsubmit);

function onsubmit(e) {
    e.preventDefault();

   //console.log(nameInput.value);

   if(nameInput.value === '' || emailInput.value === ''){
   // alert("Enter username and Email");
   msg.classList.add('error');
   msg.innerHTML ='Plese enter username and Email';

   setTimeout(() => msg.remove(),3000);


   }

   else{
       //console.log('success');
       const li = document.createElement('li');
       li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

       userList.appendChild(li);

       //clear the filds

       nameInput.value = '';
       emailInput.value = '';


   }
}