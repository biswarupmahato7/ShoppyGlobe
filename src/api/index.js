export const getData = async()=>{
    try{
        const response = await fetch('https://dummyjson.com/products')
        if(!response.ok){
            throw new Error('Failed to fetch data')
        }
        return await response.json();
    }catch(error){
        console.error('Error fetching data',error)
        throw error
    }
}