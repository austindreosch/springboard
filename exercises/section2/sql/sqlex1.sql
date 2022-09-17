-- PART 3
-- 1
INSERT INTO products
    (name, price, can_be_returned)
VALUES
    ('chair', 44.00, 'false');
-- 2
INSERT INTO products
    (name, price, can_be_returned)
VALUES
    ('stool', 25.99, 'true');
-- 3
INSERT INTO products
    (name, price, can_be_returned)
VALUES
    ('table', 124.00, 'false');
-- 4
SELECT * FROM products;
-- 5
SELECT name FROM products;
-- 6
SELECT name, price FROM products;
-- 7
INSERT INTO products
    (name, price, can_be_returned)
VALUES
    ('xbox', 499.99, 'true');
-- 8
SELECT * FROM products WHERE can_be_returned = true;
-- 9
SELECT * FROM products WHERE price < 44.00;
-- 10
SELECT * FROM products WHERE price < 99.00 AND price > 22.50;
-- SELECT * FROM products WHERE price BETWEEN 22.50 AND 99.99;
-- 11
UPDATE products SET price = price - 20;
-- 12
DELETE FROM products WHERE price < 25;
-- 13
UPDATE products SET price = price + 20;
-- 14
UPDATE products SET can_be_returned = 'true';

-- PART 4
-- 1
SELECT * FROM analytics WHERE id = 1880;
-- 2
SELECT id, app_name FROM analytics WHERE last_updated = '2018-08-01';
-- 3
SELECT category, COUNT(*) FROM analytics 
GROUP BY category;
-- 4
SELECT * FROM analytics
ORDER BY reviews DESC
LIMIT 5;
-- 5
SELECT app_name FROM analytics
WHERE rating >= 4.8
ORDER BY reviews DESC
LIMIT 1;
-- 6
SELECT category, AVG(rating) FROM analytics
GROUP BY category
ORDER BY AVG DESC;
-- 7
SELECT app_name, price, rating FROM analytics
WHERE rating < 3
ORDER BY price DESC;
LIMIT 1;
-- 8
SELECT app_name, rating, reviews FROM analytics
WHERE min-installs <= 50 AND rating IS NOT NULL
ORDER BY rating DESC;
-- 9
SELECT app_name, rating, reviews FROM analytics
WHERE rating < 3 AND reviews >= 10000;
-- 10
SELECT * FROM analytics
WHERE price BETWEEN 0.10 AND 1.00
ORDER BY reviews DESC
LIMIT 10;
-- 11
SELECT * FROM analytics
ORDER BY last_updated
LIMIT 1;
-- 12
SELECT * FROM analytics
ORDER BY price DESC
LIMIT 1;
-- 13
SELECT SUM(reviews) AS "Number of Reviews" FROM analytics;
-- 14
SELECT * FROM analytics
GROUP BY category
HAVING COUNT(*) > 300;
-- 15
SELECT app_name, reviews, min_installs, min_installs / reviews AS proportion 
FROM analytics
WHERE installs >= 100000
ORDER BY proportion DESC
LIMIT 1;













