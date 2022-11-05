
INSERT INTO jobs (j_title) VALUES ('COCINERO');
INSERT INTO jobs (j_title) VALUES ('MESERO');
INSERT INTO jobs (j_title) VALUES ('LIMPIADOR');
INSERT INTO jobs (j_title) VALUES ('CAJERO');


INSERT INTO employees (e_name, e_phone, e_address, e_salary, e_status, j_id) VALUES ('Mario Arita', 46703443, 'Rio Dulce, Livingston, Izabal',  7000,'ACTIVO', 100);
INSERT INTO employees (e_name, e_phone, e_address, e_salary, e_status, j_id) VALUES ('Nery Lopez', 48894575, 'Buena Vista, Livingston, Izabal',  6000,'ACTIVO', 101);
INSERT INTO employees (e_name, e_phone, e_address, e_salary, e_status, j_id) VALUES ('Maria Pérez', 45874521, 'Rio Dulce, Livingston, Izabal',  5000,'ACTIVO', 101);
INSERT INTO employees (e_name, e_phone, e_address, e_salary, e_status, j_id) VALUES ('Edith Arriaza', 45456584, 'La Reforma, El Estor, Izabal',  4500,'ACTIVO', 102);
INSERT INTO employees (e_name, e_phone, e_address, e_salary, e_status, j_id) VALUES ('Juan Rodríguez', 45574856, 'Avenida Simon Bolivar, Morales, Izabal',  21000,'ACTIVO', 103);

INSERT INTO tables (capacity, e_id) VALUES (4, 1001);
INSERT INTO tables (capacity, e_id) VALUES (4, 1001);
INSERT INTO tables (capacity, e_id) VALUES (2, 1002);
INSERT INTO tables (capacity, e_id) VALUES (8, 1002);

-- Breakfast
INSERT INTO foods (f_type, f_name, f_description, f_price) VALUES ('Desayuno','Pollo al horno' ,'Un sabroso plato de pollo marinado y asado a fuego directo.', 45);
INSERT INTO foods (f_type, f_name, f_description, f_price) VALUES ('Desayuno','Huevos Benedict' ,'Mezcla cremosa hecha con yemas de huevo, mantequilla, jugo de limón y varios condimentos', 40);
INSERT INTO foods (f_type, f_name, f_description, f_price) VALUES ('Desayuno','Sandwich' ,'Sándwich con huevos, tocino, guacamole, queso, todo en un croissant tostado.', 35);
INSERT INTO foods (f_type, f_name, f_description, f_price) VALUES ('Desayuno','Bagel y queso crema' ,'Rosquilla con queso crema y con tocino crujiente y tomates a la parrilla.', 30);
INSERT INTO foods (f_type, f_name, f_description, f_price) VALUES ('Desayuno','Brunch con huevos revueltos' ,'Huevos fritos revueltos con pan tostado acompañado con tocino.', 20);
INSERT INTO foods (f_type, f_name, f_description, f_price) VALUES ('Desayuno','Brunch con huevos estrellados' ,'Huevos fritos estrellados con pan tostado acompañado con tocino.', 20);

-- Lunch
INSERT INTO foods (f_type, f_name, f_description, f_price) VALUES ('Almuerzo','Filete de res' ,'El filete de res marinada en jugo de limón, servida con verduras', 45);
INSERT INTO foods (f_type, f_name, f_description, f_price) VALUES ('Almuerzo','Pollo com Miel y Pimientos' ,'Pollo marinado con una infusión de pimientos picantes y miel.', 40);
INSERT INTO foods (f_type, f_name, f_description, f_price) VALUES ('Almuerzo','Salmón con Tarrgaon' ,'Salmón con Salsa de Champiñones y Estragón.', 50);
INSERT INTO foods (f_type, f_name, f_description, f_price) VALUES ('Almuerzo','Almuerzo Indio' ,'Arroz con curry de carne, pollo o marisco ensalada de vegetales y tostadas.', 55);
INSERT INTO foods (f_type, f_name, f_description, f_price) VALUES ('Almuerzo','Bento de pollo frito' ,'Pollo frito acompañado con arroz y papas fritas.', 55);
INSERT INTO foods (f_type, f_name, f_description, f_price) VALUES ('Almuerzo','Pan Saludable' ,'Pan tostados y verduras a la parilla', 35);

-- Dinner
INSERT INTO foods (f_type, f_name, f_description, f_price) VALUES ('Cena','Pollo al horno' ,'Pan tostados y verduras a la parilla', 35);
INSERT INTO foods (f_type, f_name, f_description, f_price) VALUES ('Cena','Piccata de salmón' ,'Pan tostados y verduras a la parilla', 40);
INSERT INTO foods (f_type, f_name, f_description, f_price) VALUES ('Cena','Salmón al horno' ,'Salmón al horno con mantequilla de ajo', 30);
INSERT INTO foods (f_type, f_name, f_description, f_price) VALUES ('Cena','Papas a la francesa' ,'Papas a la francesa con queso y crema', 25);
INSERT INTO foods (f_type, f_name, f_description, f_price) VALUES ('Cena','Lomo de cerdo' ,'Lomo de cerdo asada a la plancha con ensalada verduras', 40);
INSERT INTO foods (f_type, f_name, f_description, f_price) VALUES ('Cena','Ensalada vegetariana' ,'Ensalada vegetariana', 20);



