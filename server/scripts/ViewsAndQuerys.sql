-- VIEWS:

-- =========== Simple: ===========
-- ----------- 1. VIEW RES_MENU -----------
CREATE VIEW RES_MENU
            (ID, NAME, PRICE) AS
SELECT f_id, f_name, f_price FROM foods; 

-- ----------- 2. VIEW EMP_LIST -----------
CREATE VIEW EMP_LIST
            (ID, NAME, ADDRESS, PHONE) AS
SELECT e_id, e_name, e_address, e_phone FROM employees; 

-- ----------- 3. VIEW TABLE_DETAIL -----------
CREATE VIEW TABLE_DETAIL
            (ID, SPACE) AS
SELECT t_id, capacity FROM tables; 

-- =========== Complex: ===========
-- ----------- 4. VIEW bill_detail -----------
CREATE VIEW bill_detail
            (ID, BILL) AS
SELECT c.c_id, SUM (f.f_price * i.quantity) FROM customers c, foods f, items i, orders o 
       WHERE c.c_id = o.c_id AND o.o_id = i.o_id AND i.f_id = f.f_id GROUP BY c.c_id;

-- ----------- 5. VIEW sell_detail -----------

-- principales
-- Ver empleados con detalles
CREATE OR REPLACE VIEW view_employees 
    (ID, NAME, PHONE, ADDRESS, ROL)
AS (
    SELECT e.e_id, e.e_name, e_phone, e.e_address, j.j_title
    FROM employees e, jobs j
    WHERE e.j_id = j.j_id);

-- Ver el total de la orden
CREATE VIEW view_total
            (o_id, t_total) AS
SELECT o.o_id, SUM (f.f_price * i.quantity) FROM customers c, foods f, items i, orders o 
       WHERE c.c_id = o.c_id AND o.o_id = i.o_id AND i.f_id = f.f_id GROUP BY o.o_id;
-- Ver detalles de la orden

CREATE OR REPLACE VIEW view_orders
    (ID, NAME, STATUS, TOTAL)
AS (
    SELECT o.o_id, c.c_name, o.o_status, o.o_total
    FROM customers c, orders o
    WHERE c.c_id = o.c_id);
-- Ver 




CREATE VIEW sell_detail
            (S_DATE, TOTAL)
AS 
SELECT o.o_date, SUM (f.f_price * i.quantity) FROM orders o, foods f, items i 
WHERE o.o_id = i.o_id AND i.f_id = f.f_id GROUP BY o.o_date;


CREATE VIEW order_detail
            (STATUS, TOTAL)
AS 
SELECT o.o_status, SUM (f.f_price * i.quantity) FROM orders o, foods f, items i
WHERE o.o_id = i.o_id AND i.f_id = f.f_id GROUP BY o.o_id;


-- QUERY:

-- 1. Mostrar el menú del restaurante 
SELECT f_id, f_name, f_price FROM foods; 

-- 2. Mostrar el salario total de los empleados
SELECT SUM(e_salary) FROM employees;

-- 3.Show the expense of the restaurant in waiter purpose.
SELECT SUM(e_salary) Expense_Waiter FROM employees
WHERE 
j_id = (SELECT j_id FROM jobs WHERE j_title = 'MESERO');

-- 4.Show the expenses of the restaurant behind employees , job wise.
SELECT j_title Job, SUM(e_salary) Expense 
FROM
employees NATURAL JOIN jobs GROUP BY j_title;

-- 5.Show employee detail (id, name, phone, job_title).
SELECT e.e_id, e.e_name, e.e_phone, j.j_title 
FROM
employees e, jobs j WHERE e.j_id = j.j_id;

-- 6.Show the total sell in 19/10/2022 (Without help of View).

SELECT SUM (f.f_price * i.quantity) FROM foods f, items i
WHERE
    i.f_id = f.f_id
                   AND 
i.o_id IN (SELECT o_id FROM orders o WHERE o_date = '19/10/2022');

-- 7.Show the total sell in 19/10/2022 (With the help of View).
SELECT total FROM sell_detail WHERE s_date = '19/10/2022';

-- 8.Show the total sell in october.
SELECT SUM(total) AS OCTOBER_SELL FROM sell_detail
WHERE s_date BETWEEN '1/10/2022' AND '31/10/2022';

-- 9.Show the total number of customers served Edith Arriaza.
SELECT COUNT(o_id) Served_by_Edith FROM orders 
WHERE 
e_id = (SELECT e_id FROM employees WHERE e_name = 'Edith Arriaza');

-- 10.Show Customer id, name, phone number and bill for all customers.
SELECT bd.id AS ID, c.c_name AS NAME, c.c_phone AS PHONE_NUMBER, bd.bill AS BILL 
FROM 
bill_detail bd, customers c WHERE c.c_id = bd.id;



CREATE VIEW order_detail
            (ID, STATUS, TOTAL)
AS 
SELECT o.o_id, o.o_status, SUM (f.f_price * i.quantity) FROM orders o, foods f, items i
WHERE o.o_id = i.o_id AND i.f_id = f.f_id NATURAL JOIN orders GROUP BY o.o_id;