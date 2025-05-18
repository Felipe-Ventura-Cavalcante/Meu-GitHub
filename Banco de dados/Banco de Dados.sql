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

select u.nome, u.imagem_perfil, p.idPost, p.quem_postou, p.descricao, p.imagem_post
FROM usuario AS u JOIN post as p ON p.quem_postou = u.idUsuario ORDER BY p.idPost DESC;

select * from usuario;
select * from post ORDER BY  dtPostagem DESC;
select * from comentario where dono_do_post = 1;
select * from curtida where dono_post_curtida = 1;

INSERT INTO usuario (nome, email, senha, descricao)
VALUES ('testeUser', 'teste@teste.com', '123456', 'Usuário de teste');
INSERT INTO post (quem_postou, descricao)
VALUES (1, 'Primeiro post do teste');
INSERT INTO usuario (nome, email, senha, descricao) VALUES
('curtidor1', 'c1@teste.com', '123', 'Curtidor 1'),
('curtidor2', 'c2@teste.com', '123', 'Curtidor 2'),
('curtidor3', 'c3@teste.com', '123', 'Curtidor 3');

INSERT INTO curtida (quem_curtiu, post_curtida, dono_post_curtida, dtCurtida) VALUES
(2, 1, 1, '2025-05-01 12:00:00'),
(3, 1, 1, '2025-05-01 14:00:00'),
(4, 1, 1, '2025-05-02 16:00:00');

INSERT INTO curtida (quem_curtiu, post_curtida, dono_post_curtida, dtCurtida) VALUES
(1, 1, 1, '2025-05-13 18:00:00'); -- data da próxima semana

    SELECT YEARWEEK(dtCurtida, 1) AS semana, 
    COUNT(*) AS qtd_curtida FROM curtida WHERE dono_post_curtida = 1
    GROUP BY semana ORDER BY semana DESC;
    
    SELECT YEARWEEK(dtComentario, 1) AS semana, 
    COUNT(*) AS qtd_comentario FROM comentario WHERE dono_do_post = 5
    GROUP BY semana ORDER BY semana DESC LIMIT 6;
    
        SELECT YEARWEEK(dtCurtida, 1) AS semana, 
    COUNT(*) AS qtd_curtida FROM curtida WHERE dono_post_curtida = 5
    GROUP BY semana ORDER BY semana DESC LIMIT 6;