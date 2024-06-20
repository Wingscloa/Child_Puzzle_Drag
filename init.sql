CREATE DATABASE IF NOT EXISTS Catch_and_Drop;

Use Catch_and_Drop;

CREATE TABLE IF NOT EXISTS objekty
(
  id_objekt  INT          NOT NULL AUTO_INCREMENT,
  id_skupiny INT          NOT NULL,
  typ        VARCHAR(32)  NOT NULL,
  nazev      VARCHAR(32)  NOT NULL,
  image      VARCHAR(256) NOT NULL,
  created_at TIMESTAMP    NULL     DEFAULT now(),
  PRIMARY KEY (id_objekt)
) COMMENT 'objekt, muze byt zidle,hruska či raketoplán';

CREATE TABLE IF NOT EXISTS skupiny
(
  id_skupiny INT         NOT NULL AUTO_INCREMENT,
  nazev      VARCHAR(32) NOT NULL,
  zamereni   VARCHAR(32) NULL    ,
  created_at TIMESTAMP   NULL     DEFAULT now(),
  PRIMARY KEY (id_skupiny)
) COMMENT 'skupina objektu, ktere bude uzivatel hadat a prirazovat';

ALTER TABLE objekty
  ADD CONSTRAINT FK_skupiny_TO_objekty
    FOREIGN KEY (id_skupiny)
    REFERENCES skupiny (id_skupiny);


-- dump data

