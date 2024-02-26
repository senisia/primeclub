DROP TABLE IF EXISTS products;

CREATE TABLE products (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    url TEXT NOT NULL
);

INSERT INTO products (name, price, url) VALUES
('CS2 Prime Hesap Rütbe 10', 349.99, 'https://media.discordapp.net/attachments/1138581069835284510/1210703467543269396/prime_acc.jpg?ex=65eb8678&is=65d91178&hm=bee2cad369dd3b7e323d08c9755c1c2ac3de94d1506568445671fb86b8d84d61&=&format=webp&width=905&height=905')