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

select * from usuario;
select * from post;
select * from comentario;
select * from curtida;