select score as "score", 
    (select count(distinct Score) from Scores where Score >= s.Score) as "Rank"
from Scores s
order by score desc;