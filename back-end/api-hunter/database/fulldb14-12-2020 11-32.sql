#
# TABLE STRUCTURE FOR: bandit
#

DROP TABLE IF EXISTS `bandit`;

CREATE TABLE `bandit` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(100) NOT NULL,
  `region` varchar(255) NOT NULL,
  `dead_or_alive` varchar(255) NOT NULL,
  `photo` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `prime` int(11) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=utf8;

INSERT INTO `bandit` ( `name`, `region`, `dead_or_alive`, `photo`, `status`, `prime`) VALUES ( 'Melisa Paucek', 'la-bas', 'dead or alive', 'https://picsum.photos/300', 'chasse', 551);
INSERT INTO `bandit` ( `name`, `region`, `dead_or_alive`, `photo`, `status`, `prime`) VALUES ( 'Tobin Brown', 'la', 'dead or alive', 'https://picsum.photos/300', 'chasse', 882);
INSERT INTO `bandit` ( `name`, `region`, `dead_or_alive`, `photo`, `status`, `prime`) VALUES ( 'Wallace Klocko II', 'la-bas', 'dead', 'https://picsum.photos/300', 'libre', 546);
INSERT INTO `bandit` ( `name`, `region`, `dead_or_alive`, `photo`, `status`, `prime`) VALUES ( 'Fae Howe DVM', 'ici', 'dead', 'https://picsum.photos/300', 'chasse', 13);
INSERT INTO `bandit` ( `name`, `region`, `dead_or_alive`, `photo`, `status`, `prime`) VALUES ( 'Estefania King', 'la-bas', 'dead or alive', 'https://picsum.photos/300', 'attrape', 842);
INSERT INTO `bandit` ( `name`, `region`, `dead_or_alive`, `photo`, `status`, `prime`) VALUES ( 'Ms. Stella Altenwerth', 'la-bas', 'dead or alive', 'https://picsum.photos/300', 'chasse', 937);
INSERT INTO `bandit` ( `name`, `region`, `dead_or_alive`, `photo`, `status`, `prime`) VALUES ( 'Allan Sporer', 'la', 'dead', 'https://picsum.photos/300', 'chasse', 432);
INSERT INTO `bandit` ( `name`, `region`, `dead_or_alive`, `photo`, `status`, `prime`) VALUES ( 'Marjolaine Ward', 'la', 'alive', 'https://picsum.photos/300', 'attrape', 727);
INSERT INTO `bandit` ( `name`, `region`, `dead_or_alive`, `photo`, `status`, `prime`) VALUES ( 'Dillon Swift', 'la-bas', 'dead', 'https://picsum.photos/300', 'attrape', 198);
INSERT INTO `bandit` ( `name`, `region`, `dead_or_alive`, `photo`, `status`, `prime`) VALUES ( 'Sincere Aufderhar', 'ici', 'dead', 'https://picsum.photos/300', 'libre', 414);


#
# TABLE STRUCTURE FOR: user
#

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `role` varchar(255) NOT NULL,
  `name` varchar(100) NOT NULL,
  `localisation` varchar(255) NOT NULL,
  `pass` varchar(255) NOT NULL
  
) ENGINE=InnoDB  DEFAULT CHARSET=utf8;

INSERT INTO `user` ( `role`, `name`, `localisation`, `pass`) VALUES ( 'sherif', 'Malika Champlin', 'la-bas', 'secret1');
INSERT INTO `user` ( `role`, `name`, `localisation`, `pass`) VALUES ( 'sherif', 'Kathlyn Corkery', 'la-bas', 'secret2');
INSERT INTO `user` ( `role`, `name`, `localisation`, `pass`) VALUES ( 'hunter', 'Adrienne Hettinger', 'ici', 'secret3');
INSERT INTO `user` ( `role`, `name`, `localisation`, `pass`) VALUES ( 'hunter', 'Jerry Auer', 'la-bas', 'secret4');
INSERT INTO `user` ( `role`, `name`, `localisation`, `pass`) VALUES ( 'sherif', 'Kristofer Williamson', 'la', 'secret5');
INSERT INTO `user` ( `role`, `name`, `localisation`, `pass`) VALUES ( 'hunter', 'Maritza Bosco', 'la', 'secret6');
INSERT INTO `user` ( `role`, `name`, `localisation`, `pass`) VALUES ( 'hunter', 'Carrie Walker', 'ici', 'secret7');
INSERT INTO `user` ( `role`, `name`, `localisation`, `pass`) VALUES ( 'hunter', 'Lewis Trantow', 'ici', 'secret8');
INSERT INTO `user` ( `role`, `name`, `localisation`, `pass`) VALUES ( 'sherif', 'Agustina Graham', 'la', 'secret9');
INSERT INTO `user` ( `role`, `name`, `localisation`, `pass`) VALUES ( 'hunter', 'Margaret Nader', 'ici', 'secret10');


#
# TABLE STRUCTURE FOR: user_bandit
#

DROP TABLE IF EXISTS `user_bandit`;

CREATE TABLE `user_bandit` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `bandit_id` int NOT NULL,
  `user_id` int NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=utf8;

