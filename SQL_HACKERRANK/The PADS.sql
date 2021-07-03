select concat(name,concat("(", subString(occupation,1,1),")"))as firt from occupations order by name asc;  

select "There are a total of ", count(occupation), concat(lower(occupation),"s.") from occupations group by occupation order by count(occupation),occupation asc;