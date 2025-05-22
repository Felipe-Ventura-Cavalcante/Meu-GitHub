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
('Alice', 'alice@email.com', '123', 'Amo música indie', 'perfil_anonimo.jpeg'),
('Bruno', 'bruno@email.com', '123', 'Rock é vida', 'perfil_anonimo.jpeg'),
('Carla', 'carla@email.com', '123', 'Jazz sempre', 'perfil_anonimo.jpeg'),
('Daniel', 'daniel@email.com', '123', 'MPB lover', 'perfil_anonimo.jpeg'),
('Eduarda', 'eduarda@email.com', '123', 'Pop vibes', 'perfil_anonimo.jpeg'),
('Felipe', 'felipe@email.com', '123', 'Rap nacional', 'perfil_anonimo.jpeg'),
('Gabriela', 'gabriela@email.com', '123', 'Funk consciente', 'perfil_anonimo.jpeg'),
('Henrique', 'henrique@email.com', '123', 'Clássico é tudo', 'perfil_anonimo.jpeg'),
('Isabela', 'isabela@email.com', '123', 'Trilha sonora da vida', 'perfil_anonimo.jpeg'),
('João', 'joao@email.com', '123', 'Metal forever', 'perfil_anonimo.jpeg');