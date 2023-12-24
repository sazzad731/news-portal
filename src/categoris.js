const loadData = async () => {
  const url = `https://openapi.programming-hero.com/api/news/categories`;
  const response = await fetch(url);
  const data = await response.json();
  displayData(data.data.news_category);
}

const displayData = (newsCategory) => {
  const categoryContainer = document.getElementById("category-container");
  newsCategory.forEach((category) => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="">${category.category_name}</a>`;
    categoryContainer.appendChild(li);
  })
};


loadData();