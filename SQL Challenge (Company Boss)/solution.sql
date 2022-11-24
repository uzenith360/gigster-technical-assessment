/* write your SQL query below */

SELECT FirstName, LastName, ReportsTo, `Position`, Age, IF(ReportsTo IS NULL, 'None', 'CEO') AS `Boss Title` 
FROM maintable_U66XC 
WHERE ReportsTo = 'Jenny Richards' OR ReportsTo IS NULL
ORDER BY Age ASC
