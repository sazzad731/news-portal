const categories = async (categoryId) => {
  const url = `https://openapi.programming-hero.com/api/news/category/${categoryId}`;
  const response = await fetch(url);
  const categoryData = await response.json();
  displayCategories(categoryData.data);
};

const displayCategories = (data) => {
  const contentBox = document.getElementById("content-box");
  contentBox.innerHTML = "";
  data.forEach((item) => {
    contentBox.innerHTML += `
      <div class="flex p-5 rounded-xl bg-white mb-6 cursor-pointer drop-shadow-xl">
            <img src="${item.thumbnail_url}" alt="News">
          <div class="px-10">
            <div class="h-4/5">
              <h3 class="font-bold text-2xl mb-3">${item.title}</h3>
              <p class="text-gray-400">${
                item.details.length > 500
                  ? item.details.slice(0, 500)
                  : item.details
              }</p>
            </div>

            <div class="flex items-center justify-between">
              <!-- user info -->
              <div class="flex items-center gap-3">
                <img class="relative inline-block h-12 w-12 rounded-full object-cover object-center" src="${
                  item.author.img
                }" alt="avatar">
                <div>
                  <h6>${
                    item.author.name === null ? "Author" : item.author.name
                  }</h6>
                  <h6>${
                    item.author.published_date === null
                      ? "No date found"
                      : item.author.published_date
                  }</h6>
                </div>
              </div>
              <!-- views div -->
              <div class="flex gap-1 items-center">
                <img src="img/carbon_view.png" alt="views">
                <div class="font-bold text-lg"><p>${
                  item.total_view === null ? 0 : item.total_view
                }</p></div>
              </div>
              <!-- rating -->
              <div>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
              </div>
              <div class="cursor-pointer text-blue-500 text-2xl">
                <i class="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
    `;
  })
};

categories("08");