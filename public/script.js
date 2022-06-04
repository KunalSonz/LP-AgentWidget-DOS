const searchForm = document.querySelector('.form');
const container = document.querySelector('.custDisca');
const container2 = document.querySelector('.custDisca2');



const renderMovie = async (data) => {
  // let uri = 'https://www.omdbapi.com/?apikey=cf60bf6d&t=';

  // if(mName){
  //   uri += mName;
  // }

  // const res = await fetch(uri);
  // const movies = await res.json();
  
  console.log(data);
  console.log(data.Account_Number);
  console.log(data.BillAmount);
  
  let template = `
  <div class="custDiscb">
        <p class="infoKey">Customer Id : </p><p>${data.id}</p>
      </div>
      <div class="custDiscb">
        <p class="infoKey">Account No : </p><p>${data.Account_Number}</p>
      </div>
      <div class="custDiscb">
        <p class="infoKey">Bill No : </p><p>${data.Bill}</p>
      </div>
      <div class="custDiscb">
        <p class="infoKey">Bill Amount :</p><p>${data.BillAmount}</p>
      </div>
      <div class="custDiscb">
        <p class="infoKey">Payment Expected On :</p><p>${data.Expecte_Date}</p>
      </div>      
      <div class="custDiscb">
        <p class="infoKey">Payment Due Date On :</p><p>${data.due_date}</p>
      </div>
  `
  container.innerHTML = template;
}


const renderMovie2 = async (data) => {
  // let uri = 'https://www.omdbapi.com/?apikey=cf60bf6d&t=';

  // if(mName){
  //   uri += mName;
  // }

  // const res = await fetch(uri);
  // const movies = await res.json();
  
  console.log(data);
  console.log(data.Account_Number);
  console.log(data.BillAmount);
  
  let template = `
  <div class="custDiscb">
        <p class="infoKey">Package Details: </p><p>${data[0].package_inclusions}</p>
      </div>
      <div class="custDiscb">
        <p class="infoKey">Credit Balance : </p><p>${data[0].Credit_Balance}</p>
      </div>
  `
  container2.innerHTML = template;
}

// const renderMovie = async (mName) => {
//   let uri = 'https://demo.techmbs.in/LP_POC/Api/LPService/ordermgment?ac_id=2020011131';

//   if(mName){
//     uri += mName;
//   }

//   const res = await fetch(uri, {
//     mode:'cors',
//     headers:{
//       'Access-Control-Allow-Origin':'*'
//     }
//   });
//   const movies = await res.json();
  
//   console.log(res);
//   console.log(res.url);
//   console.log(movies);

//   let template = `
//   <div class="movieDiscb">
//   <p>Title : </p><p>${movies.Title}</p>
//   </div>
//   <div class="movieDiscb">
//     <p>Year : </p><p>${movies.Year}</p>
//   </div>
//   <div class="movieDiscb">
//     <p>Director : </p><p>${movies.Director}</p>
//   </div>
//   <div class="movieDiscb">
//     <p>imdbRating :</p><p>${movies.imdbRating}</p>
//   </div>
//   `
//   container.innerHTML = template;
// }



searchForm.addEventListener('submit' , (e) => {
  e.preventDefault();
  accId = searchForm.term.value.trim();
  fetch('/inform' , {
    method: 'POST',
    headers:{
      'Content-Type':'application/json',
      'Accept':'application/json'
    },
    body:JSON.stringify({
      accId : accId
    })
  }).then(res => res.json()).then(data => {
    console.log(data.Account_Number)
    renderMovie(data);
  })

  fetch('/inform2', {
    method: 'POST',
    headers:{
      'Content-Type':'application/json',
      'Accept':'application/json'
    },
    body:JSON.stringify({
      accId : accId
    })
  }).then(res => res.json()).then(data => {
    console.log(data.Account_Number)
    renderMovie2(data);
  })
 
  //console.log(mName);
  

})


window.addEventListener('DOMContentLoaded', () => {
  renderMovie();

});




