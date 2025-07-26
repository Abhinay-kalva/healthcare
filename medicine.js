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
    
    // Set the medicine text
    document.getElementById('medicineText').textContent = recommendation.medicine;
    
    // Extract just the medicine name for search
    let medicineName = recommendation.medicine.split(',')[0];
    medicineName = medicineName.split(' ').slice(0, 2).join(' '); // Take first two words
    
    // Set pharmacy links with the medicine name in search query
    document.getElementById('pharmacy1').href = `https://www.1mg.com/search/all?name=${encodeURIComponent(medicineName)}`;
    document.getElementById('pharmacy2').href = `https://www.apollopharmacy.in/search-medicines/${encodeURIComponent(medicineName)}`;
    document.getElementById('pharmacy3').href = `https://pharmeasy.in/search/all?name=${encodeURIComponent(medicineName)}`;
    
    // Extract dosage information
    const dosageInfo = recommendation.medicine.split(',').slice(1).join(',').trim();
    if (dosageInfo) {
        document.getElementById('dosageInfo').textContent = dosageInfo;
    }
    
    // Add animations
    document.querySelector('.medicine-card').classList.add('fadeIn');
    document.querySelector('.warning-box').classList.add('slideInUp');
});