export default ({ env }) => ({
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },

  graphql: {
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: true, // увімкнено на продакшині також (за замовч. false)
      depthLimit: 100, // обмежити максимальну кількість вкладених полів, які можна запитувати в одному запиті (за замовч. 10)
      amountLimit: 100, // обмежити максимальну кількість елементів, повернених у одному запиті (наразі ця функція працює некоректно, рішення - через filter: {pagination: 100} для колекцій (не для singleType!) )
      apolloServer: {
        tracing: false,
      },
    },
  },

  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook: env("VERCEL_DEPLOY_PLUGIN_HOOK"),
      apiToken: env("VERCEL_DEPLOY_PLUGIN_API_TOKEN"),
      appFilter: env("VERCEL_DEPLOY_PLUGIN_APP_FILTER"),
      teamFilter: env("VERCEL_DEPLOY_PLUGIN_TEAM_FILTER"),
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
});
