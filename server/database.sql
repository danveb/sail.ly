-- dropdb & createdb 
DROP DATABASE IF EXISTS sailly;
CREATE DATABASE sailly; 

\c sailly; 

DROP TABLE IF EXISTS users; 
CREATE TABLE users(
    id SERIAL PRIMARY KEY, 
    username VARCHAR(50) NOT NULL UNIQUE,
    first_name VARCHAR(30) NOT NULL, 
    last_name VARCHAR(30) NOT NULL, 
    email VARCHAR(255) NOT NULL UNIQUE, 
    password TEXT NOT NULL
); 

DROP TABLE IF EXISTS clubs;
CREATE TABLE clubs(
    id SERIAL PRIMARY KEY, 
    name VARCHAR(255) NOT NULL UNIQUE, 
    address VARCHAR(255) NOT NULL, 
    city VARCHAR(255) NOT NULL, 
    state VARCHAR(4) NOT NULL, 
    zip VARCHAR(11) NOT NULL, 
    lat REAL, 
    lon REAL,
    tel VARCHAR(255) NOT NULL, 
    url VARCHAR(255) NOT NULL,
    snake VARCHAR(255) NOT NULL
);

-- DROP TABLE IF EXISTS trips;
-- CREATE TABLE trips(
--     id SERIAL PRIMARY KEY, 
--     start_club_id INT NOT NULL, 
--     end_club_id INT NOT NULL, 
--     user_id INT NOT NULL, 
--     FOREIGN KEY (start_club_id) REFERENCES clubs(id),
--     FOREIGN KEY (end_club_id) REFERENCES clubs(id),
--     FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE
-- ); 

INSERT INTO users(username, first_name, last_name, email, password)
VALUES('mike1', 'Mike', 'Parker', 'mike@gmail.com', 'mike'), ('jenny1', 'Jenny', 'Lee', 'jenny@gmail.com', 'jenny');

