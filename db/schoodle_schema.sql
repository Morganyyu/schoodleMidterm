DROP TABLE IF EXISTS event CASCADE;
DROP TABLE IF EXISTS votes CASCADE;
DROP TABLE IF EXISTS timeslots CASCADE;
DROP TABLE IF EXISTS participants CASCADE;


CREATE TABLE event (
 id integer PRIMARY KEY,
 event_name VARCHAR (255),
 details TEXT,
 event_url VARCHAR (255),
 sched_name VARCHAR (255),
 sched_email VARCHAR (255)
);

CREATE TABLE participants (
 id integer PRIMARY KEY,
 name VARCHAR (255),
 email VARCHAR (255)
);

CREATE TABLE timeslots (
 id integer PRIMARY KEY,
 time date,
 event_id  INTEGER,
 FOREIGN KEY ( event_id ) REFERENCES event( id )
);

CREATE TABLE votes (
 id integer PRIMARY KEY,
 participant_id INTEGER,
 FOREIGN KEY ( participant_id ) REFERENCES participants( id ),
 timeslots_id INTEGER,
 FOREIGN KEY ( timeslots_id ) REFERENCES timeslots( id )
);















