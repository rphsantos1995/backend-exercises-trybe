select s.SSN "sciCod", s.Name "sciName", a.Project "assignCod", p.Code "projCod", 
p.Name "projName", p.Hours "projHour"
from Projects as p, Scientists as s, AssignedTo as a
where a.Scientist = s.SSN and
p.Code = a.Project