INSERT INTO clubs(name, address, city, state, zip, lat, lon, tel, url, snake)
VALUES ('Soverel Harbour Marina','2401 PGA Blvd.','Palm Beach Gardens','FL',33410,26.8460138009802,-80.0703925850772,'561-691-9554','https://soverelmarina.com/', 'soverel-harbour-marina'),
('Sunrise Harbor Marina','1030 Seminole Dr','Fort Lauderdale','FL',33304,26.1391917026305,-80.1093938879056,'954-667-6720','www.sunriseharbormarina.net', 'sunrise-harbor-marina'),
('Stockton Yacht Club','3235 River Drive','Stockton','CA',95204,37.972358,-121.350403,'209-946-9259','www.stocktonyachtclub.org', 'stockton-yacht-club'),
('Marina Bay Yacht Club','2580 Spinnaker Way','Richmond','CA',94804,37.9117099568631,-122.347534606376,'510-236-1013','https://www.mbyh.com/', 'marina-bay-yacht-club'),
('Fort Pierce Inlet Marina','1010 Seaway Dr','Fort Pierce','FL',34949,27.4637572374874,-80.3044218174158,'516-805-1558','www.fortpierceinletmarina.com', 'fort-pierce-inlet-marina'),
('Martinez Marina','7 North Court St','Martinez','CA',94553,38.0268349990606,-122.137672722547,'925-313-0942','www.martinez-marina.com', 'martinez-marina'),
('Burnham Harbor','1559 S Lake Shore Drive','Chicago','IL',60605,41.860564,-87.61146,'312-747-7009','www.chicagoharbors.info', 'burnam-harbor'),
('DuSable Harbor','111 N. Lake Shore Drive','Chicago','IL',60601,41.8867,-87.612503,'312-742-3577','www.chicagoharbors.info', 'dusable-harbor'),
('Diversey Harbor Lagoon','2601 N. Cannon Drive','Chicago','IL',60614,41.93086,-87.635082,'312-669-4123','www.chicagoharbors.info', 'diversey-harbor-lagoon'),
('Dolphin Isle Marina','32399 Basin St','Fort Bragg','CA',95437,39.4305780588697,-123.795147284911,'707-964-4113','www.dolphinisle.com', 'dolphin-isle-marina'),
('Easy C Marina','822 W. Brannan Island Road','Isleton','CA',95641,38.1058006,-121.5960007,'916-777-5241','www.easycmarina.com', 'easy-c-marina'),
('Eureka Public Marina','500 W. Waterfront Drive','Eureka','CA',95501,40.803127744847,-124.178378899975,'707-268-1973','www.ci.eureka.ca.gov', 'eureka-public-marina'),
('Chagrin River Yacht Club','35943 Lakeshore Blvd','Eastlake','OH',44097,41.670726383859,-81.4262831079126,'440-479-5613','www.crycohio.com', 'chagrin-river-yacht-club'),
('Herman & Helen''s Marina','15135 W. Eight Mile Road','Stockton','CA',95219,38.0608418995296,-121.499628464434,'209-951-4634','www.hermanandhelensmarina.com', 'herman-helen-marina'),
('Santa Monica Yacht Club Marina','13589 Mindanao Way','Marina Del Rey','CA',90292,33.979961,-118.445632,'310-827-7692','www.smwyc.org', 'santa-monica-yacht-club-marina'),
('California Yacht Marina ','224 Whalers Walk','San Pedro','CA',90731,33.718769,-118.280983,'424-201-0467','www.cymcabrillo.com', 'california-yacht-marina'),
('Alamitos Bay-Long Beach Marina','205 Marina Drive','Long Beach','CA',90803,33.750715,-118.113707,'562-570-3215','www.longbeach.gov', 'alamitos-bay-long-beach-marina'),
('Long Beach Yacht Club','6201 Appian Way','Long Beach','CA',90803,33.753989,-118.115236,'562-598-9401','www.lbyc.org', 'long-beach-yacht-club'),
('Redondo Beach Marina','181 N. Harbor Drive','Redondo Beach','CA',90277,33.841464,-118.391074,'310-374-3481','www.rbmarina.com', 'redondo-beach-marina'),
('Safe Harbor Cabrillo Isle','1450 Harbor Island Drive','San Diego','CA',92101,32.726585,-117.20088,'619-297-6222','www.shmarinas.com', 'safe-harbor-cabrillo-isle'),
('Coronado Yacht Club','1631 Strand Way','Coronado','CA',92118,32.681444,-117.173925,'619-435-1848','www.coronadoyc.org', 'coronado-yacht-club'),
('Dana West Yacht Club','24601 Dana Drive','Dana Point','CA',92629,33.459978,-117.701719,'949-661-1185','www.dwyc.org', 'dana-west-yacht-club'),
('Harbor Island West Marina','2040 Harbor Island Drive','San Diego','CA',92101,32.725833,-117.211728,'619-291-6440','www.harborislandwest.com', 'harbor-island-west-marina'),
('Oceanside Yacht Club','1850 Harbor Drive North','Oceanside','CA',92054,33.210814,-117.397083,'760-772-5751','www.oceansideyc.com', 'oceanside-yacht-club'),
('San Diego Yacht Club','1011 Anchorage Lane','San Diego','CA',92106,32.718936,-117.229587,'619-221-8400','www.sdyc.org', 'san-diego-yacht-club'),
('Southwestern Yacht Club','2702 Qualtrough Street','San Diego','CA',92106,32.718936,-117.229587,'619-222-0438','www.southwesternyc.org', 'southwestern-yacht-club'),
('Berkeley Yacht Club','One Seawall Drive','Berkeley','CA',94710,37.866028,-122.31644,'510-843-9292','www.berkeleyyc.org', 'berkeley-yacht-club'),
('Channel Islands Yacht Club','4100 South Harbor Blvd','Oxnard','CA',93035,34.163608,-119.226056,'805-985-2492','www.ciyc.com', 'channel-islands-yacht-club'),
('Huntington Harbour Yacht Club','3821 Warner Ave.','Huntington Beach','CA',92649,33.712335,-118.061446,'562-592-2186','https://www.hhyc.org/', 'huntington-harbour-yacht-club'),
('Portland Yacht Club','1241 NE Marine Drive','Portland','OR',97211,45.601842,-122.652628,'503-285-1922','www.portlandyc.com', 'portland-yacht-club'),
('Balboa Yacht Club','1801 Bayside Drive','Corona Del Mar','CA',92625,33.604104,-117.882961,'949-673-3515','https://www.balboayachtclub.com/', 'balboa-yacht-club'),
('South Beach Yacht Club','Pier 40 on The Embarcadero','San Francisco','CA',94107,37.7803,-122.38791,'415-495-2295','http://www.southbeachyachtclub.org/', 'south-beach-yacht-club'),
('San Francisco Yacht Club','98 Beach Rd','Belvedere','CA',94920,37.871789,-122.463264,'415-435-9133','www.sfyc.org', 'san-francisco-yacht-club'),
('Sierra Point Yacht Club','500 Sierra Point Parkway','Brisbane','CA',94005,37.673303,-122.38213,'650-952-0651','www.sierrapointyc.org', 'sierra-point-yacht-club'),
('Seattle Yacht Club','1807 E Hamlin St.','Seattle','WA',98112,47.645802,-122.30999,'206-325-1000','www.seattleyachtclub.org', 'seattle-yacht-club'),
('Tampa Yacht & Country Club','5320 Interbay Blvd','Tampa','FL',33611,27.887299,-82.479241,'813-831-1611','www.tampayacht.com', 'tampa-yacht-country-club'),
('Fontainebleau Marina','4441 Collins Avenue','Miami Beach','FL',33140,25.817949429029,-80.1234999607677,'305-538-2022','www.fontainbleaumarina.com', 'fontainebleau-marina'),
('Morro Bay Yacht Club','541 Embarcadero','Morro Bay','CA',93422,35.3627550537967,-120.852791914804,'805-772-3981','https://www.mbyc.net/', 'morro-bay-yacht-club'),
('Biddeford Pool Yacht Club','17 Yates Street','Biddeford Pool','ME',4006,43.446361,-70.355125,'207-282-0485','www.biddefordpoolyachtclub.org', 'biddeford-pool-yacht-club'),
('Boothbay Harbor Yacht Club','156 Western Avenue','West Boothbay Harbor','ME',4575,43.847168,-69.644168,'207-633-5750','www.bhyc.net', 'boothbay-harbor-yacht-club'),
('Agamenticus Yacht Club','P.O. Box 534','York Harbor','ME',3911,43.132358,-70.641481,'207-363-8510','www.aycsail.org', 'agamenticus-yacht-club'),
('Liberty Landing Marina','80 Audrey Zapp Drive','Jersey City','NJ',7305,40.71171,-74.046268,'201-985-8000','www.libertylandingmarina.com', 'liberty-landing-marina'),
('Beach Haven Yacht Club Marina','Engleside Avenue','Beach Haven','NJ',8008,39.565658,-74.246467,'609-492-9101','www.beachhavenyachtclubmarina.com', 'beach-haven-yacht-club-marina'),
('Manhattan Harbour Yacht Club','1301 4th Ave','Dayton','KY',41074,39.116845,-84.459007,'859-468-1471','www.manhattanharbourky.com', 'manhattan-harbour-yacht-club'),
('New Bridge Marina','6325 Bridgehead Rd','Antioch','CA',94509,38.0183443466043,-121.752645515455,'925-757-1500','www.newbridgemarina.com', 'new-bridge-marina'),
('Newport Harbor Yacht Club','720 West Bay Ave','Newport Beach','CA',92661,33.6058006,-117.9089966,'949-673-7730','www.nhyc.org', 'newport-harbor-yacht-club'),
('Oakland Yacht Club','1 Pacific Marina','Alameda','CA',94501,37.7837561006748,-122.263902561922,'510-522-6868','www.oaklandyachtclub.com', 'oakland-yacht-club'),
('Ox Bow Yacht Club','100 Ox Bow Marina Drive','Isleton','CA',95641,38.151,-121.591,'916-777-5685','www.oxbowyachtclub.com', 'ox-bow-yacht-club'),
('Pacific Corinthian Yacht Club','2600 South Harbor Blvd','Channel Islands','CA',93035,34.1748172552586,-119.22849973944,'805-985-7292','https://www.pcyc.org/', 'pacific-corinthian-yacht-club');

-- INSERT INTO trips(start_club_id, end_club_id, user_id)
-- VALUES(1, 2, 1); 

-- push to PSQL: 
-- $ psql < database.sql 
