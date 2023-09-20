SELECT
  c.name AS Customers
FROM 
  Customers c
  LEFT JOIN
    Orders o
    ON
      c.id = o.customerId
WHERE
  o.customerId IS NULL

-- Other solution
SELECT 
  c.Name   
FROM 
  Customers c
WHERE 
  c.Id 
    NOT IN (
      SELECT 
        o.CustomerId
      FROM 
        Orders o)