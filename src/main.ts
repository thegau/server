import {Server} from "./config"

function bootstrap() {
   (new Server()).start((port: number) => {
      console.log(`--- server is running on ${port}`)
   })
}

bootstrap()