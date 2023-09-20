SELECT
  u.user_id AS buyer_id,
  u.join_date,
  COUNT(o.buyer_id) AS orders_in_2019
FROM
  Orders o
  RIGHT JOIN
    Users u
    ON 
      o.buyer_id = u.user_id
      AND
        YEAR(o.order_date) = '2019' 
GROUP BY 
  u.user_id
