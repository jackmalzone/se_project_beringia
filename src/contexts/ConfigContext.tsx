import { createContext } from "react";

interface Config {
  baseUrl: string;
  title?: string;
}

const defaultConfig: Config = {
  baseUrl: import.meta.env.PROD
    ? "https://api.beringia-marine.com"
    : "http://localhost:3001",
  title: "Beringia Marine"
};

export const ConfigContext = createContext<Config>(defaultConfig);