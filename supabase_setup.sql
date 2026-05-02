-- ============================================================
-- Cúspide Digital — Setup de Base de Datos Supabase
-- Ejecutar en: supabase.com/dashboard/project/mvxzclsilmhlzzzulzlm/sql/new
-- ============================================================

-- 1. Crear tabla de leads (captación de clientes)
create table if not exists leads (
  id          uuid        default gen_random_uuid() primary key,
  nombre      text        not null,
  email       text        not null,
  telefono    text,
  servicio    text,
  mensaje     text,
  created_at  timestamptz default now()
);

-- 2. Activar Row Level Security
alter table leads enable row level security;

-- 3. Política: cualquier visitante puede insertar (formulario público)
create policy "insert_leads" on leads
  for insert with check (true);

-- 4. Política: solo usuarios autenticados (admin) pueden leer
-- ============================================================
-- CREACIÓN DIRECTA DE ADMINISTRADOR (NUEVA VERSIÓN EXACTA PARA SUPABASE)
-- ============================================================

-- 1. Eliminamos el usuario anterior corrupto
delete from auth.users where email = 'admin@cuspidedigital.co';

-- 2. Creamos el usuario con el algoritmo exacto de GoTrue
do $$
declare
  new_user_id uuid := gen_random_uuid();
begin
  insert into auth.users (
    id,
    aud,
    role,
    email,
    encrypted_password,
    email_confirmed_at,
    raw_app_meta_data,
    raw_user_meta_data,
    created_at,
    updated_at
  ) values (
    new_user_id,
    'authenticated',
    'authenticated',
    'admin@cuspidedigital.co',
    crypt('admin123', gen_salt('bf', 10)), -- Costo 10 es requerido por Supabase
    now(),
    '{"provider":"email","providers":["email"]}',
    '{}',
    now(),
    now()
  );

  insert into auth.identities (
    id,
    user_id,
    identity_data,
    provider,
    provider_id,
    last_sign_in_at,
    created_at,
    updated_at
  ) values (
    gen_random_uuid(),
    new_user_id,
    format('{"sub":"%s","email":"admin@cuspidedigital.co"}', new_user_id::text)::jsonb,
    'email',
    new_user_id::text,
    now(),
    now(),
    now()
  );
end $$;
