
        // Function to fetch model-based recommendations
        async function getModelBasedRecommendations(usrid) {
            const userIdModel = usrid;
            const num_recommendations = 12;
            const rankbasedheader = document.getElementById('model-based-product-header');
            rankbasedheader.innerHTML=`Personally Curated For You `;
        
            const response = await fetch('/api/model_based/recommendations', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user_id: userIdModel,
                    num_recommendations: num_recommendations
                })
            });

            if (response.ok) {
            // console.log(response);
            const data = await response.json();
            // console.log(data.recommended_products);
            const recommendedProducts = data.recommended_products;
            console.log(recommendedProducts);
            const productsList = document.getElementById('model-based-recommendations-list');
            productsList.innerHTML = '';

            for (var i = 0; i < recommendedProducts.length; i++) {
                const listItem = document.createElement('div');       
                listItem.classList.add('rank-based-card');
                listItem.classList.add('card');

                listItem.innerHTML =`<img src= "${recommendedProducts[i].image}" alt="${recommendedProducts[i].product_name} class="card-img-top rank-based-card-img"">
                <p class="card-text rank-based-card-text">${recommendedProducts[i].product_name.substring(0,40)}</p>
                <h5 class="card-title rank-based-card-title">Price: ${recommendedProducts[i].price}</h5>`;
                productsList.appendChild(listItem);
            };
        } else {
            console.error('Error:', response.status, response.statusText);
        }
    }


