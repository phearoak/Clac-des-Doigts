# Chicken run

- [How to Setup](#how-to-setup)
- [Stack :zap:](#stack-zap)
- [API Endpoints](#api-endpoints)

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
stack: ["nodejs", "typescript", "express", "prisma", "mysql"];
```

## API Endpoints

### <u>Chicken</u>

| Method   | URL                                          | Description          | Status |
| -------- | -------------------------------------------- | -------------------- | :----: |
| `POST`   | [`/chicken`](examples/service/post.md)       | Create a chicken     |   ✅   |
| `POST`   | [`/chicken/run`](examples/service/post.md)   | Update steps chicken |   ✅   |
| `GET`    | [`/chicken/:id`](examples/service/get.md)    | Get a chicken        |   ✅   |
| `PATCH`  | [`/chicken/:id`](examples/service/patch.md)  | Update a chicken     |   ✅   |
| `DELETE` | [`/chicken/:id`](examples/service/delete.md) | Delete a chicken     |   ✅   |
