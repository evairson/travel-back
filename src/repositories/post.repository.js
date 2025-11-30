import pool from "../config/database.js";

export async function findAll() {
  const result = await pool.query(`
    SELECT 
        p.id,
        p.title,
        p.time_travel,
        p.time_travel_unit,
        p.creator_id,
        p.images,
        p.map_image,
        COUNT(s.id) AS nb_spots,
        ARRAY_AGG(DISTINCT c.country_name) AS countries,
        ARRAY_AGG(DISTINCT k.keyword_title) AS keywords
    FROM posts p
    LEFT JOIN spots s ON p.id = s.post_id
    LEFT JOIN countries c ON p.id = c.post_id
    LEFT JOIN keywords k ON p.id = k.post_id
    GROUP BY p.id, p.title, p.time_travel, p.images, p.map_image
    ORDER BY p.created_at DESC;
  `);

  return result.rows;
}

export async function findById(id) {
  const result = await pool.query(`
    SELECT 
    p.id,
    p.title,
    p.content,
    p.time_travel,
    p.time_travel_unit,
    p.distance,
    p.time_transport,
    p.co2,
    p.images,
    p.map_image,
    p.created_at,
    u.id AS creator_id,
    u.pseudo AS creator_pseudo,
    ARRAY_AGG(DISTINCT c.country_name) AS countries,
    ARRAY_AGG(DISTINCT k.keyword_title) AS keywords,
    JSON_AGG(
        JSON_BUILD_OBJECT(
            'id', s.id,
            'begin', s.begin,
            'end', s.end,
            'type_transport', s.type_transport,
            'time_journey', s.time_journey,
            'cost', s.cost,
            'distance', s.distance,
            'is_night', s.is_night
        )
    ) FILTER (WHERE s.id IS NOT NULL) AS spots
    FROM posts p
    JOIN users u ON p.creator_id = u.id
    LEFT JOIN countries c ON p.id = c.post_id
    LEFT JOIN keywords k ON p.id = k.post_id
    LEFT JOIN spots s ON p.id = s.post_id
    WHERE p.id = $1  
    GROUP BY p.id, u.id, u.pseudo;
    `, [id]);
    return result.rows[0];
}
