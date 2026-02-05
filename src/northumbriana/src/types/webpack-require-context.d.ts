// Minimal typing so TS/IDE understands Webpack's require.context
declare const require: {
  context(
      directory: string,
      useSubdirectories?: boolean,
      regExp?: RegExp
  ): {
    keys(): string[];
    <T = unknown>(id: string): T;
  };
};
