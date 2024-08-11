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
-- Table structure for table `questions`
--

DROP TABLE IF EXISTS `questions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `questions` (
  `question_id` int NOT NULL AUTO_INCREMENT,
  `course_id` int DEFAULT NULL,
  `question_text` text,
  `time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`question_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questions`
--

LOCK TABLES `questions` WRITE;
/*!40000 ALTER TABLE `questions` DISABLE KEYS */;
INSERT INTO `questions` VALUES (1,8,'{\"question1\":{\"question_text\":\"dfbn\",\"options\":[{\"text\":\"dfg\",\"is_correct\":false},{\"text\":\"fdgbf\",\"is_correct\":false},{\"text\":\"dfg\",\"is_correct\":false},{\"text\":\"vfb\",\"is_correct\":false}]},\"question2\":{\"question_text\":\"dfg\",\"options\":[{\"text\":\"efg\",\"is_correct\":false},{\"text\":\"dfg\",\"is_correct\":false},{\"text\":\"dfg\",\"is_correct\":false},{\"text\":\"gfh\",\"is_correct\":false}]}}','2024-05-24 13:19:09'),(2,8,'{\"question1\":{\"question_text\":\"dsfg\",\"options\":[{\"text\":\"sdfgh\",\"is_correct\":false},{\"text\":\"df\",\"is_correct\":false},{\"text\":\"dfb\",\"is_correct\":false},{\"text\":\"dvfb\",\"is_correct\":false}]}}','2024-05-24 13:19:24'),(3,8,'{\"question1\":{\"question_text\":\"esdrfghn\",\"options\":[{\"text\":\"dsfgb\",\"is_correct\":false},{\"text\":\"dfg\",\"is_correct\":false},{\"text\":\"dfgbn\",\"is_correct\":false},{\"text\":\"dfbgn\",\"is_correct\":false}]}}','2024-05-24 13:20:13'),(4,8,'{\"question1\":{\"question_text\":\"fdg\",\"options\":[{\"text\":\"gfbhu\",\"is_correct\":false},{\"text\":\"bih\",\"is_correct\":false},{\"text\":\"hi\",\"is_correct\":false},{\"text\":\"ib\",\"is_correct\":false}]},\"question2\":{\"question_text\":\"sdfg\",\"options\":[{\"text\":\"fbv\",\"is_correct\":false},{\"text\":\"bvn\",\"is_correct\":false},{\"text\":\"bvn\",\"is_correct\":false},{\"text\":\"vcbn\",\"is_correct\":false}]}}','2024-07-28 07:07:49');
/*!40000 ALTER TABLE `questions` ENABLE KEYS */;
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
