# yeticrab frontend

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run start
```

# yeticrab backend

## Compile and run the project

```bash
# download dependencies
$ npm i

# run migration and seeding
$ npx prisma migrate dev

# run server
$ npm run start:dev
```

# API

- swagger: http://localhost:3001-/api

# .env variables:

- POSTGRES_PASSWORD='20052020'
- POSTGRES_USER='postgres'
- POSTGRES_HOST="localhost"
- POSTGRES_PORT='5432'
- POSTGRES_DATABASE='test'
- DATABASE_URL = postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DATABASE}

# Note

- Вы можете кликнуть по карте, чтобы данные точки были отображены в полях
