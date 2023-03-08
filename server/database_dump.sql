--
-- PostgreSQL database dump
--

-- Dumped from database version 15.2
-- Dumped by pg_dump version 15.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE sailly;
--
-- Name: sailly; Type: DATABASE; Schema: -; Owner: -
--

CREATE DATABASE sailly WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = icu LOCALE = 'en_US.UTF-8' ICU_LOCALE = 'en-US';


\connect sailly

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: clubs; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.clubs (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    address character varying(255) NOT NULL,
    city character varying(255) NOT NULL,
    state character varying(4) NOT NULL,
    zip character varying(11) NOT NULL,
    lat real,
    lon real,
    tel character varying(255) NOT NULL,
    url character varying(255) NOT NULL,
    snake character varying(255) NOT NULL
);


--
-- Name: clubs_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.clubs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: clubs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.clubs_id_seq OWNED BY public.clubs.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    username character varying(50) NOT NULL,
    first_name character varying(30) NOT NULL,
    last_name character varying(30) NOT NULL,
    email character varying(255) NOT NULL,
    password text NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: clubs id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.clubs ALTER COLUMN id SET DEFAULT nextval('public.clubs_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: clubs; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.clubs (id, name, address, city, state, zip, lat, lon, tel, url, snake) FROM stdin;
1	Soverel Harbour Marina	2401 PGA Blvd.	Palm Beach Gardens	FL	33410	26.846014	-80.07039	561-691-9554	https://soverelmarina.com/	soverel-harbour-marina
2	Sunrise Harbor Marina	1030 Seminole Dr	Fort Lauderdale	FL	33304	26.139193	-80.10939	954-667-6720	www.sunriseharbormarina.net	sunrise-harbor-marina
3	Stockton Yacht Club	3235 River Drive	Stockton	CA	95204	37.97236	-121.3504	209-946-9259	www.stocktonyachtclub.org	stockton-yacht-club
4	Marina Bay Yacht Club	2580 Spinnaker Way	Richmond	CA	94804	37.91171	-122.347534	510-236-1013	https://www.mbyh.com/	marina-bay-yacht-club
5	Fort Pierce Inlet Marina	1010 Seaway Dr	Fort Pierce	FL	34949	27.463757	-80.30442	516-805-1558	www.fortpierceinletmarina.com	fort-pierce-inlet-marina
6	Martinez Marina	7 North Court St	Martinez	CA	94553	38.026836	-122.13767	925-313-0942	www.martinez-marina.com	martinez-marina
7	Burnham Harbor	1559 S Lake Shore Drive	Chicago	IL	60605	41.860565	-87.61146	312-747-7009	www.chicagoharbors.info	burnam-harbor
8	DuSable Harbor	111 N. Lake Shore Drive	Chicago	IL	60601	41.8867	-87.6125	312-742-3577	www.chicagoharbors.info	dusable-harbor
9	Diversey Harbor Lagoon	2601 N. Cannon Drive	Chicago	IL	60614	41.93086	-87.63508	312-669-4123	www.chicagoharbors.info	diversey-harbor-lagoon
10	Dolphin Isle Marina	32399 Basin St	Fort Bragg	CA	95437	39.430576	-123.79515	707-964-4113	www.dolphinisle.com	dolphin-isle-marina
11	Easy C Marina	822 W. Brannan Island Road	Isleton	CA	95641	38.1058	-121.596	916-777-5241	www.easycmarina.com	easy-c-marina
12	Eureka Public Marina	500 W. Waterfront Drive	Eureka	CA	95501	40.803127	-124.178375	707-268-1973	www.ci.eureka.ca.gov	eureka-public-marina
13	Chagrin River Yacht Club	35943 Lakeshore Blvd	Eastlake	OH	44097	41.670727	-81.426285	440-479-5613	www.crycohio.com	chagrin-river-yacht-club
14	Herman & Helen's Marina	15135 W. Eight Mile Road	Stockton	CA	95219	38.06084	-121.499626	209-951-4634	www.hermanandhelensmarina.com	herman-helen-marina
15	Santa Monica Yacht Club Marina	13589 Mindanao Way	Marina Del Rey	CA	90292	33.97996	-118.44563	310-827-7692	www.smwyc.org	santa-monica-yacht-club-marina
16	California Yacht Marina 	224 Whalers Walk	San Pedro	CA	90731	33.71877	-118.28098	424-201-0467	www.cymcabrillo.com	california-yacht-marina
17	Alamitos Bay-Long Beach Marina	205 Marina Drive	Long Beach	CA	90803	33.750713	-118.11371	562-570-3215	www.longbeach.gov	alamitos-bay-long-beach-marina
18	Long Beach Yacht Club	6201 Appian Way	Long Beach	CA	90803	33.75399	-118.115234	562-598-9401	www.lbyc.org	long-beach-yacht-club
19	Redondo Beach Marina	181 N. Harbor Drive	Redondo Beach	CA	90277	33.841465	-118.391075	310-374-3481	www.rbmarina.com	redondo-beach-marina
20	Safe Harbor Cabrillo Isle	1450 Harbor Island Drive	San Diego	CA	92101	32.726585	-117.20088	619-297-6222	www.shmarinas.com	safe-harbor-cabrillo-isle
21	Coronado Yacht Club	1631 Strand Way	Coronado	CA	92118	32.681442	-117.17393	619-435-1848	www.coronadoyc.org	coronado-yacht-club
22	Dana West Yacht Club	24601 Dana Drive	Dana Point	CA	92629	33.459976	-117.70172	949-661-1185	www.dwyc.org	dana-west-yacht-club
23	Harbor Island West Marina	2040 Harbor Island Drive	San Diego	CA	92101	32.725834	-117.21173	619-291-6440	www.harborislandwest.com	harbor-island-west-marina
24	Oceanside Yacht Club	1850 Harbor Drive North	Oceanside	CA	92054	33.210815	-117.39708	760-772-5751	www.oceansideyc.com	oceanside-yacht-club
25	San Diego Yacht Club	1011 Anchorage Lane	San Diego	CA	92106	32.718937	-117.22958	619-221-8400	www.sdyc.org	san-diego-yacht-club
26	Southwestern Yacht Club	2702 Qualtrough Street	San Diego	CA	92106	32.718937	-117.22958	619-222-0438	www.southwesternyc.org	southwestern-yacht-club
27	Berkeley Yacht Club	One Seawall Drive	Berkeley	CA	94710	37.866028	-122.31644	510-843-9292	www.berkeleyyc.org	berkeley-yacht-club
28	Channel Islands Yacht Club	4100 South Harbor Blvd	Oxnard	CA	93035	34.16361	-119.22606	805-985-2492	www.ciyc.com	channel-islands-yacht-club
29	Huntington Harbour Yacht Club	3821 Warner Ave.	Huntington Beach	CA	92649	33.712334	-118.06145	562-592-2186	https://www.hhyc.org/	huntington-harbour-yacht-club
30	Portland Yacht Club	1241 NE Marine Drive	Portland	OR	97211	45.60184	-122.652626	503-285-1922	www.portlandyc.com	portland-yacht-club
31	Balboa Yacht Club	1801 Bayside Drive	Corona Del Mar	CA	92625	33.604103	-117.88296	949-673-3515	https://www.balboayachtclub.com/	balboa-yacht-club
32	South Beach Yacht Club	Pier 40 on The Embarcadero	San Francisco	CA	94107	37.7803	-122.38791	415-495-2295	http://www.southbeachyachtclub.org/	south-beach-yacht-club
33	San Francisco Yacht Club	98 Beach Rd	Belvedere	CA	94920	37.871788	-122.463264	415-435-9133	www.sfyc.org	san-francisco-yacht-club
34	Sierra Point Yacht Club	500 Sierra Point Parkway	Brisbane	CA	94005	37.6733	-122.38213	650-952-0651	www.sierrapointyc.org	sierra-point-yacht-club
35	Seattle Yacht Club	1807 E Hamlin St.	Seattle	WA	98112	47.6458	-122.30999	206-325-1000	www.seattleyachtclub.org	seattle-yacht-club
36	Tampa Yacht & Country Club	5320 Interbay Blvd	Tampa	FL	33611	27.887299	-82.47924	813-831-1611	www.tampayacht.com	tampa-yacht-country-club
37	Fontainebleau Marina	4441 Collins Avenue	Miami Beach	FL	33140	25.81795	-80.1235	305-538-2022	www.fontainbleaumarina.com	fontainebleau-marina
38	Morro Bay Yacht Club	541 Embarcadero	Morro Bay	CA	93422	35.362755	-120.85279	805-772-3981	https://www.mbyc.net/	morro-bay-yacht-club
39	Biddeford Pool Yacht Club	17 Yates Street	Biddeford Pool	ME	4006	43.44636	-70.355125	207-282-0485	www.biddefordpoolyachtclub.org	biddeford-pool-yacht-club
40	Boothbay Harbor Yacht Club	156 Western Avenue	West Boothbay Harbor	ME	4575	43.847168	-69.644165	207-633-5750	www.bhyc.net	boothbay-harbor-yacht-club
41	Agamenticus Yacht Club	P.O. Box 534	York Harbor	ME	3911	43.13236	-70.64148	207-363-8510	www.aycsail.org	agamenticus-yacht-club
42	Liberty Landing Marina	80 Audrey Zapp Drive	Jersey City	NJ	7305	40.71171	-74.046265	201-985-8000	www.libertylandingmarina.com	liberty-landing-marina
43	Beach Haven Yacht Club Marina	Engleside Avenue	Beach Haven	NJ	8008	39.56566	-74.24647	609-492-9101	www.beachhavenyachtclubmarina.com	beach-haven-yacht-club-marina
44	Manhattan Harbour Yacht Club	1301 4th Ave	Dayton	KY	41074	39.116844	-84.45901	859-468-1471	www.manhattanharbourky.com	manhattan-harbour-yacht-club
45	New Bridge Marina	6325 Bridgehead Rd	Antioch	CA	94509	38.018345	-121.75265	925-757-1500	www.newbridgemarina.com	new-bridge-marina
46	Newport Harbor Yacht Club	720 West Bay Ave	Newport Beach	CA	92661	33.6058	-117.909	949-673-7730	www.nhyc.org	newport-harbor-yacht-club
47	Oakland Yacht Club	1 Pacific Marina	Alameda	CA	94501	37.783756	-122.2639	510-522-6868	www.oaklandyachtclub.com	oakland-yacht-club
48	Ox Bow Yacht Club	100 Ox Bow Marina Drive	Isleton	CA	95641	38.151	-121.591	916-777-5685	www.oxbowyachtclub.com	ox-bow-yacht-club
49	Pacific Corinthian Yacht Club	2600 South Harbor Blvd	Channel Islands	CA	93035	34.174816	-119.2285	805-985-7292	https://www.pcyc.org/	pacific-corinthian-yacht-club
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.users (id, username, first_name, last_name, email, password) FROM stdin;
1	mike1	Mike	Parker	mike@gmail.com	mike
2	jenny1	Jenny	Lee	jenny@gmail.com	jenny
\.


--
-- Name: clubs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.clubs_id_seq', 49, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 2, true);


--
-- Name: clubs clubs_name_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.clubs
    ADD CONSTRAINT clubs_name_key UNIQUE (name);


--
-- Name: clubs clubs_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.clubs
    ADD CONSTRAINT clubs_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: users users_username_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_key UNIQUE (username);


--
-- PostgreSQL database dump complete
--

