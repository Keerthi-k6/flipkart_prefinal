// Function to fetch rank-based recommendations
//         async function getRankBasedRecommendations() {
//             const subCategory = document.getElementById('sub-category').value;

//             try {
//                 const response = await fetch('/api/rank_based/recommendations', {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json'
//                     },
//                     body: JSON.stringify({ "sub_category": subCategory })
//                 });
//                 if (response.ok) {
//                     const data = await response.json();
//                     console.log(data.recommendations);
//                     displayRecommendations('rank-based-recommendations-list', data.recommendations);
//                 } else {
//                     console.error('Error:', response.status, response.statusText);
//                 }
//             } catch (error) {
//                 console.error('Error:', error);
//             }
//         }

// //         // Function to display recommendations in a list
//         function displayRecommendations(listId, recommendations) {
    //             const recommendationsList = document.getElementById(listId);
    //             recommendationsList.innerHTML = "";
    
    //             for (const product of recommendations) {
        //                 const listItem = document.createElement("li");
        //                 listItem.innerHTML = `
        //                     <img src="${product.image}" alt="${product.product_name}" width="200" height="300">
//                     <p>${product.product_name}</p>
//                     <p>Price: ${product.price}</p>`;
//                 recommendationsList.appendChild(listItem);
//             }
//         }

// Function to fetch rank-based recommendations
async function getRankBasedRecommendations(subCategory) {
    const rankbasedheader = document.getElementById('rank-based-product-header');
    rankbasedheader.innerHTML=`Our top products recommendations for ${subCategory} brand `;
    
    try {
        const response = await fetch('/api/rank_based/recommendations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "sub_category": subCategory })
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data.recommendations);
            displayRecommendations('rank-based-recommendations-list', data.recommendations);
        } else {
            console.error('Error:', response.status, response.statusText);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

// Function to display recommendations in a list
function displayRecommendations(listId, recommendations) {
    const recommendationsList = document.getElementById(listId);
    recommendationsList.innerHTML = "";

    for (const product of recommendations) {
        const listItem = document.createElement("div");
        listItem.classList.add('rank-based-card');
        listItem.classList.add('card');
        listItem.innerHTML = `  
            <img src="${product.image}" alt="${product.product_name}" class="card-img-top rank-based-card-img">
            <p class="card-text rank-based-card-text">${product.product_name.substring(0, 40)}</p>
            <h5 class="card-title rank-based-card-title">${product.price}</h5>
        `;
        recommendationsList.appendChild(listItem);
    }
}
