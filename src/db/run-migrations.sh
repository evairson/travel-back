#!/bin/sh
set -e

echo "📦 Running SQL migrations..."

psql "$DATABASE_URL" -f /app/src/db/migrations/schema.sql

echo "🌱 Running seeds..."

psql "$DATABASE_URL" -f /app/src/db/seeds/fake.sql

echo "✅ Database ready!"
