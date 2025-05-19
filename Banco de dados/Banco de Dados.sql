CREATE DATABASE sonar;
use sonar;

CREATE TABLE usuario (
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45) UNIQUE,
email VARCHAR(100) UNIQUE,
senha VARCHAR(45),
descricao VARCHAR(150),
dtCriacao_conta TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
imagem_perfil TEXT
);

CREATE TABLE post (
idPost INT PRIMARY KEY AUTO_INCREMENT,
quem_postou INT,
descricao TEXT,
dtPostagem TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
qtdCurtida INT  DEFAULT 0,
imagem_post TEXT NULL,
CONSTRAINT fkUser_Post
	FOREIGN KEY (quem_postou)
		REFERENCES usuario(idUsuario)
);

CREATE TABLE curtida (
quem_curtiu INT,
post_curtida INT,
quem_postou INT,
dtCurtida TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (quem_curtiu, post_curtida, quem_postou),
CONSTRAINT fkUser_curtida
	FOREIGN KEY (quem_curtiu) REFERENCES usuario(idUsuario),
CONSTRAINT fkPost_curtida
    FOREIGN KEY (post_curtida) REFERENCES post(idPost),
CONSTRAINT fkquem_postou
	FOREIGN KEY (quem_postou) REFERENCES post(quem_postou)
);

CREATE TABLE comentario (
idComentario INT AUTO_INCREMENT,
usuario_que_comentou INT,
post_comentado INT,
quem_postou INT,
texto_comentario VARCHAR(200),
dtComentario TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (idComentario, usuario_que_comentou, post_comentado),
CONSTRAINT fkUsuario_comentario
	FOREIGN KEY (usuario_que_comentou)
		REFERENCES usuario(idUsuario),
CONSTRAINT fkpost_comentario
	FOREIGN KEY (post_comentado)
		REFERENCES post(idPost),
CONSTRAINT fkquem_postou_c
	FOREIGN KEY (quem_postou)
		REFERENCES post(quem_postou)
);

INSERT INTO usuario (nome, email, senha, descricao, imagem_perfil) VALUES
('Ana', 'ana@email.com', '1234', 'Amante de pop', NULL),
('Bruno', 'bruno@email.com', '1234', 'Curte rock e indie', NULL),
('Carla', 'carla@email.com', '1234', 'Pagodeira raiz', NULL),
('Daniel', 'daniel@email.com', '1234', 'DJ nas horas vagas', NULL),
('Eduarda', 'eduarda@email.com', '1234', 'Fã de clássicos', NULL),
('Felipe', 'felipe@email.com', '1234', 'Rap é vida', NULL),
('Giovana', 'giovana@email.com', '1234', 'Ama sertanejo', NULL),
('Henrique', 'henrique@email.com', '1234', 'Reggae e paz', NULL),
('Isabela', 'isabela@email.com', '1234', 'Multigênero musical', NULL),
('João', 'joao@email.com', '1234', 'Pop punk é tudo', NULL);

-- Semana 1 a 5 (6 posts por semana)
INSERT INTO post (quem_postou, descricao, dtPostagem) VALUES
(1, 'Primeiro post da Ana', '2024-04-01'),
(2, 'Rock é vida', '2024-04-01'),
(3, 'Pagodinho pra relaxar', '2024-04-01'),
(4, 'Mix de batidas', '2024-04-01'),
(5, 'Beethoven é incrível', '2024-04-01'),
(6, 'Rap pesado', '2024-04-01'),
(1, 'Novo single!', '2024-04-08'),
(2, 'Solo de guitarra 🔥', '2024-04-08'),
(3, 'Pagode de sexta', '2024-04-08'),
(7, 'Sertanejo ao vivo', '2024-04-08'),
(8, 'Reggae pra alma', '2024-04-08'),
(9, 'Top 10 músicas da semana', '2024-04-08'),
(1, 'Dançando com estilo', '2024-04-15'),
(2, 'Rock nacional', '2024-04-15'),
(3, 'Pagode anos 90', '2024-04-15'),
(4, 'Batida eletrônica', '2024-04-15'),
(5, 'Clássico do piano', '2024-04-15'),
(6, 'Cypher nova', '2024-04-15'),
(10, 'Pop punk vibes', '2024-04-22'),
(1, 'Melhores músicas de abril', '2024-04-22'),
(8, 'Ritmo e poesia', '2024-04-22'),
(6, 'Underground rap', '2024-04-22'),
(4, 'Set novo 🔊', '2024-04-22'),
(2, 'Live session', '2024-04-22'),
(5, 'Clássicos revisitados', '2024-04-29'),
(3, 'Samba e alegria', '2024-04-29'),
(9, 'Top global', '2024-04-29'),
(7, 'Sertanejo raiz', '2024-04-29'),
(10, 'Álbum novo!', '2024-04-29'),
(1, 'Encerrando abril com música', '2024-04-29');

