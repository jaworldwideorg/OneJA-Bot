-- Custom SQL migration file, put your code below! --
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM pg_available_extensions WHERE name = 'pg_search') THEN
    CREATE EXTENSION IF NOT EXISTS pg_search;
  ELSE
    RAISE NOTICE 'Skipping pg_search extension: not available on this PostgreSQL server.';
  END IF;
EXCEPTION
  WHEN feature_not_supported OR insufficient_privilege OR undefined_file THEN
    RAISE NOTICE 'Skipping pg_search extension due to server/provider restrictions.';
END
$$;
