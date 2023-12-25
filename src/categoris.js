const loadData = async () => {
  const url = `https://openapi.programming-hero.com/api/news/categories`;
  const response = await fetch(url);
  const data = await response.json();
  displayData(data.data.news_category);
}

const displayData = (newsCategory) => {
  const categoryContainer = document.getElementById("category-container");
  newsCategory.forEach((category, index) => {
    categoryContainer.innerHTML += `<li class="cursor-pointer" onclick="categories('${newsCategory[index].category_id}')">${category.category_name}</li>`;
  })
};


loadData();