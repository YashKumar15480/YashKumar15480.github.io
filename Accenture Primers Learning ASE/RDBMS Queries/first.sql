-- Question ====>

-- Write a query to create Mobile_master table with constraints mentioned.

-- Refer the below schema 

.........................................

-- solution 

create table Mobile_master(
IME_No varchar(10) primary key,
Model_name varchar(20),
Manufacturer varchar(20),
Date_of_Manufac date,
Warranty_in_years number(10),
price number(7,2),
distributor_id varchar(10),
    foreign key(distributor_id) References distributor(distributor_id),
spec_no varchar(10),
    foreign key(spec_no) References Mobile_specification(spec_no)
);