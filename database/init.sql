CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(120) NOT NULL,
  description TEXT NOT NULL,
  price NUMERIC(12,2) NOT NULL CHECK (price >= 0),
  icon VARCHAR(20) DEFAULT '🪑',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO products (name, description, price, icon)
SELECT * FROM (VALUES
  ('Modern Sofa','Three-seater premium fabric sofa',24999,'🛋️'),
  ('King Size Bed','Elegant wooden king size bed',32499,'🛏️'),
  ('Accent Chair','Comfortable chair for modern interiors',8999,'🪑'),
  ('Storage Cabinet','Minimal storage for your living space',12499,'🗄️'),
  ('Dining Table','Solid wood dining table for six',18999,'🍽️'),
  ('Office Desk','Clean and practical work desk',10999,'💼'),
  ('Bookshelf','Modern open bookshelf',7499,'📚'),
  ('Coffee Table','Compact table for living rooms',5999,'🪵')
) AS v(name,description,price,icon)
WHERE NOT EXISTS (SELECT 1 FROM products);