INSERT INTO `user_bandit` ( `bandit_id`, `user_id`) VALUES ( 9, 4);
INSERT INTO `user_bandit` ( `bandit_id`, `user_id`) VALUES ( 10, 4);
INSERT INTO `user_bandit` ( `bandit_id`, `user_id`) VALUES ( 6, 10);
INSERT INTO `user_bandit` ( `bandit_id`, `user_id`) VALUES ( 2, 9);
INSERT INTO `user_bandit` ( `bandit_id`, `user_id`) VALUES ( 10, 10);
INSERT INTO `user_bandit` ( `bandit_id`, `user_id`) VALUES ( 2, 4);
INSERT INTO `user_bandit` ( `bandit_id`, `user_id`) VALUES ( 3, 7);
INSERT INTO `user_bandit` ( `bandit_id`, `user_id`) VALUES ( 2, 7);
INSERT INTO `user_bandit` ( `bandit_id`, `user_id`) VALUES ( 5, 7);
INSERT INTO `user_bandit` ( `bandit_id`, `user_id`) VALUES ( 9, 7);
INSERT INTO `user_bandit` ( `bandit_id`, `user_id`) VALUES ( 10, 4);
INSERT INTO `user_bandit` ( `bandit_id`, `user_id`) VALUES ( 4, 5);
INSERT INTO `user_bandit` ( `bandit_id`, `user_id`) VALUES ( 4, 5);
INSERT INTO `user_bandit` ( `bandit_id`, `user_id`) VALUES ( 3, 4);
INSERT INTO `user_bandit` ( `bandit_id`, `user_id`) VALUES ( 10, 2);
INSERT INTO `user_bandit` ( `bandit_id`, `user_id`) VALUES ( 3, 9);
INSERT INTO `user_bandit` ( `bandit_id`, `user_id`) VALUES ( 5, 3);
INSERT INTO `user_bandit` ( `bandit_id`, `user_id`) VALUES ( 2, 1);
INSERT INTO `user_bandit` ( `bandit_id`, `user_id`) VALUES ( 2, 4);
INSERT INTO `user_bandit` ( `bandit_id`, `user_id`) VALUES ( 9, 1);
INSERT INTO `user_bandit` ( `bandit_id`, `user_id`) VALUES ( 3, 1);
INSERT INTO `user_bandit` ( `bandit_id`, `user_id`) VALUES ( 5, 5);
INSERT INTO `user_bandit` ( `bandit_id`, `user_id`) VALUES ( 7, 7);
INSERT INTO `user_bandit` ( `bandit_id`, `user_id`) VALUES ( 2, 1);
INSERT INTO `user_bandit` ( `bandit_id`, `user_id`) VALUES ( 3, 10);
INSERT INTO `user_bandit` ( `bandit_id`, `user_id`) VALUES ( 7, 2);
INSERT INTO `user_bandit` ( `bandit_id`, `user_id`) VALUES ( 4, 1);
INSERT INTO `user_bandit` ( `bandit_id`, `user_id`) VALUES ( 7, 7);
INSERT INTO `user_bandit` ( `bandit_id`, `user_id`) VALUES ( 5, 10);
INSERT INTO `user_bandit` ( `bandit_id`, `user_id`) VALUES ( 1, 5);
INSERT INTO `user_bandit` ( `bandit_id`, `user_id`) VALUES ( 1, 3);
INSERT INTO `user_bandit` ( `bandit_id`, `user_id`) VALUES ( 4, 5);
INSERT INTO `user_bandit` ( `bandit_id`, `user_id`) VALUES ( 5, 5);
INSERT INTO `user_bandit` ( `bandit_id`, `user_id`) VALUES ( 5, 7);
INSERT INTO `user_bandit` ( `bandit_id`, `user_id`) VALUES ( 9, 4);
INSERT INTO `user_bandit` ( `bandit_id`, `user_id`) VALUES ( 7, 1);
INSERT INTO `user_bandit` ( `bandit_id`, `user_id`) VALUES ( 4, 2);
INSERT INTO `user_bandit` ( `bandit_id`, `user_id`) VALUES ( 6, 1);
INSERT INTO `user_bandit` ( `bandit_id`, `user_id`) VALUES ( 8, 8);
INSERT INTO `user_bandit` ( `bandit_id`, `user_id`) VALUES ( 1, 10);
INSERT INTO `user_bandit` ( `bandit_id`, `user_id`) VALUES ( 7, 8);
INSERT INTO `user_bandit` ( `bandit_id`, `user_id`) VALUES ( 2, 1);
INSERT INTO `user_bandit` ( `bandit_id`, `user_id`) VALUES ( 9, 8);
INSERT INTO `user_bandit` ( `bandit_id`, `user_id`) VALUES ( 8, 4);
INSERT INTO `user_bandit` ( `bandit_id`, `user_id`) VALUES ( 7, 8);
INSERT INTO `user_bandit` ( `bandit_id`, `user_id`) VALUES ( 8, 7);
INSERT INTO `user_bandit` ( `bandit_id`, `user_id`) VALUES ( 1, 2);
INSERT INTO `user_bandit` ( `bandit_id`, `user_id`) VALUES ( 2, 6);
INSERT INTO `user_bandit` ( `bandit_id`, `user_id`) VALUES ( 6, 6);
INSERT INTO `user_bandit` ( `bandit_id`, `user_id`) VALUES ( 2, 4);


