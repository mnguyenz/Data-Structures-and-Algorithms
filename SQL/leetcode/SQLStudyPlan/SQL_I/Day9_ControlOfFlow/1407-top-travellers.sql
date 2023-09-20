-- Solution 1
SELECT
  u.name,
  CASE 
    WHEN SUM(r.distance) IS NULL THEN 0 
    ELSE SUM(r.distance)
  END
  AS travelled_distance
FROM
  Users u
  LEFT JOIN
    Rides r
    ON
      u.id = r.user_id
GROUP BY
  u.id
ORDER BY
  travelled_distance DESC,
  u.name ASC;

-- Solution 2
SELECT 
  u.name,
  SUM(
	  IF (r.distance IS NULL, 0, r.distance)
	) 
  AS travelled_distance
FROM 
  Users u
  LEFT JOIN 
    Rides r 
    ON 
      u.id=r.user_id
GROUP BY 
  u.id
ORDER BY 
  travelled_distance DESC,
  name ASC