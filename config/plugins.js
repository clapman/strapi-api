module.exports = ({ env }) => ({
  upload: {
    provider: 'aws-s3',
    providerOptions: {
      accessKeyId: env('AKIAZVULTGIT3D7TWI6X'),
      secretAccessKey: env('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'),
      region: env('us-west-1'),
      params: {
        Bucket: env('vc-strapi-data'),
      },
    },
  },
});
