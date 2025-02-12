// const apiKey = "fd837210d03e460e9450a44cecda6b4f";

// const blogContainer = document.getElementById("blogContainer");



// async function fetchNews(){
//   try {
//     const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apiKey=${apiKey}`;
//     const response = await fetch(apiUrl);
//     const data = await response.json();
//     return data.articles;
//   } catch (error) {
//     console.error("Error fetching random news", error);
//     return [];
//   }
// }

// function displayBlogs(articles) {
//   blogContainer.innerHTML = "";
//   articles.forEach((article) => {
//     const blogCard = document.createElement("div");
//     blogCard.classList.add("blog-card");
//     const img = document.createElement("img");
//     img.src = article.urlToImage;
//     img.alt = article.title;
//     const title = document.createElement("h2");
//     title.textContent = article.title;
//     const description = document.createElement("p");
//     description.textContent = article.description;
//     blogCard.appendChild(img);
//     blogCard.appendChild(title);
//     blogCard.appendChild(description);
//     blogContainer.appendChild(blogCard);
//   });
// }

// (async () => {
//   try{
//     const articles = await fetchNews();
//     displayBlogs(articles);
//   } catch (error) {
//     console.error("Error fetching random news", error);
//   }
// })();


const apiKey = "fd837210d03e460e9450a44cecda6b4f";

const blogContainer = document.getElementById("blogContainer");

async function fetchNews() {
  try {
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apiKey=${apiKey}`;
    const response = await fetch(apiUrl, { mode: "cors" });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    
    if (!data.articles) {
      throw new Error("Invalid response: 'articles' is undefined");
    }

    return data.articles;
  } catch (error) {
    console.error("Error fetching random news:", error);
    return [];
  }
}

function displayBlogs(articles) {
  blogContainer.innerHTML = "";
  if (articles.length === 0) {
    blogContainer.innerHTML = "<p>No news articles available.</p>";
    return;
  }

  articles.forEach((article) => {
    const blogCard = document.createElement("div");
    blogCard.classList.add("blog-card");

    const img = document.createElement("img");
    img.src = article.urlToImage || "https://via.placeholder.com/150"; // Fallback image
    img.alt = article.title || "No image available";

    const title = document.createElement("h2");
    title.textContent = article.title || "No title available";

    const description = document.createElement("p");
    description.textContent = article.description || "No description available.";

    blogCard.appendChild(img);
    blogCard.appendChild(title);
    blogCard.appendChild(description);
    blogContainer.appendChild(blogCard);
  });
}

(async () => {
  try {
    const articles = await fetchNews();
    displayBlogs(articles);
  } catch (error) {
    console.error("Error displaying news:", error);
  }
})();