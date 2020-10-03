-- phpMyAdmin SQL Dump
-- version 4.9.5deb1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 03, 2020 at 08:55 AM
-- Server version: 8.0.20-0ubuntu0.19.10.1
-- PHP Version: 7.3.11-0ubuntu0.19.10.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dims`
--

-- --------------------------------------------------------

--
-- Table structure for table `dims_beneficiaries`
--

CREATE TABLE `dims_beneficiaries` (
  `id` int NOT NULL,
  `individual_number` varchar(40) NOT NULL,
  `beneficiary_firstName` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `beneficiary_lastName` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `date_enrolled` date DEFAULT NULL,
  `project` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `id_number` int DEFAULT NULL,
  `telephone_number` int DEFAULT NULL,
  `sex` varchar(6) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `age` int DEFAULT NULL,
  `hh_head` varchar(3) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `disability_status` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `type_disability` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `status` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `nationality` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `camp` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `block` varchar(3) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `reffered_to` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `reffered_from` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `group_name` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `hh_male_size` int DEFAULT NULL,
  `hh_female_size` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `dims_beneficiaries`
--

INSERT INTO `dims_beneficiaries` (`id`, `individual_number`, `beneficiary_firstName`, `beneficiary_lastName`, `date_enrolled`, `project`, `id_number`, `telephone_number`, `sex`, `age`, `hh_head`, `disability_status`, `type_disability`, `status`, `nationality`, `camp`, `block`, `reffered_to`, `reffered_from`, `group_name`, `hh_male_size`, `hh_female_size`) VALUES
(8, '096789456', 'Njoroge', 'Kinyua', '2020-06-23', 'Danida,UNHCR', 457890, 973457862, 'Male', 62, 'No', 'Disabled', '', 'Refugee', 'Rwandan', 'Hagadera', 'C3', 'Livelihoods', 'Protection', 'kiambavu', 2, 3),
(2, '12345', 'Harun', 'Daud', NULL, 'Danida', 12345, 1234567, 'Male', 23, 'Yes', 'Disabled', 'refugee', '', 'kenyan', 'Dagahaley', 'A1', 'Protection', 'Livelihoods', 'jinga', 12, 4),
(4, '12347', 'Galgalo', 'harun', NULL, 'Danida', 12345, 1234567, 'Male', 24, 'Yes', 'Disabled', 'deaf', 'refugee', 'rwandees', 'Ifo', 'B4', 'Protection', 'Livelihoods', 'ninja', 24, 5),
(5, '20202020', 'John', 'Njeri', NULL, 'Danida,UNHCR', 891067, 739786280, 'Female', 39, 'No', 'Not disabled', '', 'refugee', 'somali', 'Dagahaley', 'B4', 'Protection', 'Livelihoods', 'nangos', 6, 2),
(6, '303030', 'James ', 'Wanyonyi', NULL, 'Danida,PRM', 45672310, 97642546, 'Male', 47, 'Yes', 'Not disabled', '', 'Refugee', 'Ugandan', 'Ifo', 'C3', 'Protection', 'Livelihoods', 'kamwanja', 1, 7),
(10, '34082', 'Sara', 'Ngotho', '2020-06-29', 'Echo,UNHCR', 1518, 7165800, 'Female', 24, 'No', 'Disabled', 'Mental', 'Refugee', 'Burundian', 'Ifo', 'A1', 'Protection', 'Protection', '', 2, 1),
(9, '4372442', 'Abdullahi', 'Omar', '2020-06-30', 'UNHCR', 1235, 713032213, 'Male', 27, 'Yes', 'Not disabled', '', 'host', 'kenyan', 'Ifo', 'B4', '', '', '', 3, 2),
(7, '672345', 'Kagwanja', 'Kipyegon', NULL, 'Echo,PRM', 679045, 67314590, 'Male', 50, 'Yes', 'Not disabled', '', 'Refugee', 'Burundian', 'Hagadera', 'B4', 'Livelihoods', 'Protection', 'Kiwanda', 2, 5);

-- --------------------------------------------------------

--
-- Table structure for table `dims_lievlihoods_income`
--

CREATE TABLE `dims_lievlihoods_income` (
  `id` int NOT NULL,
  `id_livelihoods_fk` int NOT NULL,
  `income` int NOT NULL,
  `month` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `dims_livelihoods`
--

CREATE TABLE `dims_livelihoods` (
  `id` int NOT NULL,
  `id_beneficiaries_fk` int NOT NULL,
  `type_support` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `dims_livelihoods`
--

INSERT INTO `dims_livelihoods` (`id`, `id_beneficiaries_fk`, `type_support`) VALUES
(15, 2, 'Schorlaships'),
(16, 5, 'Schorlaships,Bone Product development,ICT/Android Training'),
(17, 9, 'VSL,Agriculture'),
(18, 10, 'Agriculture');

-- --------------------------------------------------------

--
-- Table structure for table `dims_livelihoods_dates`
--

CREATE TABLE `dims_livelihoods_dates` (
  `id` int NOT NULL,
  `id_beneficiaries_fk` int NOT NULL,
  `id_intervention_fk` int NOT NULL,
  `date_enroled` date NOT NULL,
  `completion_date` date NOT NULL,
  `drop_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `dims_livelihoods_dates`
