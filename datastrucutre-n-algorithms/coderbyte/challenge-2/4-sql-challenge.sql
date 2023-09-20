SELECT e.ID, e.Name, d.DivisionName, m.Name AS ManagerName, e.Salary
  FROM maintable_0WEPF e
  LEFT JOIN cb_companydivisions d
  ON e.DivisionID = d.ID
  LEFT JOIN maintable_0WEPF m
  ON e.ManagerID = m.ID
  ORDER BY Salary
  DESC
  LIMIT 1
  OFFSET 2;