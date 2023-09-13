function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { id: 1, name: "John Doe" };
        if (data) {
          resolve(data); // Operation succeeded, fulfill the promise
        } else {
          reject("Error: Failed to fetch data."); // Operation failed, reject the promise
        }
      }, 2000);
    });
  }
  
  async function fetchDataAsync() {
    try {
      const result = await fetchData(); // Pause execution until the promise resolves
      console.log("Data fetched successfully:", result);
    } catch (error) {
      console.error("Error occurred:", error);
    }
  }
  
  fetchDataAsync();
  