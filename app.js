//search meals
const searchMeal = () => {
  const searchText = document.getElementById("input").value;
  // Input value
  setTimeout(inputValueTime, 1000)
  function inputValueTime() {
    document.getElementById("input").value = "";
  }
  // Input value
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchText}`
  console.log(url)

  fetch(url)
    .then(res => res.json())
    .catch(err => catchError(err))
    .then(data => displayMeal(data.meals))
}
//display  function
const displayMeal = food => {
  const foodsContainer = document.getElementById("foods-container");
  food.forEach(food => {

    const foodDiv = document.createElement("div");
    foodDiv.className = "foods";

    const foodInfo = `
      <section onclick= "foodDetails ('${food.idMeal}')">
      <img  class= "thumb" src="${food.strMealThumb}" alt="" srcset="">
      <h3 class "meal-name"> ${food.strMeal} </h3>
      </section>
      `;
    foodDiv.innerHTML = (foodInfo);
    foodsContainer.appendChild(foodDiv);

  })
}
// food details function
const foodDetails = (id) => {
  document.getElementById("foods-container").style.display = "none";
  document.getElementById("form").style.display = "none";
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  console.log(url);
  fetch(url)
    .then(res => res.json())
    .then(data => {

      const meal = data.meals[0];
      const detailsDiv = document.getElementById("details-div");
      const infoDiv = document.createElement("div");
      infoDiv.className = "foods1";
      const mealInfo = `
      <img  class= "thumb-2" src="${meal.strMealThumb}" alt="" srcset="">
      <h1 id = "meal-info"> ${meal.strMeal}  <h1>
      <h4> Ingredients </h4>
       <div class= "paragraph">
      <p> ${meal.strMeasure1} ${meal.strIngredient1}</p>
      <p> ${meal.strMeasure2} ${meal.strIngredient2} </p>
      <p> ${meal.strMeasure3} ${meal.strIngredient3} </p>
      <p> ${meal.strMeasure4} ${meal.strIngredient4}</p>
      <p> ${meal.strMeasure5} ${meal.strIngredient5} </p>
      <p> ${meal.strMeasure6} ${meal.strIngredient6} </p>
      </div>
      `;
      infoDiv.innerHTML = (mealInfo);
      detailsDiv.appendChild(infoDiv);

      document.getElementById("get-error").style.display = "none";
    })
}

const catchError = () => {

  const foodsContainer = document.getElementById("get-error");

  const foodDiv = document.createElement("div");
  foodDiv.className = "foods3";
  const foodInfo = `
      <h1> You do not enter valid name.</h1>
      <h5> Please enter correct name</h5>

      `;
  foodDiv.innerHTML = (foodInfo);
  foodsContainer.appendChild(foodDiv);

}

