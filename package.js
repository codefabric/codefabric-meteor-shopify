Package.describe({
  name: 'codefabric:meteor-shopify',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use(['ecmascript', 
           'coffeescript',
           'templating',
           'codefabric:meteor-common']);

  // *** Standard CodeFabric Structure *** //
  api.imply('codefabric:meteor-common');

  api.addFiles([
    'global_namespaces.js',
    'lib/namespaces.coffee',
  ], ['client', 'server']);

  api.addFiles([
    'client/namespaces.coffee'
  ], ['client']);

  api.addFiles([
    'server/namespaces.coffee'
  ], ['server']);

  // *** Package Files *** //

  api.addFiles([
    'client/styles/seaff.css'
  ], ['client']);
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('coffeescript');
  api.use('tinytest');
  api.use('codefabric:meteor-shopify');

  api.addFiles('tests/client/tests.coffee', 'client');
  api.addFiles('tests/server/tests.coffee', 'server');
});
