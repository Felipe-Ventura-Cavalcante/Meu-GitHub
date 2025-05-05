CREATE DATABASE sonar;
use sonar;

CREATE TABLE usuario (
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
email VARCHAR(100) UNIQUE,
senha VARCHAR(45),
descricao VARCHAR(100),
dtCriacao_conta TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
imagem_perfil VARCHAR(45)
);

INSERT INTO usuario (nome, email, senha, descricao, imagem_perfil) VALUES
("Felipe", "felipe@gmail.com", "123456", "...", "imagem de perfil");

CREATE TABLE post (
idPost INT PRIMARY KEY AUTO_INCREMENT,
quem_postou INT,
descricao VARCHAR(100),
dtPostagem TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
qtdCurtida INT  DEFAULT 0,
imagem_post VARCHAR(45),
CONSTRAINT fkUser_Post
	FOREIGN KEY (quem_postou)
		REFERENCES usuario(idUsuario)
);

INSERT INTO post (quem_postou, descricao, imagem_post) VALUES
(1, "foto de golfinho", "imagem de golfinho");

INSERT INTO post (quem_postou, descricao, imagem_post) VALUES
(1, "foto de melancia", "imagem de melancia");

INSERT INTO post (quem_postou, descricao, imagem_post) VALUES
(1, "https://agendaculturalsaopaulo.com/", "imagem de melancia");

CREATE TABLE curtida (
quem_curtiu INT,
post_curtida INT,
dono_post_curtida INT,
dtCurtida TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (quem_curtiu, post_curtida, dono_post_curtida),
CONSTRAINT fkUser_curtida
	FOREIGN KEY (quem_curtiu) REFERENCES usuario(idUsuario),
CONSTRAINT fkPost_curtida
    FOREIGN KEY (post_curtida) REFERENCES post(idPost),
CONSTRAINT fkDono_Post_Curtida
	FOREIGN KEY (dono_post_curtida) REFERENCES post(quem_postou)
);

CREATE TABLE comentario (
idComentario INT AUTO_INCREMENT,
usuario_que_comentou INT,
post_comentado INT,
dono_do_post INT,
texto_comentario VARCHAR(200),
dtComentario TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (idComentario, usuario_que_comentou, post_comentado),
CONSTRAINT fkUsuario_comentario
	FOREIGN KEY (usuario_que_comentou)
		REFERENCES usuario(idUsuario),
CONSTRAINT fkpost_comentario
	FOREIGN KEY (post_comentado)
		REFERENCES post(idPost),
CONSTRAINT fkDono_post
	FOREIGN KEY (dono_do_post)
		REFERENCES post(quem_postou)
        
);
INSERT INTO comentario (usuario_que_comentou, post_comentado, dono_do_post, texto_comentario) VALUES
(1, 1, 1, "eu amo golfinhos");


select * from usuario;
select * from post;
select u.nome, p.descricao, p.imagem_post FROM usuario AS u JOIN post as p on p.quem_postou = u.idUsuario WHERE p.idPost = 1;
UPDATE usuario SET descricao = 'ola' WHERE idUsuario = '1';

select u.nome, c.idComentario, c.usuario_que_comentou, c.post_comentado, c.dono_do_post, c.texto_comentario, c.dtComentário FROM usuario AS u
	JOIN comentario AS c on c.usuario_que_comentou = u.idUsuario;