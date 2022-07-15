Object.assign(process.env, {
    GIT_AUTHOR_NAME: 'Renovate Bot',
    GIT_AUTHOR_EMAIL: 'buildbot@act3-ace.com',
    GIT_COMMITTER_NAME: 'Renovate Bot',
    GIT_COMMITTER_EMAIL: 'buildbot@act3-ace.com',
  });
  
  module.exports = {
    endpoint: process.env.CI_API_V4_URL,
    hostRules: [
      {
        matchHost: 'https://gitlab.com/pspurlock/test-prerelease/',
        username: process.env.CI_REGISTRY_USER,
        password: process.env.CI_REGISTRY_PASSWORD,
      },
    ],
    enabledManagers: ["helmv3", "helm-values"],
    platform: 'gitlab',
    username: 'renovate-bot',
    autodiscover: true,
    autodiscoverFilter: "/pspurlock/test-prerelease/"
  };
