/*взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути списком під час відображення.*/
fetch('https://dummyjson.com/recipes?limit=0')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('recipes');

        data.recipes.forEach(recipe => {
            const recipeDiv = document.createElement('div')
            recipeDiv.className = 'recipe'

            const title = document.createElement('h2')
            title.innerText = recipe.name

            const ingridientsTitle = document.createElement('h4')
            ingridientsTitle.innerText = 'Шнгрідієнти'

            const ingridientList = document.createElement('ul')

            recipe.ingredients.forEach(ingredient => {
                const li = document.createElement('li');
                li.innerText = ingredient;
                ingridientList.appendChild(li)
            })

            recipeDiv.append(title, ingridientsTitle, ingridientList)
            container.appendChild(recipeDiv)
        });
    })