# ⛵️ sail.ly

An application for sailors and water sports' enthusiasts who share the joy in sailing on open waters. Real-time wind conditions are available along with latitude and longitude coordinates. 

Happy sailing!

### 👨‍💻 Technologies
- React.js
- Node/Express.js
- CSS
- PostgreSQL
- Weather API
- Jest/Supertest/React Testing Library 

### ⚡ Development

```sh
<CLIENT>
$ yarn install 
$ yarn start 
$ yarn test

<SERVER>
$ yarn add --dev jest supertest 
$ yarn dev 
$ yarn start 
```

### 🚀 PostgreSQL Connection (hosted on Vercel)

```js
db.js 

// Connection URI to hosted postgreSQL
const connectionString = "//default:database_url:5432/verceldb?sslmode=require"

const pool = new Pool({
    connectionString, 
});
```

```js
// psql command to remotely access hosted db

$ psql "postgres://default:************@ep-odd-moon-23544608.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require"
```

```js
// use existing database_dump.sql to populate db with existing columns/rows

db_name=> \i database_dump.sql 
``` 

### 🛫 Deployment

🔥 [Client | Vercel](https://sail-ly.vercel.app)

🔥 [Server | Vercel](https://sail-ly-server.vercel.app)

🔥 [Repo | GitHub](https://www.github.com/danveb/sail.ly)

### 🏡 API
🌤️ [Weather API](https://www.weatherapi.com/docs)