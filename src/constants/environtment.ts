const ENV = {
  dev: {
    BASE_API_URL: '',
  },
  staging: {
    BASE_API_URL: '',
  },
  production: {
    BASE_API_URL: '',
  },
}

export default function getEnv (env = process.env.REACT_APP_ENV) {
  if (env === 'staging') return ENV.staging;
  if (env === 'production') return ENV.production;
  else return ENV.dev
}


