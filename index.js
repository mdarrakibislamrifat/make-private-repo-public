const apiLoad=async()=>{
    const response=await fetch('https://openapi.programming-hero.com/api/videos/categories')
    const data=await response.json();
  
    const categoryContainer=document.getElementById('category-container');
    data.data.forEach((category)=>{
        const div=document.createElement('div');
        
        div.innerHTML=`
        
        <a onclick="handleLoadData('${category.category_id}')" class="tab">${category.category}</a>
        `;
        categoryContainer.appendChild(div);
    });
    
}
const handleLoadData=async(categoryId)=>{
   const response=await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
   const data=await response.json();
   console.log(data)

}
apiLoad();
const description=()=>{
    window.location.href = "description.html";
    
}