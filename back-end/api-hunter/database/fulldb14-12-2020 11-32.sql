#
# TABLE STRUCTURE FOR: bandit
#

DROP TABLE IF EXISTS `bandit`;

CREATE TABLE `bandit` (
  `id` int(9) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `region` varchar(255) NOT NULL,
  `dead_or_alive` varchar(255) NOT NULL,
  `photo` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `prime` int(11) NOT NULL,
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

INSERT INTO `bandit` (`id`, `name`, `region`, `dead_or_alive`, `photo`, `status`, `prime`) VALUES (1, 'Melisa Paucek', 'la-bas', 'dead or alive', 'http://lorempixel.com/300/300/cats/', 'chasse', 551);
INSERT INTO `bandit` (`id`, `name`, `region`, `dead_or_alive`, `photo`, `status`, `prime`) VALUES (2, 'Tobin Brown', 'la', 'dead or alive', 'http://lorempixel.com/300/300/cats/', 'chasse', 882);
INSERT INTO `bandit` (`id`, `name`, `region`, `dead_or_alive`, `photo`, `status`, `prime`) VALUES (3, 'Wallace Klocko II', 'la-bas', 'dead', 'http://lorempixel.com/300/300/cats/', 'libre', 546);
INSERT INTO `bandit` (`id`, `name`, `region`, `dead_or_alive`, `photo`, `status`, `prime`) VALUES (4, 'Fae Howe DVM', 'ici', 'dead', 'http://lorempixel.com/300/300/cats/', 'chasse', 13);
INSERT INTO `bandit` (`id`, `name`, `region`, `dead_or_alive`, `photo`, `status`, `prime`) VALUES (5, 'Estefania King', 'la-bas', 'dead or alive', 'http://lorempixel.com/300/300/cats/', 'attrape', 842);
INSERT INTO `bandit` (`id`, `name`, `region`, `dead_or_alive`, `photo`, `status`, `prime`) VALUES (6, 'Ms. Stella Altenwerth', 'la-bas', 'dead or alive', 'http://lorempixel.com/300/300/cats/', 'chasse', 937);
INSERT INTO `bandit` (`id`, `name`, `region`, `dead_or_alive`, `photo`, `status`, `prime`) VALUES (7, 'Allan Sporer', 'la', 'dead', 'http://lorempixel.com/300/300/cats/', 'chasse', 432);
INSERT INTO `bandit` (`id`, `name`, `region`, `dead_or_alive`, `photo`, `status`, `prime`) VALUES (8, 'Marjolaine Ward', 'la', 'alive', 'http://lorempixel.com/300/300/cats/', 'attrape', 727);
INSERT INTO `bandit` (`id`, `name`, `region`, `dead_or_alive`, `photo`, `status`, `prime`) VALUES (9, 'Dillon Swift', 'la-bas', 'dead', 'http://lorempixel.com/300/300/cats/', 'attrape', 198);
INSERT INTO `bandit` (`id`, `name`, `region`, `dead_or_alive`, `photo`, `status`, `prime`) VALUES (10, 'Sincere Aufderhar', 'ici', 'dead', 'http://lorempixel.com/300/300/cats/', 'libre', 414);


#
# TABLE STRUCTURE FOR: user
#

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` int(9) unsigned NOT NULL AUTO_INCREMENT,
  `role` varchar(255) NOT NULL,
  `name` varchar(100) NOT NULL,
  `localisation` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

INSERT INTO `user` (`id`, `role`, `name`, `localisation`) VALUES (1, 'sherif', 'Malika Champlin', 'la-bas');
INSERT INTO `user` (`id`, `role`, `name`, `localisation`) VALUES (2, 'sherif', 'Kathlyn Corkery', 'la-bas');
INSERT INTO `user` (`id`, `role`, `name`, `localisation`) VALUES (3, 'hunter', 'Adrienne Hettinger', 'ici');
INSERT INTO `user` (`id`, `role`, `name`, `localisation`) VALUES (4, 'hunter', 'Jerry Auer', 'la-bas');
INSERT INTO `user` (`id`, `role`, `name`, `localisation`) VALUES (5, 'sherif', 'Kristofer Williamson', 'la');
INSERT INTO `user` (`id`, `role`, `name`, `localisation`) VALUES (6, 'hunter', 'Maritza Bosco', 'la');
INSERT INTO `user` (`id`, `role`, `name`, `localisation`) VALUES (7, 'hunter', 'Carrie Walker', 'ici');
INSERT INTO `user` (`id`, `role`, `name`, `localisation`) VALUES (8, 'hunter', 'Lewis Trantow', 'ici');
INSERT INTO `user` (`id`, `role`, `name`, `localisation`) VALUES (9, 'sherif', 'Agustina Graham', 'la');
INSERT INTO `user` (`id`, `role`, `name`, `localisation`) VALUES (10, 'hunter', 'Margaret Nader', 'ici');


#
# TABLE STRUCTURE FOR: user_bandit
#

DROP TABLE IF EXISTS `user_bandit`;

CREATE TABLE `user_bandit` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `bandit_id` int(9) unsigned NOT NULL,
  `user_id` int(9) unsigned NOT NULL,
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `id_2` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8;

INSERT INTO `user_bandit` (`id`, `bandit_id`, `user_id`) VALUES (1, 9, 4);
INSERT INTO `user_bandit` (`id`, `bandit_id`, `user_id`) VALUES (2, 10, 4);
INSERT INTO `user_bandit` (`id`, `bandit_id`, `user_id`) VALUES (3, 6, 10);
INSERT INTO `user_bandit` (`id`, `bandit_id`, `user_id`) VALUES (4, 2, 9);
INSERT INTO `user_bandit` (`id`, `bandit_id`, `user_id`) VALUES (5, 10, 10);
INSERT INTO `user_bandit` (`id`, `bandit_id`, `user_id`) VALUES (6, 2, 4);
INSERT INTO `user_bandit` (`id`, `bandit_id`, `user_id`) VALUES (7, 3, 7);
INSERT INTO `user_bandit` (`id`, `bandit_id`, `user_id`) VALUES (8, 2, 7);
INSERT INTO `user_bandit` (`id`, `bandit_id`, `user_id`) VALUES (9, 5, 7);
INSERT INTO `user_bandit` (`id`, `bandit_id`, `user_id`) VALUES (10, 9, 7);
INSERT INTO `user_bandit` (`id`, `bandit_id`, `user_id`) VALUES (11, 10, 4);
INSERT INTO `user_bandit` (`id`, `bandit_id`, `user_id`) VALUES (12, 4, 5);
INSERT INTO `user_bandit` (`id`, `bandit_id`, `user_id`) VALUES (13, 4, 5);
INSERT INTO `user_bandit` (`id`, `bandit_id`, `user_id`) VALUES (14, 3, 4);
INSERT INTO `user_bandit` (`id`, `bandit_id`, `user_id`) VALUES (15, 10, 2);
INSERT INTO `user_bandit` (`id`, `bandit_id`, `user_id`) VALUES (16, 3, 9);
INSERT INTO `user_bandit` (`id`, `bandit_id`, `user_id`) VALUES (17, 5, 3);
INSERT INTO `user_bandit` (`id`, `bandit_id`, `user_id`) VALUES (18, 2, 1);
INSERT INTO `user_bandit` (`id`, `bandit_id`, `user_id`) VALUES (19, 2, 4);
INSERT INTO `user_bandit` (`id`, `bandit_id`, `user_id`) VALUES (20, 9, 1);
INSERT INTO `user_bandit` (`id`, `bandit_id`, `user_id`) VALUES (21, 3, 1);
INSERT INTO `user_bandit` (`id`, `bandit_id`, `user_id`) VALUES (22, 5, 5);
INSERT INTO `user_bandit` (`id`, `bandit_id`, `user_id`) VALUES (23, 7, 7);
INSERT INTO `user_bandit` (`id`, `bandit_id`, `user_id`) VALUES (24, 2, 1);
INSERT INTO `user_bandit` (`id`, `bandit_id`, `user_id`) VALUES (25, 3, 10);
INSERT INTO `user_bandit` (`id`, `bandit_id`, `user_id`) VALUES (26, 7, 2);
INSERT INTO `user_bandit` (`id`, `bandit_id`, `user_id`) VALUES (27, 4, 1);
INSERT INTO `user_bandit` (`id`, `bandit_id`, `user_id`) VALUES (28, 7, 7);
INSERT INTO `user_bandit` (`id`, `bandit_id`, `user_id`) VALUES (29, 5, 10);
INSERT INTO `user_bandit` (`id`, `bandit_id`, `user_id`) VALUES (30, 1, 5);
INSERT INTO `user_bandit` (`id`, `bandit_id`, `user_id`) VALUES (31, 1, 3);
INSERT INTO `user_bandit` (`id`, `bandit_id`, `user_id`) VALUES (32, 4, 5);
INSERT INTO `user_bandit` (`id`, `bandit_id`, `user_id`) VALUES (33, 5, 5);
INSERT INTO `user_bandit` (`id`, `bandit_id`, `user_id`) VALUES (34, 5, 7);
INSERT INTO `user_bandit` (`id`, `bandit_id`, `user_id`) VALUES (35, 9, 4);
INSERT INTO `user_bandit` (`id`, `bandit_id`, `user_id`) VALUES (36, 7, 1);
INSERT INTO `user_bandit` (`id`, `bandit_id`, `user_id`) VALUES (37, 4, 2);
INSERT INTO `user_bandit` (`id`, `bandit_id`, `user_id`) VALUES (38, 6, 1);
INSERT INTO `user_bandit` (`id`, `bandit_id`, `user_id`) VALUES (39, 8, 8);
INSERT INTO `user_bandit` (`id`, `bandit_id`, `user_id`) VALUES (40, 1, 10);
INSERT INTO `user_bandit` (`id`, `bandit_id`, `user_id`) VALUES (41, 7, 8);
INSERT INTO `user_bandit` (`id`, `bandit_id`, `user_id`) VALUES (42, 2, 1);
INSERT INTO `user_bandit` (`id`, `bandit_id`, `user_id`) VALUES (43, 9, 8);
INSERT INTO `user_bandit` (`id`, `bandit_id`, `user_id`) VALUES (44, 8, 4);
INSERT INTO `user_bandit` (`id`, `bandit_id`, `user_id`) VALUES (45, 7, 8);
INSERT INTO `user_bandit` (`id`, `bandit_id`, `user_id`) VALUES (46, 8, 7);
INSERT INTO `user_bandit` (`id`, `bandit_id`, `user_id`) VALUES (47, 1, 2);
INSERT INTO `user_bandit` (`id`, `bandit_id`, `user_id`) VALUES (48, 2, 6);
INSERT INTO `user_bandit` (`id`, `bandit_id`, `user_id`) VALUES (49, 6, 6);
INSERT INTO `user_bandit` (`id`, `bandit_id`, `user_id`) VALUES (50, 2, 4);


