document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const symptomDropdown = document.getElementById('symptomDropdown');
    const getRecommendationsBtn = document.getElementById('getRecommendationsBtn');
    const recommendationsSection = document.getElementById('recommendations');
    const selectedSymptomText = document.getElementById('selectedSymptomText');
    const medicineCard = document.getElementById('medicineCard');
    const dietCard = document.getElementById('dietCard');
    const yogaCard = document.getElementById('yogaCard');
    const medicineNav = document.getElementById('medicineNav');
    const dietNav = document.getElementById('dietNav');
    const yogaNav = document.getElementById('yogaNav');


    if (symptomDropdown) {
        Object.keys(recommendations).sort().forEach(symptom => {
            const option = document.createElement('option');
            option.value = symptom;
            option.textContent = symptom;
            symptomDropdown.appendChild(option);
        });
    }
    const savedSymptom = getSelectedSymptom();
    if (savedSymptom && recommendations[savedSymptom]) {
       
        if (symptomDropdown) symptomDropdown.value = savedSymptom;
        if (recommendationsSection) {
            recommendationsSection.style.display = 'block';
            selectedSymptomText.textContent = savedSymptom;
        }
        
     
        if (medicineNav) medicineNav.classList.remove('disabled');
        if (dietNav) dietNav.classList.remove('disabled');
        if (yogaNav) yogaNav.classList.remove('disabled');
    }

    if (getRecommendationsBtn) {
        getRecommendationsBtn.addEventListener('click', function() {
            const selectedSymptom = symptomDropdown.value;
            
            if (!selectedSymptom) {
                alert('Please select a symptom first');
                return;
            }
            
        
            saveSelectedSymptom(selectedSymptom);
            
          
            recommendationsSection.style.display = 'block';
            selectedSymptomText.textContent = selectedSymptom;
            
            // Enable navigation links
            medicineNav.classList.remove('disabled');
            dietNav.classList.remove('disabled');
            yogaNav.classList.remove('disabled');
            
            // Add animation class
            recommendationsSection.classList.add('fadeIn');
            
            // Smooth scroll to recommendations
            recommendationsSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Card click handlers
    if (medicineCard) {
        medicineCard.addEventListener('click', function() {
            window.location.href = 'medicine.html';
        });
    }
    
    if (dietCard) {
        dietCard.addEventListener('click', function() {
            window.location.href = 'diet.html';
        });
    }
    
    if (yogaCard) {
        yogaCard.addEventListener('click', function() {
            window.location.href = 'yoga.html';
        });
    }

    // Add card hover animations
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Add button hover animations
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});