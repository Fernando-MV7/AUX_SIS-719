(async () => {
    const randomProductId = Math.floor(Math.random() * 100) + 1;
    const url = `https://dummyjson.com/products/${randomProductId}`;
  
    try {
            const response = await fetch(url);
            const data: any = await response.json();
      console.log(data);
    } 
    catch (error) {
      console.error('Error:', error);
    }
  })();