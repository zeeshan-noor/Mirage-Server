import { createServer } from "miragejs"
import books from "./json/books.json";

export function makeServer() {
  let server = createServer({
  

    routes() {
      this.namespace = "api"

      this.get("/books", (schema) => {
        return books
      })
      this.post("/add", (schema,req) => {
        const newBook = JSON.parse(req.requestBody);
        books.push(newBook);
      })
    },
  })

  return server
}