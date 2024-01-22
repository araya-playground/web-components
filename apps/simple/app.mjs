import fastify from "fastify";
import fastifyStatic from "@fastify/static";
import path from "node:path";

const app = fastify({ logger: true });

const PUBLIC_ROOT = path.join(import.meta.dirname, "/public/")

console.log(PUBLIC_ROOT)

app.get("/", async (request, reply) => {
  return reply.sendFile('index.html', PUBLIC_ROOT)
});

app.register(fastifyStatic, {
  root: PUBLIC_ROOT,
});


app.listen({ port: 3000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
