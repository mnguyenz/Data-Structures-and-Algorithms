-- The Update statement but can't select from this
UPDATE
  Users
SET 
  name =
    CONCAT(
      UPPER(SUBSTRING(name, 1, 1)),
      LOWER(SUBSTRING(name, 2)))

-- Solution
-- Update in SELECT statement
SELECT 
  user_id,
  CONCAT(
    UPPER(LEFT(name, 1)),
    LOWER(RIGHT(name, LENGTH(name) - 1))
  ) 
  AS 
    name
FROM 
  Users 
ORDER BY 
  user_id
