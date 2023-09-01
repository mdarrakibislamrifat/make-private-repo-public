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

  const cardContainer = document.getElementById('card-container')
  data.data.forEach((card) => {
    console.log(card.authors)
    const div = document.createElement('div');
    div.classList = "card h-96 bg-gray-100 shadow-xl";
    
    
    div.innerHTML = `
   
                <figure><img src=${card?.thumbnail} alt="Shoes" /></figure>
                <div class="card-body">
                  <h2 class="card-title">${card.title}</h2>
                  <div class="flex">
                  <img src=${card?.profile_picture} />
                  <p>${card?.profile_name}</p>
                  <p>${card.authors.verified}</p>
                    
                    
                  </div>
                  <p>Views :${card?.others?.views}</p>
                  
                </div>
             
    `;
    
    cardContainer.appendChild(div)
  })

}
apiLoad();
handleLoadData('1000');
const description = () => {
  window.location.href = "description.html";

}