INSERT INTO customers (c_name, c_address, c_phone, c_status) VALUES ('Andrea Sandoval', 'Buena Vista, Livingston, Izabal', 45785685, 'ACTIVO');
INSERT INTO customers (c_name, c_address, c_phone, c_status) VALUES ('Bagned Mohamed', 'Buena Vista, Livingston, Izabala', 45548756, 'ACTIVO');
INSERT INTO customers (c_name, c_address, c_phone, c_status) VALUES ('Andres Ramírez', 'Rio Dulce, Livingston, Izabal', 45846589, 'ACTIVO');
INSERT INTO customers (c_name, c_address, c_phone, c_status) VALUES ('Carlos Pinto', 'Rio Dulce, Livingston, Izabal', 12456545, 'ACTIVO');
INSERT INTO customers (c_name, c_address, c_phone, c_status) VALUES ('Sebastian Garcia', 'Rio Dulce, Livingston, Izabal', 84568745, 'ACTIVO');
INSERT INTO customers (c_name, c_address, c_phone, c_status) VALUES ('Monica González', 'Avenida Simon Bolivar, Morales, Izabal', 45874565, 'ACTIVO');


INSERT INTO orders (o_type, o_status, o_total, c_id) VALUES ('PARA LLEVAR', 'PENDIENTE', 200, 2000);
INSERT INTO orders (o_type, o_status, o_total, c_id) VALUES ('EN LOCAL', 'PENDIENTE', 150, 2001);
INSERT INTO orders (o_type, o_status, o_total, c_id) VALUES ('PARA LLEVAR', 'PENDIENTE', 80, 2002);
INSERT INTO orders (o_type, o_status, o_total, c_id) VALUES ('EN LOCAL', 'PENDIENTE', 75, 2003);
INSERT INTO orders (o_type, o_status, o_total, c_id) VALUES ('PARA LLEVAR', 'PENDIENTE', 65, 2004);
INSERT INTO orders (o_type, o_status, o_total, c_id) VALUES ('PARA LLEVAR', 'PENDIENTE', 95, 2005);
INSERT INTO orders (o_type, o_status, o_total, c_id) VALUES ('EN LOCAL', 'PENDIENTE', 175, 2000);
INSERT INTO orders (o_type, o_status, o_total, c_id) VALUES ('EN LOCAL', 'PENDIENTE', 150, 2001);
INSERT INTO orders (o_type, o_status, o_total, c_id) VALUES ('PARA LLEVAR', 'PENDIENTE', 80, 2002);
INSERT INTO orders (o_type, o_status, o_total, c_id) VALUES ('PARA LLEVAR', 'PENDIENTE', 75, 2003);


-- INSERT INTO order_history (t_id, o_id) VALUES (1, 200);
-- INSERT INTO order_history (t_id, o_id) VALUES (2, 201);
-- INSERT INTO order_history (t_id, o_id) VALUES (2, 202);

INSERT INTO items (o_id, f_id, quantity) VALUES (1, 10, 4);
INSERT INTO items (o_id, f_id, quantity) VALUES (2, 11, 2);
INSERT INTO items (o_id, f_id, quantity) VALUES (2, 12, 2);
INSERT INTO items (o_id, f_id, quantity) VALUES (3, 12, 3);
INSERT INTO items (o_id, f_id, quantity) VALUES (4, 18, 2);
INSERT INTO items (o_id, f_id, quantity) VALUES (4, 25, 2);
INSERT INTO items (o_id, f_id, quantity) VALUES (5, 24, 1);
INSERT INTO items (o_id, f_id, quantity) VALUES (5, 19, 2);
INSERT INTO items (o_id, f_id, quantity) VALUES (5, 15, 2);
INSERT INTO items (o_id, f_id, quantity) VALUES (6, 11, 1);
INSERT INTO items (o_id, f_id, quantity) VALUES (6, 12, 2);
INSERT INTO items (o_id, f_id, quantity) VALUES (6, 15, 1);
INSERT INTO items (o_id, f_id, quantity) VALUES (7, 18, 1);

INSERT INTO booking (b_date, b_hour, c_id, t_id) VALUES ('29-10-2022', 2, 2000, 1);
INSERT INTO booking (b_date, b_hour, c_id, t_id) VALUES ('30-10-2022', 1, 2001, 2);
INSERT INTO booking (b_date, b_hour, c_id, t_id) VALUES ('30-10-2022', 4, 2001, 4);
INSERT INTO booking (b_date, b_hour, c_id, t_id) VALUES ('31-10-2022', 2, 2004, 3);



