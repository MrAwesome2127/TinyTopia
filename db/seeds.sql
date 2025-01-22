INSERT INSERT INTO models (id, modelName, price, feature, synopsis) 
VALUES 
(1,'Leviathan','91000.00',
'Discover smart design and sustainability in a luxurious tiny home with open floor plans and clever storage solutions.',
'Meet Leviathan: an innovative tiny home that redefines small living through smart design and elegance. Despite its modest footprint, Leviathan boasts an open floor plan with multi-functional spaces designed for maximum comfort and efficiency. The home features high ceilings, expansive windows, and skylights, creating a bright and airy ambiance.'),
(2,'Icarus','85000.00',
'Experience luxury in a minimalist, eco-friendly tiny home with vaulted ceilings and cutting-edge sustainability.',
'Meet Leviathan: a tiny home where modern elegance meets innovative design, delivering a unique living experience. Inspired by the myth of reaching great heights, Icarus offers a compact yet luxurious abode.'),
(3,'Clearance','79999.99',
'Embrace minimalist living in a sleek, compact space designed for maximum functionality and style.',
'The epitome of minimalist living where sleek design meets functional elegance. Clearance is a tiny home designed to provide a sense of spaciousness within a compact footprint. Its streamlined architecture and modern aesthetics create an inviting, clutter-free environment.'),
(4,'Mortedacy','81000.00',
'Revel in a sophisticated, compact living space designed for ultimate efficiency and modern elegance.',
'A tiny home that combines sophisticated design with efficient living to create a harmonious and luxurious space. This modern sanctuary offers a perfect balance of comfort, style, and practicality within a compact footprint.'),
(5,'Love Shack','100000.00',
'Experience intimate, cozy living in a charming tiny home designed for romance and relaxation.',
'A tiny home designed to celebrate romance, coziness, and intimate living. This charming abode offers a perfect retreat for couples seeking a comfortable, stylish, and functional space.'),
(6,'Parenthood','100000.00',
'Enjoy family-friendly living in a thoughtfully designed tiny home that perfectly balances comfort, style, and practicality.',
'A tiny home designed to cater to the unique needs of families, blending practicality with style in a compact space. Parenthood offers a harmonious living environment that ensures comfort, safety, and functionality for every family member.',);


INSERT INTO users (username, password, email, modelName_id) 
VALUES 
('NathanE','Rollback','NathanE@fake.com',4),
('LeviF','Rollback','LeviF@fake.com',3),
('MattU','Rollback','MattU@fake.com',2),
('KassP','Rollback','KassP@fake.com',1),
('TimV','Rollback','TimV@fake.com',5),
('RyanB','Rollback','RyanB@fake.com',6);