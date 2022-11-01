INSERT INTO jobs (j_id, j_title) VALUES (11, 'MESERO');
INSERT INTO jobs (j_id, j_title) VALUES (12, 'COCINERO');
INSERT INTO jobs (j_id, j_title) VALUES (23, 'LIMPIADOR');
INSERT INTO jobs (j_id, j_title) VALUES (24, 'CAJERO');

INSERT INTO employees (e_id, e_name, e_phone, e_address, e_salary, j_id) VALUES (1, 'Mario Arita', 46703443, 'Rio Dulce, Livingston, Izabal', 7000, 12);
INSERT INTO employees (e_id, e_name, e_phone, e_address, e_salary, j_id) VALUES (2, 'Nery Lopez', 48894575, 'Buena Vista, Livingston, Izabal', 6000, 23);
INSERT INTO employees (e_id, e_name, e_phone, e_address, e_salary, j_id) VALUES (3, 'Edith Arriaza', 45456584, 'La Reforma, El Estor, Izabal', 4500, 11);
INSERT INTO employees (e_id, e_name, e_phone, e_address, e_salary, j_id) VALUES (4, 'Juan Rodríguez', 45574856, 'Avenida Simon Bolivar, Morales, Izabal', 21000, 24);
INSERT INTO employees (e_id, e_name, e_phone, e_address, e_salary, j_id) VALUES (5, 'Maria Pérez', 45874521, 'Rio Dulce, Livingston, Izabal', 5000, 11);

INSERT INTO tables (t_id, capacity, e_id) VALUES (11, 4, 3);
INSERT INTO tables (t_id, capacity, e_id) VALUES (12, 4, 3);
INSERT INTO tables (t_id, capacity, e_id) VALUES (13, 2, 3);
INSERT INTO tables (t_id, capacity, e_id) VALUES (14, 10, 3);

INSERT INTO foods (f_id, f_name, f_price, e_id) VALUES (1, 'HAMBURGUESA', 45, 1);
INSERT INTO foods (f_id, f_name, f_price, e_id) VALUES (2, 'SANDWICH', 25, 1);
INSERT INTO foods (f_id, f_name, f_price, e_id) VALUES (3, 'PIZZA', 80, 1);
INSERT INTO foods (f_id, f_name, f_price, e_id) VALUES (4, 'PASTA', 30, 1);

INSERT INTO customers (c_id, c_name, c_address, c_phone) VALUES (102, 'Andrea Sandoval', 'Buena Vista, Livingston, Izabal', 45785685);
INSERT INTO customers (c_id, c_name, c_address, c_phone) VALUES (103, 'Bagned Mohamed', 'Buena Vista, Livingston, Izabala', 45548756);
INSERT INTO customers (c_id, c_name, c_address, c_phone) VALUES (101, 'Andres Ramírez', 'Rio Dulce, Livingston, Izabal', 45846589);
INSERT INTO customers (c_id, c_name, c_address, c_phone) VALUES (104, 'Carlos Pinto', 'Rio Dulce, Livingston, Izabal', 12456545);
INSERT INTO customers (c_id, c_name, c_address, c_phone) VALUES (105, 'Sebastian Garcia', 'Rio Dulce, Livingston, Izabal', 84568745);
INSERT INTO customers (c_id, c_name, c_address, c_phone) VALUES (106, 'Monica González', 'Avenida Simon Bolivar, Morales, Izabal', 45874565);

INSERT INTO orders (o_id, o_type, o_date, c_id, e_id) VALUES (1, 'PARA LLEVAR', '19-10-2022', 101, 3);
INSERT INTO orders (o_id, o_type, o_date, c_id, e_id) VALUES (2, 'EN LOCAL', '19-10-2022', 102, 3);
INSERT INTO orders (o_id, o_type, o_date, c_id, e_id) VALUES (3, 'EN LOCAL', '19-10-2022', 103, 3);
INSERT INTO orders (o_id, o_type, o_date, c_id, e_id) VALUES (5, 'PARA LLEVAR', '19-10-2022', 104, 3);
INSERT INTO orders (o_id, o_type, o_date, c_id, e_id) VALUES (4, 'PARA LLEVAR', '19-10-2022', 105, 3);
INSERT INTO orders (o_id, o_type, o_date, c_id, e_id) VALUES (6, 'EN LOCAL', '19-10-2022', 106, 3);

INSERT INTO order_history (t_id, o_id) VALUES (11, 2);
INSERT INTO order_history (t_id, o_id) VALUES (12, 3);
INSERT INTO order_history (t_id, o_id) VALUES (14, 6);

INSERT INTO items (o_id, f_id, quantity) VALUES (1, 3, 4);
INSERT INTO items (o_id, f_id, quantity) VALUES (2, 3, 2);
INSERT INTO items (o_id, f_id, quantity) VALUES (3, 4, 3);
INSERT INTO items (o_id, f_id, quantity) VALUES (4, 3, 2);
INSERT INTO items (o_id, f_id, quantity) VALUES (5, 3, 3);
INSERT INTO items (o_id, f_id, quantity) VALUES (5, 1, 1);
INSERT INTO items (o_id, f_id, quantity) VALUES (6, 2, 1);


INSERT INTO booking (b_date, b_hour, c_id, t_id) VALUES ('29-10-2022', 2, 101, 11);
INSERT INTO booking (b_date, b_hour, c_id, t_id) VALUES ('30-10-2022', 1, 103, 12);
INSERT INTO booking (b_date, b_hour, c_id, t_id) VALUES ('30-10-2022', 4, 104, 14);
INSERT INTO booking (b_date, b_hour, c_id, t_id) VALUES ('31-10-2022', 2, 101, 13);



