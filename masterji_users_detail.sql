CREATE DATABASE  IF NOT EXISTS `masterji` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `masterji`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: masterji
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users_detail`
--

DROP TABLE IF EXISTS `users_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_detail` (
  `id` int NOT NULL AUTO_INCREMENT,
  `full_name` varchar(50) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `mobile_no` int DEFAULT NULL,
  `profile_type` enum('Admin','Teacher','Student') DEFAULT NULL,
  `referal_id` varchar(255) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `isActive` tinyint DEFAULT NULL,
  `isVarified` tinyint DEFAULT NULL,
  `login_type` varchar(255) DEFAULT NULL,
  `social_id` varchar(255) DEFAULT NULL,
  `otp_code` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_detail`
--

LOCK TABLES `users_detail` WRITE;
/*!40000 ALTER TABLE `users_detail` DISABLE KEYS */;
INSERT INTO `users_detail` VALUES (1,'ma','mai.k@gmail.com',NULL,NULL,NULL,'$2b$10$hDWhTJvut8.q1knt7V/B.O9ZAPGZQ9q17Vr0MpsWxyRGdkIdgvm5e','2024-05-24 12:46:09','2024-05-24 12:46:09',NULL,NULL,NULL,NULL,NULL),(2,'rahul','rahul.k@gmail.com',NULL,NULL,NULL,'$2b$10$zg2WRZ9BrUXq3IZeMl0H7uSvBOabta8BDNfI7PySG4rYPIOuZO/pW','2024-05-24 13:12:13','2024-05-24 13:12:13',NULL,NULL,NULL,NULL,NULL),(3,'rohit','rohitpatel843332@gmail.com',NULL,NULL,NULL,'$2b$10$F78V4zqI/ovMhChRCMunQ.fzm2ZX6zhqqvaLwBo9jglO5uYbqmt2S','2024-07-27 14:17:52','2024-07-27 14:17:52',NULL,NULL,NULL,NULL,NULL),(4,'rohit','rohit@gmail.com',NULL,NULL,NULL,'rohit','2024-07-27 14:32:05','2024-07-27 14:32:05',NULL,NULL,NULL,NULL,NULL),(5,'shivani','shivani@gmail.com',NULL,NULL,NULL,'$2b$10$pgDQOF.Pr2G0Rkenpi5KpO1SPM62UQLU541EFaZPeBpRB9wZ7DArG','2024-07-27 14:43:30','2024-07-27 14:43:30',NULL,NULL,NULL,NULL,NULL),(6,'khushi','khushi.k@gmail.com',NULL,NULL,NULL,'$2b$10$C.PJiIGHlgEwki2XYOSGA.5aNRbrNx09pXCFu70Bjs0z8WzUe/zX6','2024-07-28 07:06:41','2024-07-28 07:06:41',NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `users_detail` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-28 12:47:17
