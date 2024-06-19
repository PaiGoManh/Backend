const Array = async (arr) => {
    for (const num of arr) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log(num * 2);
    }
  };
  
  const numbers = [1, 2, 3, 4, 5];
  Array(numbers);