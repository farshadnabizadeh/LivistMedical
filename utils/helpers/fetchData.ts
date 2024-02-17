type fetchDataType = {
    (url: string): Promise<[]>;
  };
  
  const fetchData: fetchDataType = async (url) => {
    try {
      const response = await (await fetch(url)).json();
      return response;
    } catch (error) {
      console.log(error);
    }
  };
  export default fetchData;
  