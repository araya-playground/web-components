import fastify from "fastify";
import fastifyStatic from "@fastify/static";
import path from "node:path";

const app = fastify({ logger: true });

app.register(fastifyStatic, {
  root: path.join(import.meta.dirname, "/public/"),
});

app.get("/", async (request, reply) => {});

app.listen({ port: 3000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
