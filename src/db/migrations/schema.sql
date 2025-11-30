-- Enum pour les transports
CREATE TYPE type_transports AS ENUM (
  'bike',
  'car',
  'walk'
);

-- Utilisateurs
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  pseudo VARCHAR UNIQUE NOT NULL,
  email VARCHAR UNIQUE NOT NULL,
  url_avatar VARCHAR,
  username VARCHAR NOT NULL,
  nb_trips INTEGER DEFAULT 0,
  nb_followers INTEGER DEFAULT 0,
  nb_followings INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Relations de suivi (followers/followings)
CREATE TABLE follows (
  following_user_id INTEGER,
  followed_user_id INTEGER,
  created_at TIMESTAMP DEFAULT NOW(),
  PRIMARY KEY (following_user_id, followed_user_id),
  FOREIGN KEY (following_user_id) REFERENCES users(id),
  FOREIGN KEY (followed_user_id) REFERENCES users(id)
);

-- Posts de voyage
CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  creator_id INT NOT NULL REFERENCES users(id),
  created_at TIMESTAMP DEFAULT NOW(),
  content TEXT NOT NULL,
  time_travel INTEGER NOT NULL,
  time_travel_unit TEXT NOT NULL,
  distance DOUBLE PRECISION,
  time_transport TEXT,
  map_image TEXT,
  co2 DOUBLE PRECISION,
  images TEXT[] NOT NULL
);

-- Spots associés à un post
CREATE TABLE spots (
  id SERIAL PRIMARY KEY,
  post_id INTEGER NOT NULL REFERENCES posts(id),
  begin VARCHAR NOT NULL,
  "end" VARCHAR NOT NULL,
  type_transport type_transports NOT NULL,
  time_journey INTEGER,
  cost INTEGER,
  distance INTEGER,
  is_night BOOLEAN DEFAULT false
);

-- Pays associés à un post
CREATE TABLE countries (
  id SERIAL PRIMARY KEY,
  post_id INTEGER NOT NULL REFERENCES posts(id),
  country_name VARCHAR NOT NULL
);

-- Mots-clés associés à un post
CREATE TABLE keywords (
  id SERIAL PRIMARY KEY,
  post_id INTEGER NOT NULL REFERENCES posts(id),
  keyword_title VARCHAR NOT NULL
);
