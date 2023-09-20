SELECT
  MAX(salary)
  AS
    SecondHighestSalary
FROM
  Employee
WHERE
  salary <
  (SELECT
    MAX(salary)
  FROM
    Employee)

-- Problem with null situation
SELECT
  salary 
  AS
    SecondHighestSalary
FROM
  Employee
ORDER BY
  salary
LIMIT
  1, 1

