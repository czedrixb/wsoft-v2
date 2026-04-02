import { d as defineEventHandler, a as useRuntimeConfig } from '../../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:url';
import 'ipx';
import 'node:fs';
import 'node:path';
import 'node:crypto';

const debugConfig_get = defineEventHandler((event) => {
  const config = useRuntimeConfig();
  return {
    blogEmail: config.blogEmail ? "SET" : "MISSING",
    blogPassword: config.blogPassword ? "SET" : "MISSING",
    env: "production"
  };
});

export { debugConfig_get as default };
