SELECT
  v.customer_id,
  COUNT(v.customer_id) AS count_no_trans
FROM
  Visits v
  LEFT JOIN
    Transactions t
  ON
    v.visit_id = t.visit_id
WHERE
  t.transaction_id IS NULL
GROUP BY
  v.customer_id;

-- Solution 2
SELECT 
  customer_id, 
  COUNT(visit_id) as count_no_trans 
FROM 
  Visits
WHERE 
  visit_id NOT IN (
    SELECT visit_id FROM Transactions
  )
GROUP BY customer_id;