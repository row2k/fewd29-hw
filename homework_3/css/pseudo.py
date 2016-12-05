##Travel from GA to WhiteHouse##
input var

#objective var current -> target
loc_current = (38.904896, -77.034369, 40)
loc_target  = (38.900146, -77.036563, 29)

#action: do delta_loc
delta_loc = loc_target - loc_current
#simplify:
delta_loc = (-270m, -90m, -21m)

#constraints classes
ground = ["drive","uber","bike","walk"]
vertical = ["elevator","stairs"]
#constraints database
c_ground = {
"street_l_1500":(38.902894, -77.035321, 29, 100, 0),
"street_15_1000":(38.901234, -77.035292, 29, 0, 90),
"street_vermont":(38.901234, -77.035292, 29, 20, 90),
...
}
#subclass constraints
for drive:
    if dl == TRUE and car >= 1:
        include "drive"
    else
        exclude "drive"

#optimization
distance = permu(dist_h + dist_v + dist_e)
while all(c_ground) is int
for each permutation:
    route = gen.database(method + dist.translate)

#rank the distance
print distance.rank.head(3)
print route(3)
