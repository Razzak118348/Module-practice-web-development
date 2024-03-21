const loadPhone = async (searchPhone) => {

    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchPhone}`);
    const Alldata = await res.json();
    // console.log(Alldata.data)
    displayPhone(Alldata.data)
}

const displayPhone = phone => {
    // console.log(phone)
    // 1.find the container where div will be append 
    // 2.create a div 
    // 3.set inner html
    // 4.append the div in container 
    //5. clear container cards before adding new cards;

    const phoneContainer=document.getElementById('Phone-container')
    phoneContainer.textContent ='';

    //display show all phone button if there are more than 12 phones .
    const ShowAllContaine=document.getElementById('show-all-container')
    if(phone.length>12){
        ShowAllContaine.classList.remove('hidden')
    }
    else{
        ShowAllContaine.classList.add('hidden')
    }

    //display only first 12 phones
    phone =phone.slice(0,12)

        phone.forEach(phoneSingle => {
        console.log(phoneSingle)
        
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card p-5 mx-auto    shadow-xl bg-gray-50 `;
        phoneCard.innerHTML = `
    <figure ><img src="${phoneSingle.image}"  alt="Shoes" /></figure>
    <div class="card-body">
    <h2 class="card-title text-black text-2xl font-bold">${phoneSingle.phone_name}</h2>
    <p class="text-black">There are many variations of passages of available, but the majority have suffered</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary flex-auto text-xl">Show Details</button>
    </div>
  </div>
    `
    phoneContainer.appendChild(phoneCard);

    });

    //hide loading spiner 
    toggleLoadingSpiner(false);
}

//search 
const handleSearch =()=>{
    const search =document.getElementById('textfield').value;
    toggleLoadingSpiner(true);
    loadPhone(search);
    
    
}

const toggleLoadingSpiner= (isloading)=>{
    const loadingSpiner = document.getElementById('loading-spinner');
   if(isloading){
    loadingSpiner.classList.remove('hidden');
   }
   else{
    loadingSpiner.classList.add('hidden')
   }
}

// loadPhone('iphone');

function ClearText(){
    // document.getElementById('textfield').value="";
}

