import { Logger } from "./logger.interface";

export class ConsoleLogger implements Logger {
  log(message: string): void {
    console.log(message)
  }
}


export class AlertLogger implements Logger {
  log(message: string): void {
    alert(message)
  }
}



export class LocalStorageLogger implements Logger {
  log(message: string): void {
    localStorage.setItem("errorlog", message)
  }
}
