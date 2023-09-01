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
  cardContainer.innerHTML=" ";
  const drawingContainer=document.getElementById('drawing-container');
  if(categoryId==1005){
    
    const p=document.createElement('p');
    p.className=" mx-auto gap-5 flex text-center items-center justify-center"
    p.innerHTML=`
    
          <img class="items-center" src="Icon.png" alt="">
          <h1 class="text-4xl font-bold">Oops!! Sorry, There is no content here</h1>

       
    `
    drawingContainer.innerHTML=''
    drawingContainer.appendChild(p)
    
    
  }else{
    console.log('')
  }
  data.data.forEach((card) => {
    card.authors.map(profile=>{
     
    
    const div = document.createElement('div');
    div.classList = "card p-5 bg-gray-100 shadow-xl";
    

    div.innerHTML = `
   
                
                <figure class="h-60 w-96" ><img  src=${card?.thumbnail} alt="Shoes" />
                </figure>
                
                <div class="card-body">
                  <h2 class="card-title">${card.title}</h2>

                  <div class="flex justify-items-center">
                 <img class="rounded-full w-14 h-14" src=${profile.profile_picture}/>

                  <p class="text-xl font-normal mt-2 ml-3">${profile.profile_name}</p>
                  
                 ${profile.verified==true ?
                
                 '<img src="fi_10629607.svg"/>': ' '
                }
                 
                  </div>

                    
                  
                  <p>Views : ${card?.others?.views}</p>
                  
                </div>
             
    `;
    drawingContainer.innerHTML=''
    cardContainer.appendChild(div);
    
    
  })
  })

}
apiLoad();
handleLoadData('1000');

const description = () => {
  window.location.href = "description.html";

}