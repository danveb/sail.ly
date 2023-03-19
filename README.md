<h1 align="center">⛵️ SAIL.LY</h1>

<p align="left">SAIL.LY is an application for sailors and water sports' enthusiasts that have a common goal to share the joy in sailing. Receive a recommendation based on real-time wind conditions to enjoy a day out. Happy Sailing! </p>

<h3>👨‍💻 Technologies</h3>

<ul>
    <li>JavaScript/React.js</li>
    <li>Node.js/Express.js</li>
    <li>CSS</li>
    <li>PostgreSQL</li>
    <li>Weather API</li>
    <li>Jest/Supertest/React Testing Library</li>
</ul>

<h3>📝 How</h3>

<p align="left">Welcome to SAIL.LY</p>
<p align="left">A list of yacht clubs are available on a PostgreSQL database. Key info, such as latitude, longitude are available for users to know exact coordinates. Current weather conditions are fetched from Weather API for each club.</p>

<h3>⚡ Development</h3>

```js
<CLIENT>
$ yarn install 
$ yarn start 
$ yarn test

<SERVER>
$ yarn add --dev jest supertest 
$ yarn dev 
$ yarn start 
```

<h3>🚀 Deploy</h3>

```js
* Connect to hosted PostgreSQL 
    
# db.js 

// Connection URI to node-pg 
const connectionString = "postgresql://dbuser:secretpassword@database.server.com:3211/mydb"; 

const pool = new Pool({
    connectionString, 
});
```

```js
* PSQL Command to remotely access db 

$ PGPASSWORD=secretpassword psql -h host -U username database
```

```js
* Use existing database_dump.sql to populate db with existing columns/rows
* Make sure to use correct db name for external PostgreSQL 

db_name=> \i database_dump.sql 
``` 

<h3>✈️ Live</h3>

<p align="left">Netlify -> <a href="https://sail-ly.netlify.app" target="_blank">Link to Netlify</a></p>
<p align="left">Repository -> <a href="https://www.github.com/danveb/sail.ly" target="_blank">Link to GitHub</a></p>

<h3>🦴 API </h3>
<p align="left">Weather API -> <a href="https://www.weatherapi.com/docs/" target="_blank">Link to Docs</a></p>
