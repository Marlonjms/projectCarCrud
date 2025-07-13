# projectCarCrud
Para usar:

Na pasta src rode:
npm rum dev

Para o front na pasta frontend rode:
npm start

Obs: infelizmente a tela de dashboard está apenas estática pois as rotas dessa parte não foram consumidas, no entanto, o backend possui as rotas exigidas funcionando.

banco para funcionar:

-- Dump PostgreSQL completo para criação do banco com tabelas e restrições

-- Tabela usuários
CREATE TABLE public.usuarios (
 id integer NOT NULL,
 email character varying(255) NOT NULL,
 senha character varying(255) NOT NULL,
 nomeusuario character varying(255)
);

-- Sequência para o id da tabela usuários
CREATE SEQUENCE public.usuarios_id_seq
 AS integer
 START WITH 1
 INCREMENT BY 1
 NO MINVALUE
 NO MAXVALUE
 CACHE 1;

-- Define a sequência como padrão para o id de usuários
ALTER TABLE ONLY public.usuarios ALTER COLUMN id SET DEFAULT nextval('public.usuarios_id_seq'::regclass);

-- Chave primária para usuários
ALTER TABLE ONLY public.usuarios
 ADD CONSTRAINT usuarios_pkey PRIMARY KEY (id);

-- Restrição de email único em usuários
ALTER TABLE ONLY public.usuarios
 ADD CONSTRAINT usuarios_email_key UNIQUE (email);

-- Tabela veículos
CREATE TABLE public.veiculos (
 id integer NOT NULL,
 nome_veiculo character varying(255) NOT NULL,
 placa character varying(20) NOT NULL,
 status boolean DEFAULT true NOT NULL,
 id_usuario integer
);

-- Sequência para o id da tabela veículos
CREATE SEQUENCE public.veiculos_id_seq
 AS integer
 START WITH 1
 INCREMENT BY 1
 NO MINVALUE
 NO MAXVALUE
 CACHE 1;

-- Define a sequência como padrão para o id de veículos
ALTER TABLE ONLY public.veiculos ALTER COLUMN id SET DEFAULT nextval('public.veiculos_id_seq'::regclass);

-- Chave primária para veículos
ALTER TABLE ONLY public.veiculos
 ADD CONSTRAINT veiculos_pkey PRIMARY KEY (id);

-- Restrição de placa única para veículos
ALTER TABLE ONLY public.veiculos
 ADD CONSTRAINT veiculos_placa_key UNIQUE (placa);

-- Foreign key: veiculos.id_usuario referencia usuarios.id, com cascade delete
ALTER TABLE ONLY public.veiculos
 ADD CONSTRAINT fk_veiculo_usuario FOREIGN KEY (id_usuario) REFERENCES public.usuarios(id) ON DELETE CASCADE;

