async function fetchUrls(urls) {
    for (const url of urls) {
      const start = Date.now();
      await fetch(url);
      const duration = Date.now() - start;
      console.log(`Fetched ${url} in ${duration}ms`);
    }
  }
  
  const urls = [
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/comments'
  ];
  fetchUrls(urls);