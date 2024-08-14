        const getLocationBtn = document.getElementById("get-location-btn");
        const cropRecommendationResult = document.getElementById("crop-recommendation-result");
        const cropList = document.getElementById("crop-list");

        getLocationBtn.addEventListener("click", () => {
            navigator.geolocation.getCurrentPosition((position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                // Use latitude and longitude to get recommended crops
                // ...

                // Display the recommended crops
                cropRecommendationResult.classList.remove("d-none");
                cropList.innerHTML = "<li>Tomatoes</li><li>Carrots</li><li>Lettuce</li>";
            }, (error) => {
                console.error(error);
                alert("Unable to get your location. Please make sure your location services are enabled.");
            });
        });