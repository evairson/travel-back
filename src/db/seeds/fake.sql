-- ==== USERS ====
INSERT INTO users (pseudo, url_avatar, username, email) VALUES
('nature_nomad', 'https://picsum.photos/200?random=21', 'Lina', 'lina@example.com'),
('eco_rider', 'https://picsum.photos/200?random=22', 'Marc', 'marc@example.com'),
('forest_explorer', 'https://picsum.photos/200?random=23', 'Sophie', 'sophie@example.com'),
('river_walker', 'https://picsum.photos/200?random=24', 'Tom', 'tom@example.com'),
('train_dreamer', 'https://picsum.photos/200?random=25', 'Emma', 'emma@example.com');

-- ==== FOLLOWS ====
INSERT INTO follows (following_user_id, followed_user_id) VALUES
(1, 3),
(2, 5),
(3, 4),
(4, 1),
(5, 2);

-- ==== POSTS ====
INSERT INTO posts (title, creator_id, content, distance, co2, time_travel, time_transport, images) VALUES
('Tour à vélo dans les Landes', 1, 'Découverte des pins maritimes et de l’océan.', 85, 10.1, '5h', '1h', ARRAY['https://picsum.photos/400?random=30', 'https://picsum.photos/400?random=35']),
('Randonnée au Mont Ventoux', 2, 'Un défi sportif et une vue panoramique.', 25, 3.4, '7h', '45min', ARRAY['https://picsum.photos/400?random=36']),
('Voyage en train en Italie', 3, 'Parcours de Milan à Rome en train rapide.', 580, 30.8, '6h', '4h', ARRAY['https://picsum.photos/400?random=37']),
('Camping durable en Corse', 4, 'Séjour en pleine nature avec des éco-gestes.', 40, 6.5, '3 jours', '2h', ARRAY['https://picsum.photos/400?random=38']),
('Balade en kayak en Norvège', 5, 'Exploration des fjords sous le soleil d’été.', 70, 8.9, '8h', '1h', ARRAY['https://picsum.photos/400?random=39']);

-- ==== SPOTS ====
INSERT INTO spots (post_id, begin, end, type_transport, time_journey, distance, cost) VALUES
(1, 'Hossegor', 'Capbreton', 'bike', 90, 30, 5),
(2, 'Bédoin', 'Sommet Ventoux', 'walk', 360, 21, 0),
(3, 'Milan', 'Rome', 'car', 180, 580, 45),
(4, 'Ajaccio', 'Calanques de Piana', 'car', 150, 70, 20),
(5, 'Bergen', 'Fjords', 'bike', 300, 55, 10);

-- ==== COUNTRIES ====
INSERT INTO countries (post_id, country_name) VALUES
(1, 'France'),
(2, 'France'),
(3, 'Italie'),
(4, 'France'),
(5, 'Norvège');

-- ==== KEYWORDS ====
INSERT INTO keywords (post_id, keyword_title) VALUES
(1, 'bike_trip'),
(1, 'ocean_view'),
(2, 'hiking'),
(3, 'train_journey'),
(4, 'eco_camping'),
(5, 'kayak');
