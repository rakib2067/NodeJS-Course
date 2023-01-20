async function sendCustomerData(id){
  try {
    const customer = await getCustomer(id);
    console.log(`Customer: ${customer}`);
    if (customer.isGold){
      const topMovies = await getTopMovies();
      console.log(`Movies: ${topMovies}`);
      sendEmail(customer.email, topMovies);
    }
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
}
sendCustomerData();
function getCustomer(id) {
  return new Promise((resolve, reject) => { 
    setTimeout(() => {
      resolve({ 
        id: 1, 
        name: 'Mosh Hamedani', 
        isGold: true, 
        email: 'email' 
      });
    }, 4000);    
  })
}

function getTopMovies() {
  return new Promise((resolve, reject) => { 
    setTimeout(() => {
      resolve(['movie1', 'movie2']);
    }, 4000);
  })
}

function sendEmail(email, movies) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Email Sent');
      resolve();
    }, 4000);
  })
}