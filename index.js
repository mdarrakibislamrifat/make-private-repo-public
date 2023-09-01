const apiLoad = async () => {
  const response = await fetch('https://openapi.programming-hero.com/api/videos/categories')
  const data = await response.json();



  const categoryContainer = document.getElementById('category-container');
  data.data.forEach((category) => {
    const div = document.createElement('div');

    div.innerHTML = `
        
        <a onclick="handleLoadData('${category.category_id}')" class="tab">${category.category}</a>
        `;
    categoryContainer.appendChild(div);
  });

}
const handleLoadData = async (categoryId) => {
  const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
  const data = await response.json();


  const cardContainer = document.getElementById('card-container');
  cardContainer.innerHTML = " ";
  const drawingContainer = document.getElementById('drawing-container');

  if (categoryId == 1005) {

    const p = document.createElement('p');
    p.className = " mx-auto gap-10 flex text-center items-center justify-center"

    p.innerHTML = `
    
          <img class="items-center" src="Icon.png" alt="">
          <h1 class="text-4xl font-bold">Oops!! Sorry, There is no content here</h1>

       
    `
    drawingContainer.innerHTML = ''
    drawingContainer.appendChild(p)


  }
  data.data.forEach((card) => {
    card.authors.map(profile => {
      const date=parseFloat(card.others.posted_date);

      let hours=parseInt(date/3600);
      
      let sec=date%3600;
      let min=parseInt(sec/60)
  
      const div = document.createElement('div');
      div.classList = "card p-5 bg-gray-100 shadow-xl";


      div.innerHTML = `
                <div class="relative">

                <figure class="h-60  object-cover" >
                <img class="w-96 h-60"  src=${card?.thumbnail?card.thumbnail:' '} alt="Shoes" />
                <div>
                 <p  class="absolute p-2 mr-6 bottom-0 right-0
                 rounded-md font-semibold bg-[#171717] text-white">
                 ${`${hours?hours+' Hours':''}  
                 
                 ${min?min+' Mins':''}`}
                 
              </p>
                </div>

                </figure>
                
                
                </div>
                
                <div class="card-body">
                  <h2 class="card-title">${card.title}</h2>

                  <div class="flex justify-center">
                 <div><img class="rounded-full w-14 h-14" src=${profile.profile_picture}/>
                 </div>

                  <p class="text-xl font-normal mt-2 ml-3">${profile.profile_name}</p>
                  
                 ${profile.verified == true ?

          '<img src="fi_10629607.svg"/>' : ' '
        }
                 
                  </div>

                  <p>Views : ${card?.others?.views}</p>
                  
                </div>
             
    `;

      drawingContainer.innerHTML = ''
      cardContainer.appendChild(div);



    })
  })
  


}
apiLoad();
handleLoadData('1000');
const sortBtn=async()=>{
const response=await fetch('https://openapi.programming-hero.com/api/videos/category/1000')
const data=await response.json();
const cardContainer = document.getElementById('card-container');
  cardContainer.innerHTML = " ";
  const drawingContainer = document.getElementById('drawing-container');

const sortedArray=data.data.sort((a,b)=>{
  return parseInt(a.others.views)-parseInt(b.others.views);
  
}).reverse()
sortedArray.forEach((card)=>{
  card.authors.map(profile => {
    const date=parseFloat(card.others.posted_date);

    let hours=parseInt(date/3600);
    
    let sec=date%3600;
    let min=parseInt(sec/60)
    

    const div = document.createElement('div');
    div.classList = "card p-5 bg-gray-100 shadow-xl";


    div.innerHTML = `
              <div class="relative">

              <figure class="h-60  object-cover" >
              <img class="w-96 h-60"  src=${card?.thumbnail?card.thumbnail:' '} alt="Shoes" />
              <div>
               <p  class="absolute mr-6 bottom-0 right-0
               rounded-md font-semibold bg-[#171717] text-white">
               ${`${hours?hours+' Hours':''}  
               
               ${min?min+' Mins':''}`}
               
            </p>
              </div>

              </figure>
              
              
              </div>
              
              <div class="card-body">
                <h2 class="card-title">${card.title}</h2>

                <div class="flex justify-center">
               <div><img class="rounded-full w-14 h-14" src=${profile.profile_picture}/>
               </div>

                <p class="text-xl font-normal mt-2 ml-3">${profile.profile_name}</p>
                
               ${profile.verified == true ?

        '<img src="fi_10629607.svg"/>' : ' '
      }
               
                </div>

                <p>Views : ${card?.others?.views}</p>
                
              </div>
           
  `;

    drawingContainer.innerHTML = ''
    cardContainer.appendChild(div);



  })
})

}

const description = () => {
  window.location.href = "description.html";

}