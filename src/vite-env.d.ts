/// <reference types="vite/client" />
/// <reference types="vite-plugin-pwa/client" />

declare const __BUILD_HASH__: string;
declare const __BUILD_TIME__: string;

declare module '*.mdx' {
  import type { ComponentType } from 'react';
  const MDXComponent: ComponentType<Record<string, unknown>>;
  export default MDXComponent;
}
