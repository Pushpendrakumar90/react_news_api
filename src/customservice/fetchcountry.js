export const fetchcountry = async (country) => {
    
    let res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    if(!res.ok){
        throw new Error('enter country name');
    }
    let result = await res.json();
    return result[0];
}