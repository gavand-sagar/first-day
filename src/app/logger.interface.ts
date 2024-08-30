import { InjectionToken } from "@angular/core";

export const LOGGER = new InjectionToken("MY_LOGGER")

export interface Logger {
  log(message: string): void;
}
