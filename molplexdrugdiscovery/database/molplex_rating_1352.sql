-- MySQL dump 10.13  Distrib 5.5.29, for Win64 (x86)
--
-- Host: localhost    Database: molplex_rtp_chembl
-- ------------------------------------------------------
-- Server version	5.5.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `approved_therapy`
--

DROP TABLE IF EXISTS `approved_therapy`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `approved_therapy` (
  `approved_therapy_id` smallint(6) NOT NULL AUTO_INCREMENT,
  `approved_therapy_name` varchar(100) DEFAULT NULL,
  `synonyms` varchar(100) DEFAULT NULL,
  `target_condition` varchar(100) DEFAULT NULL,
  `global_incidence` int(11) DEFAULT NULL,
  `global_prevalence` int(11) DEFAULT NULL,
  `global_sales` int(11) DEFAULT NULL,
  `economic_factor` double DEFAULT NULL,
  `world_regions_id` smallint(6) DEFAULT NULL,
  `company_id` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`approved_therapy_id`),
  UNIQUE KEY `approved_therapy_name` (`approved_therapy_name`),
  KEY `world_regions_id` (`world_regions_id`),
  KEY `company_id` (`company_id`),
  CONSTRAINT `FK_approved_therapy_1` FOREIGN KEY (`world_regions_id`) REFERENCES `world_regions` (`world_regions_id`),
  CONSTRAINT `FK_approved_therapy_2` FOREIGN KEY (`company_id`) REFERENCES `company` (`company_id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `approved_therapy`
--

LOCK TABLES `approved_therapy` WRITE;
/*!40000 ALTER TABLE `approved_therapy` DISABLE KEYS */;
INSERT INTO `approved_therapy` VALUES (14,'App','App','App',200,200,100,2.1,1,2),(15,'Test','Test','Test',200,40,456,2.4,2,2),(16,'der','der','der',234,123,123,1.2,3,3);
/*!40000 ALTER TABLE `approved_therapy` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `assay`
--

DROP TABLE IF EXISTS `assay`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `assay` (
  `assay_id` smallint(6) NOT NULL AUTO_INCREMENT,
  `assay_name` varchar(100) DEFAULT NULL,
  `assay_description` text,
  `assay_protocal` varchar(100) DEFAULT NULL,
  `compound_property_id` smallint(6) DEFAULT NULL,
  `cost_per_compound_pence` int(11) DEFAULT NULL,
  `target_id` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`assay_id`),
  UNIQUE KEY `assay_name` (`assay_name`),
  KEY `compound_property_id` (`compound_property_id`),
  CONSTRAINT `assay_ibfk_1` FOREIGN KEY (`compound_property_id`) REFERENCES `compound_property` (`compound_property_id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assay`
--

LOCK TABLES `assay` WRITE;
/*!40000 ALTER TABLE `assay` DISABLE KEYS */;
INSERT INTO `assay` VALUES (1,'CDK1','CDK1 Binding','TEST',21,100,1),(2,'CDK2','CDK2 BINDING','TEST',26,200,1),(3,'CDK3','CDK3 BINDING','TEST',32,50,1),(4,'CDK4','CDK4 BINDING','TEST',28,50,1),(5,'CDK5','CDK5 BINDING','TEST',38,300,1),(6,'Compound was evaluated for its ability to mobilize','Compound was evaluated for its ability to mobilize','Compound was evaluated for its ability to mobilize',21,2000,1),(7,'Cytotoxic Activity was evaluated ','Cytotoxic Activity was evaluated ','Cytotoxic Activity was evaluated ',23,1000,1),(8,'In vitro cell cytotoxicity was determined','In vitro cell cytotoxicity was determined','In vitro cell cytotoxicity was determined',24,1500,1),(9,'In vitro cell cytotoxicity against 143B-LTK','In vitro cell cytotoxicity against 143B-LTK','In vitro cell cytotoxicity against 143B-LTK',25,500,1),(10,'In vitro cell cytotoxicity was determined against 143B-LTK ','In vitro cell cytotoxicity was determined against 143B-LTK ','In vitro cell cytotoxicity was determined against 143B-LTK ',26,400,1),(11,'Inhibition of rabbit reticulocyte 15-lipoxygenase','Inhibition of rabbit reticulocyte 15-lipoxygenase','Inhibition of rabbit reticulocyte 15-lipoxygenase',27,450,1),(12,'Inhibitory activity against 15-lipoxygenase','Inhibitory activity against 15-lipoxygenase','Inhibitory activity against 15-lipoxygenase',28,350,1),(13,'Inhibitory activity against soybean 15-lipoxygenase was evaluated','Inhibitory activity against soybean 15-lipoxygenase was evaluated','Inhibitory activity against soybean 15-lipoxygenase was evaluated',29,325,1),(14,'Inhibitory activity against soybean 15-lipoxygenase was evaluated at 100 uM','Inhibitory activity against soybean 15-lipoxygenase was evaluated at 100 uM','Inhibitory activity against soybean 15-lipoxygenase was evaluated at 100 uM',30,322,1),(15,'Percent inhibition against 1A9 human tumor cell line at 0.10 ug/mL','Percent inhibition against 1A9 human tumor cell line at 0.10 ug/mL','Percent inhibition against 1A9 human tumor cell line at 0.10 ug/mL',31,345,1),(16,'Inhibitory concentration against Jurkat cells','Inhibitory concentration against Jurkat cells','Inhibitory concentration against Jurkat cells',32,355,1),(17,'Inhibition of cytochrome P450 progesterone 2-alpha-hydroxylase','Inhibition of cytochrome P450 progesterone 2-alpha-hydroxylase','Inhibition of cytochrome P450 progesterone 2-alpha-hydroxylase',33,346,1),(18,'In vitro inhibition of human 2,3-oxidosqualene cyclase at 100 nM.','In vitro inhibition of human 2,3-oxidosqualene cyclase at 100 nM.','In vitro inhibition of human 2,3-oxidosqualene cyclase at 100 nM.',34,347,1),(19,'Antiviral activity against Hepatitis B virus in 2.2.15 cell line','Antiviral activity against Hepatitis B virus in 2.2.15 cell line','Antiviral activity against Hepatitis B virus in 2.2.15 cell line',34,348,1),(20,'Ability to inhibit the episomal HBV-DNA in 2.2.15 cells.','Ability to inhibit the episomal HBV-DNA in 2.2.15 cells.','Ability to inhibit the episomal HBV-DNA in 2.2.15 cells.',36,349,1),(21,'ytryry','ytyf','fghg',108,5554,1),(22,'sample','sample','sample',125,300,1);
/*!40000 ALTER TABLE `assay` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `chemist_synthesis`
--

DROP TABLE IF EXISTS `chemist_synthesis`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `chemist_synthesis` (
  `chemist_synthesis_id` smallint(6) NOT NULL AUTO_INCREMENT,
  `lab_request_id` smallint(6) DEFAULT NULL,
  `vendor_price` double(6,2) DEFAULT NULL,
  `manual_price` double(6,2) DEFAULT NULL,
  `vendor_time` smallint(6) DEFAULT NULL,
  `manual_time` smallint(6) DEFAULT NULL,
  `vendor_risk` smallint(6) DEFAULT NULL,
  `manual_risk` smallint(6) DEFAULT NULL,
  `vendor_mg` smallint(6) DEFAULT NULL,
  `manual_mg` smallint(6) DEFAULT NULL,
  `manager_approval` varchar(10) DEFAULT NULL,
  `show_manager` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`chemist_synthesis_id`),
  KEY `lab_request_id` (`lab_request_id`),
  CONSTRAINT `chemist_synthesis_ibfk_1` FOREIGN KEY (`lab_request_id`) REFERENCES `lab_request` (`lab_request_id`)
) ENGINE=InnoDB AUTO_INCREMENT=151 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chemist_synthesis`
--

LOCK TABLES `chemist_synthesis` WRITE;
/*!40000 ALTER TABLE `chemist_synthesis` DISABLE KEYS */;
/*!40000 ALTER TABLE `chemist_synthesis` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `company`
--

DROP TABLE IF EXISTS `company`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `company` (
  `company_id` smallint(6) NOT NULL AUTO_INCREMENT,
  `company_name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`company_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company`
--

LOCK TABLES `company` WRITE;
/*!40000 ALTER TABLE `company` DISABLE KEYS */;
INSERT INTO `company` VALUES (1,'ASInfo'),(2,'TLM'),(3,'Mcule');
/*!40000 ALTER TABLE `company` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `compound_property`
--

DROP TABLE IF EXISTS `compound_property`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `compound_property` (
  `compound_property_id` smallint(6) NOT NULL AUTO_INCREMENT,
  `compound_property_name` varchar(200) DEFAULT NULL,
  `compound_property_units` varchar(20) DEFAULT NULL,
  `compound_property_symbol` varchar(10) DEFAULT NULL,
  `compound_property_value` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`compound_property_id`),
  UNIQUE KEY `compound_property_name` (`compound_property_name`)
) ENGINE=InnoDB AUTO_INCREMENT=133 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `compound_property`
--

LOCK TABLES `compound_property` WRITE;
/*!40000 ALTER TABLE `compound_property` DISABLE KEYS */;
INSERT INTO `compound_property` VALUES (21,'Compound was evaluated for its ability to mobilize calcium in 1321NI cells','nM','c',NULL),(23,'Cytotoxic Activity was evaluated against 143B (TK-) tumor cells','nM','c',NULL),(24,'In vitro cell cytotoxicity was determined against 143B cell line','nM','v',NULL),(25,'In vitro cell cytotoxicity against 143B-LTK cell lines expressed in HSV-1 TK','nM','c',NULL),(26,'In vitro cell cytotoxicity was determined against 143B-LTK cell line','nM','c',NULL),(27,'Inhibition of rabbit reticulocyte 15-lipoxygenase by compound (30 uM)','nM','r',NULL),(28,'Inhibitory activity against 15-lipoxygenase in rat polymorphonuclear leukocytes','nM','aa',NULL),(29,'Inhibitory activity against soybean 15-lipoxygenase was evaluated','nM','cc',NULL),(30,'Inhibitory activity against soybean 15-lipoxygenase was evaluated at 100 uM','nM','cc',NULL),(31,'Percent inhibition against 1A9 human tumor cell line at 0.10 ug/mL','nM','c',NULL),(32,'Inhibitory concentration against Jurkat cells','nM','cc',NULL),(33,'Inhibition of cytochrome P450 progesterone 2-alpha-hydroxylase','nM','n',NULL),(34,'In vitro inhibition of human 2,3-oxidosqualene cyclase at 100 nM.','nM','c',NULL),(35,'Antiviral activity against Hepatitis B virus in 2.2.15 cell line','nM','m',NULL),(36,'Ability to inhibit the episomal HBV-DNA in 2.2.15 cells.','nM','c',NULL),(37,'Concentration required to inhibit 50% of 2.2.15 cell line','nM','c',NULL),(38,'Dissociation constant towards 16S rRNA construct A','nM','d',NULL),(39,'Binding affinity for the 16S ribosomal RNA A-site of Escherichia coli','nM','a',NULL),(40,'Compound was tested for binding affinity against 5-HT1 receptor','mg.kg-1','ck',NULL),(42,'Ratio of IC50 against 5-LO and COX','mg.kg-1','r',NULL),(43,'In vitro inhibition of rat 5-Lipoxygenase','mg.kg-1','v',NULL),(44,'Inhibition of arachidonate 5-lipoxygenase purified from porcine leukocytes.','mg.kg-1','ac',NULL),(45,'Inhibition of human 5-hydroxytryptamine 1A receptor','mg.kg-1','c',NULL),(49,'Inhibition of cytochrome P450 progesterone 15-alpha hydroxylase','ug.mL-1','u',NULL),(50,'Inhibition of partially purified 15-lipoxygenase from human leukocytes','ug.mL-1','u',NULL),(51,'Inhibitory activity against human reticulocyte 15-lipoxygenase (15-HLO)','ug.mL-1','u',NULL),(52,'In vitro inhibitory activity of compound on rabbit reticulocyte 15-lipoxygenase','ug.mL-1','u',NULL),(54,'Dissociation constant with dimeric 16S rRNA RNA construct B','ug.mL-1','u',NULL),(57,'Inhibitory activity against 20S proteosome','ug.mL-1','ac',NULL),(58,'Compound was tested for the inhibition of Alpha-glucosidase','ug.mL-1','n',NULL),(60,'Antiviral activity against 07/1 strain of VZV in HEL (human erythroleukemia) cells.','ug.mL-1','u',NULL),(61,'The compound was tested for the in vitro inhibition of platelet 12-lipoxygenase at a concentration of 30 uM','nM','m',NULL),(62,'Percent inhibition of 17-alpha-hydroxylase/17,20 lyase of rat testes microsomes at 100 ','uM','y',NULL),(63,'Cytotoxic activity against human ovarian cancer (1A9) cell line','nM','c',NULL),(64,'Compound was evaluated for the percent increase in activation concentration of human reticulocyte 15-lipoxygenase (15-HLO)','hr','r',NULL),(66,'Compound was evaluated for the inhibition of microsomal 2,3-oxidosqualene cyclase in rat liver microsomes','hr','r',NULL),(67,'Inhibition of 5-Desaturase involved in ergosterol biosynthesis','hr','c',NULL),(68,'Dose to reduce neuronal firing against 5-HT cells in rats (iv)','hr','c',NULL),(69,'Binding affinity at 5-HT reuptake site labeled with [3H]paroxetine','hr','cc',NULL),(70,'Inhibition constant of high-affinity 5-HT uptake','hr','cp',NULL),(71,'In vitro inhibition of [3H]5-HT (2 nM) binding to 5-hydroxytryptamine 1A receptor from bovine hippocampus','hr','cf',NULL),(72,'Inhibitory activity against tumor osteosarcoma cell line 143B after 72 hr continuous exposure to compound','%','xx',NULL),(73,'Compound at 100 uM was tested in vitro for inhibition of 15-lipoxygenase soybean','%','m',NULL),(74,'Binding affinity of aminoglycoside to 16S ribosomal RNA A-site in Escherichia coli','%','m',NULL),(75,'Inhibition of 17-alpha-hydroxylase/17,20 lyase from rat testes microsomal preparation','%','xx',NULL),(76,'Ability to inhibit the episomal HBV-DNA in 2.2.15 cells','%','xx',NULL),(77,'Inhibition of 20-HETE synthesis in human renal microsomes','%','xx',NULL),(78,'Inhibitory concentration against 2008 (ovarian) cells','%','xx',NULL),(79,'Percent inhibition of 5-hydroxytryptamine 1 receptor from rat cortex membrane using [3H]- serotonin as radioligand at 33 uM','%','xx',NULL),(80,'Displacement of [3H]5-HT from 5-hydroxytryptamine 1 receptor of rat cortical membrane homogenates','%','xx',NULL),(81,'Inhibition of 6 nM bombesin induced [3H]thymidine incorporation measured in swiss 3T3 cells using a mitogenicity assay','%','cc',NULL),(82,'Displacement of binding of [3H]5-HT to 5-hydroxytryptamine 1 receptor in rat cerebral cortex','umol.kg-1','cp',NULL),(83,'Displacement of [3H]spiperone from 5-hydroxytryptamine 1 receptor of rat cotex','umol.kg-1','cc',NULL),(84,'Ability to bind at 5-hydroxytryptamine 1A receptor of rat hippocampus by displacing [3H]8-OH-DPAT','umol.kg-1','cp',NULL),(85,'Binding affinity was measured against serotonin 5-hydroxytryptamine 1A receptor','umol.kg-1','cp',NULL),(86,'Inhibitory concentration against 5-hydroxytryptamine 1A receptor (Inactive at >1000 nM concentration)','umol.kg-1','cc',NULL),(87,'In vitro anticancer activity against 2 SCLC cell line; inactive','umol.kg-1','ac',NULL),(88,'Concentration required to inhibit rat liver 2,3-oxidosqualene-lanosterol cyclase','umol.kg-1','cc',NULL),(89,'Inhibitory activity of compound against hepatitis B virus (HBV) in growing cultures of 2.2.15 cells','umol.kg-1','xx',NULL),(90,'Antiviral activity against 07/1 strain of thymidine kinase negetive(TK-) Varicella-Zoster Virus (VZV)','umol.kg-1','cc',NULL),(91,'Blocking 5-HT2A receptor-mediated contractions of rat tail artery','mmHg','m',NULL),(92,'Partial agonism at 5-HT2A receptor was evaluated in presence of ketanserin (3-10 nM) in isolated rat tail artery','mmHg','m',NULL),(93,'Compound was tested for the intrinsic activity against 5-HT2A receptors of rat tail artery.','mmHg','m',NULL),(94,'Evaluated for the agonistic activity against 5-HT4 receptor in non-electrically stimulated guinea-pig ileum.','mmHg','m',NULL),(95,'Agonistic activity against Serotonin 5-HT4 receptor in low frequency field stimulation of guinea-pig ileum (FSGPI)','mmHg','m',NULL),(96,'Evaluated for the agonistic activity against Serotonin 5-HT4 receptor in non-electrically stimulated guinea-pig ileum.','mmHg','m',NULL),(97,'The binding affinity was measured on 5-hydroxytryptamine 4 receptor using [3H]- GR-113808 as radioligand.','mmHg','cc',NULL),(98,'Relative competitive index values for binding to 25-OH-D3-1-hydroxylase of chick intestine','mmHg','cc',NULL),(99,'25-OH-D3-1-hydroxylase activity (10e-6 M) was measured as %control','mmHg','xx',NULL),(100,'Relative competitive index values for binding to 25-OH-D3-1-hydroxylase of human HL-60 cells','mmHg','xx',NULL),(101,'Selectivity, ratio of relative ID50 in liver and heart','mmHg','xx',NULL),(102,'Antagonism at the 5-hydroxytryptamine 1A receptor was determined in vitro using a [35S]GTP-gamma-S,','u equiv min-1','eq',NULL),(103,'Antagonism at the 5-hydroxytryptamine 1A receptor determined in vitro using a [35S]GTP-gamma-S, No data','u equiv min-1','eq',NULL),(104,'Inhibition concentration against 5-hydroxytryptamine 1A  receptor using cAMP as radioligand in CHO cells','u equiv min-1','eq',NULL),(105,'Effective dose for half-maximal decrease in the accumulation of 5-hydroxytryptophan (5-HTP) in reserpinized rat brain hemispheral area by po administration','u equiv min-1','eq',NULL),(106,'Compound was evaluated for the inhibition of 5-LO (lipoxygenase)','u equiv min-1','eq',NULL),(107,'Inhibitory concentration against 5-lipoxygenase from mouse macrophage','u equiv min-1','eq',NULL),(108,'Compound was evaluated for the inhibition of 5-Lipoxygenase (5-LO) in vitro at 1 uM','u equiv min-1','e',NULL),(110,'In vitro affinity towards 5-hydroxytryptamine 1A receptor using [3H]8-OH-DPAT as radioligand in hippocampus','u equiv min-1','e',NULL),(111,'Compound was evaluated for the inhibition of [3H]5-HT (concentration of 12 nM) specific binding to rat hippocampus','u equiv min-1','e',NULL),(112,'Inhibition of human rhinovirus 3C protease','mg kg-1 day-1','xxx',NULL),(113,'Compound tested for activity against 3EM 37 mouse ependymoblastoma after single ip injection on day 1 at optimal dose of 100 mg/kg (Dose range 200-12.5)','mg kg-1 day-1','xxx',NULL),(114,'accumulation of compound in 3LL cells was measured with DFMO by HPLC at 1 uM dose','mg kg-1 day-1','xxx',NULL),(115,'accumulation of compound in 3LL cells was measured without DFMO by ICP-AES at 50 uM dose','mg kg-1 day-1','xxx',NULL),(116,'putrescine levels in 3LL cells after the treatment of 1 uM of Compound','mg kg-1 day-1','xxx',NULL),(117,'Concentration required to inhibit the colony formation of lung carcinoma (3LLD122) cell lines by 50%','mg kg-1 day-1','xxx',NULL),(118,'Effective dose required against Trypanosoma cruzi amastigotes in 3T3 Fibroblasts','mg kg-1 day-1','xxx',NULL),(119,'Compound was tested for the concentration necessary to inhibit swiss 3T3 Mouse Fibroblast cell growth rate by 50%.','mg kg-1 day-1','xxx',NULL),(120,'Inhibition of ligand-induced proliferation in human EGF-R Kinase expressing 3T3 cells','mg kg-1 day-1','xxx',NULL),(122,'Affinity in displacing [125I](R)-DOI from rat cortical homogenate 5-HT2 receptor.  ','mg kg-1 day-1','xx',NULL),(123,'Inhibition of [14C]arachidonic acid conversion to 5-HETE by broken cell 5-LO isolated from guinea pig PMN','mg kg-1 day-1','x',NULL),(124,'The compound was tested for inhibitory activity against 5-Lipoxygenase in human polymorphonuclear leukocytes[PMNS]','mg kg-1 day-1','x',NULL),(125,'Inhibitory activity against 5-lipoxygenase (5-LO) in intact rat barophilic leukemia cells (RBL-1)','mg kg-1 day-1','x',NULL),(126,'The compound was tested for inhibition against 5-Lipoxygenase in rat polymorphonuclear leukocytes at 10 uM concentration','mg kg-1 day-1','x',NULL),(127,'Binding affinity towards human 5-hydroxytryptamine 1 receptor','mg kg-1 day-1','x',NULL),(128,'The binding affinity was measured on serotonin 5-hydroxytryptamine 1 receptor in rat brain tissue','mg kg-1 day-1','x',NULL),(129,'Binding affinity was determined against 5-hydroxytryptamine 1A receptor was determined in male Sprague-Dawley rat brain.','s-1','s',NULL),(130,'Binding affinity was measured on cloned rat 5-hydroxytryptamine 1A receptor which is labeled by [3H]8-OH-DPAT','s-1','s',NULL),(131,'In vitro ability to displace [3H]8-OH-DPAT from 5-hydroxytryptamine 1A receptor sites of rat brain cortex.','s-1','s',NULL),(132,'Inhibition of [3H]8-OH-DPAT binding to 5-hydroxytryptamine 1A receptor of rat hippocampus','s-1','s',NULL);
/*!40000 ALTER TABLE `compound_property` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `development_phase`
--

DROP TABLE IF EXISTS `development_phase`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `development_phase` (
  `development_phase_id` smallint(6) NOT NULL AUTO_INCREMENT,
  `development_phase_name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`development_phase_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `development_phase`
--

LOCK TABLES `development_phase` WRITE;
/*!40000 ALTER TABLE `development_phase` DISABLE KEYS */;
INSERT INTO `development_phase` VALUES (1,'HIT'),(2,'Lead'),(3,'Nominee'),(4,'Drug'),(5,'CANDIDATE');
/*!40000 ALTER TABLE `development_phase` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `experimental_request`
--

DROP TABLE IF EXISTS `experimental_request`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `experimental_request` (
  `experimental_request_id` smallint(6) NOT NULL AUTO_INCREMENT,
  `structure_id` bigint(20) DEFAULT NULL,
  `assay_id` smallint(6) DEFAULT NULL,
  `er_time_stamp` datetime DEFAULT NULL,
  `user_id` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`experimental_request_id`),
  UNIQUE KEY `structure_id` (`structure_id`,`assay_id`),
  KEY `user_id` (`user_id`),
  KEY `assay_id` (`assay_id`),
  CONSTRAINT `experimental_request_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `experimental_request_ibfk_2` FOREIGN KEY (`assay_id`) REFERENCES `assay` (`assay_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `experimental_request`
--

LOCK TABLES `experimental_request` WRITE;
/*!40000 ALTER TABLE `experimental_request` DISABLE KEYS */;
/*!40000 ALTER TABLE `experimental_request` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `experimental_result`
--

DROP TABLE IF EXISTS `experimental_result`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `experimental_result` (
  `Experimental_result_id` smallint(6) NOT NULL AUTO_INCREMENT,
  `structure_id` bigint(20) DEFAULT NULL,
  `assay_id` smallint(6) DEFAULT NULL,
  `result_time_stamp` datetime DEFAULT NULL,
  `value` double DEFAULT NULL,
  PRIMARY KEY (`Experimental_result_id`),
  UNIQUE KEY `structure_id` (`structure_id`,`assay_id`),
  KEY `FK_experimental_result_assay` (`assay_id`),
  CONSTRAINT `FK_experimental_result_assay` FOREIGN KEY (`assay_id`) REFERENCES `assay` (`assay_id`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `experimental_result`
--

LOCK TABLES `experimental_result` WRITE;
/*!40000 ALTER TABLE `experimental_result` DISABLE KEYS */;
INSERT INTO `experimental_result` VALUES (1,215160,1,NULL,1),(2,215271,1,NULL,2.3),(3,327890,1,NULL,3.7),(4,426789,2,NULL,4.8),(5,567891,2,NULL,5.3),(6,413454,3,NULL,6.2),(7,187656,4,NULL,7.4),(8,796543,4,NULL,8.4),(9,654567,4,NULL,9.2),(10,865432,4,NULL,1.8),(11,928910,2,NULL,2.7),(12,763210,2,NULL,3.5),(13,143908,1,NULL,4.2),(14,17890,3,NULL,5.9),(15,147645,3,NULL,6.6),(16,201876,6,NULL,5.7),(17,156745,6,NULL,2.1),(18,156786,6,NULL,3.4),(19,156789,6,NULL,5),(20,201090,7,NULL,6),(21,201091,7,NULL,2.8),(22,201092,7,NULL,2.9),(23,201093,7,NULL,3),(24,201094,7,NULL,3.2),(25,302120,8,NULL,2.2),(26,302121,8,NULL,3.3),(27,302022,8,NULL,4.4),(28,302023,8,NULL,4.5),(29,402040,9,NULL,1.9),(30,402041,9,NULL,2.5),(31,402042,9,NULL,2.8),(32,402043,9,NULL,3.6),(33,402044,9,NULL,4.5),(34,567890,10,NULL,3),(35,567891,10,NULL,4),(36,567893,10,NULL,5),(37,654320,11,NULL,2),(38,654321,11,NULL,3),(39,654322,11,NULL,4),(40,765430,12,NULL,5),(41,7654311,12,NULL,6),(42,765433,12,NULL,7),(43,876545,13,NULL,1),(44,876544,13,NULL,2),(45,876565,13,NULL,3),(46,67545,14,NULL,5),(47,657889,14,NULL,4),(48,789654,14,NULL,4);
/*!40000 ALTER TABLE `experimental_result` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gene`
--

DROP TABLE IF EXISTS `gene`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gene` (
  `gene_id` smallint(6) NOT NULL AUTO_INCREMENT,
  `gene_name` varchar(100) DEFAULT NULL,
  `gene_target_id` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`gene_id`),
  KEY `gene_target_id` (`gene_target_id`),
  CONSTRAINT `gene_ibfk_1` FOREIGN KEY (`gene_target_id`) REFERENCES `targets` (`target_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gene`
--

LOCK TABLES `gene` WRITE;
/*!40000 ALTER TABLE `gene` DISABLE KEYS */;
/*!40000 ALTER TABLE `gene` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `groups`
--

DROP TABLE IF EXISTS `groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `groups` (
  `group_id` smallint(6) NOT NULL AUTO_INCREMENT,
  `group_name` varchar(100) DEFAULT NULL,
  `grp_organisation_id` smallint(6) DEFAULT NULL,
  `group_member_id` smallint(6) DEFAULT NULL,
  `group_desc` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`group_id`),
  KEY `grp_organisation_id` (`grp_organisation_id`),
  KEY `FK_groups_Members` (`group_member_id`) USING BTREE,
  CONSTRAINT `groups_ibfk_1` FOREIGN KEY (`grp_organisation_id`) REFERENCES `organisation` (`organisation_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `groups`
--

LOCK TABLES `groups` WRITE;
/*!40000 ALTER TABLE `groups` DISABLE KEYS */;
INSERT INTO `groups` VALUES (5,'DrugGroup',1,0,'DrugGroup'),(6,'Admin',1,0,'Admin'),(7,'Lab',1,0,'Lab');
/*!40000 ALTER TABLE `groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lab_request`
--

DROP TABLE IF EXISTS `lab_request`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `lab_request` (
  `lab_request_id` smallint(6) NOT NULL AUTO_INCREMENT,
  `assay_id` smallint(6) DEFAULT NULL,
  `compound_property_id` smallint(6) DEFAULT NULL,
  `rtp_id` smallint(6) DEFAULT NULL,
  `lab_request_name` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`lab_request_id`),
  KEY `assay_id` (`assay_id`),
  KEY `compound_property_id` (`compound_property_id`),
  KEY `rtp_id` (`rtp_id`),
  CONSTRAINT `lab_request_ibfk_1` FOREIGN KEY (`assay_id`) REFERENCES `assay` (`assay_id`),
  CONSTRAINT `lab_request_ibfk_2` FOREIGN KEY (`compound_property_id`) REFERENCES `assay` (`compound_property_id`),
  CONSTRAINT `lab_request_ibfk_3` FOREIGN KEY (`rtp_id`) REFERENCES `rtp` (`rtp_id`)
) ENGINE=InnoDB AUTO_INCREMENT=247 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lab_request`
--

LOCK TABLES `lab_request` WRITE;
/*!40000 ALTER TABLE `lab_request` DISABLE KEYS */;
/*!40000 ALTER TABLE `lab_request` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `logical_operators`
--

DROP TABLE IF EXISTS `logical_operators`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `logical_operators` (
  `logical_operator_id` smallint(6) NOT NULL AUTO_INCREMENT,
  `logical_operator_name` varchar(100) DEFAULT NULL,
  `logical_operator_symbol` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`logical_operator_id`),
  UNIQUE KEY `logical_operator_name` (`logical_operator_name`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `logical_operators`
--

LOCK TABLES `logical_operators` WRITE;
/*!40000 ALTER TABLE `logical_operators` DISABLE KEYS */;
INSERT INTO `logical_operators` VALUES (1,'lessthan','<'),(2,'greaterthan','>'),(3,'equalto','='),(4,'lessthanequalto','<='),(5,'greaterThanequalto','>=');
/*!40000 ALTER TABLE `logical_operators` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `members`
--

DROP TABLE IF EXISTS `members`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `members` (
  `member_id` smallint(6) NOT NULL AUTO_INCREMENT,
  `member_name` varchar(100) DEFAULT NULL,
  `member_group_id` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`member_id`),
  KEY `member_group_id` (`member_group_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `members`
--

LOCK TABLES `members` WRITE;
/*!40000 ALTER TABLE `members` DISABLE KEYS */;
INSERT INTO `members` VALUES (1,'David',NULL),(2,'Joseph',NULL),(3,'Christoper',NULL),(4,'Naveen',NULL),(5,'Sajul',NULL),(6,'Ferduas',NULL),(7,'Jelilah',NULL),(8,'Gaithri',NULL),(9,'Aneesh',NULL),(10,'Selva',NULL);
/*!40000 ALTER TABLE `members` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `messages` (
  `msg_id` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
  `msg_detail` varchar(400) DEFAULT NULL,
  PRIMARY KEY (`msg_id`)
) ENGINE=InnoDB AUTO_INCREMENT=322 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `messages`
--

LOCK TABLES `messages` WRITE;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
INSERT INTO `messages` VALUES (1,'Hi '),(2,'hello\n'),(3,'sample'),(4,'Added new portfolio TDTS'),(5,'Added new portfolio LTAS'),(6,'Added new portfolio TestProject'),(7,'Added new portfolio Sample'),(8,'Added new portfolio Demo'),(9,'Added new assay name daa'),(10,'Added new portfolio asdaa'),(11,'Added new RTP'),(12,'Added new RTP'),(13,'Added new RTP'),(15,'Added new RTP'),(16,'Added new assay name Enum'),(17,'Added new Tpp asdas'),(18,'Added new portfolio czxzcz'),(19,'Added new portfolio dsadasd'),(20,'Added new portfolio ddas'),(21,'Added new portfolio affff'),(22,'Added new portfolio dsffs'),(23,'Added new portfolio asdxzxcxc'),(24,'Added new portfolio LTTTAS'),(25,'Added new RTP'),(26,'Added new assay name Assay1'),(27,'Added new portfolio sdasdas'),(29,'Added new RTP'),(30,'Added new properties dddddddd'),(31,'Added new assay name dasddz'),(32,'Added new portfolio DemoProject'),(33,'Added new portfolio Demo'),(34,'Added new Approve Therapy Demo'),(35,'Added new RTP'),(36,'Added new group sadad'),(37,'Added new group grd'),(38,'Added new portfolio sdad'),(39,'Added new portfolio adsda'),(40,'Added new portfolio grt'),(41,'Added new group DrugGroup'),(42,'Added new group Admin'),(43,'Added new portfolio Dengue'),(44,'Added new portfolio Filariasis'),(45,'Added new portfolio Malaria'),(46,'Added new portfolio Gram Positive Antibacterials'),(47,'Added new portfolio Androgenic Alopecia'),(48,'Added new portfolio Infectious Mononucleosis'),(49,'Added new Approve Therapy App'),(50,'Added new portfolio LTASS'),(51,'Added new RTP'),(53,'Added new RTP'),(54,'Added new RTP'),(55,'Added new RTP'),(58,'Added new RTP'),(60,'Added new RTP'),(61,'Added new RTP'),(62,'Added new RTP'),(63,'Added new RTP'),(64,'Added new RTP'),(65,'Added new portfolio xzczcz'),(66,'Added new RTP'),(67,'Added new portfolio Dengue'),(68,'Added new RTP'),(69,'Added new RTP'),(70,'Added new RTP'),(71,'Added new RTP'),(72,'Added new Approve Therapy Test'),(73,'Added new portfolio MyProj'),(74,'Added new RTP'),(75,'Added new RTP'),(76,'Added new RTP'),(77,'Added new RTP'),(78,'Added new RTP'),(79,'Added new properties gtr'),(80,'Added new RTP'),(81,'Added new tpp swe'),(82,'Added new RTP'),(83,'Added new tpp der'),(84,'Added new RTP'),(85,'Added new RTP'),(86,'Added new RTP'),(87,'Added new RTP'),(88,'Added new RTP'),(89,'Added new RTP'),(90,'Added new RTP'),(91,'Added new RTP'),(92,'Added new RTP'),(93,'Added new RTP'),(94,'Added new tpp ret'),(95,'Added new Approve Therapy der'),(96,'Added new project nPrj'),(97,'Added new group Lab'),(98,'Added new properties Compound was evaluated for its ability to mobilize calcium in 1321NI cells'),(99,'Added new properties Compound was evaluated for its ability to mobilize calcium in 1321NI cells'),(100,'Added new properties Cytotoxic Activity was evaluated against 143B (TK-) tumor cells'),(101,'Added new properties In vitro cell cytotoxicity was determined against 143B cell line'),(102,'Added new properties In vitro cell cytotoxicity against 143B-LTK cell lines expressed in HSV-1 TK'),(103,'Added new properties In vitro cell cytotoxicity was determined against 143B-LTK cell line'),(104,'Added new properties Inhibition of rabbit reticulocyte 15-lipoxygenase by compound (30 uM)'),(105,'Added new properties Inhibitory activity against 15-lipoxygenase in rat polymorphonuclear leukocytes'),(106,'Added new properties Inhibitory activity against soybean 15-lipoxygenase was evaluated'),(107,'Added new properties Inhibitory activity against soybean 15-lipoxygenase was evaluated at 100 uM'),(108,'Added new properties Percent inhibition against 1A9 human tumor cell line at 0.10 ug/mL'),(109,'Added new properties Inhibitory concentration against Jurkat cells'),(110,'Added new properties Inhibition of cytochrome P450 progesterone 2-alpha-hydroxylase'),(111,'Added new properties In vitro inhibition of human 2,3-oxidosqualene cyclase at 100 nM.'),(112,'Added new properties Antiviral activity against Hepatitis B virus in 2.2.15 cell line'),(113,'Added new properties Ability to inhibit the episomal HBV-DNA in 2.2.15 cells.'),(114,'Added new properties Concentration required to inhibit 50% of 2.2.15 cell line'),(115,'Added new properties Dissociation constant towards 16S rRNA construct A'),(116,'Added new properties Binding affinity for the 16S ribosomal RNA A-site of Escherichia coli'),(117,'Added new properties Compound was tested for binding affinity against 5-HT1 receptor'),(118,'Added new properties Ratio of IC50 against 5-LO and COX'),(119,'Added new properties In vitro inhibition of rat 5-Lipoxygenase'),(120,'Added new properties Inhibition of arachidonate 5-lipoxygenase purified from porcine leukocytes.'),(121,'Added new properties Inhibition of human 5-hydroxytryptamine 1A receptor'),(122,'Added new properties Inhibition of cytochrome P450 progesterone 15-alpha hydroxylase'),(123,'Added new properties Inhibition of partially purified 15-lipoxygenase from human leukocytes'),(124,'Added new properties Inhibitory activity against human reticulocyte 15-lipoxygenase (15-HLO)'),(125,'Added new properties In vitro inhibitory activity of compound on rabbit reticulocyte 15-lipoxygenase'),(126,'Added new properties Dissociation constant with dimeric 16S rRNA RNA construct B'),(127,'Added new properties Inhibitory activity against 20S proteosome'),(128,'Added new properties Compound was tested for the inhibition of Alpha-glucosidase'),(129,'Added new properties Antiviral activity against 07/1 strain of VZV in HEL (human erythroleukemia) cells.'),(130,'Added new properties The compound was tested for the in vitro inhibition of platelet 12-lipoxygenase at a concentration of 30 uM'),(131,'Added new properties Percent inhibition of 17-alpha-hydroxylase/17,20 lyase of rat testes microsomes at 100 '),(132,'Added new properties Cytotoxic activity against human ovarian cancer (1A9) cell line'),(133,'Added new properties Compound was evaluated for the percent increase in activation concentration of human reticulocyte 15-lipoxygenase (15-HLO)'),(134,'Added new RTP'),(135,'Added new RTP'),(136,'Added new RTP'),(137,'Added new properties Compound was evaluated for the inhibition of microsomal 2,3-oxidosqualene cyclase in rat liver microsomes'),(138,'Added new RTP'),(139,'Added new properties Inhibition of 5-Desaturase involved in ergosterol biosynthesis'),(140,'Added new properties Dose to reduce neuronal firing against 5-HT cells in rats (iv)'),(141,'Added new properties Binding affinity at 5-HT reuptake site labeled with [3H]paroxetine'),(142,'Added new properties Inhibition constant of high-affinity 5-HT uptake'),(143,'Added new properties In vitro inhibition of [3H]5-HT (2 nM) binding to 5-hydroxytryptamine 1A receptor from bovine hippocampus'),(144,'Added new properties Inhibitory activity against tumor osteosarcoma cell line 143B after 72 hr continuous exposure to compound'),(145,'Added new properties Compound at 100 uM was tested in vitro for inhibition of 15-lipoxygenase soybean'),(146,'Added new properties Binding affinity of aminoglycoside to 16S ribosomal RNA A-site in Escherichia coli'),(147,'Added new properties Inhibition of 17-alpha-hydroxylase/17,20 lyase from rat testes microsomal preparation'),(148,'Added new properties Ability to inhibit the episomal HBV-DNA in 2.2.15 cells'),(149,'Added new properties Inhibition of 20-HETE synthesis in human renal microsomes'),(150,'Added new properties Inhibitory concentration against 2008 (ovarian) cells'),(151,'Added new properties Percent inhibition of 5-hydroxytryptamine 1 receptor from rat cortex membrane using [3H]- serotonin as radioligand at 33 uM'),(152,'Added new properties Displacement of [3H]5-HT from 5-hydroxytryptamine 1 receptor of rat cortical membrane homogenates'),(153,'Added new RTP'),(154,'Added new properties Inhibition of 6 nM bombesin induced [3H]thymidine incorporation measured in swiss 3T3 cells using a mitogenicity assay'),(155,'Added new assay name CDK2'),(156,'Added new assay name CDK3'),(157,'Added new assay name CDK4'),(158,'Added new assay name CDK5'),(159,'Added new properties Displacement of binding of [3H]5-HT to 5-hydroxytryptamine 1 receptor in rat cerebral cortex'),(160,'Added new properties Displacement of [3H]spiperone from 5-hydroxytryptamine 1 receptor of rat cotex'),(161,'Added new properties Ability to bind at 5-hydroxytryptamine 1A receptor of rat hippocampus by displacing [3H]8-OH-DPAT'),(162,'Added new properties Binding affinity was measured against serotonin 5-hydroxytryptamine 1A receptor'),(163,'Added new properties Inhibitory concentration against 5-hydroxytryptamine 1A receptor (Inactive at >1000 nM concentration)'),(164,'Added new properties In vitro anticancer activity against 2 SCLC cell line; inactive'),(165,'Added new properties Concentration required to inhibit rat liver 2,3-oxidosqualene-lanosterol cyclase'),(166,'Added new properties Inhibitory activity of compound against hepatitis B virus (HBV) in growing cultures of 2.2.15 cells'),(167,'Added new properties Antiviral activity against 07/1 strain of thymidine kinase negetive(TK-) Varicella-Zoster Virus (VZV)'),(168,'Added new properties Blocking 5-HT2A receptor-mediated contractions of rat tail artery'),(169,'Added new properties Partial agonism at 5-HT2A receptor was evaluated in presence of ketanserin (3-10 nM) in isolated rat tail artery'),(170,'Added new properties Compound was tested for the intrinsic activity against 5-HT2A receptors of rat tail artery.'),(171,'Added new properties Evaluated for the agonistic activity against 5-HT4 receptor in non-electrically stimulated guinea-pig ileum.'),(172,'Added new properties Agonistic activity against Serotonin 5-HT4 receptor in low frequency field stimulation of guinea-pig ileum (FSGPI)'),(173,'Added new properties Evaluated for the agonistic activity against Serotonin 5-HT4 receptor in non-electrically stimulated guinea-pig ileum.'),(174,'Added new properties The binding affinity was measured on 5-hydroxytryptamine 4 receptor using [3H]- GR-113808 as radioligand.'),(175,'Added new properties Relative competitive index values for binding to 25-OH-D3-1-hydroxylase of chick intestine'),(176,'Added new properties 25-OH-D3-1-hydroxylase activity (10e-6 M) was measured as %control'),(177,'Added new properties Relative competitive index values for binding to 25-OH-D3-1-hydroxylase of human HL-60 cells'),(178,'Added new properties Selectivity, ratio of relative ID50 in liver and heart'),(179,'Added new properties Antagonism at the 5-hydroxytryptamine 1A receptor was determined in vitro using a [35S]GTP-gamma-S,'),(180,'Added new properties Antagonism at the 5-hydroxytryptamine 1A receptor determined in vitro using a [35S]GTP-gamma-S, No data'),(181,'Added new properties Inhibition concentration against 5-hydroxytryptamine 1A  receptor using cAMP as radioligand in CHO cells'),(182,'Added new properties Effective dose for half-maximal decrease in the accumulation of 5-hydroxytryptophan (5-HTP) in reserpinized rat brain hemispheral area by po administration'),(183,'Added new properties Compound was evaluated for the inhibition of 5-LO (lipoxygenase)'),(184,'Added new properties Inhibitory concentration against 5-lipoxygenase from mouse macrophage'),(185,'Added new properties Compound was evaluated for the inhibition of 5-Lipoxygenase (5-LO) in vitro at 1 uM'),(186,'Added new properties In vitro affinity towards 5-hydroxytryptamine 1A receptor using [3H]8-OH-DPAT as radioligand in hippocampus'),(187,'Added new properties Compound was evaluated for the inhibition of [3H]5-HT (concentration of 12 nM) specific binding to rat hippocampus'),(188,'Added new properties Inhibition of human rhinovirus 3C protease'),(189,'Added new properties Compound tested for activity against 3EM 37 mouse ependymoblastoma after single ip injection on day 1 at optimal dose of 100 mg/kg (Dose range 200-12.5)'),(190,'Added new properties accumulation of compound in 3LL cells was measured with DFMO by HPLC at 1 uM dose'),(191,'Added new properties accumulation of compound in 3LL cells was measured without DFMO by ICP-AES at 50 uM dose'),(192,'Added new properties putrescine levels in 3LL cells after the treatment of 1 uM of Compound'),(193,'Added new properties Concentration required to inhibit the colony formation of lung carcinoma (3LLD122) cell lines by 50%'),(194,'Added new properties Effective dose required against Trypanosoma cruzi amastigotes in 3T3 Fibroblasts'),(195,'Added new properties Compound was tested for the concentration necessary to inhibit swiss 3T3 Mouse Fibroblast cell growth rate by 50%.'),(196,'Added new properties Inhibition of ligand-induced proliferation in human EGF-R Kinase expressing 3T3 cells'),(197,'Added new properties Affinity in displacing [125I](R)-DOI from rat cortical homogenate 5-HT2 receptor.  receptor using cAMP as radioligand in CHO cells'),(198,'Added new properties Inhibition of [14C]arachidonic acid conversion to 5-HETE by broken cell 5-LO isolated from guinea pig PMN'),(199,'Added new properties The compound was tested for inhibitory activity against 5-Lipoxygenase in human polymorphonuclear leukocytes[PMNS]'),(200,'Added new properties Inhibitory activity against 5-lipoxygenase (5-LO) in intact rat barophilic leukemia cells (RBL-1)'),(201,'Added new properties The compound was tested for inhibition against 5-Lipoxygenase in rat polymorphonuclear leukocytes at 10 uM concentration'),(202,'Added new properties Binding affinity towards human 5-hydroxytryptamine 1 receptor'),(203,'Added new properties The binding affinity was measured on serotonin 5-hydroxytryptamine 1 receptor in rat brain tissue'),(204,'Added new properties Binding affinity was determined against 5-hydroxytryptamine 1A receptor was determined in male Sprague-Dawley rat brain.'),(205,'Added new properties Binding affinity was measured on cloned rat 5-hydroxytryptamine 1A receptor which is labeled by [3H]8-OH-DPAT'),(206,'Added new properties In vitro ability to displace [3H]8-OH-DPAT from 5-hydroxytryptamine 1A receptor sites of rat brain cortex.'),(207,'Added new properties Inhibition of [3H]8-OH-DPAT binding to 5-hydroxytryptamine 1A receptor of rat hippocampus'),(208,'Added new tpp fff'),(209,'Added new tpp TppTest'),(210,'Added new RTP'),(211,'Added new RTP'),(212,'Added new RTP'),(213,'Added new RTP'),(215,'Added new RTP'),(216,'Added new RTP'),(217,'Added new assay name Compound was evaluated for its ability to mobilize'),(218,'Added new assay name Cytotoxic Activity was evaluated '),(219,'Added new assay name In vitro cell cytotoxicity was determined'),(220,'Added new assay name In vitro cell cytotoxicity against 143B-LTK'),(221,'Added new assay name In vitro cell cytotoxicity was determined against 143B-LTK '),(222,'Added new assay name Inhibition of rabbit reticulocyte 15-lipoxygenase'),(223,'Added new assay name Inhibitory activity against 15-lipoxygenase'),(224,'Added new assay name Inhibitory activity against soybean 15-lipoxygenase was evaluated'),(225,'Added new assay name Inhibitory activity against soybean 15-lipoxygenase was evaluated at 100 uM'),(226,'Added new assay name Percent inhibition against 1A9 human tumor cell line at 0.10 ug/mL'),(227,'Added new assay name Inhibitory concentration against Jurkat cells'),(228,'Added new assay name Inhibition of cytochrome P450 progesterone 2-alpha-hydroxylase'),(229,'Added new assay name In vitro inhibition of human 2,3-oxidosqualene cyclase at 100 nM.'),(230,'Added new assay name Antiviral activity against Hepatitis B virus in 2.2.15 cell line'),(231,'Added new assay name Ability to inhibit the episomal HBV-DNA in 2.2.15 cells.'),(232,'Added new RTP'),(233,'Added new RTP'),(234,'Added new RTP'),(235,'Added new RTP'),(236,'Added new RTP'),(237,'Added new RTP'),(238,'Added new RTP'),(239,'Added new RTP'),(240,'Added new RTP'),(241,'Added new RTP'),(242,'Added new RTP'),(243,'Added new RTP'),(244,'Added new RTP'),(245,'Added new RTP'),(246,'Added new RTP'),(247,'Added new RTP'),(248,'Added new RTP'),(249,'Added new RTP'),(250,'Added new assay name ytryry'),(251,'Rated the following Molecules a1_cdlaculeacin-abutoconazole with this rating :good'),(252,'Rated the following Molecules --a1_cdl,aculeacin-a,butoconazole, with this rating :excellent'),(253,'The following LabRequest Has been created --esperamicin-a1_Cytotoxic Activity was evaluated ,argipressin_Cytotoxic Activity was evaluated ,cefuroxime_Cytotoxic Activity was evaluated ,'),(254,'The following LabRequest Has been created --a1_cdl_CDK1,aculeacin-a_Compound was evaluated for its ability to mobilize,butoconazole_Compound was evaluated for its ability to mobilize,'),(255,'The following LabRequest Has been created --a1_cdl_Cytotoxic Activity was evaluated ,aculeacin-a_Compound was evaluated for its ability to mobilize,butoconazole_CDK1,'),(256,'The following LabRequest Has been created --a1_cdl_Compound was evaluated for its ability to mobilize,aculeacin-a_Cytotoxic Activity was evaluated ,butoconazole_Inhibitory activity against soybean 15-lipoxygenase was evaluated,'),(257,'The following LabRequest Has been created --a1_cdl_CDK1,aculeacin-a_Compound was evaluated for its ability to mobilize,butoconazole_Cytotoxic Activity was evaluated ,'),(258,'The following LabRequest Has been created --a1_cdl_CDK1,aculeacin-a_Compound was evaluated for its ability to mobilize,butoconazole_Cytotoxic Activity was evaluated ,'),(259,'The following LabRequest Has been created --a1_cdl_CDK1,aculeacin-a_Cytotoxic Activity was evaluated ,butoconazole_Compound was evaluated for its ability to mobilize,'),(260,'The following LabRequest Has been created --a1_cdl_Compound was evaluated for its ability to mobilize,aculeacin-a_CDK1,butoconazole_Compound was evaluated for its ability to mobilize,'),(261,'The following LabRequest Has been created --a1_cdl_Compound was evaluated for its ability to mobilize,aculeacin-a_CDK1,butoconazole_Cytotoxic Activity was evaluated ,'),(262,'Manager Approved the following  ChemistSynthesis --butoconazole_Cytotoxic Activity was evaluated ,a1_cdl_Compound was evaluated for its ability to mobilize,'),(263,'The following LabRequest Has been created --a1_cdl_CDK1,aculeacin-a_Compound was evaluated for its ability to mobilize,butoconazole_Cytotoxic Activity was evaluated ,'),(264,'Chemist Synthesis for the following  Lab Requests Has been created'),(265,'Manager Approved the following  ChemistSynthesis --butoconazole_Cytotoxic Activity was evaluated ,aculeacin-a_Compound was evaluated for its ability to mobilize,a1_cdl_CDK1,'),(266,'The following LabRequest Has been created --a1_cdl_CDK1,aculeacin-a_Compound was evaluated for its ability to mobilize,butoconazole_Cytotoxic Activity was evaluated ,'),(267,'Chemist Synthesis for the following  Lab Requests Has been created'),(268,'The following LabRequest Has been created --a1_cdl_CDK1,aculeacin-a_Compound was evaluated for its ability to mobilize,butoconazole_Cytotoxic Activity was evaluated ,'),(269,'Rated the following Molecules --a1_cdl,aculeacin-a,butoconazole, with this rating :good'),(270,'The following LabRequest Has been created --a1_cdl_Compound was evaluated for its ability to mobilize,aculeacin-a_Compound was evaluated for its ability to mobilize,butoconazole_Compound was evaluated for its ability to mobilize,'),(271,'The following LabRequest Has been created --a1_cdl_Compound was evaluated for its ability to mobilize,aculeacin-a_CDK1,butoconazole_Cytotoxic Activity was evaluated ,'),(272,'The following LabRequest Has been created --a1_cdl_CDK1,aculeacin-a_CDK1,butoconazole_Compound was evaluated for its ability to mobilize,'),(273,'Chemist Synthesis for the following  Lab Requests Has been created'),(274,'The following LabRequest Has been created --a1_cdl_CDK1,aculeacin-a_Compound was evaluated for its ability to mobilize,butoconazole_Cytotoxic Activity was evaluated ,'),(275,'The following LabRequest Has been created --a1_cdl_CDK1,aculeacin-a_Compound was evaluated for its ability to mobilize,butoconazole_Cytotoxic Activity was evaluated ,'),(276,'The following LabRequest Has been created --a1_cdl_CDK1,aculeacin-a_Compound was evaluated for its ability to mobilize,butoconazole_Cytotoxic Activity was evaluated ,'),(277,'The following LabRequest Has been created --a1_cdl_CDK1,aculeacin-a_Compound was evaluated for its ability to mobilize,butoconazole_Cytotoxic Activity was evaluated ,'),(278,'The following LabRequest Has been created --a1_cdl_CDK1,aculeacin-a_Compound was evaluated for its ability to mobilize,butoconazole_Cytotoxic Activity was evaluated ,'),(279,'The following LabRequest Has been created --a1_cdl_CDK1,aculeacin-a_Compound was evaluated for its ability to mobilize,butoconazole_Cytotoxic Activity was evaluated ,'),(280,'The following LabRequest Has been created --a1_cdl_CDK1,aculeacin-a_Compound was evaluated for its ability to mobilize,butoconazole_Compound was evaluated for its ability to mobilize,'),(281,'The following LabRequest Has been created --a1_cdl_Compound was evaluated for its ability to mobilize,aculeacin-a_CDK1,butoconazole_Cytotoxic Activity was evaluated ,'),(282,'The following LabRequest Has been created --digitonin_Inhibitory activity against soybean 15-lipoxygenase was evaluated,a1_cdl_CDK1,aculeacin-a_Compound was evaluated for its ability to mobilize,'),(283,'The following LabRequest Has been created --a1_cdl_CDK1,aculeacin-a_Compound was evaluated for its ability to mobilize,butoconazole_Cytotoxic Activity was evaluated ,'),(284,'The following LabRequest Has been created --a1_cdl_CDK1,aculeacin-a_Compound was evaluated for its ability to mobilize,butoconazole_Compound was evaluated for its ability to mobilize,'),(285,'The following LabRequest Has been created --a1_cdl_CDK1,aculeacin-a_Compound was evaluated for its ability to mobilize,butoconazole_Cytotoxic Activity was evaluated ,'),(286,'Chemist Synthesis for the following  Lab Requests Has been created'),(287,'Manager Approved the following  ChemistSynthesis --a1_cdl_CDK1,'),(288,'The following LabRequest Has been created --a1_cdl_Compound was evaluated for its ability to mobilize,aculeacin-a_Cytotoxic Activity was evaluated ,butoconazole_CDK1,'),(289,'The following LabRequest Has been created --a1_cdl_CDK1,aculeacin-a_Compound was evaluated for its ability to mobilize,butoconazole_Cytotoxic Activity was evaluated ,'),(290,'The following LabRequest Has been created --a1_cdl_Compound was evaluated for its ability to mobilize,aculeacin-a_Cytotoxic Activity was evaluated ,butoconazole_Inhibitory activity against soybean 15-lipoxygenase was evaluated,'),(291,'Chemist Synthesis for the following  Lab Requests Has been created'),(292,'The following LabRequest Has been created --a1_cdl_CDK1,aculeacin-a_Compound was evaluated for its ability to mobilize,butoconazole_Cytotoxic Activity was evaluated ,'),(293,'Chemist Synthesis for the following  Lab Requests Has been created'),(294,'Manager Approved the following  ChemistSynthesis --a1_cdl_CDK1,'),(295,'Added new RTP'),(296,'Rated the following Molecules --a1_cdl,aculeacin-a,butoconazole,a2_cdl,argipressin, with this rating :good'),(297,'The following LabRequest Has been created --a1_cdl_Compound was evaluated for its ability to mobilize,aculeacin-a_CDK1,butoconazole_Cytotoxic Activity was evaluated ,'),(298,'Chemist Synthesis for the following  Lab Requests Has been created'),(299,'Manager Approved the following  ChemistSynthesis --a1_cdl_Compound was evaluated for its ability to mobilize,butoconazole_Cytotoxic Activity was evaluated ,'),(300,'The following LabRequest Has been created --a1_cdl_Compound was evaluated for its ability to mobilize,aculeacin-a_CDK1,butoconazole_Cytotoxic Activity was evaluated ,'),(301,'Chemist Synthesis for the following  Lab Requests Has been created'),(302,'Manager Approved the following  ChemistSynthesis --a1_cdl_Compound was evaluated for its ability to mobilize,butoconazole_Cytotoxic Activity was evaluated ,'),(303,'Added new assay name sample'),(304,'The following LabRequest Has been created --a1_cdl_CDK1,aculeacin-a_Compound was evaluated for its ability to mobilize,butoconazole_Compound was evaluated for its ability to mobilize,'),(305,'The following LabRequest Has been created --a1_cdl_Compound was evaluated for its ability to mobilize,aculeacin-a_Cytotoxic Activity was evaluated ,butoconazole_Compound was evaluated for its ability to mobilize,'),(306,'Chemist Synthesis for the following  Lab Requests Has been created'),(307,'Manager Approved the following  ChemistSynthesis --a1_cdl_CDK1,a1_cdl_Compound was evaluated for its ability to mobilize,aculeacin-a_Cytotoxic Activity was evaluated ,'),(308,'Rated the following Molecules --a1_cdl,aculeacin-a,butoconazole, with this rating :excellent'),(309,'Rated the following Molecules --a1_cdl,aculeacin-a,butoconazole, with this rating :excellent'),(310,'Rated the following Molecules --a1_cdl,aculeacin-a,butoconazole, with this rating :excellent'),(311,'Rated the following Molecules --a1_cdl,aculeacin-a,butoconazole, with this rating :excellent'),(312,'Rated the following Molecules --argipressin,cefuroxime,esperamicin-a1, with this rating :excellent'),(313,'Rated the following Molecules --a1_cdl,aculeacin-a,butoconazole, with this rating :excellent'),(314,'The following LabRequest Has been created --a1_cdl_CDK1,aculeacin-a_Compound was evaluated for its ability to mobilize,butoconazole_Cytotoxic Activity was evaluated ,'),(315,'Chemist Synthesis for the following  Lab Requests Has been created'),(316,'Manager Approved the following  ChemistSynthesis --a1_cdl_CDK1,'),(317,'Rated the following Molecules --butoconazole, with this rating :excellent'),(318,'Rated the following Molecules --digitonin,butoconazole, with this rating :ok'),(319,'Rated the following Molecules --butoconazole,azlocillin, with this rating :excellent'),(320,'Rated the following Molecules --ciguatoxin, with this rating :poor'),(321,'Rated the following Molecules --cobamide,benzthiazide,abarelix, with this rating :ok');
/*!40000 ALTER TABLE `messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mol_file`
--

DROP TABLE IF EXISTS `mol_file`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mol_file` (
  `id` smallint(5) NOT NULL AUTO_INCREMENT,
  `name` blob,
  `mol_name` varchar(45) DEFAULT NULL,
  `rating_id` smallint(5) unsigned DEFAULT NULL,
  `user` varchar(45) DEFAULT NULL,
  `rtp_id` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_mol_file_rtp` (`rtp_id`),
  CONSTRAINT `FK_mol_file_rtp` FOREIGN KEY (`rtp_id`) REFERENCES `rtp` (`rtp_id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mol_file`
--

LOCK TABLES `mol_file` WRITE;
/*!40000 ALTER TABLE `mol_file` DISABLE KEYS */;
INSERT INTO `mol_file` VALUES (1,'\r\nCDL SDfile Writer. v.200000\r\n\r\n 23 25  0  0  0  0  0  0  0  0999 V2000\r\n    0.2250   -1.2792    0.0000 C   0  0  0  0  0  0\r\n   -0.2625   -0.6125    0.0000 N   0  0  3  0  0  0\r\n   -0.1208   -2.0292    0.0000 C   0  0  0  0  0  0\r\n    0.7792    0.4250    0.0000 C   0  0  0  0  0  0\r\n   -0.0083    0.1708    0.0000 C   0  0  1  0  0  0\r\n    1.3917   -0.1292    0.0000 N   0  0  0  0  0  0\r\n    1.0417   -1.1917    0.0000 O   0  0  0  0  0  0\r\n    0.3667   -2.6917    0.0000 C   0  0  0  0  0  0\r\n   -0.6750    0.6583    0.0000 C   0  0  0  0  0  0\r\n    0.9542    1.2333    0.0000 O   0  0  0  0  0  0\r\n   -1.3375    0.1708    0.0000 C   0  0  0  0  0  0\r\n   -1.0875   -0.6125    0.0000 C   0  0  0  0  0  0\r\n    1.1917   -2.6042    0.0000 F   0  0  0  0  0  0\r\n   -0.9458   -2.1167    0.0000 C   0  0  0  0  0  0\r\n    2.1792    0.1250    0.0000 C   0  0  3  0  0  0\r\n    0.0417   -3.4542    0.0000 C   0  0  0  0  0  0\r\n    2.3500    0.9333    0.0000 C   0  0  0  0  0  0\r\n    2.7917   -0.4292    0.0000 C   0  0  0  0  0  0\r\n   -1.2833   -2.8792    0.0000 C   0  0  0  0  0  0\r\n   -0.7833   -3.5542    0.0000 C   0  0  0  0  0  0\r\n    3.1292    1.1875    0.0000 C   0  0  0  0  0  0\r\n    3.5750   -0.1750    0.0000 C   0  0  0  0  0  0\r\n    3.7500    0.6333    0.0000 C   0  0  0  0  0  0\r\n  2  1  1  0  0  0\r\n  3  1  1  0  0  0\r\n  5  4  1  0  0  0\r\n  5  2  1  0  0  0\r\n  6  4  1  0  0  0\r\n  7  1  2  0  0  0\r\n  8  3  1  0  0  0\r\n  9  5  1  0  0  0\r\n 10  4  2  0  0  0\r\n 11 12  1  0  0  0\r\n 12  2  1  0  0  0\r\n 13  8  1  0  0  0\r\n 14  3  2  0  0  0\r\n 15  6  1  0  0  0\r\n 16  8  2  0  0  0\r\n 17 15  1  0  0  0\r\n 18 15  1  0  0  0\r\n 19 14  1  0  0  0\r\n 20 19  2  0  0  0\r\n 21 17  1  0  0  0\r\n 22 18  1  0  0  0\r\n 23 22  1  0  0  0\r\n 11  9  2  0  0  0\r\n 16 20  1  0  0  0\r\n 23 21  1  0  0  0\r\nM  END\r\n>  <IDNUMBER>\r\nAAM 10376335                                                         \r\n\r\n>  <Weight>\r\n1.256000000000000e+002    \r\n\r\n$$$$\r\n','a1_cdl.mol',5,NULL,277),(2,'\r\nCDL SDfile Writer. v.200000\r\n\r\n 24 26  0  0  0  0  0  0  0  0999 V2000\r\n    0.2167   -1.2792    0.0000 S   0  0  3  0  0  0\r\n   -0.2625   -0.6125    0.0000 N   0  0  3  0  0  0\r\n   -0.0083    0.1708    0.0000 C   0  0  1  0  0  0\r\n    0.7792    0.4250    0.0000 C   0  0  0  0  0  0\r\n    0.7042   -1.9542    0.0000 C   0  0  0  0  0  0\r\n    1.3917   -0.1292    0.0000 N   0  0  0  0  0  0\r\n    0.8792   -0.7917    0.0000 O   0  0  0  0  0  0\r\n   -0.4583   -1.7625    0.0000 O   0  0  0  0  0  0\r\n   -0.6750    0.6583    0.0000 C   0  0  0  0  0  0\r\n    0.9542    1.2333    0.0000 O   0  0  0  0  0  0\r\n   -1.3375    0.1708    0.0000 C   0  0  0  0  0  0\r\n   -1.0875   -0.6125    0.0000 C   0  0  0  0  0  0\r\n    0.3625   -2.7042    0.0000 C   0  0  0  0  0  0\r\n    1.5167   -1.8667    0.0000 C   0  0  0  0  0  0\r\n    1.6625   -3.2875    0.0000 C   0  0  0  0  0  0\r\n    2.1792    0.1250    0.0000 C   0  0  3  0  0  0\r\n    2.0000   -2.5292    0.0000 C   0  0  0  0  0  0\r\n    0.8417   -3.3667    0.0000 C   0  0  0  0  0  0\r\n    2.1500   -3.9542    0.0000 F   0  0  0  0  0  0\r\n    2.7917   -0.4292    0.0000 C   0  0  0  0  0  0\r\n    2.3500    0.9333    0.0000 C   0  0  0  0  0  0\r\n    3.5750   -0.1750    0.0000 C   0  0  0  0  0  0\r\n    3.1292    1.1875    0.0000 C   0  0  0  0  0  0\r\n    3.7417    0.6333    0.0000 C   0  0  0  0  0  0\r\n  2  1  1  0  0  0\r\n  3  2  1  0  0  0\r\n  3  4  1  0  0  0\r\n  5  1  1  0  0  0\r\n  6  4  1  0  0  0\r\n  7  1  2  0  0  0\r\n  8  1  2  0  0  0\r\n  9  3  1  0  0  0\r\n 10  4  2  0  0  0\r\n 11 12  1  0  0  0\r\n 12  2  1  0  0  0\r\n 13  5  2  0  0  0\r\n 14  5  1  0  0  0\r\n 15 17  1  0  0  0\r\n 16  6  1  0  0  0\r\n 17 14  2  0  0  0\r\n 18 13  1  0  0  0\r\n 19 15  1  0  0  0\r\n 20 16  1  0  0  0\r\n 21 16  1  0  0  0\r\n 22 20  1  0  0  0\r\n 23 21  1  0  0  0\r\n 24 23  1  0  0  0\r\n 15 18  2  0  0  0\r\n 11  9  2  0  0  0\r\n 22 24  1  0  0  0\r\nM  END\r\n>  <IDNUMBER>\r\nAAM 10376368                                                         \r\n\r\n>  <Weight>\r\n2.164500000000000e+002    \r\n\r\n$$$$\r\n','a2_cdl.mol',4,NULL,278),(3,'\r\nCDL SDfile Writer. v.200000\r\n\r\n 25 27  0  0  0  0  0  0  0  0999 V2000\r\n    0.2250   -1.2792    0.0000 C   0  0  0  0  0  0\r\n   -0.2625   -0.6125    0.0000 N   0  0  3  0  0  0\r\n   -0.1208   -2.0292    0.0000 C   0  0  0  0  0  0\r\n   -0.0083    0.1708    0.0000 C   0  0  1  0  0  0\r\n    0.7792    0.4250    0.0000 C   0  0  0  0  0  0\r\n    1.0417   -1.1917    0.0000 O   0  0  0  0  0  0\r\n    0.3667   -2.6917    0.0000 C   0  0  0  0  0  0\r\n   -0.6750    0.6583    0.0000 C   0  0  0  0  0  0\r\n   -1.3375    0.1708    0.0000 C   0  0  0  0  0  0\r\n    0.9542    1.2333    0.0000 O   0  0  0  0  0  0\r\n   -1.0875   -0.6125    0.0000 C   0  0  0  0  0  0\r\n    1.3917   -0.1292    0.0000 N   0  0  0  0  0  0\r\n    1.1917   -2.6042    0.0000 F   0  0  0  0  0  0\r\n   -0.9458   -2.1167    0.0000 C   0  0  0  0  0  0\r\n    2.1792    0.1250    0.0000 C   0  0  0  0  0  0\r\n    3.5792   -0.1667    0.0000 C   0  0  0  0  0  0\r\n    0.0417   -3.4542    0.0000 C   0  0  0  0  0  0\r\n    2.7917   -0.4292    0.0000 C   0  0  0  0  0  0\r\n    4.2000   -0.7250    0.0000 C   0  0  0  0  0  0\r\n    3.7542    0.6375    0.0000 C   0  0  0  0  0  0\r\n   -1.2833   -2.8792    0.0000 C   0  0  0  0  0  0\r\n   -0.7833   -3.5542    0.0000 C   0  0  0  0  0  0\r\n    4.5417    0.8958    0.0000 C   0  0  0  0  0  0\r\n    4.9792   -0.4667    0.0000 C   0  0  0  0  0  0\r\n    5.1542    0.3375    0.0000 C   0  0  0  0  0  0\r\n  2  1  1  0  0  0\r\n  3  1  1  0  0  0\r\n  4  2  1  0  0  0\r\n  4  5  1  0  0  0\r\n  6  1  2  0  0  0\r\n  7  3  1  0  0  0\r\n  8  4  1  0  0  0\r\n  9 11  1  0  0  0\r\n 10  5  2  0  0  0\r\n 11  2  1  0  0  0\r\n 12  5  1  0  0  0\r\n 13  7  1  0  0  0\r\n 14  3  2  0  0  0\r\n 15 12  1  0  0  0\r\n 16 18  1  0  0  0\r\n 17  7  2  0  0  0\r\n 18 15  1  0  0  0\r\n 19 16  2  0  0  0\r\n 20 16  1  0  0  0\r\n 21 14  1  0  0  0\r\n 22 21  2  0  0  0\r\n 23 20  2  0  0  0\r\n 24 19  1  0  0  0\r\n 25 23  1  0  0  0\r\n  9  8  2  0  0  0\r\n 17 22  1  0  0  0\r\n 25 24  2  0  0  0\r\nM  END\r\n>  <IDNUMBER>\r\nAAM 10376530\r\n\r\n>  <Weight>\r\n3.850000000000000e+001\r\n\r\n$$$$\r\n','a3_cdl.mol',NULL,NULL,279),(4,'[NO NAME]\r\n  CHEMW2  0808111104062D                              \r\nCreated with ChemWriter - http://chemwriter.com\r\n 29 32  0  0  0  0            999 V2000\r\n   -0.8484   -0.6703    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -0.8484   -2.3203    0.0000 S   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -0.1340   -1.0828    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -1.5629   -1.0828    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -1.5629   -1.9078    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -0.1340   -1.9078    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    0.5805   -0.6703    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -2.2774   -0.6703    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -2.2774   -2.3203    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    0.5805   -2.3203    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -2.9918   -1.9078    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    1.2950   -1.9078    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -0.8484    0.1547    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -0.1340    0.5672    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -0.1340    1.3922    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    0.5805    1.8047    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n    2.0094    2.6297    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n    2.0094    1.8047    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    0.5805    2.6297    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    1.2950    3.0422    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    1.2950    1.3922    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    2.7239    3.0422    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    3.4384    2.6297    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    4.1529    3.0422    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -2.9918   -1.0828    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    1.2950   -1.0828    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    2.7239   -1.0828    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    2.0094   -0.6703    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    2.0094    0.1547    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n  3  1  1  0  0  0  0\r\n  4  1  1  0  0  0  0\r\n 13  1  1  0  0  0  0\r\n  5  2  1  0  0  0  0\r\n  6  2  1  0  0  0  0\r\n  6  3  1  0  0  0  0\r\n  7  3  2  0  0  0  0\r\n  5  4  2  0  0  0  0\r\n  8  4  1  0  0  0  0\r\n  9  5  1  0  0  0  0\r\n 10  6  2  0  0  0  0\r\n 26  7  1  0  0  0  0\r\n 25  8  2  0  0  0  0\r\n 11  9  2  0  0  0  0\r\n 12 10  1  0  0  0  0\r\n 12 26  2  0  0  0  0\r\n 25 11  1  0  0  0  0\r\n 14 13  1  0  0  0  0\r\n 15 14  1  0  0  0  0\r\n 16 15  1  0  0  0  0\r\n 19 16  1  0  0  0  0\r\n 21 16  1  0  0  0  0\r\n 18 17  1  0  0  0  0\r\n 20 17  1  0  0  0  0\r\n 22 17  1  0  0  0  0\r\n 21 18  1  0  0  0  0\r\n 20 19  1  0  0  0  0\r\n 23 22  1  0  0  0  0\r\n 24 23  1  0  0  0  0\r\n 26 28  1  0  0  0  0\r\n 28 27  1  0  0  0  0\r\n 28 29  2  0  0  0  0\r\nM  END\r\n>  <IDNUMBER>\r\nAAM 10376530\r\n\r\n>  <Weight>\r\n3.850000000000000e+001\r\n\r\n$$$$','acetophenazine.mol',NULL,NULL,280),(5,'[NO NAME]\r\n  CHEMW2  0808111103402D                              \r\nCreated with ChemWriter - http://chemwriter.com\r\n101106  0  0  1  0            999 V2000\r\n    6.3393   -3.7840    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    5.6380   -5.0627    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    6.3393   -5.4753    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    7.0818   -5.0627    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    7.0818   -4.1965    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -2.0758   -3.7840    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -2.0758   -2.9590    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -2.7770   -2.5465    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -3.5196   -2.9590    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -3.5196   -3.7840    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -2.7770   -4.1965    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -1.3745   -4.1965    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -0.6321   -3.7840    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -0.6321   -2.9590    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -1.3745   -2.5465    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -0.0546   -2.5465    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    0.6880   -2.9590    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    2.0905   -2.9590    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n    1.3892   -2.5465    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    1.3892   -1.7215    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    2.7918   -2.5465    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    3.5342   -2.9590    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    4.2355   -2.5465    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n    4.9368   -2.9590    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    5.6793   -2.5465    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    6.3805   -2.9590    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n    7.0405   -2.5465    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    7.7830   -2.9590    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    8.4843   -2.5465    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n    9.1855   -2.9590    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    9.9281   -2.5465    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    2.7918   -1.7215    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    3.5342   -3.7840    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    4.9368   -3.7840    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    7.0405   -1.7215    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    5.6793   -1.7215    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    7.7830   -3.7840    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    8.4843   -1.7215    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    9.9281   -1.7215    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   10.6293   -2.9590    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   12.7744   -2.5465    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   11.3306   -2.5465    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   12.0318   -2.9590    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   12.7744   -1.7215    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   12.0318   -1.3090    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   11.3306   -1.7215    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   12.0318   -0.4840    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   12.0318   -3.7840    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   13.5169   -2.9590    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   14.2182   -2.5465    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   14.9195   -2.9590    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   15.6619   -2.5465    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   16.3632   -2.9590    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   13.5582   -3.7840    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   14.2182   -1.7215    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    9.1855   -3.7840    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   16.3632   -3.7840    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    0.6880   -3.7840    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n    1.3892   -4.1965    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    2.0905   -3.7840    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    1.3892   -5.0215    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   17.7657   -2.9590    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   18.1782   -1.6802    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   17.3532   -1.6802    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   17.1057   -2.4640    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   18.4257   -2.4640    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   17.7657   -3.7428    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   17.0590   -4.1712    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    3.4930   -1.3090    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    4.2355   -1.6802    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    4.9368   -1.2264    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    4.9369   -0.4427    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    4.1945   -0.0302    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    3.4932   -0.4840    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    5.6382    0.0110    0.0000 Cl  0  0  0  0  0  0  0  0  0  0  0  0\r\n    5.6380   -4.1965    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    7.7418   -1.3090    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    9.8868   -4.1965    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   10.6293   -3.7840    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    9.8503   -5.0251    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   10.6009   -5.4466    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   11.3137   -5.0546    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   11.3385   -4.2055    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   12.0196   -5.4818    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   14.2923   -4.1603    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   14.9853   -3.7126    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   14.2923   -4.9853    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   18.4846   -4.1476    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   19.9135   -4.1476    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   20.6280   -3.7351    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   19.1991   -3.7351    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   19.1991   -2.9101    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   19.9135   -4.9726    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   15.6720   -1.7216    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   16.3865   -1.3091    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   16.3865   -0.4841    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   17.1010   -0.0716    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   17.1010    0.7534    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   17.8154    1.1659    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   17.8154    1.9909    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   18.5299    0.7534    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n  2  3  2  0  0  0  0\r\n  3  4  1  0  0  0  0\r\n  4  5  2  0  0  0  0\r\n  1  5  1  0  0  0  0\r\n  6  7  2  0  0  0  0\r\n  7  8  1  0  0  0  0\r\n  8  9  2  0  0  0  0\r\n  9 10  1  0  0  0  0\r\n 10 11  2  0  0  0  0\r\n  6 11  1  0  0  0  0\r\n  6 12  1  0  0  0  0\r\n 12 13  2  0  0  0  0\r\n 13 14  1  0  0  0  0\r\n 14 15  2  0  0  0  0\r\n  7 15  1  0  0  0  0\r\n 14 16  1  0  0  0  0\r\n 16 17  1  0  0  0  0\r\n 18 19  1  0  0  0  0\r\n 17 19  1  0  0  0  0\r\n 19 20  2  0  0  0  0\r\n 18 21  1  0  0  0  0\r\n 21 22  1  0  0  0  0\r\n 22 23  1  0  0  0  0\r\n 23 24  1  0  0  0  0\r\n 24 25  1  0  0  0  0\r\n 25 26  1  0  0  0  0\r\n 26 27  1  0  0  0  0\r\n 27 28  1  0  0  0  0\r\n 28 29  1  0  0  0  0\r\n 29 30  1  0  0  0  0\r\n 30 31  1  0  0  0  0\r\n 21 32  1  6  0  0  0\r\n 22 33  2  0  0  0  0\r\n 24 34  1  1  0  0  0\r\n 27 35  1  1  0  0  0\r\n 25 36  2  0  0  0  0\r\n 28 37  2  0  0  0  0\r\n 29 38  1  0  0  0  0\r\n 31 39  2  0  0  0  0\r\n 31 40  1  0  0  0  0\r\n 42 43  1  0  0  0  0\r\n 43 41  1  0  0  0  0\r\n 44 45  1  0  0  0  0\r\n 45 46  1  0  0  0  0\r\n 45 47  2  0  0  0  0\r\n 43 48  2  0  0  0  0\r\n 42 46  1  6  0  0  0\r\n 40 42  1  0  0  0  0\r\n 49 50  1  0  0  0  0\r\n 50 51  1  0  0  0  0\r\n 51 52  1  0  0  0  0\r\n 52 53  1  0  0  0  0\r\n 41 49  1  0  0  0  0\r\n 49 54  1  6  0  0  0\r\n 50 55  2  0  0  0  0\r\n 30 56  1  6  0  0  0\r\n 53 57  2  0  0  0  0\r\n 58 59  1  0  0  0  0\r\n 59 60  1  0  0  0  0\r\n 59 61  2  0  0  0  0\r\n 17 58  1  6  0  0  0\r\n 63 64  1  0  0  0  0\r\n 64 65  1  0  0  0  0\r\n 65 62  1  0  0  0  0\r\n 62 66  1  0  0  0  0\r\n 63 66  1  0  0  0  0\r\n 53 65  1  0  0  0  0\r\n 67 68  2  0  0  0  0\r\n 62 67  1  1  0  0  0\r\n 69 32  1  0  0  0  0\r\n 70 71  2  0  0  0  0\r\n 71 72  1  0  0  0  0\r\n 72 73  2  0  0  0  0\r\n 73 74  1  0  0  0  0\r\n 74 69  2  0  0  0  0\r\n 72 75  1  0  0  0  0\r\n 69 70  1  0  0  0  0\r\n 34 76  1  0  0  0  0\r\n  2 76  1  0  0  0  0\r\n 76  1  2  0  0  0  0\r\n 35 77  1  0  0  0  0\r\n 56 78  1  0  0  0  0\r\n 80 81  2  0  0  0  0\r\n 81 82  1  0  0  0  0\r\n 82 83  2  0  0  0  0\r\n 83 79  1  0  0  0  0\r\n 78 80  1  0  0  0  0\r\n 78 79  2  0  0  0  0\r\n 82 84  1  0  0  0  0\r\n 54 85  1  0  0  0  0\r\n 85 86  1  0  0  0  0\r\n 85 87  1  0  0  0  0\r\n 67 88  1  0  0  0  0\r\n 89 90  1  0  0  0  0\r\n 89 91  1  0  0  0  0\r\n 91 88  1  6  0  0  0\r\n 91 92  1  0  0  0  0\r\n 93 89  2  0  0  0  0\r\n 52 94  1  1  0  0  0\r\n 94 95  1  0  0  0  0\r\n 95 96  1  0  0  0  0\r\n 96 97  1  0  0  0  0\r\n 97 98  1  0  0  0  0\r\n 98 99  1  0  0  0  0\r\n 99100  1  0  0  0  0\r\n 99101  1  0  0  0  0\r\nM  END\r\n>  <IDNUMBER>\r\nAAM 10376530\r\n\r\n>  <Weight>\r\n3.850000000000000e+001\r\n\r\n$$$$','abarelix.mol',3,NULL,281),(6,'[NO NAME]\r\n  CHEMW2  0808111104272D                              \r\nCreated with ChemWriter - http://chemwriter.com\r\n 81 84  0  0  1  0            999 V2000\r\n    9.2394  -11.6848    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n    8.9056  -12.4402    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    8.7615  -11.0173    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   10.0475  -11.6673    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    8.1291  -12.7214    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    9.4538  -12.9813    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    9.2920  -10.3849    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    7.9429  -11.0137    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   10.2337  -12.5598    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    7.1348  -12.2365    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n    7.9885  -13.5259    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    8.8213   -9.7172    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   10.1072  -10.3849    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   10.9926  -12.8830    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    6.3618  -12.5140    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    9.3483   -9.0848    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   10.5218   -9.6716    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   10.5218  -11.0945    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    5.9085  -11.8254    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    5.9964  -13.3010    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    8.8774   -8.4208    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   10.1634   -9.1200    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    6.4672  -10.6132    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n    5.4307  -12.4859    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    5.1672  -13.2940    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    6.4356  -13.9371    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    9.4045   -7.7918    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   10.0511   -8.4102    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n    5.8839   -9.6751    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    4.7245  -12.6018    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    4.7983  -14.0249    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    9.1234   -7.0224    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   10.7573   -7.9921    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    6.3267   -9.0075    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    5.1777   -9.4291    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    5.0933  -11.8711    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    8.3083   -6.8818    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    9.6505   -6.3934    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   10.7678   -7.1559    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    5.8488   -8.3012    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n    6.9205   -9.0075    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    4.4890   -9.8859    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    5.0899   -8.7510    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    4.3801  -12.2786    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    5.0933  -11.0453    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    7.5775   -7.3948    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n    8.0272   -6.1124    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    6.1053   -7.5108    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    5.0266   -8.2978    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    3.6668  -11.8675    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    4.3801  -10.6308    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    6.7764   -7.0399    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    5.4342   -7.0329    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    4.7737   -7.5108    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    3.6668  -11.0453    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    5.4307   -6.2143    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    3.9972   -7.2578    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    2.9536  -10.6308    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    8.9021  -13.2590    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\r\n    9.6926  -11.0911    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\r\n   10.9329  -10.3849    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\r\n    6.7694  -13.2202    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\r\n    5.3710  -10.3849    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\r\n    4.4258   -9.2711    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\r\n    6.6815   -8.0940    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\r\n   11.4222   -8.3892    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   12.3386   -7.9891    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   13.1517   -8.4666    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   14.0035   -8.0279    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   15.0102   -8.5570    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   15.9395   -8.1053    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   16.8687   -8.5957    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   16.8687   -9.5637    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   16.0556   -9.8864    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   15.2038   -9.4863    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   14.2358   -9.8477    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   13.3065   -9.5637    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   12.6612  -10.0800    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   12.6612  -11.0093    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   13.3065  -11.4609    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   14.1196  -11.0480    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n  1  2  1  0  0  0  0\r\n  1  3  1  0  0  0  0\r\n  1  4  1  0  0  0  0\r\n  2  5  1  0  0  0  0\r\n  2  6  1  0  0  0  0\r\n  3  7  1  0  0  0  0\r\n  3  8  2  0  0  0  0\r\n  4  9  1  0  0  0  0\r\n  5 10  1  0  0  0  0\r\n  5 11  2  0  0  0  0\r\n  7 12  1  0  0  0  0\r\n  7 13  1  0  0  0  0\r\n  9 14  1  6  0  0  0\r\n 10 15  1  0  0  0  0\r\n 12 16  1  0  0  0  0\r\n 13 17  1  0  0  0  0\r\n 13 18  1  1  0  0  0\r\n 15 19  1  0  0  0  0\r\n 15 20  1  0  0  0  0\r\n 16 21  1  0  0  0  0\r\n 16 22  2  0  0  0  0\r\n 19 23  1  0  0  0  0\r\n 19 24  2  0  0  0  0\r\n 20 25  1  0  0  0  0\r\n 20 26  1  6  0  0  0\r\n 21 27  1  6  0  0  0\r\n 21 28  1  1  0  0  0\r\n 23 29  1  0  0  0  0\r\n 25 30  1  0  0  0  0\r\n 25 31  1  1  0  0  0\r\n 27 32  1  0  0  0  0\r\n 28 33  1  0  0  0  0\r\n 29 34  1  0  0  0  0\r\n 29 35  1  0  0  0  0\r\n 30 36  1  0  0  0  0\r\n 32 37  1  0  0  0  0\r\n 32 38  1  6  0  0  0\r\n 33 39  2  0  0  0  0\r\n 34 40  1  0  0  0  0\r\n 34 41  2  0  0  0  0\r\n 35 42  1  0  0  0  0\r\n 35 43  1  1  0  0  0\r\n 36 44  2  0  0  0  0\r\n 36 45  1  0  0  0  0\r\n 37 46  1  0  0  0  0\r\n 37 47  1  6  0  0  0\r\n 40 48  1  0  0  0  0\r\n 40 49  1  0  0  0  0\r\n 44 50  1  0  0  0  0\r\n 45 51  2  0  0  0  0\r\n 46 52  1  0  0  0  0\r\n 48 53  1  0  0  0  0\r\n 49 54  1  0  0  0  0\r\n 50 55  2  0  0  0  0\r\n 53 56  1  6  0  0  0\r\n 54 57  1  6  0  0  0\r\n 55 58  1  0  0  0  0\r\n  6  9  1  0  0  0  0\r\n 48 52  1  0  0  0  0\r\n 51 55  1  0  0  0  0\r\n 53 54  1  0  0  0  0\r\n  2 59  1  6  0  0  0\r\n  7 60  1  6  0  0  0\r\n 13 61  1  6  0  0  0\r\n 15 62  1  6  0  0  0\r\n 29 63  1  6  0  0  0\r\n 35 64  1  6  0  0  0\r\n 48 65  1  6  0  0  0\r\n 66 33  1  0  0  0  0\r\n 67 66  1  0  0  0  0\r\n 68 67  1  0  0  0  0\r\n 69 68  1  0  0  0  0\r\n 70 69  1  0  0  0  0\r\n 71 70  1  0  0  0  0\r\n 72 71  1  0  0  0  0\r\n 73 72  1  0  0  0  0\r\n 74 73  1  0  0  0  0\r\n 75 74  1  0  0  0  0\r\n 76 75  1  0  0  0  0\r\n 77 76  1  0  0  0  0\r\n 78 77  1  0  0  0  0\r\n 79 78  1  0  0  0  0\r\n 80 79  1  0  0  0  0\r\n 81 80  1  0  0  0  0\r\nM  END\r\n>  <IDNUMBER>\r\nAAM 10376530\r\n\r\n>  <Weight>\r\n3.850000000000000e+001\r\n\r\n$$$$\r\n','aculeacin-a.mol',5,NULL,277),(7,'[NO NAME]\r\n  CHEMW2  0808111104532D                              \r\nCreated with ChemWriter - http://chemwriter.com\r\n 76 79  0  0  1  0            999 V2000\r\n   28.8617  -13.7158    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   29.1223  -14.4974    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   28.8617  -12.5422    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   28.0367  -13.7157    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   29.8170  -14.9316    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   28.4709  -15.0184    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   29.5565  -12.1080    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   28.1236  -12.1080    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   27.7762  -14.5408    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   30.5117  -14.4974    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   29.8170  -15.7132    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   29.5565  -11.2830    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   30.2512  -12.5422    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   31.2500  -14.9316    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   30.2512  -10.8922    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   30.9894  -12.1080    0.0000 S   0  0  0  0  0  0  0  0  0  0  0  0\r\n   31.2500  -15.9309    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   31.9446  -14.4974    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   30.2512  -10.0672    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   30.9894  -11.2830    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   31.6841  -12.5422    0.0000 S   0  0  0  0  0  0  0  0  0  0  0  0\r\n   31.9446  -16.3652    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   30.5117  -16.3652    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   32.6394  -14.9316    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   29.5565   -9.6330    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   30.9894   -9.6330    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   32.3789  -12.1080    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   32.6394  -15.9309    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   33.3775  -14.4974    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   29.5565   -8.5465    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   31.6841  -10.0672    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   33.1170  -12.5422    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   34.0723  -14.9316    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   30.8157   -7.8511    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   28.8617   -8.1123    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   32.3789   -9.6330    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   31.6841  -10.8922    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   33.8118  -12.1080    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   33.1170  -13.3238    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   31.9446   -8.5465    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   30.8157   -6.8089    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   34.5065  -12.5422    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   33.8118  -11.2830    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   33.1170   -7.8511    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   30.1209   -6.3748    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   35.2446  -12.1080    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   34.5500   -8.5465    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   33.1170   -7.0261    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   29.3828   -6.7656    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   35.9394  -12.5422    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   35.2446  -11.2830    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   35.3315   -7.8945    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   34.5500  -10.6308    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   28.6880   -6.3748    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   29.3828   -7.5906    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   36.6342  -12.1080    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   35.9394  -10.8922    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   36.0697   -8.2853    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   37.3289  -12.4988    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   36.6342  -11.2830    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   36.0697   -9.1103    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   36.7644   -7.8511    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   38.0670  -12.1080    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   37.3289  -10.8922    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   36.7644   -9.5011    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   37.4592   -8.2853    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   38.0670  -11.2830    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   37.4592   -9.1103    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   38.7618  -10.8922    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   34.8105  -14.4539    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   35.5920  -14.9316    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   34.8105  -13.6289    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   33.4209  -16.4086    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   34.1591  -15.9744    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   33.4209  -17.2770    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   29.8266  -14.0881    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\r\n  2  1  1  0  0  0  0\r\n  1  3  1  0  0  0  0\r\n  1  4  1  0  0  0  0\r\n  2  5  1  0  0  0  0\r\n  2  6  1  0  0  0  0\r\n  3  7  1  0  0  0  0\r\n  3  8  2  0  0  0  0\r\n  4  9  1  0  0  0  0\r\n  5 10  1  0  0  0  0\r\n  5 11  2  0  0  0  0\r\n  7 12  1  0  0  0  0\r\n  7 13  1  0  0  0  0\r\n 14 10  1  1  0  0  0\r\n 12 15  1  0  0  0  0\r\n 13 16  1  0  0  0  0\r\n 14 17  1  0  0  0  0\r\n 14 18  1  0  0  0  0\r\n 15 19  1  0  0  0  0\r\n 15 20  2  0  0  0  0\r\n 16 21  1  0  0  0  0\r\n 17 22  1  0  0  0  0\r\n 17 23  2  0  0  0  0\r\n 18 24  1  0  0  0  0\r\n 19 25  1  1  0  0  0\r\n 19 26  1  0  0  0  0\r\n 21 27  1  0  0  0  0\r\n 22 28  1  0  0  0  0\r\n 24 29  1  0  0  0  0\r\n 25 30  1  0  0  0  0\r\n 26 31  1  0  0  0  0\r\n 27 32  1  0  0  0  0\r\n 29 33  1  0  0  0  0\r\n 30 34  1  0  0  0  0\r\n 30 35  2  0  0  0  0\r\n 31 36  1  0  0  0  0\r\n 31 37  2  0  0  0  0\r\n 32 38  1  0  0  0  0\r\n 32 39  1  1  0  0  0\r\n 34 40  1  6  0  0  0\r\n 34 41  1  0  0  0  0\r\n 38 42  1  0  0  0  0\r\n 38 43  2  0  0  0  0\r\n 40 44  1  0  0  0  0\r\n 41 45  1  0  0  0  0\r\n 46 42  1  6  0  0  0\r\n 44 47  1  0  0  0  0\r\n 44 48  2  0  0  0  0\r\n 45 49  1  0  0  0  0\r\n 46 50  1  0  0  0  0\r\n 46 51  1  0  0  0  0\r\n 47 52  1  0  0  0  0\r\n 47 53  1  6  0  0  0\r\n 49 54  1  0  0  0  0\r\n 49 55  2  0  0  0  0\r\n 50 56  1  0  0  0  0\r\n 51 57  2  0  0  0  0\r\n 52 58  1  0  0  0  0\r\n 56 59  2  0  0  0  0\r\n 56 60  1  0  0  0  0\r\n 58 61  2  0  0  0  0\r\n 58 62  1  0  0  0  0\r\n 59 63  1  0  0  0  0\r\n 60 64  2  0  0  0  0\r\n 61 65  1  0  0  0  0\r\n 62 66  2  0  0  0  0\r\n 63 67  2  0  0  0  0\r\n 65 68  2  0  0  0  0\r\n 67 69  1  0  0  0  0\r\n  6  9  1  0  0  0  0\r\n 51 53  1  0  0  0  0\r\n 64 67  1  0  0  0  0\r\n 66 68  1  0  0  0  0\r\n 33 70  1  0  0  0  0\r\n 70 71  1  0  0  0  0\r\n 70 72  2  0  0  0  0\r\n 28 73  1  0  0  0  0\r\n 73 74  1  0  0  0  0\r\n 73 75  2  0  0  0  0\r\n  2 76  1  1  0  0  0\r\nM  END\r\n>  <IDNUMBER>\r\nAAM 10376530\r\n\r\n>  <Weight>\r\n3.850000000000000e+001\r\n\r\n$$$$\r\n','argipressin.mol',5,NULL,278),(8,'[NO NAME]\r\n  CHEMW2  0808111105072D                              \r\nCreated with ChemWriter - http://chemwriter.com\r\n 34 37  0  0  1  0            999 V2000\r\n    0.0000    0.8250    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    0.7145    0.4125    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    0.7145   -0.4125    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    0.0000   -0.8250    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -0.7145   -0.4125    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -0.7145    0.4125    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    2.1434   -2.0625    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    2.1434   -2.8875    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    2.9684   -2.8875    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n    2.9684   -2.0625    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    3.7530   -3.1424    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    4.2380   -2.4750    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    3.7530   -1.8076    0.0000 S   0  0  0  0  0  0  0  0  0  0  0  0\r\n    4.9567   -2.8800    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    4.9567   -2.0700    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    4.0080   -3.9271    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    4.8149   -4.0986    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    3.4559   -4.5402    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    1.4289   -1.6500    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n    0.7145   -2.0625    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    0.7145   -2.8875    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    0.0000   -1.6500    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -0.7145   -2.0625    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -1.4289   -1.6500    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -1.4289   -0.8250    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    1.5600   -3.4709    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    2.9684   -1.2375    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\r\n    0.7145   -1.2375    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -3.4130   -2.4749    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -2.9280   -1.8075    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -2.1434   -2.0625    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -2.1434   -2.8875    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -2.9281   -3.1424    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -3.1829   -1.0229    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n  1  2  2  0  0  0  0\r\n 22  4  1  0  0  0  0\r\n  4  5  1  0  0  0  0\r\n  6  1  1  0  0  0  0\r\n  5  6  2  0  0  0  0\r\n  4  3  2  0  0  0  0\r\n  2  3  1  0  0  0  0\r\n  7  8  1  0  0  0  0\r\n  8  9  1  0  0  0  0\r\n 10  9  1  0  0  0  0\r\n 10  7  1  0  0  0  0\r\n  9 11  1  0  0  0  0\r\n 11 12  1  0  0  0  0\r\n 12 13  1  0  0  0  0\r\n 10 13  1  0  0  0  0\r\n 12 14  1  0  0  0  0\r\n 12 15  1  0  0  0  0\r\n 11 16  1  6  0  0  0\r\n 16 17  1  0  0  0  0\r\n 16 18  2  0  0  0  0\r\n  7 19  1  1  0  0  0\r\n 19 20  1  0  0  0  0\r\n 20 21  2  0  0  0  0\r\n 22 20  1  0  0  0  0\r\n 23 24  1  0  0  0  0\r\n 24 31  1  0  0  0  0\r\n 22 23  1  0  0  0  0\r\n 24 25  2  0  0  0  0\r\n  8 26  2  0  0  0  0\r\n 10 27  1  6  0  0  0\r\n 22 28  1  1  0  0  0\r\n 29 30  1  0  0  0  0\r\n 30 31  1  0  0  0  0\r\n 31 32  1  0  0  0  0\r\n 32 33  1  0  0  0  0\r\n 29 33  1  0  0  0  0\r\n 30 34  2  0  0  0  0\r\nM  END\r\n>  <IDNUMBER>\r\nAAM 10376530\r\n\r\n>  <Weight>\r\n3.850000000000000e+001\r\n\r\n$$$$\r\n','azlocillin.mol',NULL,NULL,279),(9,'[NO NAME]\r\n  CHEMW2  0808111105242D                              \r\nCreated with ChemWriter - http://chemwriter.com\r\n100103  0  0  1  0            999 V2000\r\n   -0.3317  -10.3342    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n    0.3785   -9.9216    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    1.0929  -10.3299    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    1.8032   -9.9174    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n    2.5177  -10.3257    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    3.2321   -9.9131    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    3.9423  -10.3214    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n    4.6568   -9.9089    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    5.3669  -10.3171    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    6.2090   -9.8749    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n    7.2934  -10.3767    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    7.9909   -9.8621    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    8.8670  -10.2788    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n    9.6580   -9.7388    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   10.4107  -10.1981    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   11.1592   -9.6963    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   12.0353  -10.2321    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   12.7455   -9.8195    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    0.3766   -9.0966    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    1.0922   -8.6825    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    1.0733   -7.5512    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    1.8224   -8.6809    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    1.0948  -11.1550    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    2.5195  -11.1507    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    3.2303   -9.0881    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    4.6549   -9.0839    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    5.3705   -8.6698    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    4.0353   -8.4731    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    5.3686   -7.8447    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    7.9508   -8.9392    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    9.6646   -9.0073    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   10.3802   -8.5932    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   10.3784   -7.7681    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    9.6609   -7.3572    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   13.4625  -10.2312    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   12.7444   -8.9945    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   14.1784   -9.8178    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   12.0413  -10.9083    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   11.3471  -11.5351    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   12.9544  -11.2427    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   10.4128  -10.9923    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   12.0422  -12.2465    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   12.0410  -13.0379    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   12.8047  -11.8326    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   13.5219  -12.2437    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   14.2334  -11.8298    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   13.5235  -13.0687    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   14.2364  -13.4799    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   14.9522  -13.0661    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   14.9506  -12.2410    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   12.6766  -13.4801    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   11.2471  -13.2861    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   12.6753  -14.1589    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   13.4832  -14.1601    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   12.2515  -14.5848    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   13.7895  -14.6922    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   11.9060  -15.4795    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   10.7888  -15.4981    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   11.7096  -14.0234    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   10.5233  -14.7453    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   10.2433  -16.0866    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   11.0772  -14.2887    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    9.1584  -14.9144    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    8.4537  -14.4524    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    9.1602  -15.7054    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    8.6190  -16.1237    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    8.6166  -16.9999    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n    7.8251  -15.6704    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    7.2825  -11.2443    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    8.0342  -11.5308    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    9.7457  -14.3716    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n    5.3691  -11.1411    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    8.0334  -12.3244    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    8.7394  -12.6179    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    8.7394  -13.5365    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n    7.4916  -14.4087    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   13.5464  -15.4060    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   14.2233  -15.8808    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   14.8831  -15.3827    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   14.5881  -14.7140    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   10.2023  -16.8748    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    9.7461  -17.3409    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   10.9110  -17.2934    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    1.8039  -11.5648    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    1.7989  -12.3882    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    2.5341  -12.8944    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    1.0331  -12.8985    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -0.9973  -10.0083    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -4.6100  -10.3469    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -3.8955   -9.9344    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -3.8974   -9.1094    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -3.1861   -8.6953    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -4.6148   -8.6985    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -4.6166   -7.8735    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -2.4708   -9.9302    0.0000 S   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -3.1849  -10.3379    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -2.9328  -11.2684    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -1.9768  -11.2694    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -1.7568  -10.3397    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -0.9791   -9.1835    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n  6 25  2  0  0  0  0\r\n 46 50  2  0  0  0  0\r\n 12 13  1  0  0  0  0\r\n 43 51  1  0  0  0  0\r\n  8 26  1  1  0  0  0\r\n 43 52  2  0  0  0  0\r\n  6  7  1  0  0  0  0\r\n 51 53  1  0  0  0  0\r\n 26 27  1  0  0  0  0\r\n 53 54  1  1  0  0  0\r\n 13 14  1  0  0  0  0\r\n 53 55  1  0  0  0  0\r\n 26 28  1  0  0  0  0\r\n 54 56  1  0  0  0  0\r\n  3  4  1  0  0  0  0\r\n 55 57  1  0  0  0  0\r\n 27 29  1  0  0  0  0\r\n 57 58  1  0  0  0  0\r\n  9 72  2  0  0  0  0\r\n 55 59  2  0  0  0  0\r\n 14 15  1  0  0  0  0\r\n 58 60  1  0  0  0  0\r\n 12 30  2  0  0  0  0\r\n 58 61  1  6  0  0  0\r\n  7  8  1  0  0  0  0\r\n 60 62  2  0  0  0  0\r\n 60 71  1  0  0  0  0\r\n 14 31  1  6  0  0  0\r\n 71 63  1  0  0  0  0\r\n 15 16  1  0  0  0  0\r\n 31 32  1  0  0  0  0\r\n 63 65  1  1  0  0  0\r\n 65 66  1  0  0  0  0\r\n 32 33  1  0  0  0  0\r\n 66 67  1  0  0  0  0\r\n 16 17  1  0  0  0  0\r\n 66 68  2  0  0  0  0\r\n 33 34  1  0  0  0  0\r\n 11 69  1  6  0  0  0\r\n 15 41  2  0  0  0  0\r\n 69 70  1  0  0  0  0\r\n  8  9  1  0  0  0  0\r\n 18 35  1  0  0  0  0\r\n 17 18  1  1  0  0  0\r\n 70 73  1  0  0  0  0\r\n 18 36  1  0  0  0  0\r\n 73 74  1  0  0  0  0\r\n  4  5  1  0  0  0  0\r\n 74 75  1  0  0  0  0\r\n 75 64  1  0  0  0  0\r\n 35 37  1  0  0  0  0\r\n 64 76  2  0  0  0  0\r\n  2 19  1  1  0  0  0\r\n 17 38  1  0  0  0  0\r\n  9 10  1  0  0  0  0\r\n 38 39  1  0  0  0  0\r\n 56 77  1  0  0  0  0\r\n 77 78  2  0  0  0  0\r\n 78 79  1  0  0  0  0\r\n 79 80  1  0  0  0  0\r\n 80 56  2  0  0  0  0\r\n 19 20  1  0  0  0  0\r\n 61 81  1  0  0  0  0\r\n 38 40  2  0  0  0  0\r\n 81 82  2  0  0  0  0\r\n  2  3  1  0  0  0  0\r\n 81 83  1  0  0  0  0\r\n 20 21  1  0  0  0  0\r\n 24 84  1  0  0  0  0\r\n 39 42  1  0  0  0  0\r\n 84 85  1  0  0  0  0\r\n 10 11  1  0  0  0  0\r\n 85 86  2  0  0  0  0\r\n 42 43  1  0  0  0  0\r\n 85 87  1  0  0  0  0\r\n 64 63  1  0  0  0  0\r\n 20 22  1  0  0  0  0\r\n  1 88  1  0  0  0  0\r\n 42 44  1  6  0  0  0\r\n  5  6  1  0  0  0  0\r\n 89 90  1  0  0  0  0\r\n 90 96  1  0  0  0  0\r\n 44 45  1  0  0  0  0\r\n 90 91  1  1  0  0  0\r\n  3 23  2  0  0  0  0\r\n 91 92  1  0  0  0  0\r\n 45 46  1  0  0  0  0\r\n 91 93  1  0  0  0  0\r\n 11 12  1  0  0  0  0\r\n 93 94  1  0  0  0  0\r\n 45 47  2  0  0  0  0\r\n  5 24  1  1  0  0  0\r\n 47 48  1  0  0  0  0\r\n  1  2  1  0  0  0  0\r\n 48 49  2  0  0  0  0\r\n 95 96  1  0  0  0  0\r\n 96 97  2  0  0  0  0\r\n 97 98  1  0  0  0  0\r\n 98 99  1  0  0  0  0\r\n 99 95  1  0  0  0  0\r\n 99 88  1  0  0  0  0\r\n 49 50  1  0  0  0  0\r\n 88100  2  0  0  0  0\r\nM  END\r\n>  <IDNUMBER>\r\nAAM 10376530\r\n\r\n>  <Weight>\r\n3.850000000000000e+001\r\n\r\n$$$$\r\n','bacitracin-a.mol',NULL,NULL,280),(10,'[NO NAME]\r\n  CHEMW2  0808111105442D                              \r\nCreated with ChemWriter - http://chemwriter.com\r\n 26 28  0  0  0  0            999 V2000\r\n   14.8496  -14.2540    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   14.8496  -12.9240    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   13.6978  -14.9190    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   16.0015  -14.9190    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   16.0015  -12.2590    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   13.6978  -12.2590    0.0000 S   0  0  0  0  0  0  0  0  0  0  0  0\r\n   12.5460  -14.2540    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   17.1533  -14.2540    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   17.1533  -12.9240    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   12.5460  -12.9240    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   13.0328  -11.1072    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   14.3628  -11.1072    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   11.3942  -14.9190    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   18.3051  -14.9190    0.0000 Cl  0  0  0  0  0  0  0  0  0  0  0  0\r\n   18.3051  -12.2590    0.0000 S   0  0  0  0  0  0  0  0  0  0  0  0\r\n   11.3942  -16.2490    0.0000 S   0  0  0  0  0  0  0  0  0  0  0  0\r\n   19.4569  -12.9240    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   17.6401  -11.1072    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   18.9701  -11.1072    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   10.2424  -16.9140    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   10.2424  -18.2440    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    9.0906  -18.9090    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   11.3942  -18.9090    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    9.0906  -20.2390    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   11.3942  -20.2390    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   10.2424  -20.9040    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n  1  2  2  0  0  0  0\r\n  1  3  1  0  0  0  0\r\n  1  4  1  0  0  0  0\r\n  2  5  1  0  0  0  0\r\n  2  6  1  0  0  0  0\r\n  3  7  2  0  0  0  0\r\n  4  8  2  0  0  0  0\r\n  5  9  2  0  0  0  0\r\n  6 10  1  0  0  0  0\r\n  6 11  2  0  0  0  0\r\n  6 12  2  0  0  0  0\r\n  7 13  1  0  0  0  0\r\n  8 14  1  0  0  0  0\r\n  9 15  1  0  0  0  0\r\n 13 16  1  0  0  0  0\r\n 15 17  1  0  0  0  0\r\n 15 18  2  0  0  0  0\r\n 15 19  2  0  0  0  0\r\n 16 20  1  0  0  0  0\r\n 20 21  1  0  0  0  0\r\n 21 22  1  0  0  0  0\r\n 21 23  2  0  0  0  0\r\n 22 24  2  0  0  0  0\r\n 23 25  1  0  0  0  0\r\n 24 26  1  0  0  0  0\r\n  7 10  1  0  0  0  0\r\n  8  9  1  0  0  0  0\r\n 25 26  2  0  0  0  0\r\nM  END\r\n>  <IDNUMBER>\r\nAAM 10376530\r\n\r\n>  <Weight>\r\n3.850000000000000e+001\r\n\r\n$$$$\r\n','benzthiazide.mol',3,NULL,281),(11,'[NO NAME]\r\n  CHEMW2  0808111106092D                              \r\nCreated with ChemWriter - http://chemwriter.com\r\n 25 27  0  0  0  0            999 V2000\r\n    3.9042   -7.9875    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    7.0417   -5.8542    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n    6.0542   -6.7500    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n    4.6292   -8.4042    0.0000 S   0  0  0  0  0  0  0  0  0  0  0  0\r\n    6.2292   -5.9417    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    3.9042   -7.1542    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    3.2000   -8.3917    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    7.3917   -6.5917    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    6.7750   -7.1542    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    5.3500   -7.1542    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    5.3500   -7.9917    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    8.9250   -9.2417    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    3.2000   -9.2167    0.0000 Cl  0  0  0  0  0  0  0  0  0  0  0  0\r\n    4.6292   -6.7375    0.0000 Cl  0  0  0  0  0  0  0  0  0  0  0  0\r\n    7.4917   -8.4167    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    9.6417   -9.6542    0.0000 Cl  0  0  0  0  0  0  0  0  0  0  0  0\r\n    6.0625   -8.4042    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    6.7792   -8.0042    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    8.9250   -8.4167    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    8.2167   -9.6500    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    8.2167   -8.0042    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    7.4917   -9.2417    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    2.4792   -7.1542    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    3.2000   -6.7500    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    2.4792   -7.9875    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n  2  5  2  0  0  0  0\r\n  3 10  1  0  0  0  0\r\n  4  1  1  0  0  0  0\r\n  5  3  1  0  0  0  0\r\n  6  1  1  0  0  0  0\r\n  7  1  2  0  0  0  0\r\n  8  9  2  0  0  0  0\r\n  9  3  1  0  0  0  0\r\n 10 11  1  0  0  0  0\r\n 11  4  1  0  0  0  0\r\n 12 20  1  0  0  0  0\r\n 13  7  1  0  0  0  0\r\n 14  6  1  0  0  0  0\r\n 15 18  1  0  0  0  0\r\n 16 12  1  0  0  0  0\r\n 17 11  1  0  0  0  0\r\n 18 17  1  0  0  0  0\r\n 19 21  1  0  0  0  0\r\n 20 22  2  0  0  0  0\r\n 21 15  2  0  0  0  0\r\n 22 15  1  0  0  0  0\r\n 23 25  2  0  0  0  0\r\n 24  6  2  0  0  0  0\r\n 25  7  1  0  0  0  0\r\n 24 23  1  0  0  0  0\r\n  8  2  1  0  0  0  0\r\n 19 12  2  0  0  0  0\r\nM  END\r\n>  <IDNUMBER>\r\nAAM 10376530\r\n\r\n>  <Weight>\r\n3.850000000000000e+001\r\n\r\n$$$$','butoconazole.mol',5,NULL,277),(12,'[NO NAME]\r\n  CHEMW2  0808111106292D                              \r\nCreated with ChemWriter - http://chemwriter.com\r\n 30 32  0  0  1  0            999 V2000\r\n    9.8452   -4.6688    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    9.8452   -5.4936    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   10.5596   -5.9059    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   11.2740   -5.4936    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   11.2740   -4.6688    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   10.5596   -4.2563    0.0000 S   0  0  0  0  0  0  0  0  0  0  0  0\r\n    9.0203   -4.6688    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    9.0203   -5.4936    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    8.3060   -4.2563    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n    7.5916   -4.6688    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    7.5916   -5.4936    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    8.3060   -5.9059    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    6.8772   -4.2563    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   11.9992   -5.9126    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   10.5596   -6.7307    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    9.8353   -7.1489    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   11.2639   -7.1374    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    6.1514   -4.6756    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    9.8452   -3.8430    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\r\n    5.4709   -4.1964    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    4.8020   -4.6957    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    5.0702   -5.4861    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    5.9048   -5.4753    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    6.8771   -3.4189    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   12.7237   -5.4946    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   13.4239   -5.8992    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   14.1290   -5.4923    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   13.4237   -6.7283    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    7.5935   -3.0053    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    7.5936   -2.1768    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n  1  2  1  0  0  0  0\r\n  2  3  1  0  0  0  0\r\n  3  4  2  0  0  0  0\r\n  4  5  1  0  0  0  0\r\n  5  6  1  0  0  0  0\r\n  1  6  1  0  0  0  0\r\n  1  7  1  0  0  0  0\r\n  7  8  1  0  0  0  0\r\n  2  8  1  0  0  0  0\r\n  7  9  1  1  0  0  0\r\n  9 10  1  0  0  0  0\r\n 10 11  2  0  0  0  0\r\n  8 12  2  0  0  0  0\r\n 10 13  1  0  0  0  0\r\n  4 14  1  0  0  0  0\r\n  3 15  1  0  0  0  0\r\n 15 16  2  0  0  0  0\r\n 15 17  1  0  0  0  0\r\n 13 18  1  0  0  0  0\r\n  1 19  1  6  0  0  0\r\n 18 20  1  0  0  0  0\r\n 20 21  1  0  0  0  0\r\n 21 22  2  0  0  0  0\r\n 22 23  1  0  0  0  0\r\n 18 23  2  0  0  0  0\r\n 13 24  2  0  0  0  0\r\n 14 25  1  0  0  0  0\r\n 25 26  1  0  0  0  0\r\n 26 27  1  0  0  0  0\r\n 26 28  2  0  0  0  0\r\n 24 29  1  0  0  0  0\r\n 29 30  1  0  0  0  0\r\nM  END\r\n>  <IDNUMBER>\r\nAAM 10376530\r\n\r\n>  <Weight>\r\n3.850000000000000e+001\r\n\r\n$$$$','cefuroxime.mol',5,NULL,278),(13,'[NO NAME]\r\n  CHEMW2  0808111106452D                              \r\nCreated with ChemWriter - http://chemwriter.com\r\n 32 35  0  0  1  0            999 V2000\r\n   -2.1733   -0.4151    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -2.8959   -0.8118    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -2.8959   -1.6509    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -2.1733   -2.0631    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -1.4736   -1.6509    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -0.7587   -2.0631    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -1.4736   -0.8118    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -0.7587    0.3930    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -0.0279    0.8130    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    0.6718    0.3930    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    0.6718   -0.4151    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    1.4565   -0.6719    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    1.9228   -0.0188    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    1.4565    0.6494    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    0.6718    1.2404    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -1.4736   -0.0033    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    0.6718   -1.2469    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\r\n    2.1796    1.0539    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -3.6291   -2.0818    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -0.7587   -0.4151    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -0.7587   -1.2405    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\r\n    0.7421    1.9093    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -0.0279   -0.8118    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -0.0279    0.0134    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -0.0279   -1.6509    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    2.8855    1.4968    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    3.5999    1.9093    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    4.3144    1.4968    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    4.3144    0.6718    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    2.1710    1.9093    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    1.4565    1.4968    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    5.0289    1.9093    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n 11 10  1  0  0  0  0\r\n 14 10  1  0  0  0  0\r\n  9 10  1  0  0  0  0\r\n 10 15  1  1  0  0  0\r\n 23 11  1  0  0  0  0\r\n 12 11  1  0  0  0  0\r\n 11 17  1  6  0  0  0\r\n  8 20  1  0  0  0  0\r\n  7 20  1  0  0  0  0\r\n 23 20  1  0  0  0  0\r\n 25 23  1  0  0  0  0\r\n  5  7  1  0  0  0  0\r\n  7 16  1  1  0  0  0\r\n  1  7  1  0  0  0  0\r\n 13 14  1  0  0  0  0\r\n 31 14  1  0  0  0  0\r\n 14 18  1  6  0  0  0\r\n  8  9  1  0  0  0  0\r\n 13 12  1  0  0  0  0\r\n  6 25  1  0  0  0  0\r\n  4  5  1  0  0  0  0\r\n  6  5  2  0  0  0  0\r\n  2  1  1  0  0  0  0\r\n  3  4  1  0  0  0  0\r\n  3  2  1  0  0  0  0\r\n  3 19  1  1  0  0  0\r\n 20 21  1  6  0  0  0\r\n 31 22  1  6  0  0  0\r\n 23 24  1  1  0  0  0\r\n 30 26  1  0  0  0  0\r\n 27 26  1  0  0  0  0\r\n 28 27  1  0  0  0  0\r\n 29 28  1  0  0  0  0\r\n 32 28  1  0  0  0  0\r\n 30 31  1  0  0  0  0\r\nM  END\r\n>  <IDNUMBER>\r\nAAM 10376530\r\n\r\n>  <Weight>\r\n3.850000000000000e+001\r\n\r\n$$$$\r\n','cholesterol.mol',NULL,NULL,279),(14,'[NO NAME]\r\n  CHEMW2  0808111107002D                              \r\nCreated with ChemWriter - http://chemwriter.com\r\n101113  0  0  1  0            999 V2000\r\n   12.3233   -8.8464    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   13.1015   -9.1204    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   13.8642   -8.9502    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   12.6243   -7.0782    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   14.2831   -8.2906    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   13.4985   -6.9965    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   14.1131   -7.5279    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   12.1456   -7.4398    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   11.1267   -9.5887    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   10.5774   -9.0329    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   11.9037   -9.5057    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   10.6694   -8.2569    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   12.0696   -8.1073    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   11.3335   -7.8449    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    9.6372  -10.5159    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   10.3739  -10.7768    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    9.3821   -9.7773    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   11.0372  -10.3638    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    9.8005   -9.1173    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    9.1252  -11.1061    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    8.3580  -10.9577    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    8.6149   -9.6289    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    8.1029  -10.2191    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    7.8459  -11.5478    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    7.0787  -11.3994    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    7.3358  -10.0708    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    6.8237  -10.6609    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    5.9181  -12.0851    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    5.3329  -11.5858    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    6.6592  -12.0587    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    5.4249  -10.8098    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    6.0889  -10.3979    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   12.0155   -6.4457    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   12.1302   -5.5754    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   13.9794   -6.2620    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   13.7053   -5.4280    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   12.8823   -5.1224    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   14.3814   -4.8680    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   14.2345   -4.0025    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   12.7354   -4.2569    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   13.4115   -3.6969    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   15.0325   -3.6366    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   13.0457   -2.8990    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   15.3380   -2.8136    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   13.3512   -2.0760    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   14.9721   -2.0156    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   14.1491   -1.7101    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   16.2120   -2.8957    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   16.7201   -2.1798    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   15.4802   -1.2998    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   16.3542   -1.3818    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   17.5722   -2.3911    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   18.2687   -1.8568    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   16.7500   -0.5983    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   17.6094   -0.4190    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   18.2853   -0.9792    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   19.0205   -2.3100    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   19.7889   -1.8854    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   19.0536   -0.5547    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   19.8054   -1.0078    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   19.7573   -0.2279    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   20.5620   -1.2031    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   20.4843    0.0589    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   20.9817   -0.5438    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    5.6609  -12.8230    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    4.8933  -12.9693    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    4.6362  -13.7071    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    3.8685  -13.8534    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    3.6114  -14.5913    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    5.0488  -14.2260    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    6.3987  -12.7117    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\r\n    7.4799  -12.2171    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\r\n    8.6707  -11.7304    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\r\n   10.0455  -11.3429    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\r\n   11.8175  -10.3436    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\r\n   12.6942   -9.6574    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\r\n   14.4380   -6.9122    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\r\n   14.5185   -5.6055    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\r\n   15.0769   -4.3379    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\r\n   15.8383   -3.6666    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\r\n   17.0462   -3.1114    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\r\n   12.7463   -1.4557    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    8.1466  -12.3056    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   19.1593   -3.1576    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   17.8150    0.4030    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    6.4888   -9.8771    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\r\n    7.8161   -9.3977    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\r\n    9.1306   -8.7162    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\r\n    9.8810   -8.4788    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\r\n   11.5199   -7.3421    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\r\n   11.8330   -6.9326    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\r\n   12.4476   -3.3555    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\r\n   14.7220   -1.0796    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\r\n   15.8592   -0.5941    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\r\n   18.3863   -0.1274    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\r\n   16.1976    0.1608    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   20.4285   -2.2005    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   21.6456   -0.3815    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   11.3434   -5.0523    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   12.0743   -4.7760    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   18.2417   -2.7423    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\r\n  2  1  1  0  0  0  0\r\n  3  2  1  0  0  0  0\r\n  5  3  2  0  0  0  0\r\n  7  5  1  0  0  0  0\r\n  7  6  1  0  0  0  0\r\n  4  8  1  0  0  0  0\r\n 11  9  1  0  0  0  0\r\n 12 10  1  0  0  0  0\r\n  1 11  1  0  0  0  0\r\n 14 12  2  0  0  0  0\r\n 13  1  1  0  0  0  0\r\n 14 13  1  0  0  0  0\r\n 16 15  1  0  0  0  0\r\n 18 16  2  0  0  0  0\r\n 19 17  1  0  0  0  0\r\n  9 18  1  0  0  0  0\r\n 10 19  1  0  0  0  0\r\n  9 10  1  0  0  0  0\r\n 20 15  1  0  0  0  0\r\n 17 15  1  0  0  0  0\r\n 21 20  1  0  0  0  0\r\n 22 17  1  0  0  0  0\r\n 23 22  1  0  0  0  0\r\n 24 21  1  0  0  0  0\r\n 23 21  1  0  0  0  0\r\n 25 24  1  0  0  0  0\r\n 26 23  1  0  0  0  0\r\n 27 26  1  0  0  0  0\r\n 29 28  1  0  0  0  0\r\n 30 28  1  0  0  0  0\r\n 31 29  2  0  0  0  0\r\n 25 30  1  0  0  0  0\r\n 32 31  1  0  0  0  0\r\n 27 25  1  0  0  0  0\r\n 32 27  1  0  0  0  0\r\n 13  8  1  0  0  0  0\r\n 33  4  1  0  0  0  0\r\n  6  4  1  0  0  0  0\r\n 34 33  1  0  0  0  0\r\n 35  6  1  0  0  0  0\r\n 37 34  1  0  0  0  0\r\n 36 35  1  0  0  0  0\r\n 38 36  1  0  0  0  0\r\n 37 36  1  0  0  0  0\r\n 39 38  1  0  0  0  0\r\n 40 37  1  0  0  0  0\r\n 41 40  1  0  0  0  0\r\n 42 39  1  0  0  0  0\r\n 41 39  1  0  0  0  0\r\n 44 42  1  0  0  0  0\r\n 43 41  1  0  0  0  0\r\n 45 43  1  0  0  0  0\r\n 47 45  1  0  0  0  0\r\n 47 46  1  0  0  0  0\r\n 48 44  1  0  0  0  0\r\n 46 44  1  0  0  0  0\r\n 49 48  1  0  0  0  0\r\n 50 46  1  0  0  0  0\r\n 51 50  1  0  0  0  0\r\n 52 49  1  0  0  0  0\r\n 51 49  1  0  0  0  0\r\n 53 52  1  0  0  0  0\r\n 54 51  1  0  0  0  0\r\n 55 54  1  0  0  0  0\r\n 56 55  1  0  0  0  0\r\n 57 53  1  0  0  0  0\r\n 56 53  1  0  0  0  0\r\n 58 57  1  0  0  0  0\r\n 59 56  1  0  0  0  0\r\n 60 58  1  0  0  0  0\r\n 60 59  1  0  0  0  0\r\n 60 61  1  1  0  0  0\r\n 62 60  1  0  0  0  0\r\n 63 61  1  0  0  0  0\r\n 64 62  1  0  0  0  0\r\n 64 63  1  0  0  0  0\r\n 65 28  1  0  0  0  0\r\n 66 65  2  0  0  0  0\r\n 67 66  1  0  0  0  0\r\n 68 67  1  0  0  0  0\r\n 69 68  1  0  0  0  0\r\n 67 70  1  6  0  0  0\r\n 28 71  1  6  0  0  0\r\n 25 72  1  6  0  0  0\r\n 21 73  1  6  0  0  0\r\n 15 74  1  6  0  0  0\r\n  9 75  1  6  0  0  0\r\n  1 76  1  6  0  0  0\r\n  6 77  1  6  0  0  0\r\n 36 78  1  6  0  0  0\r\n 39 79  1  6  0  0  0\r\n 44 80  1  6  0  0  0\r\n 49 81  1  6  0  0  0\r\n 45 82  1  6  0  0  0\r\n 24 83  1  6  0  0  0\r\n 57 84  1  6  0  0  0\r\n 55 85  1  6  0  0  0\r\n 27 86  1  1  0  0  0\r\n 23 87  1  1  0  0  0\r\n 17 88  1  1  0  0  0\r\n 10 89  1  1  0  0  0\r\n 13 90  1  1  0  0  0\r\n  4 91  1  1  0  0  0\r\n 41 92  1  1  0  0  0\r\n 46 93  1  1  0  0  0\r\n 51 94  1  1  0  0  0\r\n 56 95  1  1  0  0  0\r\n 54 96  1  1  0  0  0\r\n 58 97  1  1  0  0  0\r\n 64 98  1  1  0  0  0\r\n 34 99  1  1  0  0  0\r\n 37100  1  1  0  0  0\r\n 53101  1  6  0  0  0\r\nM  END\r\n>  <IDNUMBER>\r\nAAM 10376530\r\n\r\n>  <Weight>\r\n3.850000000000000e+001\r\n\r\n$$$$','ciguatoxin.mol',1,NULL,280),(15,'[NO NAME]\r\n  CHEMW2  0808111107172D                              \r\nCreated with ChemWriter - http://chemwriter.com\r\n 82 90  0  0  1  0            999 V2000\r\n    0.0000    0.0000    0.0000 Co  0  0  0  0  0  0  0  0  0  0  0  0\r\n   -0.7073   -1.7021    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -0.8192   -0.8986    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -0.8192    0.7995    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -0.7073    1.6030    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -1.4197    1.9798    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    0.7339    1.6030    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    0.8582    0.7995    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n    1.6824    0.6504    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    2.0965   -0.0496    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    1.6824   -0.7537    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    0.8582   -0.8986    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n    0.7339   -1.7021    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    1.4712   -2.0831    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    1.5935   -2.8990    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    2.3613   -3.2009    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    2.4836   -4.0168    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    2.0634   -1.5033    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    2.7015   -2.0262    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    2.8353   -1.2121    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    2.2220    2.3217    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    0.0299    2.0129    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    0.0299    2.8379    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    0.0299   -2.1163    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    0.0299   -2.9413    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -1.6309   -0.7537    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -2.4278   -0.5402    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -1.6309    0.6752    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -2.4278    0.4617    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -1.4197   -2.9081    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    2.0634    1.4000    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    2.7779    1.8125    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    3.4923    1.4000    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    4.2068    1.8125    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    4.2068    2.6375    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    4.9213    1.4000    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n    1.4712    2.8048    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    2.1857    3.2173    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    2.1857    4.0423    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    2.9001    2.8048    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n    1.4712    1.9798    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -2.7264    0.9875    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -3.4408    1.4000    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -3.4408    2.2250    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -4.1553    0.9875    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -2.0119   -1.5033    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -2.7264   -1.9158    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -3.4408   -1.5033    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -3.4408   -0.6783    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -4.1553   -1.9158    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -2.1342   -3.3206    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -2.8486   -3.7331    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -3.5631   -3.3206    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -2.8486   -4.5581    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -3.5631   -4.9706    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -2.1342   -2.4956    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -1.4197   -2.0831    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -3.5631   -5.7956    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -2.8487   -6.2081    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -4.2776   -6.2081    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -3.6737   -7.0331    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    1.8382   -4.5307    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    3.2513   -4.3188    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -2.0119    1.4000    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -2.2254    2.1969    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -1.5381    2.7963    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -2.3043    3.1020    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -2.4228    3.9185    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -3.1891    4.2241    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -1.7749    4.4293    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -0.4587   -8.4850    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -1.1261   -8.9700    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -1.7936   -8.4851    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -2.5782   -8.7402    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -2.7497   -9.5471    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -0.7137   -7.7005    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -0.2288   -7.0330    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -1.5387   -7.7005    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -2.0237   -7.0331    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -2.8487   -7.0331    0.0000 P   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -2.8487   -7.8581    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    0.3259   -8.7399    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n  3  1  1  0  0  0  0\r\n 24  2  2  0  0  0  0\r\n  2  3  1  0  0  0  0\r\n 57  2  1  0  0  0  0\r\n 26  3  1  0  0  0  0\r\n 28  4  1  0  0  0  0\r\n  4  5  2  0  0  0  0\r\n  6  5  1  0  0  0  0\r\n  5 22  1  0  0  0  0\r\n  6 66  1  6  0  0  0\r\n 64  6  1  0  0  0  0\r\n 22  7  2  0  0  0  0\r\n  7  8  1  0  0  0  0\r\n 41  7  1  0  0  0  0\r\n  8  9  2  0  0  0  0\r\n  9 10  1  0  0  0  0\r\n 31  9  1  0  0  0  0\r\n 10 11  2  0  0  0  0\r\n 11 12  1  0  0  0  0\r\n 11 18  1  0  0  0  0\r\n 12 13  2  0  0  0  0\r\n 13 14  1  0  0  0  0\r\n 24 13  1  0  0  0  0\r\n 14 15  1  6  0  0  0\r\n 14 18  1  0  0  0  0\r\n 15 16  1  0  0  0  0\r\n 16 17  1  0  0  0  0\r\n 17 62  2  0  0  0  0\r\n 17 63  1  0  0  0  0\r\n 18 19  1  0  0  0  0\r\n 18 20  1  0  0  0  0\r\n 41 21  1  0  0  0  0\r\n 22 23  1  0  0  0  0\r\n 24 25  1  0  0  0  0\r\n 26 46  1  0  0  0  0\r\n 26 28  1  0  0  0  0\r\n 26 27  1  1  0  0  0\r\n 28 64  1  0  0  0  0\r\n 28 29  1  6  0  0  0\r\n 57 30  1  1  0  0  0\r\n 31 41  1  0  0  0  0\r\n 31 32  1  6  0  0  0\r\n 32 33  1  0  0  0  0\r\n 33 34  1  0  0  0  0\r\n 34 35  2  0  0  0  0\r\n 34 36  1  0  0  0  0\r\n 37 38  1  0  0  0  0\r\n 41 37  1  1  0  0  0\r\n 38 40  1  0  0  0  0\r\n 38 39  2  0  0  0  0\r\n 64 42  1  1  0  0  0\r\n 42 43  1  0  0  0  0\r\n 43 44  2  0  0  0  0\r\n 43 45  1  0  0  0  0\r\n 46 57  1  0  0  0  0\r\n 46 47  1  1  0  0  0\r\n 47 48  1  0  0  0  0\r\n 48 49  2  0  0  0  0\r\n 48 50  1  0  0  0  0\r\n 56 51  1  0  0  0  0\r\n 51 52  1  0  0  0  0\r\n 52 53  2  0  0  0  0\r\n 52 54  1  0  0  0  0\r\n 55 54  1  0  0  0  0\r\n 58 55  1  0  0  0  0\r\n 57 56  1  0  0  0  0\r\n 58 59  1  0  0  0  0\r\n 58 60  1  6  0  0  0\r\n 80 59  1  0  0  0  0\r\n 80 61  2  0  0  0  0\r\n 64 65  1  0  0  0  0\r\n 66 67  1  0  0  0  0\r\n 67 68  1  0  0  0  0\r\n 68 70  1  0  0  0  0\r\n 68 69  2  0  0  0  0\r\n 71 82  1  1  0  0  0\r\n 71 76  1  0  0  0  0\r\n 71 72  1  0  0  0  0\r\n 73 72  1  0  0  0  0\r\n 78 73  1  0  0  0  0\r\n 73 74  1  6  0  0  0\r\n 74 75  1  0  0  0  0\r\n 76 78  1  0  0  0  0\r\n 76 77  1  1  0  0  0\r\n 78 79  1  1  0  0  0\r\n 80 79  1  0  0  0  0\r\n 80 81  1  0  0  0  0\r\n  1  8  1  0  0  0  0\r\n  1  4  1  0  0  0  0\r\n  1 12  1  0  0  0  0\r\nM  END\r\n>  <IDNUMBER>\r\nAAM 10376530\r\n\r\n>  <Weight>\r\n3.850000000000000e+001\r\n\r\n$$$$','cobamide.mol',3,NULL,281),(16,'[NO NAME]\r\n  CHEMW2  0808111107402D                              \r\nCreated with ChemWriter - http://chemwriter.com\r\n 91101  0  0  1  0            999 V2000\r\n   25.1879  -13.8191    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   25.1879  -15.4691    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   26.6168  -15.4691    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   27.3313  -15.0566    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   27.3313  -12.5816    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   26.6168  -12.9941    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   30.0999  -12.3267    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   30.8144  -11.0892    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   30.8144  -12.7392    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   31.5288  -12.3267    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   30.0999  -13.1517    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   30.0999  -11.5017    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   24.4734  -14.2316    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   23.7589  -13.8191    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   31.5288  -11.5017    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   32.2433  -11.0892    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   29.3153  -12.0717    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   28.9028  -11.3573    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   25.9023  -15.0566    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   25.9023  -15.8816    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\r\n   26.6168  -13.8191    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   26.6168  -14.6441    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\r\n   28.0457  -13.8191    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   28.0457  -14.6441    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\r\n   29.3153  -13.4066    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   29.8986  -13.9899    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\r\n   28.0457  -12.9941    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   28.0457  -12.1691    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   28.8304  -12.7391    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   28.6802  -11.9105    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\r\n   25.9023  -14.2316    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   25.9023  -13.4066    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   27.3313  -14.2316    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   27.3313  -13.4066    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\r\n   24.4734  -15.0566    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   23.7589  -15.4691    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   23.7589  -16.2941    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   23.0445  -16.7066    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   24.4734  -16.7066    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   25.1879  -16.2941    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   23.0445  -17.5317    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   23.7589  -17.9442    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   24.4734  -17.5317    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   25.1879  -17.9442    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   22.3300  -17.9442    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   21.6155  -17.5317    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   23.7589  -18.7692    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   23.0445  -19.1817    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   22.3300  -18.7692    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   23.0445  -20.0067    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   21.6155  -20.0067    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   20.9011  -20.4192    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   22.3300  -20.4192    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   21.6155  -19.1817    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   20.9011  -18.7692    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   20.1866  -19.1817    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   22.3300  -21.2442    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   21.6155  -21.6567    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   20.1866  -21.6567    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   20.9011  -21.2442    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   20.9011  -22.8942    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   20.9011  -23.7192    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   21.6155  -22.4817    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   22.3300  -22.8942    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   20.1866  -22.4817    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   19.4721  -22.8942    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   23.7589  -20.4192    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   24.4734  -20.8317    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   24.4734  -21.6567    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   25.1879  -20.4192    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   25.1879  -19.5942    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   25.9023  -21.6567    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   26.6168  -22.0692    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   25.1879  -22.0692    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   25.1879  -22.8942    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   24.4734  -23.3067    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   25.9023  -20.8317    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   26.6168  -20.4192    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   27.3313  -20.8317    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   27.3313  -21.6567    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   28.7602  -20.8317    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   29.4747  -20.4192    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   28.0457  -22.0692    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   28.0457  -22.8942    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   27.3313  -23.3067    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   28.0457  -20.4192    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   28.0457  -19.5942    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   28.7602  -21.6567    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   29.4747  -22.0692    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   28.8304  -14.0740    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   29.2429  -14.7884    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n  1 13  1  0  0  0  0\r\n  1 31  1  0  0  0  0\r\n 13 35  1  0  0  0  0\r\n 35  2  1  0  0  0  0\r\n  2 19  1  0  0  0  0\r\n 21 31  1  0  0  0  0\r\n 31 19  1  0  0  0  0\r\n 19  3  1  0  0  0  0\r\n  3  4  1  0  0  0  0\r\n  4 33  1  0  0  0  0\r\n 33 23  1  0  0  0  0\r\n 21 33  1  0  0  0  0\r\n  6 21  1  0  0  0  0\r\n  5  6  1  0  0  0  0\r\n  5 27  1  0  0  0  0\r\n 29 27  1  0  0  0  0\r\n 27 23  1  0  0  0  0\r\n 23 90  1  0  0  0  0\r\n 90 25  1  0  0  0  0\r\n 25 11  1  0  0  0  0\r\n 29 25  1  0  0  0  0\r\n 17 29  1  0  0  0  0\r\n 17  7  1  0  0  0  0\r\n 11  7  1  0  0  0  0\r\n  7 12  1  6  0  0  0\r\n  7  9  1  0  0  0  0\r\n  8 12  1  0  0  0  0\r\n  8 15  1  0  0  0  0\r\n  9 10  1  0  0  0  0\r\n 10 15  1  0  0  0  0\r\n 13 14  1  6  0  0  0\r\n 15 16  1  6  0  0  0\r\n 17 18  1  6  0  0  0\r\n 19 20  1  6  0  0  0\r\n 21 22  1  6  0  0  0\r\n 23 24  1  6  0  0  0\r\n 25 26  1  6  0  0  0\r\n 27 28  1  1  0  0  0\r\n 29 30  1  6  0  0  0\r\n 31 32  1  1  0  0  0\r\n 33 34  1  1  0  0  0\r\n 35 36  1  1  0  0  0\r\n 37 36  1  1  0  0  0\r\n 37 38  1  0  0  0  0\r\n 37 39  1  0  0  0  0\r\n 38 41  1  0  0  0  0\r\n 41 42  1  0  0  0  0\r\n 42 43  1  0  0  0  0\r\n 43 39  1  0  0  0  0\r\n 39 40  1  6  0  0  0\r\n 41 45  1  1  0  0  0\r\n 42 47  1  1  0  0  0\r\n 43 44  1  1  0  0  0\r\n 45 46  1  0  0  0  0\r\n 48 47  1  1  0  0  0\r\n 50 48  1  0  0  0  0\r\n 49 48  1  0  0  0  0\r\n 49 54  1  0  0  0  0\r\n 54 51  1  0  0  0  0\r\n 51 53  1  0  0  0  0\r\n 53 50  1  0  0  0  0\r\n 50 67  1  6  0  0  0\r\n 51 52  1  6  0  0  0\r\n 53 57  1  1  0  0  0\r\n 54 55  1  1  0  0  0\r\n 55 56  1  0  0  0  0\r\n 58 57  1  1  0  0  0\r\n 63 58  1  0  0  0  0\r\n 60 58  1  0  0  0  0\r\n 60 59  1  0  0  0  0\r\n 59 65  1  0  0  0  0\r\n 65 61  1  0  0  0  0\r\n 61 63  1  0  0  0  0\r\n 61 62  1  1  0  0  0\r\n 63 64  1  6  0  0  0\r\n 65 66  1  6  0  0  0\r\n 68 67  1  1  0  0  0\r\n 70 68  1  0  0  0  0\r\n 68 69  1  0  0  0  0\r\n 70 77  1  0  0  0  0\r\n 69 74  1  0  0  0  0\r\n 74 72  1  0  0  0  0\r\n 72 77  1  0  0  0  0\r\n 70 71  1  6  0  0  0\r\n 72 73  1  6  0  0  0\r\n 74 75  1  1  0  0  0\r\n 75 76  1  0  0  0  0\r\n 77 78  1  1  0  0  0\r\n 79 78  1  1  0  0  0\r\n 86 79  1  0  0  0  0\r\n 79 80  1  0  0  0  0\r\n 86 81  1  0  0  0  0\r\n 80 83  1  0  0  0  0\r\n 83 88  1  0  0  0  0\r\n 88 81  1  0  0  0  0\r\n 81 82  1  1  0  0  0\r\n 83 84  1  1  0  0  0\r\n 84 85  1  0  0  0  0\r\n 86 87  1  6  0  0  0\r\n 88 89  1  6  0  0  0\r\n 90 91  1  1  0  0  0\r\nM  END\r\n>  <IDNUMBER>\r\nAAM 10376530\r\n\r\n>  <Weight>\r\n3.850000000000000e+001\r\n\r\n$$$$','digitonin.mol',3,NULL,277),(17,'[NO NAME]\r\n  CHEMW2  0808111107542D                              \r\nCreated with ChemWriter - http://chemwriter.com\r\n 90 96  0  0  1  0            999 V2000\r\n    9.4018   -7.7580    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    9.4018   -8.5830    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    8.6873   -7.3455    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    8.6873   -8.9955    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    7.9728   -7.7580    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    7.9728   -8.5830    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   10.1163   -7.3455    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   10.8308   -7.7580    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   11.5452   -7.3455    0.0000 S   0  0  0  0  0  0  0  0  0  0  0  0\r\n   12.2597   -7.7580    0.0000 S   0  0  0  0  0  0  0  0  0  0  0  0\r\n   12.9742   -7.3455    0.0000 S   0  0  0  0  0  0  0  0  0  0  0  0\r\n   13.6887   -7.7579    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   10.1163   -8.9955    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   10.8308   -8.5830    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   11.5452   -8.9955    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   12.9742   -8.9955    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   12.9742   -9.8205    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   12.2597   -8.5830    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   12.2597  -10.2330    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   11.5452   -9.8205    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   13.6887   -8.5830    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   13.6887  -10.2330    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   12.2597  -11.0580    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   10.8308  -10.2330    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   14.4031   -9.8205    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   15.1176  -10.2331    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   16.5466  -10.2331    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   16.5466  -11.0581    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   15.8321   -9.8206    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   15.8321  -11.4706    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   15.1176  -11.0581    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   17.2610   -9.8206    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   17.2610  -11.4706    0.0000 S   0  0  0  0  0  0  0  0  0  0  0  0\r\n   17.9756  -11.0581    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   15.8321  -12.2956    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   10.8308  -11.0580    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   11.5453  -11.4705    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   11.5453  -12.2955    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   10.8308  -12.7080    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   10.1163  -11.4705    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   10.1163  -12.2955    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   12.2597  -12.7080    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   12.9742  -12.2955    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   10.8308  -13.5330    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   10.1162  -13.9455    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   10.1162  -14.7705    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    9.4018  -13.5330    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    7.2584   -8.9955    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    8.6873   -9.8205    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n    7.9728  -10.2330    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    7.9728  -11.0580    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    7.2583   -9.8204    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    6.5439  -10.2329    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    7.2584   -7.3455    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    7.2584   -6.5205    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    6.5439   -6.1080    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    7.9729   -6.1079    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    6.5440   -5.2829    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    7.9729   -5.2830    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    7.2584   -4.8705    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    5.8295   -4.8704    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    7.2584   -4.0455    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    8.6874   -4.8705    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    8.6874   -4.0455    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    9.4018   -3.6330    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    7.9729   -3.6330    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   10.8308   -2.8080    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   10.8308   -3.6330    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   10.1163   -2.3955    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   10.1163   -4.0455    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    9.4018   -2.8080    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    8.6874   -2.3955    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n    8.6874   -1.5705    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    7.9729   -1.1580    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    7.9729   -0.3330    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    9.4018   -1.1580    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    7.2584   -1.5705    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    6.5440   -1.1580    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   11.5453   -2.3955    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   11.5453   -4.0455    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   12.2597   -2.8080    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   12.2598   -3.6330    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    8.9457   -6.6298    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    8.2898   -6.6298    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    9.2141   -5.7948    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    9.5124   -4.9102    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   10.6356   -5.1090    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   10.5063   -6.1428    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   10.3871   -7.0274    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   10.1163   -9.8205    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\r\n  2  1  1  0  0  0  0\r\n  3  1  1  0  0  0  0\r\n  4  2  2  0  0  0  0\r\n  5  3  1  0  0  0  0\r\n  6  4  1  0  0  0  0\r\n  6  5  1  0  0  0  0\r\n  1  7  2  0  0  0  0\r\n  7  8  1  0  0  0  0\r\n  8  9  1  0  0  0  0\r\n  9 10  1  0  0  0  0\r\n 10 11  1  0  0  0  0\r\n 11 12  1  0  0  0  0\r\n  2 13  1  0  0  0  0\r\n 13 14  1  0  0  0  0\r\n 15 14  1  6  0  0  0\r\n 17 16  1  0  0  0  0\r\n 18 16  1  0  0  0  0\r\n 19 17  1  0  0  0  0\r\n 15 18  1  0  0  0  0\r\n 20 19  1  0  0  0  0\r\n 20 15  1  0  0  0  0\r\n 16 21  1  6  0  0  0\r\n 17 22  1  1  0  0  0\r\n 19 23  1  6  0  0  0\r\n 20 24  1  1  0  0  0\r\n 22 25  1  0  0  0  0\r\n 26 25  1  6  0  0  0\r\n 28 27  1  0  0  0  0\r\n 29 27  1  0  0  0  0\r\n 30 28  1  0  0  0  0\r\n 26 29  1  0  0  0  0\r\n 31 30  1  0  0  0  0\r\n 31 26  1  0  0  0  0\r\n 27 32  1  6  0  0  0\r\n 28 33  1  1  0  0  0\r\n 33 34  1  0  0  0  0\r\n 30 35  1  1  0  0  0\r\n 36 24  1  1  0  0  0\r\n 38 37  1  0  0  0  0\r\n 36 37  1  0  0  0  0\r\n 39 38  1  0  0  0  0\r\n 40 36  1  0  0  0  0\r\n 41 39  1  0  0  0  0\r\n 41 40  1  0  0  0  0\r\n 38 42  1  6  0  0  0\r\n 42 43  1  0  0  0  0\r\n 39 44  1  1  0  0  0\r\n 44 45  1  0  0  0  0\r\n 45 46  1  0  0  0  0\r\n 45 47  1  0  0  0  0\r\n  6 48  2  0  0  0  0\r\n  4 49  1  0  0  0  0\r\n 49 50  1  0  0  0  0\r\n 50 51  2  0  0  0  0\r\n 50 52  1  0  0  0  0\r\n 52 53  1  0  0  0  0\r\n  5 54  1  1  0  0  0\r\n 56 55  1  0  0  0  0\r\n 57 55  1  0  0  0  0\r\n 58 56  1  0  0  0  0\r\n 59 57  1  0  0  0  0\r\n 60 58  1  0  0  0  0\r\n 60 59  1  0  0  0  0\r\n 55 54  1  6  0  0  0\r\n 58 61  1  1  0  0  0\r\n 60 62  1  1  0  0  0\r\n 59 63  1  1  0  0  0\r\n 63 64  1  0  0  0  0\r\n 64 65  1  0  0  0  0\r\n 64 66  2  0  0  0  0\r\n 68 67  1  0  0  0  0\r\n 69 67  2  0  0  0  0\r\n 70 68  2  0  0  0  0\r\n 71 69  1  0  0  0  0\r\n 65 70  1  0  0  0  0\r\n 65 71  2  0  0  0  0\r\n 71 72  1  0  0  0  0\r\n 72 73  1  0  0  0  0\r\n 73 74  1  0  0  0  0\r\n 74 75  2  0  0  0  0\r\n 73 76  2  0  0  0  0\r\n 74 77  1  0  0  0  0\r\n 77 78  1  0  0  0  0\r\n 67 79  1  0  0  0  0\r\n 68 80  1  0  0  0  0\r\n 79 81  1  0  0  0  0\r\n 80 82  1  0  0  0  0\r\n  3 83  1  0  0  0  0\r\n  3 84  1  6  0  0  0\r\n 85 83  3  0  0  0  0\r\n 85 86  1  0  0  0  0\r\n 86 87  2  0  0  0  0\r\n 87 88  1  0  0  0  0\r\n 88 89  3  0  0  0  0\r\n 89 13  1  0  0  0  0\r\n 13 90  1  6  0  0  0\r\nM  END\r\n>  <IDNUMBER>\r\nAAM 10376530\r\n\r\n>  <Weight>\r\n3.850000000000000e+001\r\n\r\n$$$$','esperamicin-a1.mol',5,NULL,278),(18,'[NO NAME]\r\n  CHEMW2  0808111108082D                              \r\nCreated with ChemWriter - http://chemwriter.com\r\n 72 75  0  0  1  0            999 V2000\r\n   22.2926  -13.2625    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   21.2059  -12.6829    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   20.0467  -13.2625    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   18.8875  -12.6829    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   17.7283  -13.2625    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   16.5691  -12.6829    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   15.4099  -13.2625    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   14.3232  -12.6829    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   13.1640  -13.2625    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   21.2059  -11.3064    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   17.7283  -14.6391    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   16.5691  -11.3064    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   17.7283  -10.6543    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   17.7283   -9.2778    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   18.8151   -8.6257    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   14.3232  -11.3064    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   15.3375  -10.5094    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   13.2364  -10.5094    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   14.9752   -9.2778    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   13.5987   -9.2778    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   12.0772  -11.1615    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   10.9180  -10.5094    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    9.7588  -11.1615    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n    8.5996  -10.5094    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    7.5129  -11.1615    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    6.3537  -10.5094    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   12.0772  -12.5380    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   10.9180   -9.2053    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   12.0772   -8.5533    0.0000 S   0  0  0  0  0  0  0  0  0  0  0  0\r\n   12.0772   -7.2492    0.0000 S   0  0  0  0  0  0  0  0  0  0  0  0\r\n    8.5996   -9.2053    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    7.5129  -12.5380    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    6.3537  -13.1901    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    6.3537  -14.4942    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    5.1945  -12.5380    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n    6.3537   -9.2053    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    5.1945   -8.5533    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    7.5129   -8.5533    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    4.0353   -9.2053    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    3.9906  -10.5346    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    2.8314  -11.1866    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    1.6722  -10.5346    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n    2.8314  -12.5632    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    5.1945   -7.2492    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n    4.0353   -5.2206    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    4.0353   -6.5971    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    5.1945   -4.5686    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    6.3537   -5.2206    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    6.3537   -6.5971    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    1.7169   -5.2206    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    1.7169   -6.5971    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    2.8761   -4.5686    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    2.8761   -7.2492    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   10.9180   -5.2206    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   12.0772   -4.5686    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   13.2364   -5.2206    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   13.2364   -6.5247    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    8.6721   -5.2206    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    8.6721   -6.5247    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    9.7588   -4.5686    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    7.5129   -4.5686    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n    7.5129   -7.2492    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    9.7588   -3.1920    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    7.5129   -3.1920    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    8.6721   -2.5400    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    6.3537   -2.5400    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    6.3537   -1.2359    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    8.6721   -1.2359    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    7.5129   -0.5838    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   14.3232   -4.5686    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   12.0772   -3.1920    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   18.8151   -7.3216    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n  2  1  1  0  0  0  0\r\n  3  2  1  0  0  0  0\r\n 10  2  2  0  0  0  0\r\n  4  3  1  0  0  0  0\r\n  5  4  1  0  0  0  0\r\n  6  5  1  0  0  0  0\r\n 11  5  2  0  0  0  0\r\n  7  6  1  0  0  0  0\r\n  6 12  1  1  0  0  0\r\n  8  7  1  0  0  0  0\r\n  9  8  2  0  0  0  0\r\n 16  8  1  1  0  0  0\r\n 13 12  1  0  0  0  0\r\n 14 13  1  0  0  0  0\r\n 15 14  1  0  0  0  0\r\n 72 15  1  0  0  0  0\r\n 17 16  1  0  0  0  0\r\n 18 16  1  0  0  0  0\r\n 19 17  1  0  0  0  0\r\n 20 18  1  0  0  0  0\r\n 21 18  1  0  0  0  0\r\n 20 19  1  0  0  0  0\r\n 22 21  1  1  0  0  0\r\n 27 21  2  0  0  0  0\r\n 23 22  1  0  0  0  0\r\n 28 22  1  0  0  0  0\r\n 24 23  1  0  0  0  0\r\n 25 24  1  0  0  0  0\r\n 31 24  2  0  0  0  0\r\n 26 25  1  0  0  0  0\r\n 25 32  1  6  0  0  0\r\n 36 26  1  0  0  0  0\r\n 29 28  1  0  0  0  0\r\n 30 29  1  0  0  0  0\r\n 57 30  1  0  0  0  0\r\n 33 32  1  0  0  0  0\r\n 34 33  2  0  0  0  0\r\n 35 33  1  0  0  0  0\r\n 37 36  1  0  0  0  0\r\n 38 36  2  0  0  0  0\r\n 37 39  1  6  0  0  0\r\n 44 37  1  0  0  0  0\r\n 40 39  1  0  0  0  0\r\n 41 40  1  0  0  0  0\r\n 42 41  1  0  0  0  0\r\n 43 41  2  0  0  0  0\r\n 49 44  1  0  0  0  0\r\n 47 45  1  0  0  0  0\r\n 52 45  1  0  0  0  0\r\n 46 45  2  0  0  0  0\r\n 53 46  1  0  0  0  0\r\n 48 47  1  6  0  0  0\r\n 61 48  1  0  0  0  0\r\n 49 48  1  0  0  0  0\r\n 62 49  2  0  0  0  0\r\n 51 50  1  0  0  0  0\r\n 52 50  2  0  0  0  0\r\n 53 51  2  0  0  0  0\r\n 55 54  1  0  0  0  0\r\n 60 54  1  0  0  0  0\r\n 56 55  1  0  0  0  0\r\n 71 55  2  0  0  0  0\r\n 57 56  1  0  0  0  0\r\n 56 70  1  1  0  0  0\r\n 59 58  2  0  0  0  0\r\n 60 58  1  0  0  0  0\r\n 61 58  1  0  0  0  0\r\n 60 63  1  6  0  0  0\r\n 65 63  1  0  0  0  0\r\n 66 64  2  0  0  0  0\r\n 65 64  1  0  0  0  0\r\n 68 65  2  0  0  0  0\r\n 67 66  1  0  0  0  0\r\n 69 67  2  0  0  0  0\r\n 69 68  1  0  0  0  0\r\nM  END\r\n>  <IDNUMBER>\r\nAAM 10376530\r\n\r\n>  <Weight>\r\n3.850000000000000e+001\r\n\r\n$$$$','felypressin.mol',NULL,NULL,279),(19,'\r\nCDL SDfile Writer. v.200000\r\n\r\n 23 25  0  0  0  0  0  0  0  0999 V2000\r\n    0.2250   -1.2792    0.0000 C   0  0  0  0  0  0\r\n   -0.2625   -0.6125    0.0000 N   0  0  3  0  0  0\r\n   -0.1208   -2.0292    0.0000 C   0  0  0  0  0  0\r\n    0.7792    0.4250    0.0000 C   0  0  0  0  0  0\r\n   -0.0083    0.1708    0.0000 C   0  0  1  0  0  0\r\n    1.3917   -0.1292    0.0000 N   0  0  0  0  0  0\r\n    1.0417   -1.1917    0.0000 O   0  0  0  0  0  0\r\n    0.3667   -2.6917    0.0000 C   0  0  0  0  0  0\r\n   -0.6750    0.6583    0.0000 C   0  0  0  0  0  0\r\n    0.9542    1.2333    0.0000 O   0  0  0  0  0  0\r\n   -1.3375    0.1708    0.0000 C   0  0  0  0  0  0\r\n   -1.0875   -0.6125    0.0000 C   0  0  0  0  0  0\r\n    1.1917   -2.6042    0.0000 F   0  0  0  0  0  0\r\n   -0.9458   -2.1167    0.0000 C   0  0  0  0  0  0\r\n    2.1792    0.1250    0.0000 C   0  0  3  0  0  0\r\n    0.0417   -3.4542    0.0000 C   0  0  0  0  0  0\r\n    2.3500    0.9333    0.0000 C   0  0  0  0  0  0\r\n    2.7917   -0.4292    0.0000 C   0  0  0  0  0  0\r\n   -1.2833   -2.8792    0.0000 C   0  0  0  0  0  0\r\n   -0.7833   -3.5542    0.0000 C   0  0  0  0  0  0\r\n    3.1292    1.1875    0.0000 C   0  0  0  0  0  0\r\n    3.5750   -0.1750    0.0000 C   0  0  0  0  0  0\r\n    3.7500    0.6333    0.0000 C   0  0  0  0  0  0\r\n  2  1  1  0  0  0\r\n  3  1  1  0  0  0\r\n  5  4  1  0  0  0\r\n  5  2  1  0  0  0\r\n  6  4  1  0  0  0\r\n  7  1  2  0  0  0\r\n  8  3  1  0  0  0\r\n  9  5  1  0  0  0\r\n 10  4  2  0  0  0\r\n 11 12  1  0  0  0\r\n 12  2  1  0  0  0\r\n 13  8  1  0  0  0\r\n 14  3  2  0  0  0\r\n 15  6  1  0  0  0\r\n 16  8  2  0  0  0\r\n 17 15  1  0  0  0\r\n 18 15  1  0  0  0\r\n 19 14  1  0  0  0\r\n 20 19  2  0  0  0\r\n 21 17  1  0  0  0\r\n 22 18  1  0  0  0\r\n 23 22  1  0  0  0\r\n 11  9  2  0  0  0\r\n 16 20  1  0  0  0\r\n 23 21  1  0  0  0\r\nM  END\r\n>  <IDNUMBER>\r\nAAM 10376335                                                         \r\n\r\n>  <Weight>\r\n1.256000000000000e+002    \r\n\r\n$$$$\r\n','a1_cdl.mol',NULL,NULL,280),(20,'\r\nCDL SDfile Writer. v.200000\r\n\r\n 24 26  0  0  0  0  0  0  0  0999 V2000\r\n    0.2167   -1.2792    0.0000 S   0  0  3  0  0  0\r\n   -0.2625   -0.6125    0.0000 N   0  0  3  0  0  0\r\n   -0.0083    0.1708    0.0000 C   0  0  1  0  0  0\r\n    0.7792    0.4250    0.0000 C   0  0  0  0  0  0\r\n    0.7042   -1.9542    0.0000 C   0  0  0  0  0  0\r\n    1.3917   -0.1292    0.0000 N   0  0  0  0  0  0\r\n    0.8792   -0.7917    0.0000 O   0  0  0  0  0  0\r\n   -0.4583   -1.7625    0.0000 O   0  0  0  0  0  0\r\n   -0.6750    0.6583    0.0000 C   0  0  0  0  0  0\r\n    0.9542    1.2333    0.0000 O   0  0  0  0  0  0\r\n   -1.3375    0.1708    0.0000 C   0  0  0  0  0  0\r\n   -1.0875   -0.6125    0.0000 C   0  0  0  0  0  0\r\n    0.3625   -2.7042    0.0000 C   0  0  0  0  0  0\r\n    1.5167   -1.8667    0.0000 C   0  0  0  0  0  0\r\n    1.6625   -3.2875    0.0000 C   0  0  0  0  0  0\r\n    2.1792    0.1250    0.0000 C   0  0  3  0  0  0\r\n    2.0000   -2.5292    0.0000 C   0  0  0  0  0  0\r\n    0.8417   -3.3667    0.0000 C   0  0  0  0  0  0\r\n    2.1500   -3.9542    0.0000 F   0  0  0  0  0  0\r\n    2.7917   -0.4292    0.0000 C   0  0  0  0  0  0\r\n    2.3500    0.9333    0.0000 C   0  0  0  0  0  0\r\n    3.5750   -0.1750    0.0000 C   0  0  0  0  0  0\r\n    3.1292    1.1875    0.0000 C   0  0  0  0  0  0\r\n    3.7417    0.6333    0.0000 C   0  0  0  0  0  0\r\n  2  1  1  0  0  0\r\n  3  2  1  0  0  0\r\n  3  4  1  0  0  0\r\n  5  1  1  0  0  0\r\n  6  4  1  0  0  0\r\n  7  1  2  0  0  0\r\n  8  1  2  0  0  0\r\n  9  3  1  0  0  0\r\n 10  4  2  0  0  0\r\n 11 12  1  0  0  0\r\n 12  2  1  0  0  0\r\n 13  5  2  0  0  0\r\n 14  5  1  0  0  0\r\n 15 17  1  0  0  0\r\n 16  6  1  0  0  0\r\n 17 14  2  0  0  0\r\n 18 13  1  0  0  0\r\n 19 15  1  0  0  0\r\n 20 16  1  0  0  0\r\n 21 16  1  0  0  0\r\n 22 20  1  0  0  0\r\n 23 21  1  0  0  0\r\n 24 23  1  0  0  0\r\n 15 18  2  0  0  0\r\n 11  9  2  0  0  0\r\n 22 24  1  0  0  0\r\nM  END\r\n>  <IDNUMBER>\r\nAAM 10376368                                                         \r\n\r\n>  <Weight>\r\n2.164500000000000e+002    \r\n\r\n$$$$\r\n','a2_cdl.mol',NULL,NULL,281),(21,'\r\nCDL SDfile Writer. v.200000\r\n\r\n 25 27  0  0  0  0  0  0  0  0999 V2000\r\n    0.2250   -1.2792    0.0000 C   0  0  0  0  0  0\r\n   -0.2625   -0.6125    0.0000 N   0  0  3  0  0  0\r\n   -0.1208   -2.0292    0.0000 C   0  0  0  0  0  0\r\n   -0.0083    0.1708    0.0000 C   0  0  1  0  0  0\r\n    0.7792    0.4250    0.0000 C   0  0  0  0  0  0\r\n    1.0417   -1.1917    0.0000 O   0  0  0  0  0  0\r\n    0.3667   -2.6917    0.0000 C   0  0  0  0  0  0\r\n   -0.6750    0.6583    0.0000 C   0  0  0  0  0  0\r\n   -1.3375    0.1708    0.0000 C   0  0  0  0  0  0\r\n    0.9542    1.2333    0.0000 O   0  0  0  0  0  0\r\n   -1.0875   -0.6125    0.0000 C   0  0  0  0  0  0\r\n    1.3917   -0.1292    0.0000 N   0  0  0  0  0  0\r\n    1.1917   -2.6042    0.0000 F   0  0  0  0  0  0\r\n   -0.9458   -2.1167    0.0000 C   0  0  0  0  0  0\r\n    2.1792    0.1250    0.0000 C   0  0  0  0  0  0\r\n    3.5792   -0.1667    0.0000 C   0  0  0  0  0  0\r\n    0.0417   -3.4542    0.0000 C   0  0  0  0  0  0\r\n    2.7917   -0.4292    0.0000 C   0  0  0  0  0  0\r\n    4.2000   -0.7250    0.0000 C   0  0  0  0  0  0\r\n    3.7542    0.6375    0.0000 C   0  0  0  0  0  0\r\n   -1.2833   -2.8792    0.0000 C   0  0  0  0  0  0\r\n   -0.7833   -3.5542    0.0000 C   0  0  0  0  0  0\r\n    4.5417    0.8958    0.0000 C   0  0  0  0  0  0\r\n    4.9792   -0.4667    0.0000 C   0  0  0  0  0  0\r\n    5.1542    0.3375    0.0000 C   0  0  0  0  0  0\r\n  2  1  1  0  0  0\r\n  3  1  1  0  0  0\r\n  4  2  1  0  0  0\r\n  4  5  1  0  0  0\r\n  6  1  2  0  0  0\r\n  7  3  1  0  0  0\r\n  8  4  1  0  0  0\r\n  9 11  1  0  0  0\r\n 10  5  2  0  0  0\r\n 11  2  1  0  0  0\r\n 12  5  1  0  0  0\r\n 13  7  1  0  0  0\r\n 14  3  2  0  0  0\r\n 15 12  1  0  0  0\r\n 16 18  1  0  0  0\r\n 17  7  2  0  0  0\r\n 18 15  1  0  0  0\r\n 19 16  2  0  0  0\r\n 20 16  1  0  0  0\r\n 21 14  1  0  0  0\r\n 22 21  2  0  0  0\r\n 23 20  2  0  0  0\r\n 24 19  1  0  0  0\r\n 25 23  1  0  0  0\r\n  9  8  2  0  0  0\r\n 17 22  1  0  0  0\r\n 25 24  2  0  0  0\r\nM  END\r\n>  <IDNUMBER>\r\nAAM 10376530\r\n\r\n>  <Weight>\r\n3.850000000000000e+001\r\n\r\n$$$$\r\n','a3_cdl.mol',NULL,NULL,277),(22,'\r\nCDL SDfile Writer. v.200000\r\n\r\n101106  0  0  1  0            999 V2000\r\n    6.3393   -3.7840    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    5.6380   -5.0627    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    6.3393   -5.4753    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    7.0818   -5.0627    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    7.0818   -4.1965    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -2.0758   -3.7840    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -2.0758   -2.9590    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -2.7770   -2.5465    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -3.5196   -2.9590    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -3.5196   -3.7840    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -2.7770   -4.1965    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -1.3745   -4.1965    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -0.6321   -3.7840    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -0.6321   -2.9590    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -1.3745   -2.5465    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -0.0546   -2.5465    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    0.6880   -2.9590    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    2.0905   -2.9590    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n    1.3892   -2.5465    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    1.3892   -1.7215    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    2.7918   -2.5465    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    3.5342   -2.9590    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    4.2355   -2.5465    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n    4.9368   -2.9590    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    5.6793   -2.5465    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    6.3805   -2.9590    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n    7.0405   -2.5465    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    7.7830   -2.9590    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    8.4843   -2.5465    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n    9.1855   -2.9590    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    9.9281   -2.5465    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    2.7918   -1.7215    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    3.5342   -3.7840    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    4.9368   -3.7840    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    7.0405   -1.7215    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    5.6793   -1.7215    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    7.7830   -3.7840    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    8.4843   -1.7215    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    9.9281   -1.7215    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   10.6293   -2.9590    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   12.7744   -2.5465    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   11.3306   -2.5465    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   12.0318   -2.9590    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   12.7744   -1.7215    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   12.0318   -1.3090    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   11.3306   -1.7215    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   12.0318   -0.4840    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   12.0318   -3.7840    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   13.5169   -2.9590    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   14.2182   -2.5465    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   14.9195   -2.9590    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   15.6619   -2.5465    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   16.3632   -2.9590    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   13.5582   -3.7840    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   14.2182   -1.7215    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    9.1855   -3.7840    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   16.3632   -3.7840    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    0.6880   -3.7840    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n    1.3892   -4.1965    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    2.0905   -3.7840    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    1.3892   -5.0215    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   17.7657   -2.9590    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   18.1782   -1.6802    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   17.3532   -1.6802    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   17.1057   -2.4640    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   18.4257   -2.4640    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   17.7657   -3.7428    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   17.0590   -4.1712    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    3.4930   -1.3090    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    4.2355   -1.6802    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    4.9368   -1.2264    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    4.9369   -0.4427    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    4.1945   -0.0302    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    3.4932   -0.4840    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    5.6382    0.0110    0.0000 Cl  0  0  0  0  0  0  0  0  0  0  0  0\r\n    5.6380   -4.1965    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    7.7418   -1.3090    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    9.8868   -4.1965    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   10.6293   -3.7840    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    9.8503   -5.0251    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   10.6009   -5.4466    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   11.3137   -5.0546    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   11.3385   -4.2055    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   12.0196   -5.4818    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   14.2923   -4.1603    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   14.9853   -3.7126    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   14.2923   -4.9853    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   18.4846   -4.1476    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   19.9135   -4.1476    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   20.6280   -3.7351    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   19.1991   -3.7351    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   19.1991   -2.9101    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   19.9135   -4.9726    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   15.6720   -1.7216    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   16.3865   -1.3091    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   16.3865   -0.4841    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   17.1010   -0.0716    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   17.1010    0.7534    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   17.8154    1.1659    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   17.8154    1.9909    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   18.5299    0.7534    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n  2  3  2  0  0  0  0\r\n  3  4  1  0  0  0  0\r\n  4  5  2  0  0  0  0\r\n  1  5  1  0  0  0  0\r\n  6  7  2  0  0  0  0\r\n  7  8  1  0  0  0  0\r\n  8  9  2  0  0  0  0\r\n  9 10  1  0  0  0  0\r\n 10 11  2  0  0  0  0\r\n  6 11  1  0  0  0  0\r\n  6 12  1  0  0  0  0\r\n 12 13  2  0  0  0  0\r\n 13 14  1  0  0  0  0\r\n 14 15  2  0  0  0  0\r\n  7 15  1  0  0  0  0\r\n 14 16  1  0  0  0  0\r\n 16 17  1  0  0  0  0\r\n 18 19  1  0  0  0  0\r\n 17 19  1  0  0  0  0\r\n 19 20  2  0  0  0  0\r\n 18 21  1  0  0  0  0\r\n 21 22  1  0  0  0  0\r\n 22 23  1  0  0  0  0\r\n 23 24  1  0  0  0  0\r\n 24 25  1  0  0  0  0\r\n 25 26  1  0  0  0  0\r\n 26 27  1  0  0  0  0\r\n 27 28  1  0  0  0  0\r\n 28 29  1  0  0  0  0\r\n 29 30  1  0  0  0  0\r\n 30 31  1  0  0  0  0\r\n 21 32  1  6  0  0  0\r\n 22 33  2  0  0  0  0\r\n 24 34  1  1  0  0  0\r\n 27 35  1  1  0  0  0\r\n 25 36  2  0  0  0  0\r\n 28 37  2  0  0  0  0\r\n 29 38  1  0  0  0  0\r\n 31 39  2  0  0  0  0\r\n 31 40  1  0  0  0  0\r\n 42 43  1  0  0  0  0\r\n 43 41  1  0  0  0  0\r\n 44 45  1  0  0  0  0\r\n 45 46  1  0  0  0  0\r\n 45 47  2  0  0  0  0\r\n 43 48  2  0  0  0  0\r\n 42 46  1  6  0  0  0\r\n 40 42  1  0  0  0  0\r\n 49 50  1  0  0  0  0\r\n 50 51  1  0  0  0  0\r\n 51 52  1  0  0  0  0\r\n 52 53  1  0  0  0  0\r\n 41 49  1  0  0  0  0\r\n 49 54  1  6  0  0  0\r\n 50 55  2  0  0  0  0\r\n 30 56  1  6  0  0  0\r\n 53 57  2  0  0  0  0\r\n 58 59  1  0  0  0  0\r\n 59 60  1  0  0  0  0\r\n 59 61  2  0  0  0  0\r\n 17 58  1  6  0  0  0\r\n 63 64  1  0  0  0  0\r\n 64 65  1  0  0  0  0\r\n 65 62  1  0  0  0  0\r\n 62 66  1  0  0  0  0\r\n 63 66  1  0  0  0  0\r\n 53 65  1  0  0  0  0\r\n 67 68  2  0  0  0  0\r\n 62 67  1  1  0  0  0\r\n 69 32  1  0  0  0  0\r\n 70 71  2  0  0  0  0\r\n 71 72  1  0  0  0  0\r\n 72 73  2  0  0  0  0\r\n 73 74  1  0  0  0  0\r\n 74 69  2  0  0  0  0\r\n 72 75  1  0  0  0  0\r\n 69 70  1  0  0  0  0\r\n 34 76  1  0  0  0  0\r\n  2 76  1  0  0  0  0\r\n 76  1  2  0  0  0  0\r\n 35 77  1  0  0  0  0\r\n 56 78  1  0  0  0  0\r\n 80 81  2  0  0  0  0\r\n 81 82  1  0  0  0  0\r\n 82 83  2  0  0  0  0\r\n 83 79  1  0  0  0  0\r\n 78 80  1  0  0  0  0\r\n 78 79  2  0  0  0  0\r\n 82 84  1  0  0  0  0\r\n 54 85  1  0  0  0  0\r\n 85 86  1  0  0  0  0\r\n 85 87  1  0  0  0  0\r\n 67 88  1  0  0  0  0\r\n 89 90  1  0  0  0  0\r\n 89 91  1  0  0  0  0\r\n 91 88  1  6  0  0  0\r\n 91 92  1  0  0  0  0\r\n 93 89  2  0  0  0  0\r\n 52 94  1  1  0  0  0\r\n 94 95  1  0  0  0  0\r\n 95 96  1  0  0  0  0\r\n 96 97  1  0  0  0  0\r\n 97 98  1  0  0  0  0\r\n 98 99  1  0  0  0  0\r\n 99100  1  0  0  0  0\r\n 99101  1  0  0  0  0\r\nM  END\r\n>  <IDNUMBER>\r\nAAM 10376530\r\n\r\n>  <Weight>\r\n3.850000000000000e+001\r\n\r\n$$$$\r\n','abarelix.mol',NULL,NULL,278),(23,'\r\nCDL SDfile Writer. v.200000\r\n\r\n 29 32  0  0  0  0            999 V2000\r\n   -0.8484   -0.6703    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -0.8484   -2.3203    0.0000 S   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -0.1340   -1.0828    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -1.5629   -1.0828    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -1.5629   -1.9078    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -0.1340   -1.9078    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    0.5805   -0.6703    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -2.2774   -0.6703    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -2.2774   -2.3203    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    0.5805   -2.3203    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -2.9918   -1.9078    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    1.2950   -1.9078    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -0.8484    0.1547    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -0.1340    0.5672    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -0.1340    1.3922    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    0.5805    1.8047    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n    2.0094    2.6297    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n    2.0094    1.8047    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    0.5805    2.6297    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    1.2950    3.0422    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    1.2950    1.3922    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    2.7239    3.0422    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    3.4384    2.6297    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    4.1529    3.0422    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -2.9918   -1.0828    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    1.2950   -1.0828    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    2.7239   -1.0828    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    2.0094   -0.6703    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    2.0094    0.1547    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n  3  1  1  0  0  0  0\r\n  4  1  1  0  0  0  0\r\n 13  1  1  0  0  0  0\r\n  5  2  1  0  0  0  0\r\n  6  2  1  0  0  0  0\r\n  6  3  1  0  0  0  0\r\n  7  3  2  0  0  0  0\r\n  5  4  2  0  0  0  0\r\n  8  4  1  0  0  0  0\r\n  9  5  1  0  0  0  0\r\n 10  6  2  0  0  0  0\r\n 26  7  1  0  0  0  0\r\n 25  8  2  0  0  0  0\r\n 11  9  2  0  0  0  0\r\n 12 10  1  0  0  0  0\r\n 12 26  2  0  0  0  0\r\n 25 11  1  0  0  0  0\r\n 14 13  1  0  0  0  0\r\n 15 14  1  0  0  0  0\r\n 16 15  1  0  0  0  0\r\n 19 16  1  0  0  0  0\r\n 21 16  1  0  0  0  0\r\n 18 17  1  0  0  0  0\r\n 20 17  1  0  0  0  0\r\n 22 17  1  0  0  0  0\r\n 21 18  1  0  0  0  0\r\n 20 19  1  0  0  0  0\r\n 23 22  1  0  0  0  0\r\n 24 23  1  0  0  0  0\r\n 26 28  1  0  0  0  0\r\n 28 27  1  0  0  0  0\r\n 28 29  2  0  0  0  0\r\nM  END\r\n>  <IDNUMBER>\r\nAAM 10376335                                                         \r\n\r\n>  <Weight>\r\n1.256000000000000e+002    \r\n\r\n$$$$','acetophenazine.mol',NULL,NULL,279),(24,'\r\nCDL SDfile Writer. v.200000\r\n\r\n 81 84  0  0  1  0            999 V2000\r\n    9.2394  -11.6848    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n    8.9056  -12.4402    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    8.7615  -11.0173    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   10.0475  -11.6673    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    8.1291  -12.7214    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    9.4538  -12.9813    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    9.2920  -10.3849    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    7.9429  -11.0137    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   10.2337  -12.5598    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    7.1348  -12.2365    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n    7.9885  -13.5259    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    8.8213   -9.7172    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   10.1072  -10.3849    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   10.9926  -12.8830    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    6.3618  -12.5140    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    9.3483   -9.0848    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   10.5218   -9.6716    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   10.5218  -11.0945    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    5.9085  -11.8254    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    5.9964  -13.3010    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    8.8774   -8.4208    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   10.1634   -9.1200    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    6.4672  -10.6132    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n    5.4307  -12.4859    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    5.1672  -13.2940    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    6.4356  -13.9371    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    9.4045   -7.7918    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   10.0511   -8.4102    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n    5.8839   -9.6751    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    4.7245  -12.6018    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    4.7983  -14.0249    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    9.1234   -7.0224    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   10.7573   -7.9921    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    6.3267   -9.0075    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    5.1777   -9.4291    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    5.0933  -11.8711    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    8.3083   -6.8818    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    9.6505   -6.3934    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   10.7678   -7.1559    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    5.8488   -8.3012    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n    6.9205   -9.0075    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    4.4890   -9.8859    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    5.0899   -8.7510    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    4.3801  -12.2786    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    5.0933  -11.0453    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    7.5775   -7.3948    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n    8.0272   -6.1124    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    6.1053   -7.5108    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    5.0266   -8.2978    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    3.6668  -11.8675    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    4.3801  -10.6308    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    6.7764   -7.0399    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    5.4342   -7.0329    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    4.7737   -7.5108    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    3.6668  -11.0453    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    5.4307   -6.2143    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    3.9972   -7.2578    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    2.9536  -10.6308    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    8.9021  -13.2590    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\r\n    9.6926  -11.0911    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\r\n   10.9329  -10.3849    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\r\n    6.7694  -13.2202    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\r\n    5.3710  -10.3849    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\r\n    4.4258   -9.2711    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\r\n    6.6815   -8.0940    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\r\n   11.4222   -8.3892    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   12.3386   -7.9891    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   13.1517   -8.4666    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   14.0035   -8.0279    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   15.0102   -8.5570    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   15.9395   -8.1053    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   16.8687   -8.5957    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   16.8687   -9.5637    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   16.0556   -9.8864    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   15.2038   -9.4863    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   14.2358   -9.8477    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   13.3065   -9.5637    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   12.6612  -10.0800    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   12.6612  -11.0093    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   13.3065  -11.4609    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   14.1196  -11.0480    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n  1  2  1  0  0  0  0\r\n  1  3  1  0  0  0  0\r\n  1  4  1  0  0  0  0\r\n  2  5  1  0  0  0  0\r\n  2  6  1  0  0  0  0\r\n  3  7  1  0  0  0  0\r\n  3  8  2  0  0  0  0\r\n  4  9  1  0  0  0  0\r\n  5 10  1  0  0  0  0\r\n  5 11  2  0  0  0  0\r\n  7 12  1  0  0  0  0\r\n  7 13  1  0  0  0  0\r\n  9 14  1  6  0  0  0\r\n 10 15  1  0  0  0  0\r\n 12 16  1  0  0  0  0\r\n 13 17  1  0  0  0  0\r\n 13 18  1  1  0  0  0\r\n 15 19  1  0  0  0  0\r\n 15 20  1  0  0  0  0\r\n 16 21  1  0  0  0  0\r\n 16 22  2  0  0  0  0\r\n 19 23  1  0  0  0  0\r\n 19 24  2  0  0  0  0\r\n 20 25  1  0  0  0  0\r\n 20 26  1  6  0  0  0\r\n 21 27  1  6  0  0  0\r\n 21 28  1  1  0  0  0\r\n 23 29  1  0  0  0  0\r\n 25 30  1  0  0  0  0\r\n 25 31  1  1  0  0  0\r\n 27 32  1  0  0  0  0\r\n 28 33  1  0  0  0  0\r\n 29 34  1  0  0  0  0\r\n 29 35  1  0  0  0  0\r\n 30 36  1  0  0  0  0\r\n 32 37  1  0  0  0  0\r\n 32 38  1  6  0  0  0\r\n 33 39  2  0  0  0  0\r\n 34 40  1  0  0  0  0\r\n 34 41  2  0  0  0  0\r\n 35 42  1  0  0  0  0\r\n 35 43  1  1  0  0  0\r\n 36 44  2  0  0  0  0\r\n 36 45  1  0  0  0  0\r\n 37 46  1  0  0  0  0\r\n 37 47  1  6  0  0  0\r\n 40 48  1  0  0  0  0\r\n 40 49  1  0  0  0  0\r\n 44 50  1  0  0  0  0\r\n 45 51  2  0  0  0  0\r\n 46 52  1  0  0  0  0\r\n 48 53  1  0  0  0  0\r\n 49 54  1  0  0  0  0\r\n 50 55  2  0  0  0  0\r\n 53 56  1  6  0  0  0\r\n 54 57  1  6  0  0  0\r\n 55 58  1  0  0  0  0\r\n  6  9  1  0  0  0  0\r\n 48 52  1  0  0  0  0\r\n 51 55  1  0  0  0  0\r\n 53 54  1  0  0  0  0\r\n  2 59  1  6  0  0  0\r\n  7 60  1  6  0  0  0\r\n 13 61  1  6  0  0  0\r\n 15 62  1  6  0  0  0\r\n 29 63  1  6  0  0  0\r\n 35 64  1  6  0  0  0\r\n 48 65  1  6  0  0  0\r\n 66 33  1  0  0  0  0\r\n 67 66  1  0  0  0  0\r\n 68 67  1  0  0  0  0\r\n 69 68  1  0  0  0  0\r\n 70 69  1  0  0  0  0\r\n 71 70  1  0  0  0  0\r\n 72 71  1  0  0  0  0\r\n 73 72  1  0  0  0  0\r\n 74 73  1  0  0  0  0\r\n 75 74  1  0  0  0  0\r\n 76 75  1  0  0  0  0\r\n 77 76  1  0  0  0  0\r\n 78 77  1  0  0  0  0\r\n 79 78  1  0  0  0  0\r\n 80 79  1  0  0  0  0\r\n 81 80  1  0  0  0  0\r\nM  END\r\n>  <IDNUMBER>\r\nAAM 10376335                                                         \r\n\r\n>  <Weight>\r\n1.256000000000000e+002    \r\n\r\n$$$$\r\n\r\n','aculeacin-a.mol',NULL,NULL,280),(25,'\r\nCDL SDfile Writer. v.200000\r\n\r\n 76 79  0  0  1  0            999 V2000\r\n   28.8617  -13.7158    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   29.1223  -14.4974    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   28.8617  -12.5422    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   28.0367  -13.7157    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   29.8170  -14.9316    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   28.4709  -15.0184    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   29.5565  -12.1080    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   28.1236  -12.1080    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   27.7762  -14.5408    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   30.5117  -14.4974    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   29.8170  -15.7132    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   29.5565  -11.2830    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   30.2512  -12.5422    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   31.2500  -14.9316    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   30.2512  -10.8922    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   30.9894  -12.1080    0.0000 S   0  0  0  0  0  0  0  0  0  0  0  0\r\n   31.2500  -15.9309    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   31.9446  -14.4974    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   30.2512  -10.0672    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   30.9894  -11.2830    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   31.6841  -12.5422    0.0000 S   0  0  0  0  0  0  0  0  0  0  0  0\r\n   31.9446  -16.3652    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   30.5117  -16.3652    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   32.6394  -14.9316    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   29.5565   -9.6330    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   30.9894   -9.6330    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   32.3789  -12.1080    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   32.6394  -15.9309    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   33.3775  -14.4974    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   29.5565   -8.5465    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   31.6841  -10.0672    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   33.1170  -12.5422    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   34.0723  -14.9316    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   30.8157   -7.8511    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   28.8617   -8.1123    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   32.3789   -9.6330    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   31.6841  -10.8922    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   33.8118  -12.1080    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   33.1170  -13.3238    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   31.9446   -8.5465    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   30.8157   -6.8089    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   34.5065  -12.5422    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   33.8118  -11.2830    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   33.1170   -7.8511    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   30.1209   -6.3748    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   35.2446  -12.1080    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   34.5500   -8.5465    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   33.1170   -7.0261    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   29.3828   -6.7656    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   35.9394  -12.5422    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   35.2446  -11.2830    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   35.3315   -7.8945    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   34.5500  -10.6308    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   28.6880   -6.3748    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   29.3828   -7.5906    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   36.6342  -12.1080    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   35.9394  -10.8922    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   36.0697   -8.2853    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   37.3289  -12.4988    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   36.6342  -11.2830    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   36.0697   -9.1103    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   36.7644   -7.8511    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   38.0670  -12.1080    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   37.3289  -10.8922    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   36.7644   -9.5011    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   37.4592   -8.2853    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   38.0670  -11.2830    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   37.4592   -9.1103    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   38.7618  -10.8922    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   34.8105  -14.4539    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   35.5920  -14.9316    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   34.8105  -13.6289    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   33.4209  -16.4086    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   34.1591  -15.9744    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   33.4209  -17.2770    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   29.8266  -14.0881    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\r\n  2  1  1  0  0  0  0\r\n  1  3  1  0  0  0  0\r\n  1  4  1  0  0  0  0\r\n  2  5  1  0  0  0  0\r\n  2  6  1  0  0  0  0\r\n  3  7  1  0  0  0  0\r\n  3  8  2  0  0  0  0\r\n  4  9  1  0  0  0  0\r\n  5 10  1  0  0  0  0\r\n  5 11  2  0  0  0  0\r\n  7 12  1  0  0  0  0\r\n  7 13  1  0  0  0  0\r\n 14 10  1  1  0  0  0\r\n 12 15  1  0  0  0  0\r\n 13 16  1  0  0  0  0\r\n 14 17  1  0  0  0  0\r\n 14 18  1  0  0  0  0\r\n 15 19  1  0  0  0  0\r\n 15 20  2  0  0  0  0\r\n 16 21  1  0  0  0  0\r\n 17 22  1  0  0  0  0\r\n 17 23  2  0  0  0  0\r\n 18 24  1  0  0  0  0\r\n 19 25  1  1  0  0  0\r\n 19 26  1  0  0  0  0\r\n 21 27  1  0  0  0  0\r\n 22 28  1  0  0  0  0\r\n 24 29  1  0  0  0  0\r\n 25 30  1  0  0  0  0\r\n 26 31  1  0  0  0  0\r\n 27 32  1  0  0  0  0\r\n 29 33  1  0  0  0  0\r\n 30 34  1  0  0  0  0\r\n 30 35  2  0  0  0  0\r\n 31 36  1  0  0  0  0\r\n 31 37  2  0  0  0  0\r\n 32 38  1  0  0  0  0\r\n 32 39  1  1  0  0  0\r\n 34 40  1  6  0  0  0\r\n 34 41  1  0  0  0  0\r\n 38 42  1  0  0  0  0\r\n 38 43  2  0  0  0  0\r\n 40 44  1  0  0  0  0\r\n 41 45  1  0  0  0  0\r\n 46 42  1  6  0  0  0\r\n 44 47  1  0  0  0  0\r\n 44 48  2  0  0  0  0\r\n 45 49  1  0  0  0  0\r\n 46 50  1  0  0  0  0\r\n 46 51  1  0  0  0  0\r\n 47 52  1  0  0  0  0\r\n 47 53  1  6  0  0  0\r\n 49 54  1  0  0  0  0\r\n 49 55  2  0  0  0  0\r\n 50 56  1  0  0  0  0\r\n 51 57  2  0  0  0  0\r\n 52 58  1  0  0  0  0\r\n 56 59  2  0  0  0  0\r\n 56 60  1  0  0  0  0\r\n 58 61  2  0  0  0  0\r\n 58 62  1  0  0  0  0\r\n 59 63  1  0  0  0  0\r\n 60 64  2  0  0  0  0\r\n 61 65  1  0  0  0  0\r\n 62 66  2  0  0  0  0\r\n 63 67  2  0  0  0  0\r\n 65 68  2  0  0  0  0\r\n 67 69  1  0  0  0  0\r\n  6  9  1  0  0  0  0\r\n 51 53  1  0  0  0  0\r\n 64 67  1  0  0  0  0\r\n 66 68  1  0  0  0  0\r\n 33 70  1  0  0  0  0\r\n 70 71  1  0  0  0  0\r\n 70 72  2  0  0  0  0\r\n 28 73  1  0  0  0  0\r\n 73 74  1  0  0  0  0\r\n 73 75  2  0  0  0  0\r\n  2 76  1  1  0  0  0\r\nM  END\r\n>  <IDNUMBER>\r\nAAM 10376335                                                         \r\n\r\n>  <Weight>\r\n1.256000000000000e+002    \r\n\r\n$$$$\r\n','argipressin.mol',NULL,NULL,281),(26,'[NO NAME]\r\n  CHEMW2  0808111105072D                              \r\nCreated with ChemWriter - http://chemwriter.com\r\n 34 37  0  0  1  0            999 V2000\r\n    0.0000    0.8250    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    0.7145    0.4125    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    0.7145   -0.4125    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    0.0000   -0.8250    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -0.7145   -0.4125    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -0.7145    0.4125    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    2.1434   -2.0625    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    2.1434   -2.8875    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    2.9684   -2.8875    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n    2.9684   -2.0625    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    3.7530   -3.1424    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    4.2380   -2.4750    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    3.7530   -1.8076    0.0000 S   0  0  0  0  0  0  0  0  0  0  0  0\r\n    4.9567   -2.8800    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    4.9567   -2.0700    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    4.0080   -3.9271    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    4.8149   -4.0986    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    3.4559   -4.5402    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    1.4289   -1.6500    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n    0.7145   -2.0625    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    0.7145   -2.8875    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    0.0000   -1.6500    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -0.7145   -2.0625    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -1.4289   -1.6500    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -1.4289   -0.8250    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    1.5600   -3.4709    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    2.9684   -1.2375    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\r\n    0.7145   -1.2375    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -3.4130   -2.4749    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -2.9280   -1.8075    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -2.1434   -2.0625    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -2.1434   -2.8875    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -2.9281   -3.1424    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   -3.1829   -1.0229    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n  1  2  2  0  0  0  0\r\n 22  4  1  0  0  0  0\r\n  4  5  1  0  0  0  0\r\n  6  1  1  0  0  0  0\r\n  5  6  2  0  0  0  0\r\n  4  3  2  0  0  0  0\r\n  2  3  1  0  0  0  0\r\n  7  8  1  0  0  0  0\r\n  8  9  1  0  0  0  0\r\n 10  9  1  0  0  0  0\r\n 10  7  1  0  0  0  0\r\n  9 11  1  0  0  0  0\r\n 11 12  1  0  0  0  0\r\n 12 13  1  0  0  0  0\r\n 10 13  1  0  0  0  0\r\n 12 14  1  0  0  0  0\r\n 12 15  1  0  0  0  0\r\n 11 16  1  6  0  0  0\r\n 16 17  1  0  0  0  0\r\n 16 18  2  0  0  0  0\r\n  7 19  1  1  0  0  0\r\n 19 20  1  0  0  0  0\r\n 20 21  2  0  0  0  0\r\n 22 20  1  0  0  0  0\r\n 23 24  1  0  0  0  0\r\n 24 31  1  0  0  0  0\r\n 22 23  1  0  0  0  0\r\n 24 25  2  0  0  0  0\r\n  8 26  2  0  0  0  0\r\n 10 27  1  6  0  0  0\r\n 22 28  1  1  0  0  0\r\n 29 30  1  0  0  0  0\r\n 30 31  1  0  0  0  0\r\n 31 32  1  0  0  0  0\r\n 32 33  1  0  0  0  0\r\n 29 33  1  0  0  0  0\r\n 30 34  2  0  0  0  0\r\nM  END\r\n>  <IDNUMBER>\r\nAAM 10376335                                                         \r\n\r\n>  <Weight>\r\n1.256000000000000e+002    \r\n\r\n$$$$\r\n\r\n','azlocillin.mol',5,NULL,277);
/*!40000 ALTER TABLE `mol_file` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `molecule`
--

DROP TABLE IF EXISTS `molecule`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `molecule` (
  `molecule_id` smallint(6) NOT NULL AUTO_INCREMENT,
  `molecule_name` varchar(100) DEFAULT NULL,
  `molecule_protein_id` smallint(6) DEFAULT NULL,
  `logp` smallint(6) DEFAULT NULL,
  `HBD` varchar(100) DEFAULT NULL,
  `HBA` varchar(100) DEFAULT NULL,
  `molecule_weight` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`molecule_id`),
  KEY `molecule_protein_id` (`molecule_protein_id`),
  CONSTRAINT `molecule_ibfk_1` FOREIGN KEY (`molecule_protein_id`) REFERENCES `proteins` (`protein_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `molecule`
--

LOCK TABLES `molecule` WRITE;
/*!40000 ALTER TABLE `molecule` DISABLE KEYS */;
/*!40000 ALTER TABLE `molecule` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `organisation`
--

DROP TABLE IF EXISTS `organisation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `organisation` (
  `organisation_id` smallint(6) NOT NULL AUTO_INCREMENT,
  `organisation_name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`organisation_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `organisation`
--

LOCK TABLES `organisation` WRITE;
/*!40000 ALTER TABLE `organisation` DISABLE KEYS */;
INSERT INTO `organisation` VALUES (1,'molplex');
/*!40000 ALTER TABLE `organisation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `partnership`
--

DROP TABLE IF EXISTS `partnership`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `partnership` (
  `partnership_id` smallint(6) NOT NULL AUTO_INCREMENT,
  `partnership_name` varchar(100) DEFAULT NULL,
  `partnership_organisation_id` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`partnership_id`),
  KEY `partnership_organisation_id` (`partnership_organisation_id`),
  CONSTRAINT `partnership_ibfk_1` FOREIGN KEY (`partnership_organisation_id`) REFERENCES `organisation` (`organisation_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `partnership`
--

LOCK TABLES `partnership` WRITE;
/*!40000 ALTER TABLE `partnership` DISABLE KEYS */;
/*!40000 ALTER TABLE `partnership` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pending_for_purchase`
--

DROP TABLE IF EXISTS `pending_for_purchase`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pending_for_purchase` (
  `pending_for_purchase_id` smallint(6) NOT NULL AUTO_INCREMENT,
  `structure_id` bigint(20) DEFAULT NULL,
  `assay_id` smallint(6) DEFAULT NULL,
  `pfsa_time_stamp` datetime DEFAULT NULL,
  `original_requested_by` smallint(6) DEFAULT NULL,
  `approval_requested_by` smallint(6) DEFAULT NULL,
  `approved_by` smallint(6) DEFAULT NULL,
  `approval_time_stamp` datetime DEFAULT NULL,
  PRIMARY KEY (`pending_for_purchase_id`),
  KEY `assay_id` (`assay_id`),
  KEY `original_requested_by` (`original_requested_by`),
  KEY `approved_by` (`approved_by`),
  CONSTRAINT `pending_for_purchase_ibfk_1` FOREIGN KEY (`assay_id`) REFERENCES `assay` (`assay_id`),
  CONSTRAINT `pending_for_purchase_ibfk_2` FOREIGN KEY (`original_requested_by`) REFERENCES `user` (`user_id`),
  CONSTRAINT `pending_for_purchase_ibfk_3` FOREIGN KEY (`approved_by`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pending_for_purchase`
--

LOCK TABLES `pending_for_purchase` WRITE;
/*!40000 ALTER TABLE `pending_for_purchase` DISABLE KEYS */;
/*!40000 ALTER TABLE `pending_for_purchase` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pending_for_purchase_approval`
--

DROP TABLE IF EXISTS `pending_for_purchase_approval`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pending_for_purchase_approval` (
  `pending_for_purchase_approval_id` smallint(6) NOT NULL AUTO_INCREMENT,
  `structure_id` bigint(20) DEFAULT NULL,
  `assay_id` smallint(6) DEFAULT NULL,
  `pfsa_time_stamp` datetime DEFAULT NULL,
  `original_requested_by` smallint(6) DEFAULT NULL,
  `approval_requested_by` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`pending_for_purchase_approval_id`),
  KEY `assay_id` (`assay_id`),
  KEY `original_requested_by` (`original_requested_by`),
  KEY `approval_requested_by` (`approval_requested_by`),
  CONSTRAINT `pending_for_purchase_approval_ibfk_1` FOREIGN KEY (`assay_id`) REFERENCES `assay` (`assay_id`),
  CONSTRAINT `pending_for_purchase_approval_ibfk_2` FOREIGN KEY (`original_requested_by`) REFERENCES `user` (`user_id`),
  CONSTRAINT `pending_for_purchase_approval_ibfk_3` FOREIGN KEY (`approval_requested_by`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pending_for_purchase_approval`
--

LOCK TABLES `pending_for_purchase_approval` WRITE;
/*!40000 ALTER TABLE `pending_for_purchase_approval` DISABLE KEYS */;
/*!40000 ALTER TABLE `pending_for_purchase_approval` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pending_for_screening`
--

DROP TABLE IF EXISTS `pending_for_screening`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pending_for_screening` (
  `pending_for_screening_id` smallint(6) NOT NULL AUTO_INCREMENT,
  `structure_id` bigint(20) DEFAULT NULL,
  `assay_id` smallint(6) DEFAULT NULL,
  `pfsa_time_stamp` datetime DEFAULT NULL,
  `original_requested_by` smallint(6) DEFAULT NULL,
  `approval_requested_by` smallint(6) DEFAULT NULL,
  `approved_by` smallint(6) DEFAULT NULL,
  `approval_time_stamp` datetime DEFAULT NULL,
  `screening_time` datetime DEFAULT NULL,
  PRIMARY KEY (`pending_for_screening_id`),
  KEY `assay_id` (`assay_id`),
  KEY `original_requested_by` (`original_requested_by`),
  KEY `approved_by` (`approved_by`),
  CONSTRAINT `pending_for_screening_ibfk_1` FOREIGN KEY (`assay_id`) REFERENCES `assay` (`assay_id`),
  CONSTRAINT `pending_for_screening_ibfk_2` FOREIGN KEY (`original_requested_by`) REFERENCES `user` (`user_id`),
  CONSTRAINT `pending_for_screening_ibfk_3` FOREIGN KEY (`approved_by`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pending_for_screening`
--

LOCK TABLES `pending_for_screening` WRITE;
/*!40000 ALTER TABLE `pending_for_screening` DISABLE KEYS */;
/*!40000 ALTER TABLE `pending_for_screening` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pending_for_synthesis`
--

DROP TABLE IF EXISTS `pending_for_synthesis`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pending_for_synthesis` (
  `pending_for_synthesis_id` smallint(6) NOT NULL AUTO_INCREMENT,
  `structure_id` bigint(20) DEFAULT NULL,
  `assay_id` smallint(6) DEFAULT NULL,
  `pfsa_time_stamp` datetime DEFAULT NULL,
  `original_requested_by` smallint(6) DEFAULT NULL,
  `approval_requested_by` smallint(6) DEFAULT NULL,
  `approved_by` smallint(6) DEFAULT NULL,
  `approval_time_stamp` datetime DEFAULT NULL,
  PRIMARY KEY (`pending_for_synthesis_id`),
  KEY `assay_id` (`assay_id`),
  KEY `original_requested_by` (`original_requested_by`),
  KEY `approved_by` (`approved_by`),
  CONSTRAINT `pending_for_synthesis_ibfk_1` FOREIGN KEY (`assay_id`) REFERENCES `assay` (`assay_id`),
  CONSTRAINT `pending_for_synthesis_ibfk_2` FOREIGN KEY (`original_requested_by`) REFERENCES `user` (`user_id`),
  CONSTRAINT `pending_for_synthesis_ibfk_3` FOREIGN KEY (`approved_by`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pending_for_synthesis`
--

LOCK TABLES `pending_for_synthesis` WRITE;
/*!40000 ALTER TABLE `pending_for_synthesis` DISABLE KEYS */;
/*!40000 ALTER TABLE `pending_for_synthesis` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pending_for_synthesis_approval`
--

DROP TABLE IF EXISTS `pending_for_synthesis_approval`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pending_for_synthesis_approval` (
  `pending_for_synthesis_approval_id` smallint(6) NOT NULL AUTO_INCREMENT,
  `structure_id` bigint(20) DEFAULT NULL,
  `assay_id` smallint(6) DEFAULT NULL,
  `pfsa_time_stamp` datetime DEFAULT NULL,
  `original_requested_by` smallint(6) DEFAULT NULL,
  `approval_requested_by` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`pending_for_synthesis_approval_id`),
  KEY `assay_id` (`assay_id`),
  KEY `original_requested_by` (`original_requested_by`),
  KEY `approval_requested_by` (`approval_requested_by`),
  CONSTRAINT `pending_for_synthesis_approval_ibfk_1` FOREIGN KEY (`assay_id`) REFERENCES `assay` (`assay_id`),
  CONSTRAINT `pending_for_synthesis_approval_ibfk_2` FOREIGN KEY (`original_requested_by`) REFERENCES `user` (`user_id`),
  CONSTRAINT `pending_for_synthesis_approval_ibfk_3` FOREIGN KEY (`approval_requested_by`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pending_for_synthesis_approval`
--

LOCK TABLES `pending_for_synthesis_approval` WRITE;
/*!40000 ALTER TABLE `pending_for_synthesis_approval` DISABLE KEYS */;
/*!40000 ALTER TABLE `pending_for_synthesis_approval` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `portfolios`
--

DROP TABLE IF EXISTS `portfolios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `portfolios` (
  `portfolio_id` smallint(6) NOT NULL AUTO_INCREMENT,
  `portfolio_name` varchar(100) DEFAULT NULL,
  `portfolio_organisation_id` smallint(6) DEFAULT NULL,
  `portfolio_desc` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`portfolio_id`),
  KEY `portfolio_organisation_id` (`portfolio_organisation_id`),
  CONSTRAINT `portfolios_ibfk_1` FOREIGN KEY (`portfolio_organisation_id`) REFERENCES `organisation` (`organisation_id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `portfolios`
--

LOCK TABLES `portfolios` WRITE;
/*!40000 ALTER TABLE `portfolios` DISABLE KEYS */;
INSERT INTO `portfolios` VALUES (8,'Portfolio1',1,'Dengue'),(9,'Portfolio2',1,'Filariasis'),(10,'Portfolio3',1,'Malaria'),(11,'Portfolio4',1,'Gram Positive Antibacterials'),(12,'Portfolio5',1,'Androgenic Alopecia'),(13,'Portfolio6',1,'Infectious Mononucleosis');
/*!40000 ALTER TABLE `portfolios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `post_experimental_request`
--

DROP TABLE IF EXISTS `post_experimental_request`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `post_experimental_request` (
  `Post_experimental_request_id` smallint(6) NOT NULL AUTO_INCREMENT,
  `structure_id` bigint(20) DEFAULT NULL,
  `assay_id` smallint(6) DEFAULT NULL,
  `er_time_stamp` datetime DEFAULT NULL,
  `deleted_by` smallint(6) DEFAULT NULL,
  `deletion_time` datetime DEFAULT NULL,
  PRIMARY KEY (`Post_experimental_request_id`),
  KEY `deleted_by` (`deleted_by`),
  KEY `assay_id` (`assay_id`),
  CONSTRAINT `post_experimental_request_ibfk_1` FOREIGN KEY (`deleted_by`) REFERENCES `user` (`user_id`),
  CONSTRAINT `post_experimental_request_ibfk_2` FOREIGN KEY (`assay_id`) REFERENCES `assay` (`assay_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post_experimental_request`
--

LOCK TABLES `post_experimental_request` WRITE;
/*!40000 ALTER TABLE `post_experimental_request` DISABLE KEYS */;
/*!40000 ALTER TABLE `post_experimental_request` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project`
--

DROP TABLE IF EXISTS `project`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `project` (
  `project_id` smallint(6) NOT NULL AUTO_INCREMENT,
  `project_name` varchar(100) DEFAULT NULL,
  `project_description` text,
  `creator_id` smallint(6) DEFAULT NULL,
  `total_budget_gbp` int(11) DEFAULT NULL,
  `portfolio_id` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`project_id`),
  UNIQUE KEY `project_name` (`project_name`),
  KEY `creator_id` (`creator_id`),
  KEY `portfolio_id` (`portfolio_id`),
  CONSTRAINT `FK_project_portfolio` FOREIGN KEY (`portfolio_id`) REFERENCES `portfolios` (`portfolio_id`),
  CONSTRAINT `FK_project_user` FOREIGN KEY (`creator_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project`
--

LOCK TABLES `project` WRITE;
/*!40000 ALTER TABLE `project` DISABLE KEYS */;
INSERT INTO `project` VALUES (27,'LTAS','LTAS',1,2000,8),(29,'Dengue','Debgue',1,123,9);
/*!40000 ALTER TABLE `project` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project_details`
--

DROP TABLE IF EXISTS `project_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `project_details` (
  `prj_detail_id` smallint(6) NOT NULL AUTO_INCREMENT,
  `project_tpp_id` smallint(6) DEFAULT NULL,
  `project_id` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`prj_detail_id`),
  KEY `FK_project_details_tpp` (`project_tpp_id`),
  KEY `FK_project_details_prj` (`project_id`),
  CONSTRAINT `FK_project_details_prj` FOREIGN KEY (`project_id`) REFERENCES `project` (`project_id`),
  CONSTRAINT `FK_project_details_tpp` FOREIGN KEY (`project_tpp_id`) REFERENCES `tpp` (`tpp_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project_details`
--

LOCK TABLES `project_details` WRITE;
/*!40000 ALTER TABLE `project_details` DISABLE KEYS */;
INSERT INTO `project_details` VALUES (1,40,27),(2,41,29);
/*!40000 ALTER TABLE `project_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project_members`
--

DROP TABLE IF EXISTS `project_members`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `project_members` (
  `project_member_id` smallint(6) NOT NULL,
  `project_id` smallint(6) DEFAULT NULL,
  `user_id` smallint(6) DEFAULT NULL,
  `is_manager` tinyint(4) DEFAULT '0',
  PRIMARY KEY (`project_member_id`),
  UNIQUE KEY `project_id` (`project_id`,`user_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `project_members_ibfk_1` FOREIGN KEY (`project_id`) REFERENCES `project` (`project_id`),
  CONSTRAINT `project_members_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project_members`
--

LOCK TABLES `project_members` WRITE;
/*!40000 ALTER TABLE `project_members` DISABLE KEYS */;
/*!40000 ALTER TABLE `project_members` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `proteins`
--

DROP TABLE IF EXISTS `proteins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `proteins` (
  `protein_id` smallint(6) NOT NULL AUTO_INCREMENT,
  `protein_name` varchar(100) DEFAULT NULL,
  `protein_target_id` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`protein_id`),
  KEY `protein_target_id` (`protein_target_id`),
  CONSTRAINT `proteins_ibfk_1` FOREIGN KEY (`protein_target_id`) REFERENCES `targets` (`target_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `proteins`
--

LOCK TABLES `proteins` WRITE;
/*!40000 ALTER TABLE `proteins` DISABLE KEYS */;
/*!40000 ALTER TABLE `proteins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rating`
--

DROP TABLE IF EXISTS `rating`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rating` (
  `rating_id` smallint(5) NOT NULL AUTO_INCREMENT,
  `rating_name` varchar(45) NOT NULL DEFAULT '',
  PRIMARY KEY (`rating_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rating`
--

LOCK TABLES `rating` WRITE;
/*!40000 ALTER TABLE `rating` DISABLE KEYS */;
INSERT INTO `rating` VALUES (1,'poor'),(2,'acceptable'),(3,'ok'),(4,'good'),(5,'excellent');
/*!40000 ALTER TABLE `rating` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rnd_therapy`
--

DROP TABLE IF EXISTS `rnd_therapy`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rnd_therapy` (
  `rnd_therapy_id` smallint(6) NOT NULL AUTO_INCREMENT,
  `company_id` smallint(6) DEFAULT NULL,
  `approved_therapy_id` smallint(6) DEFAULT NULL,
  `development_phase_id` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`rnd_therapy_id`),
  UNIQUE KEY `rnd_therapy_id` (`rnd_therapy_id`,`company_id`,`approved_therapy_id`,`development_phase_id`),
  KEY `company_id` (`company_id`),
  KEY `approved_therapy_id` (`approved_therapy_id`),
  KEY `development_phase_id` (`development_phase_id`),
  CONSTRAINT `rnd_therapy_ibfk_1` FOREIGN KEY (`company_id`) REFERENCES `company` (`company_id`),
  CONSTRAINT `rnd_therapy_ibfk_2` FOREIGN KEY (`approved_therapy_id`) REFERENCES `approved_therapy` (`approved_therapy_id`),
  CONSTRAINT `rnd_therapy_ibfk_3` FOREIGN KEY (`development_phase_id`) REFERENCES `development_phase` (`development_phase_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rnd_therapy`
--

LOCK TABLES `rnd_therapy` WRITE;
/*!40000 ALTER TABLE `rnd_therapy` DISABLE KEYS */;
/*!40000 ALTER TABLE `rnd_therapy` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rtp`
--

DROP TABLE IF EXISTS `rtp`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rtp` (
  `rtp_id` smallint(6) NOT NULL AUTO_INCREMENT,
  `rtp_project_id` smallint(6) DEFAULT NULL,
  `rtp_development_phase_id` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`rtp_id`),
  UNIQUE KEY `rtp_id` (`rtp_id`,`rtp_project_id`,`rtp_development_phase_id`),
  KEY `rtp_project_id` (`rtp_project_id`),
  KEY `rtp_development_phase_id` (`rtp_development_phase_id`),
  CONSTRAINT `rtp_ibfk_1` FOREIGN KEY (`rtp_project_id`) REFERENCES `project` (`project_id`),
  CONSTRAINT `rtp_ibfk_2` FOREIGN KEY (`rtp_development_phase_id`) REFERENCES `development_phase` (`development_phase_id`)
) ENGINE=InnoDB AUTO_INCREMENT=282 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rtp`
--

LOCK TABLES `rtp` WRITE;
/*!40000 ALTER TABLE `rtp` DISABLE KEYS */;
INSERT INTO `rtp` VALUES (277,27,1),(278,27,2),(279,27,3),(280,27,5),(281,27,4);
/*!40000 ALTER TABLE `rtp` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rtp_goal`
--

DROP TABLE IF EXISTS `rtp_goal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rtp_goal` (
  `rtp_goal_id` smallint(6) NOT NULL AUTO_INCREMENT,
  `rtp_id` smallint(6) DEFAULT NULL,
  `compound_property_id` smallint(6) DEFAULT NULL,
  `logical_operator_id` smallint(6) DEFAULT NULL,
  `rtp_goal_value` double DEFAULT NULL,
  PRIMARY KEY (`rtp_goal_id`),
  UNIQUE KEY `compound_property_id` (`compound_property_id`,`logical_operator_id`,`rtp_goal_value`),
  KEY `rtp_id` (`rtp_id`),
  KEY `logical_operator_id` (`logical_operator_id`),
  CONSTRAINT `FK_rtp_goal_3` FOREIGN KEY (`logical_operator_id`) REFERENCES `logical_operators` (`logical_operator_id`),
  CONSTRAINT `rtp_goal_ibfk_1` FOREIGN KEY (`rtp_id`) REFERENCES `rtp` (`rtp_id`),
  CONSTRAINT `rtp_goal_ibfk_2` FOREIGN KEY (`compound_property_id`) REFERENCES `compound_property` (`compound_property_id`)
) ENGINE=InnoDB AUTO_INCREMENT=198 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rtp_goal`
--

LOCK TABLES `rtp_goal` WRITE;
/*!40000 ALTER TABLE `rtp_goal` DISABLE KEYS */;
INSERT INTO `rtp_goal` VALUES (179,277,21,1,2.5),(180,277,23,2,3.5),(181,278,23,3,3.3),(182,279,24,4,4.4),(183,280,26,5,3),(184,281,31,1,4.4),(185,277,29,3,2),(186,277,37,4,5),(187,278,43,2,3.3),(188,278,50,4,4),(189,279,49,2,3.3),(190,279,57,1,5),(191,280,74,2,3.3),(192,280,84,3,2),(193,281,91,3,3),(194,281,92,4,4),(195,281,94,3,4),(196,277,123,2,2.5),(197,279,31,3,5);
/*!40000 ALTER TABLE `rtp_goal` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `side_effect_tolerance`
--

DROP TABLE IF EXISTS `side_effect_tolerance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `side_effect_tolerance` (
  `side_effect_tolerance_id` smallint(6) NOT NULL AUTO_INCREMENT,
  `side_effect_tolerance_name` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`side_effect_tolerance_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `side_effect_tolerance`
--

LOCK TABLES `side_effect_tolerance` WRITE;
/*!40000 ALTER TABLE `side_effect_tolerance` DISABLE KEYS */;
INSERT INTO `side_effect_tolerance` VALUES (1,'Medium'),(2,'None'),(3,'Small'),(4,'High');
/*!40000 ALTER TABLE `side_effect_tolerance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `structure`
--

DROP TABLE IF EXISTS `structure`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `structure` (
  `structure_id` smallint(6) NOT NULL AUTO_INCREMENT,
  `structure_name` varchar(100) DEFAULT NULL,
  `structure_molecule_id` smallint(6) DEFAULT NULL,
  `smiles` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`structure_id`),
  KEY `structure_molecule_id` (`structure_molecule_id`),
  CONSTRAINT `structure_ibfk_1` FOREIGN KEY (`structure_molecule_id`) REFERENCES `molecule` (`molecule_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `structure`
--

LOCK TABLES `structure` WRITE;
/*!40000 ALTER TABLE `structure` DISABLE KEYS */;
/*!40000 ALTER TABLE `structure` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `targets`
--

DROP TABLE IF EXISTS `targets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `targets` (
  `target_id` smallint(6) NOT NULL AUTO_INCREMENT,
  `target_name` varchar(100) DEFAULT NULL,
  `target_assay_id` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`target_id`),
  KEY `target_assay_id` (`target_assay_id`),
  CONSTRAINT `targets_ibfk_1` FOREIGN KEY (`target_assay_id`) REFERENCES `assay` (`assay_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `targets`
--

LOCK TABLES `targets` WRITE;
/*!40000 ALTER TABLE `targets` DISABLE KEYS */;
INSERT INTO `targets` VALUES (1,'Test',1);
/*!40000 ALTER TABLE `targets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `therapy_administration`
--

DROP TABLE IF EXISTS `therapy_administration`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `therapy_administration` (
  `thearapy_administration_id` smallint(6) NOT NULL AUTO_INCREMENT,
  `therapy_administration_name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`thearapy_administration_id`),
  UNIQUE KEY `therapy_administration_name` (`therapy_administration_name`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `therapy_administration`
--

LOCK TABLES `therapy_administration` WRITE;
/*!40000 ALTER TABLE `therapy_administration` DISABLE KEYS */;
INSERT INTO `therapy_administration` VALUES (2,'INTRA VENOUS'),(1,'ORAL'),(4,'RECTAL'),(3,'TOPICAL');
/*!40000 ALTER TABLE `therapy_administration` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tpp`
--

DROP TABLE IF EXISTS `tpp`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpp` (
  `tpp_id` smallint(6) NOT NULL AUTO_INCREMENT,
  `tpp_name` varchar(100) DEFAULT NULL,
  `desired_effect` varchar(45) DEFAULT NULL,
  `market_target_description` varchar(45) DEFAULT NULL,
  `global_incidence` smallint(6) DEFAULT NULL,
  `global_prevalence` smallint(6) DEFAULT NULL,
  `target_condition` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`tpp_id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tpp`
--

LOCK TABLES `tpp` WRITE;
/*!40000 ALTER TABLE `tpp` DISABLE KEYS */;
INSERT INTO `tpp` VALUES (38,'Tpp1','Tpp1','Tpp1',2000,1000,'Tpp'),(39,'Epstein- Barr Virus','Epstein- Barr Virus','Epstein- Barr Virus',300,2000,'Epstein- Barr Virus'),(40,'gram-positive bacteria','gram-positive bacteria','gram-positive bacteria',4000,3000,'gram-positive bacteria'),(41,'Dengue virus DENV-1 & DENV-2','Dengue virus DENV-1 & DENV-2','Dengue virus DENV-1 & DENV-2',4300,4200,'Dengue virus DENV-1 & DENV-2'),(42,'Wuchereria bancrofti','Wuchereria bancrofti','Wuchereria bancrofti',3457,3456,'Wuchereria bancrofti'),(43,'Plasmodium falciparum/ Plasmodium Vivax','Plasmodium falciparum/ Plasmodium Vivax','Plasmodium falciparum/ Plasmodium Vivax',5600,3456,'Plasmodium falciparum/ Plasmodium Vivax'),(44,'Pens','pens','Pens',2000,200,'pen'),(45,'Benz','Benz','Benz',1800,1900,'pen'),(46,'swe','swe','sss',234,233,'ere'),(47,'der','der','der',324,322,'der'),(48,'ret','ret','ret',434,432,'ret'),(49,'fff','2323','222',2,2,'22'),(50,'TppTest','Test','Test',100,50,'TppTest');
/*!40000 ALTER TABLE `tpp` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tpp_goal`
--

DROP TABLE IF EXISTS `tpp_goal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpp_goal` (
  `tpp_goal_id` smallint(6) NOT NULL AUTO_INCREMENT,
  `tpp_id` smallint(6) DEFAULT NULL,
  `side_effect_tolerance_id` smallint(6) DEFAULT NULL,
  `thearapy_administration_id` smallint(6) DEFAULT NULL,
  `competitors_id` smallint(6) DEFAULT NULL,
  `comparator_id` smallint(6) DEFAULT NULL,
  `world_regions_id` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`tpp_goal_id`),
  KEY `FK_tpp_goal_AppTY` (`comparator_id`),
  KEY `FK_tpp_goal_Thy_Admin` (`thearapy_administration_id`),
  KEY `FK_tpp_goal_company` (`competitors_id`),
  KEY `FK_tpp_goal_WorldRs` (`world_regions_id`),
  KEY `FK_tpp_goal_SideEffect` (`side_effect_tolerance_id`),
  KEY `FK_tpp_goal_tpp` (`tpp_id`),
  CONSTRAINT `FK_tpp_goal_AppTY` FOREIGN KEY (`comparator_id`) REFERENCES `approved_therapy` (`approved_therapy_id`),
  CONSTRAINT `FK_tpp_goal_company` FOREIGN KEY (`competitors_id`) REFERENCES `company` (`company_id`),
  CONSTRAINT `FK_tpp_goal_SideEffect` FOREIGN KEY (`side_effect_tolerance_id`) REFERENCES `side_effect_tolerance` (`side_effect_tolerance_id`),
  CONSTRAINT `FK_tpp_goal_Thy_Admin` FOREIGN KEY (`thearapy_administration_id`) REFERENCES `therapy_administration` (`thearapy_administration_id`),
  CONSTRAINT `FK_tpp_goal_tpp` FOREIGN KEY (`tpp_id`) REFERENCES `tpp` (`tpp_id`),
  CONSTRAINT `FK_tpp_goal_WorldRs` FOREIGN KEY (`world_regions_id`) REFERENCES `world_regions` (`world_regions_id`)
) ENGINE=InnoDB AUTO_INCREMENT=411 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tpp_goal`
--

LOCK TABLES `tpp_goal` WRITE;
/*!40000 ALTER TABLE `tpp_goal` DISABLE KEYS */;
INSERT INTO `tpp_goal` VALUES (378,44,1,2,2,14,3),(379,44,1,2,2,14,2),(380,44,1,2,2,14,1),(381,44,1,2,2,14,4),(382,45,3,3,2,14,4),(383,45,3,3,2,14,3),(384,45,3,3,2,14,1),(385,45,3,3,2,14,6),(386,45,3,3,2,14,5),(387,45,3,3,2,14,4),(388,45,3,3,2,14,8),(389,45,3,3,2,14,2),(390,NULL,NULL,NULL,NULL,NULL,NULL),(391,NULL,NULL,NULL,NULL,NULL,NULL),(392,NULL,NULL,NULL,NULL,NULL,NULL),(393,NULL,NULL,NULL,NULL,NULL,NULL),(394,45,1,2,2,14,4),(395,45,1,2,2,14,1),(396,45,1,2,2,14,2),(397,45,1,2,2,14,3),(398,46,3,1,1,14,3),(399,46,3,1,1,14,8),(400,47,3,3,3,15,9),(401,47,3,3,3,15,6),(402,48,3,1,2,14,5),(403,48,3,1,2,14,8),(404,49,4,1,2,15,5),(405,49,4,1,2,15,3),(406,NULL,NULL,NULL,NULL,NULL,NULL),(407,NULL,NULL,NULL,NULL,NULL,NULL),(408,50,4,1,2,15,3),(409,50,4,1,2,15,5),(410,50,4,1,2,15,3);
/*!40000 ALTER TABLE `tpp_goal` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `user_id` smallint(6) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(100) DEFAULT NULL,
  `last_name` varchar(100) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `address` text,
  `phone` varchar(20) DEFAULT NULL,
  `user_password` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'user1','user','user@user.com','user','12345','user');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `world_region`
--

DROP TABLE IF EXISTS `world_region`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `world_region` (
  `world_region_id` smallint(6) NOT NULL AUTO_INCREMENT,
  `world_region_name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`world_region_id`),
  UNIQUE KEY `world_region_name` (`world_region_name`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `world_region`
--

LOCK TABLES `world_region` WRITE;
/*!40000 ALTER TABLE `world_region` DISABLE KEYS */;
INSERT INTO `world_region` VALUES (9,'Africa'),(7,'Asia'),(12,'Australia'),(2,'Central America'),(5,'Eastern Europe'),(11,'Japan'),(10,'Middle East'),(1,'North America'),(6,'Russia'),(8,'SE Asia'),(3,'South America'),(4,'Western Europe');
/*!40000 ALTER TABLE `world_region` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `world_regions`
--

DROP TABLE IF EXISTS `world_regions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `world_regions` (
  `world_regions_id` smallint(6) NOT NULL AUTO_INCREMENT,
  `world_region_id` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`world_regions_id`),
  UNIQUE KEY `world_regions_id` (`world_regions_id`,`world_region_id`),
  KEY `world_region_id` (`world_region_id`),
  CONSTRAINT `FK_world_regions_wr` FOREIGN KEY (`world_region_id`) REFERENCES `world_region` (`world_region_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `world_regions`
--

LOCK TABLES `world_regions` WRITE;
/*!40000 ALTER TABLE `world_regions` DISABLE KEYS */;
INSERT INTO `world_regions` VALUES (1,1),(2,2),(3,3),(4,4),(5,5),(7,6),(6,7),(8,8),(9,9),(10,10),(11,11),(12,12);
/*!40000 ALTER TABLE `world_regions` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2013-05-13 14:10:08
