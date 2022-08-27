/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly API_KEY: string;
  readonly PUBLIC_POKEAPI: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "@astro-community/astro-embed-youtube";
