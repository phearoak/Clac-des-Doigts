# Chicken run

- [Chicken run](#chicken-run)
  - [How to Setup](#how-to-setup)
  - [Stack :zap:](#stack-zap)
  - [API Endpoints](#api-endpoints)
    - [Chicken](#chicken)

## How to Setup

1. Copy environment variables. Replace values to your own.

```bash
$ cp .env.example .env
```

2. Build the project with [docker-compose](https://docs.docker.com/compose/).

```bash
$ docker-compose build
```

3. Start containers.

```bash
$ docker-compose up --detach
```

## Stack :zap:

```javascript
stack: [
    "nodejs",
    "typescript",
    "express",
    "prisma",
    "mysql"
];
```

## API Endpoints

### <u>Chicken</u>

| Method   | URL                                           | Description          | Status |
| -------- | --------------------------------------------- | -------------------- | :----: |
| `POST`   | [`/chicken`](examples/chicken/post.md)        | Create a chicken     |   ✅   |
| `POST`   | [`/chicken/run/:id`](examples/chicken/run.md)    | Update steps chicken |   ✅   |
| `GET`    | [`/chicken/:id`](examples/chicken/getById.md) | Get a single chicken        |   ✅   |
| `GET`    | [`/chicken/`](examples/chicken/get.md)        | Get all chickens        |   ✅   |
| `PATCH`  | [`/chicken/:id`](examples/chicken/patch.md)   | Update a chicken     |   ✅   |
| `DELETE` | [`/chicken/:id`](examples/chicken/delete.md)  | Delete a chicken     |   ✅   |
