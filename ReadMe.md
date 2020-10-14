# Setting up Community Forum DB

## DB Design
![alt](https://lucid.app/publicSegments/view/f62e0b57-e59b-4e86-b970-65b0f290d9b0/image.png)

## Setup a basic docker-compose file to run Postgres and Adminer
* [x] Create docker-compose.yml
* [x] Setup both services
* [x] Configure the postgres using .env variables 
* [x] Setup the volumes for postgres data
* [x] Map the ports of the containers

## Setup knex
* [x] Install
  * knex
  * pg - postgres client driver
  * dotenv
  * eslint -devDependency
* [x] Create eslint file
  ```sh
  npx eslint --init
  ```
* [x] Create a knex file that says how to connect to the DB
  ```sh
  npx knex init
  ```
* [x] Create migration
  ```sh
  npx knex migrate:make initial
  ```
* [x] Run migration and rollback
  ```sh
  npx knex migrate:latest
  npx knex migrate:rollback
  - or make a script command
  "migrate": "knex migrate:latest"
  "rollback": "knex migrate:rollback"
  ```
* [x] Create seeds
  ```sh
  npx knex seed:make 01-roles
  ```
* [x] Run seeds
  ```sh
  npx knex seed:run
  - or make a script command
  "seed": "knex seed:run"

### Since we need a simple start script, so that this thing will actually deploy to heroku

* [x] Install express
* [x] Create a simple express app in 'index.js'
* [x] Create a start script
```sh
"start": "node index.js"
```


## Development Setup

```sh
npm Install
mv env.sample .env
docker-compose up

npm run migrate
npm run seed
```
