SELECT yash1.id
FROM Weather AS yash1 , Weather AS yash2
WHERE yash1.Temperature > yash2.Temperature AND DATEDIFF(yash1.recordDate , yash2.recordDate) = 1