-- Curtidas nas postagens anteriores
INSERT INTO curtida (quem_curtiu, post_curtida, quem_postou, dtCurtida) VALUES
(2, 1, 1, '2024-04-01'),
(3, 1, 1, '2024-04-01'),
(4, 2, 2, '2024-04-01'),
(5, 3, 3, '2024-04-01'),
(6, 4, 4, '2024-04-01'),
(7, 5, 5, '2024-04-01'),
(1, 6, 6, '2024-04-02'),
(2, 7, 1, '2024-04-08'),
(3, 8, 2, '2024-04-08'),
(4, 9, 3, '2024-04-08'),
(5, 10, 7, '2024-04-08'),
(6, 11, 8, '2024-04-08'),
(7, 12, 9, '2024-04-08'),
(8, 13, 1, '2024-04-15'),
(9, 14, 2, '2024-04-15'),
(10, 15, 3, '2024-04-15'),
(1, 16, 4, '2024-04-15'),
(2, 17, 5, '2024-04-15'),
(3, 18, 6, '2024-04-15'),
(4, 19, 10, '2024-04-22'),
(5, 20, 1, '2024-04-22'),
(6, 21, 8, '2024-04-22'),
(7, 22, 6, '2024-04-22'),
(8, 23, 4, '2024-04-22'),
(9, 24, 2, '2024-04-22'),
(10, 25, 5, '2024-04-29'),
(1, 26, 3, '2024-04-29'),
(2, 27, 9, '2024-04-29'),
(3, 28, 7, '2024-04-29'),
(4, 29, 10, '2024-04-29');

INSERT INTO comentario (usuario_que_comentou, post_comentado, quem_postou, texto_comentario, dtComentario) VALUES
(2, 1, 1, 'Muito bom!', '2024-04-01'),
(3, 2, 2, 'Show!', '2024-04-01'),
(4, 3, 3, 'Top demais!', '2024-04-01'),
(5, 4, 4, 'Curti!', '2024-04-01'),
(6, 5, 5, 'Clássico!', '2024-04-01'),
(7, 6, 6, 'Pesado!', '2024-04-01'),
(1, 7, 1, 'Amei!', '2024-04-08'),
(2, 8, 2, 'Massa!', '2024-04-08'),
(3, 9, 3, 'Pagodão top', '2024-04-08'),
(4, 10, 7, 'Vibe boa!', '2024-04-08'),
(5, 11, 8, 'Senti a paz', '2024-04-08'),
(6, 12, 9, 'Curadoria top!', '2024-04-08'),
(7, 13, 1, 'Estilo!', '2024-04-15'),
(8, 14, 2, 'Rock no sangue!', '2024-04-15'),
(9, 15, 3, 'Nostalgia!', '2024-04-15'),
(10, 16, 4, 'Boa batida', '2024-04-15'),
(1, 17, 5, 'Relaxante', '2024-04-15'),
(2, 18, 6, 'Pesado demais!', '2024-04-15'),
(3, 19, 10, 'Topzera', '2024-04-22'),
(4, 20, 1, 'Ótimo som', '2024-04-22'),
(5, 21, 8, 'Ritmo ótimo', '2024-04-22'),
(6, 22, 6, 'Rima top', '2024-04-22'),
(7, 23, 4, 'Show!', '2024-04-22'),
(8, 24, 2, 'Live ficou boa', '2024-04-22'),
(9, 25, 5, 'Bons tempos', '2024-04-29'),
(10, 26, 3, 'Samba bom', '2024-04-29'),
(1, 27, 9, 'Trendy!', '2024-04-29'),
(2, 28, 7, 'Raiz mesmo', '2024-04-29'),
(3, 29, 10, 'Mandou bem', '2024-04-29'),
(4, 30, 1, 'Fechou com chave de ouro!', '2024-04-29');

select * from usuario;
select * from post ORDER BY  dtPostagem DESC;
select * from curtida where dtCurtida = '2024-04-01';
select * from comentario;

SELECT DATE('2025-05-20' - INTERVAL 7 DAY) AS Semana;

SELECT month(dtCurtida) as Semana,
	count(quem_curtiu) as qtdCurtida
    FROM curtida
    GROUP BY Semana
    ORDER BY Semana;
    
SELECT dtCurtida as Dia,
	count(quem_curtiu) as qtdCurtida
    FROM curtida
    GROUP BY Dia
    ORDER BY Dia;

SELECT YEARWEEK(curtida.dtCurtida) AS semana, 
    COUNT(*) AS qtd_curtida
    FROM curtida
    WHERE curtida.quem_postou = 1
    GROUP BY semana
    ORDER BY semana ASC LIMIT 6;

SELECT
  DATE_SUB(DATE(dtCurtida), INTERVAL (WEEKDAY(dtCurtida)) DAY) AS inicio_semana,
  COUNT(*) AS total_curtidas
FROM curtida
GROUP BY inicio_semana
ORDER BY inicio_semana;

SELECT
  YEAR(dtCurtida) AS ano,
  WEEK(dtCurtida, 1) AS semana,
  COUNT(*) AS total_curtidas
FROM curtida
GROUP BY ano, semana
ORDER BY ano, semana;