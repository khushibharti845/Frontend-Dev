$(document).ready(function() {
  function getGreeting() {
    const hour = new Date().getHours();
    
    if (hour >= 5 && hour < 12) {
      return "Good Morning!";
    } else if (hour >= 12 && hour < 17) {
      return "Good Afternoon!";
    } else {
      return "Good Evening!";
    }
  }

  $('#greeting').text(getGreeting());

  const quotes = [
    "Believe you can and you're halfway there.",
    "The only way to do great work is to love what you do.",
    "Success is not final, failure is not fatal.",
    "Dream big and dare to fail.",
    "Every moment is a fresh beginning."
  ];

  $('#changeBtn').click(function() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    $('#welcomeMessage').text(randomQuote);
    alert('Greeting changed to a motivational quote!');
  });

  $('#toggleBtn').click(function() {
    $('#welcomeMessage').toggle();
  });

  $('#greeting').click(function() {
    alert('Welcome to our website! 🎉');
  });
});