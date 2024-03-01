function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  delay(1000)
    .then(() => {
      console.log('depth1', new Date());
      return delay(2000);
    })
    .then(() => {
      console.log('depth2', new Date());
      return delay(3000);
    })
    .then(() => {
      console.log('depth3', new Date());
      throw new Error('Already 3-depth!!');
    })
    .catch(error => {
      console.error(error);
    });
    
    console.log('START!', new Date());