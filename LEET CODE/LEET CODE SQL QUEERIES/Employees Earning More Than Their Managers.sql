select E1.Name as Employee
from Employee as E1 join Employee as E2
on E1.ManagerId = E2.Id
where E1.salary>E2.salary;