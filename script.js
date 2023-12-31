    // Task - 6

    //Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).
    //Get all the countries from Asia continent /region using Filter function
    //Get all the countries with a population of less than 2 lakhs using Filter function
    //Print the following details name, capital, flag, using forEach function
    //Print the total population of countries using reduce function
    //Print the country that uses US dollars as currency.
    
// Fetch data from the API
 fetch("https://restcountries.com/v3.1/all")
.then((response) => response.json())
.then((data) => {
  // Task 1: Get all the countries from Asia continent / region using Filter function
  const asiaCountries = data.filter((country) => country.region === "Asia");
  console.log("Countries in Asia:", asiaCountries);

  // Task 2: Get all the countries with a population of less than 2 lakhs using Filter function
  const lowPopulationCountries = data.filter(
    (country) =>
      country.population && country.population < 200000 // Assuming population is in the appropriate property
  );
  console.log("Countries with population less than 2 lakhs:", lowPopulationCountries);

  // Task 3: Print the following details name, capital, flag, using forEach function
  data.forEach((country) => {
    console.log("Name:", country.name.common);
    console.log("Capital:", country.capital);
    console.log("Flag:", country.flags.png);
  });

  // Task 4: Print the total population of countries using reduce function
  const totalPopulation = data.reduce(
    (accumulator, country) =>
      accumulator + (country.population || 0), // Assuming population is in the appropriate property
    0
  );
  console.log("Total population of countries:", totalPopulation);

  // Task 5: Print the country that uses US dollars as currency
  const usDollarCountries = data.filter((country) =>
    country.currencies ? country.currencies.USD : false
  );
  console.log("Countries using US dollars as currency:", usDollarCountries);
})