--

INSERT INTO `dims_livelihoods_dates` (`id`, `id_beneficiaries_fk`, `id_intervention_fk`, `date_enroled`, `completion_date`, `drop_date`) VALUES
(1, 2, 15, '2020-06-30', '2020-06-30', '2020-06-30');

-- --------------------------------------------------------

--
-- Table structure for table `dims_livelihoods_support`
--

CREATE TABLE `dims_livelihoods_support` (
  `id` int NOT NULL,
  `type_supp` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `dims_livelihoods_support`
--

INSERT INTO `dims_livelihoods_support` (`id`, `type_supp`) VALUES
(1, 'Bussiness Skilss'),
(2, 'Schorlaship'),
(3, 'Meeat vlue chain'),
(4, 'Milk value chain'),
(5, 'VSL'),
(6, 'Busines registration'),
(7, 'Start-up kit/grant'),
(8, 'Bone product development'),
(9, 'Marketing/exhibitions'),
(10, 'ICT/Android Training'),
(11, 'Hides/Skins support'),
(12, 'Vocational Training'),
(13, 'Apprenticeship'),
(14, 'Visual arts skills develoment'),
(15, 'Performing arts skills devt'),
(16, 'Talent devt/sports'),
(17, 'Agriculture'),
(18, 'Poultry rearing'),
(19, 'None');

-- --------------------------------------------------------

--
-- Table structure for table `dims_protection`
--

CREATE TABLE `dims_protection` (
  `id_protection` int NOT NULL,
  `id_beneficiary_fk` int NOT NULL,
  `protection_support_recieved` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `dims_protection`
--

INSERT INTO `dims_protection` (`id_protection`, `id_beneficiary_fk`, `protection_support_recieved`) VALUES
(3, 4, 'Training,Resilience Training'),
(6, 7, 'GBV Mass Awareness,GBV Response Services'),
(7, 8, 'GBV Mass Awareness,Safe Spaces'),
(8, 10, 'NFIS/Material Support,Multi-Purpose Cash Grant,Psychosocial Support');

-- --------------------------------------------------------

--
-- Table structure for table `dims_protection_dates`
--

CREATE TABLE `dims_protection_dates` (
  `id_dates` int NOT NULL,
  `id_beneficiary_fk` int NOT NULL,
  `id_intervention_fk` int NOT NULL,
  `date_enroled` date NOT NULL,
  `completion_date` date NOT NULL,
  `drop_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `dims_protection_dates`
--

INSERT INTO `dims_protection_dates` (`id_dates`, `id_beneficiary_fk`, `id_intervention_fk`, `date_enroled`, `completion_date`, `drop_date`) VALUES
(1, 4, 3, '2020-06-02', '2020-06-22', '2020-06-30'),
(4, 7, 6, '2020-06-30', '2020-06-30', '2020-06-30');

-- --------------------------------------------------------

--
-- Table structure for table `dims_protection_support`
--

CREATE TABLE `dims_protection_support` (
  `id` int NOT NULL,
  `type_support` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `dims_protection_support`
--

INSERT INTO `dims_protection_support` (`id`, `type_support`) VALUES
(1, 'GBV mass awareness'),
(2, 'GBV response services'),
(3, 'Safe spaces'),
(4, 'SASA'),
(5, 'EMAP'),
(6, 'Referral'),
(7, 'Community support group'),
(8, 'NFIs/Material support'),
(9, 'Multi-purpose cash grant'),
(10, 'Training'),
(11, 'Mentorship'),
(12, 'Resilience training'),
(13, 'Life skills training'),
(14, 'Sports'),
(15, 'Counselling'),
(16, 'Psychosocial support'),
(17, 'MPCG support');

-- --------------------------------------------------------

--
-- Table structure for table `dims_users`
--

CREATE TABLE `dims_users` (
  `id` int NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `department` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `email` varchar(40) NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `roles` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `dims_users`
--

INSERT INTO `dims_users` (`id`, `name`, `department`, `title`, `email`, `password`, `roles`) VALUES
(1, 'Test', 'Livelihoods', 'Test title', 'test@test.com', '$2a$10$uSaJsIeLsX36ZENtAYJzkeXRPPgdqaNUPgmg4D5/z5eN5D32L94sq', 'ADMIN'),
(2, 'Abdi Mohamed', 'Protection', 'protection officer', 'abdi@adbi.com', '$2a$10$QO3OW1RRH2Bnr4c1dvn.N.KpDy3KG4LLdQm1ZQNPaY/TabBGb8zTS', 'PROTECTION'),
(3, 'Ibrahim Omar', 'Livelihoods', 'Livelihoods Officer', 'omar@omar.com', '$2a$10$dOywZftNuXPSa82emi49CO/PFbfEwGNIrNJQLoUYyTLsTP5C9BgB6', 'LIVELIHOODS'),
(4, 'Sarah Iman', 'Livelihoods', 'M&E', 'sarah@sarah.com', '$2a$10$Och3AljrdYx5Gv/1ew4t6OCe7/Pxyd7C3uNfPZn5EAAaBiu4pRVBC', 'USER'),
(5, 'user2', 'Livelihoods', 'user2', 'user2@test.com', '$2a$10$KbE.ioJgxGwFU6k/KY5VnebvD/Pr4Wy2JMNyQisoMn3CYDueGcr5m', 'USER'),
(6, 'benson', 'Protection', 'assistant', 'bvendon@gmail.com', '$2a$10$U6OUroSAXXCXBl0vPNOzqOuy1F9L8IsLoWLC1pP7E84Mwwe5MTuJu', 'LIVELIHOODS'),
(7, 'Caren', 'Protection', 'officer', 'caren@gmail.com', '$2a$10$LjAJxe1YP/tiun/Dpoghlu78VXyF/RNw7yMNdy/MhRpITMeyJSc9m', 'PROTECTION');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `dims_beneficiaries`
--
ALTER TABLE `dims_beneficiaries`
  ADD PRIMARY KEY (`individual_number`(10)),
  ADD KEY `id` (`id`) USING BTREE;

--
-- Indexes for table `dims_lievlihoods_income`
--
ALTER TABLE `dims_lievlihoods_income`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_livelihoods_fk` (`id_livelihoods_fk`);

--
-- Indexes for table `dims_livelihoods`
--
ALTER TABLE `dims_livelihoods`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_beneficiaries_fk` (`id_beneficiaries_fk`);

--
-- Indexes for table `dims_livelihoods_dates`
--
ALTER TABLE `dims_livelihoods_dates`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_beneficiaries_fk` (`id_beneficiaries_fk`),
  ADD KEY `id_intervention_fk` (`id_intervention_fk`);

--
-- Indexes for table `dims_livelihoods_support`
--
ALTER TABLE `dims_livelihoods_support`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `dims_protection`
--
ALTER TABLE `dims_protection`
  ADD PRIMARY KEY (`id_protection`) USING BTREE,
  ADD KEY `id_beneficiary_fk` (`id_beneficiary_fk`) USING BTREE;

--
-- Indexes for table `dims_protection_dates`
--
ALTER TABLE `dims_protection_dates`
  ADD PRIMARY KEY (`id_dates`),
  ADD KEY `id_beneficiary_fke` (`id_beneficiary_fk`),
  ADD KEY `id_intervention_fke` (`id_intervention_fk`);

--
-- Indexes for table `dims_protection_support`
--
ALTER TABLE `dims_protection_support`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `dims_users`
--
ALTER TABLE `dims_users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `dims_beneficiaries`
--
ALTER TABLE `dims_beneficiaries`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `dims_lievlihoods_income`
--
ALTER TABLE `dims_lievlihoods_income`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `dims_livelihoods`
--
ALTER TABLE `dims_livelihoods`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `dims_livelihoods_dates`
--
ALTER TABLE `dims_livelihoods_dates`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `dims_livelihoods_support`
--
ALTER TABLE `dims_livelihoods_support`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `dims_protection`
--
ALTER TABLE `dims_protection`
  MODIFY `id_protection` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `dims_protection_dates`
--
ALTER TABLE `dims_protection_dates`
  MODIFY `id_dates` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `dims_protection_support`
--
ALTER TABLE `dims_protection_support`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `dims_users`
--
ALTER TABLE `dims_users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `dims_lievlihoods_income`
--
ALTER TABLE `dims_lievlihoods_income`
  ADD CONSTRAINT `dims_lievlihoods_income_ibfk_1` FOREIGN KEY (`id_livelihoods_fk`) REFERENCES `dims_livelihoods_support` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `dims_livelihoods`
--
ALTER TABLE `dims_livelihoods`
  ADD CONSTRAINT `dims_livelihoods_ibfk_1` FOREIGN KEY (`id_beneficiaries_fk`) REFERENCES `dims_beneficiaries` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `dims_livelihoods_dates`
--
ALTER TABLE `dims_livelihoods_dates`
  ADD CONSTRAINT `dims_livelihoods_dates_ibfk_1` FOREIGN KEY (`id_beneficiaries_fk`) REFERENCES `dims_beneficiaries` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `dims_livelihoods_dates_ibfk_2` FOREIGN KEY (`id_intervention_fk`) REFERENCES `dims_livelihoods` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `dims_protection`
--
ALTER TABLE `dims_protection`
  ADD CONSTRAINT `dims_protection_ibfk_1` FOREIGN KEY (`id_beneficiary_fk`) REFERENCES `dims_beneficiaries` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `dims_protection_dates`
--
ALTER TABLE `dims_protection_dates`
  ADD CONSTRAINT `dims_protection_dates_ibfk_1` FOREIGN KEY (`id_beneficiary_fk`) REFERENCES `dims_beneficiaries` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `dims_protection_dates_ibfk_2` FOREIGN KEY (`id_intervention_fk`) REFERENCES `dims_protection_support` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
