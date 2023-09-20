SELECT e.GroupID, e.FirstName, e.LastName, e.Job, e.ExternalID, v.CompanyName, COUNT(e.VendorId) AS Count
  FROM maintable_PK1Q7 e
  JOIN cb_vendorinformation v
  ON e.GroupID = v.GroupID
  GROUP BY e.FirstName
  ORDER BY Count, v.CompanyName
  ASC