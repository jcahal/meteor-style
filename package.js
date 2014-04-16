Package.describe({
  summary: "REPLACEME - What does this package (or the original one you're wrapping) do?"
});

Package.on_use(function (api, where) {
  api.add_files('style.js', ['client', 'server']);
});

Package.on_test(function (api) {
  api.use('style');

  api.add_files('style_tests.js', ['client', 'server']);
});
