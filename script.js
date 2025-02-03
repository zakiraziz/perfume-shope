function toggleAnswer(index) {
    const answer = document.getElementById('answer-' + index);
    if (answer.style.display === 'none' || answer.style.display === '') {
        answer.style.display = 'block';
    } else {
        answer.style.display = 'none';
    }
}


function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


function searchFAQ() {
    const query = document.getElementById('search').value.toLowerCase();
    const faqs = document.querySelectorAll('.faq');
    faqs.forEach(function(faq) {
        const question = faq.querySelector('h3').textContent.toLowerCase();
        if (question.includes(query)) {
            faq.style.display = 'block';
        } else {
            faq.style.display = 'none';
        }
    });
}


function clearSearch() {
    document.getElementById('search').value = '';
    searchFAQ();
}



