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

CREATE TABLE curtida (
quem_curtiu INT,
post_curtida INT,
dtCurtida TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (quem_curtiu, post_curtida),
CONSTRAINT fkUser_curtida
	FOREIGN KEY (quem_curtiu) REFERENCES usuario(idUsuario),
CONSTRAINT fkPost_curtida
    FOREIGN KEY (post_curtida) REFERENCES post(idPost)
);

select * from usuario;
select u.nome, p.descricao, p.imagem_post FROM usuario AS u JOIN post as p on p.quem_postou = u.idUsuario WHERE p.idPost = 1;
