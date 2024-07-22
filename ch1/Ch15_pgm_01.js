// Helper function to determine if a number is prime
const isPrime = (num) => {
    if (num <= 1) return false;
    if (num <= 3) return true;
  
    if (num % 2 === 0 || num % 3 === 0) return false;
  
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
  
    return true;
  };
  
  // Get the container element
  const container = document.getElementById('number-container');
  
  // Generate numbers from 1 to 100 and append to the container
  for (let i = 1; i <= 100; i++) {
    const numberElement = document.createElement('div');
    numberElement.textContent = i;
    numberElement.classList.add('number');
  
    // Apply background color based on the number type
    if (isPrime(i)) {
      numberElement.style.backgroundColor = 'red';
    } else if (i % 2 === 0) {
      numberElement.style.backgroundColor = 'green';
    } else {
      numberElement.style.backgroundColor = 'yellow';
    }
  
    // Append the number element to the container
    container.appendChild(numberElement);
  }
  