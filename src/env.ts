import { createEnv } from '@t3-oss/env-core'
import { z } from 'zod'

export const env = createEnv({
  /**
   * Specify what prefix the client-side variables must have.
   * This is enforced both on type-level and at runtime.
   */
  clientPrefix: 'PUBLIC_',
  server: {
    DATABASE_URL: z.string().url(),
    SOKETI_HOST: z.string(),
    SOKETI_PORT: z.string(),
    SOKETI_APP_ID: z.string().min(1),
    SOKETI_APP_KEY: z.string().min(1),
    SOKETI_APP_SECRET: z.string().min(1),
  },
  client: {},
  /**
   * What object holds the environment variables at runtime.
   * Often `process.env` or `import.meta.env`
   */
  runtimeEnv: process.env,
})
