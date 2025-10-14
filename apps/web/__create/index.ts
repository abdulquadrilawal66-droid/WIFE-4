// Re-export the server entrypoint that lives in __createPFP so Vite's
// serverEntryPoint: './__create/index.ts' resolves correctly.
export { default } from '../__createPFP/index';
