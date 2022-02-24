# Biashara Project - (client & server)

> Biashara System

## Installation 

##### Clone the git repository
```
git clone https://github.com/InnocentWahome/biashara-project-server.git
```

## Installation server


##### Setup environment variables
```
cp .env.example .env
```
>Remember to use your database name and password instead
##### Install project dependencies
```
npm install
```
##### Create database migration
```
node ace migration:run
```

##### Initialize faker db data
```
node ace db:seed
```
##### Initialize development server
```
npm run dev
```

## Installation client

##### Clone the git repository
```
git clone https://github.com/InnocentWahome/biashara-project-client.git
```
##### Install project dependencies
```
npm install
```
> Setup the environment variables


>> GATSBY_AUTHENTICATION_BASE_URL=http://localhost:3333/api/v1/auth
>> GATSBY_API_BASE_URL=http://localhost:3333/api/v1

##### Initialize development server
```
npm run develop || gatsby develop
```
##### Run production
```
npm run build || gatsby build
```

##### Author
```
- [Innocent Wahome](mailto: innocentwahome@gmail.com)
```