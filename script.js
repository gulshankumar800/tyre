// Navigation मेनू के लिए Smooth Scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // जिस लिंक पर क्लिक हुआ है, उसकी ID निकालें
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        // उस सेक्शन तक स्मूथ तरीके से स्क्रॉल करें (नेविगेशन बार की ऊंचाई को माइनस करके)
        window.scrollTo({
            top: targetSection.offsetTop - 50,
            behavior: 'smooth'
        });
    });
});

// वेबसाइट लोड होने पर कंसोल में एक मैसेज (डेवलपर चेकिंग के लिए)
console.log("Welcome to Yadav Enterprises Website!");