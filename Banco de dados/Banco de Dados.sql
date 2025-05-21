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

select * from usuario;
select * from post;
select * from curtida;
select * from comentario;

INSERT INTO usuario (nome, email, senha, descricao, imagem_perfil) VALUES
('Alice', 'alice@email.com', '123', 'Amo música indie', ''),
('Bruno', 'bruno@email.com', '123', 'Rock é vida', ''),
('Carla', 'carla@email.com', '123', 'Jazz sempre', ''),
('Daniel', 'daniel@email.com', '123', 'MPB lover', ''),
('Eduarda', 'eduarda@email.com', '123', 'Pop vibes', ''),
('Felipe', 'felipe@email.com', '123', 'Rap nacional', ''),
('Gabriela', 'gabriela@email.com', '123', 'Funk consciente', ''),
('Henrique', 'henrique@email.com', '123', 'Clássico é tudo', ''),
('Isabela', 'isabela@email.com', '123', 'Trilha sonora da vida', ''),
('João', 'joao@email.com', '123', 'Metal forever', '');

-- Exemplo: para cada usuário (id 1 a 10), 5 posts
INSERT INTO post (quem_postou, descricao, imagem_post) VALUES
(1, 'Post 1 da Alice', '36630.jpg'),
(1, 'Post 2 da Alice', '36630.jpg'),
(1, 'Post 3 da Alice', '36630.jpg'),
(1, 'Post 4 da Alice', '36630.jpg'),
(1, 'Post 5 da Alice', '36630.jpg'),

(2, 'Post 1 do Bruno', '36630.jpg'),
(2, 'Post 2 do Bruno', '36630.jpg'),
(2, 'Post 3 do Bruno', '36630.jpg'),
(2, 'Post 4 do Bruno', '36630.jpg'),
(2, 'Post 5 do Bruno', '36630.jpg'),

-- Repete para os usuários 3 até 10…
(3, 'Post 1 da Carla', '36630.jpg'),
(3, 'Post 2 da Carla', '36630.jpg'),
(3, 'Post 3 da Carla', '36630.jpg'),
(3, 'Post 4 da Carla', '36630.jpg'),
(3, 'Post 5 da Carla', '36630.jpg'),

-- (...) até:
(10, 'Post 1 do João', '36630.jpg'),
(10, 'Post 2 do João', '36630.jpg'),
(10, 'Post 3 do João', '36630.jpg'),
(10, 'Post 4 do João', '36630.jpg'),
(10, 'Post 5 do João', '36630.jpg');

-- Exemplo parcial: usuário 1 curte todos os posts dos usuários 2 a 10
INSERT INTO curtida (quem_curtiu, post_curtida, quem_postou) VALUES
(1, 6, 2), (1, 7, 2), (1, 8, 2), (1, 9, 2), (1, 10, 2),
(1, 11, 3), (1, 12, 3), (1, 13, 3), (1, 14, 3), (1, 15, 3);
-- (... repete para usuários 4 até 10)
-- Total de 45 registros para quem_curtiu = 1
-- Repete a lógica para quem_curtiu = 2 até 10 (sem curtir os próprios posts)

-- Exemplo parcial: usuário 1 comenta todos os posts dos usuários 2 a 10
INSERT INTO comentario (usuario_que_comentou, post_comentado, quem_postou, texto_comentario) VALUES
(1, 6, 2, 'Muito bom!'),
(1, 7, 2, 'Adorei!'),
(1, 8, 2, 'Top demais!'),
(1, 9, 2, 'Som de qualidade!'),
(1, 10, 2, 'Parabéns!'),

(1, 11, 3, 'Muito bom!'),
(1, 12, 3, 'Adorei!'),
(1, 13, 3, 'Top demais!'),
(1, 14, 3, 'Som de qualidade!'),
(1, 15, 3, 'Parabéns!');
-- (... repete até o post 50)
