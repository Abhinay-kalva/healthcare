document.addEventListener('DOMContentLoaded', function() {
    // Get the selected symptom from localStorage
    const selectedSymptom = getSelectedSymptom();
    
    // If no symptom is selected, redirect to home page
    if (!selectedSymptom || !recommendations[selectedSymptom]) {
        alert('Please select a symptom on the home page first');
        window.location.href = 'index.html';
        return;
    }
    
    // Display the symptom name
    document.getElementById('symptomName').textContent = selectedSymptom;
    
    // Get the recommendation for the selected symptom
    const recommendation = recommendations[selectedSymptom];
    
    // Set the general diet text
    document.getElementById('generalDietText').textContent = recommendation.diet;
    
    // Parse diet recommendations into meals
    const dietItems = recommendation.diet.split(';');
    const dietFoods = recommendation.diet.split(',');
    
    // Morning meals
    const morningList = document.getElementById('morningMeals');
    morningList.innerHTML = '';
    
    // Afternoon meals
    const afternoonList = document.getElementById('afternoonMeals');
    afternoonList.innerHTML = '';
    
    // Evening meals
    const eveningList = document.getElementById('eveningMeals');
    eveningList.innerHTML = '';
    
    // Distribute foods between meal times
    if (dietFoods.length >= 3) {
        // More structured approach with multiple food items
        const third = Math.ceil(dietFoods.length / 3);
        
        for (let i = 0; i < third && i < dietFoods.length; i++) {
            const li = document.createElement('li');
            li.textContent = dietFoods[i].trim();
            morningList.appendChild(li);
        }
        
        for (let i = third; i < 2*third && i < dietFoods.length; i++) {
            const li = document.createElement('li');
            li.textContent = dietFoods[i].trim();
            afternoonList.appendChild(li);
        }
        
        for (let i = 2*third; i < dietFoods.length; i++) {
            const li = document.createElement('li');
            li.textContent = dietFoods[i].trim();
            eveningList.appendChild(li);
        }
    } else {
        // Simple approach for fewer items
        morningList.innerHTML = '<li>Fruit-based breakfast with whole grains</li>';
        afternoonList.innerHTML = '<li>' + recommendation.diet + '</li>';
        eveningList.innerHTML = '<li>Light dinner with vegetables and lean protein</li>';
    }
    
    // Add animations
    document.querySelector('.diet-plan-card').classList.add('fadeIn');
    document.querySelector('.tips-box').classList.add('slideInUp');
});