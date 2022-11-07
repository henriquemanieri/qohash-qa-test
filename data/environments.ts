const localEnv: string = "http://localhost:3000/"
const devEnv: string = "http://localhost:3000/"


export function getEnv(env: string): string {
    switch (env) {
      case "local":
        return localEnv
        break
    
      case "dev":
        return devEnv
        break

      default:
        return devEnv
    }

}
