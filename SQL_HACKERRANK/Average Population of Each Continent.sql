select country.continent, floor(avg(city.population)) 
from city inner join country on countrycode = code 
GROUP BY COUNTRY.CONTINENT ;