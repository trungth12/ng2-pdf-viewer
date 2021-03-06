(function () {

  // map tells the System loader where to look for things
  let map = {
    'app': './',
    'rxjs': 'lib/rxjs',
    '@angular': 'lib/@angular',
    'pdfjs-dist': 'lib/pdfjs-dist/',

    // material
    '@angular/material': 'lib/@angular/material/bundles/material.umd.js',
    '@angular/animations': 'lib/@angular/animations/bundles/animations.umd.min.js',
    '@angular/animations/browser': 'lib/@angular/animations/bundles/animations-browser.umd.min.js',
    '@angular/platform-browser/animations': 'lib/@angular/platform-browser/bundles/platform-browser-animations.umd.min.js',
    '@angular/common/http': 'lib/@angular/common/bundles/common-http.umd.min.js',
    'tslib': 'lib/tslib/tslib.js',
  };

  // packages tells the System loader how to load when no filename and/or no extension
  let packages = {
    'app': { main: 'main.js', defaultExtension: 'js' },
    'rxjs': { defaultExtension: 'js' }
    // 'pdfjs-dist': { main: '/build/pdf.min.js', defaultExtension: 'js' },
    // 'pdf-viewer': { main: 'pdf-viewer.component.js', defaultExtension: 'js' }
  };

  [
    'common',
    'compiler',
    'core',
    'forms',
    'platform-browser',
    'platform-browser-dynamic'
  ].forEach(function (pkgName) {
    packages['@angular/' + pkgName] = { main: 'bundles/' +  pkgName + '.umd.js', defaultExtension: 'js' };
  });

  [
    'platform',
    'a11y',
    'bidi',
    'coercion',
    'keycodes',
    'overlay',
    'portal',
    'collections',
    'observers',
    'accordion',
    'scrolling',
    'layout',
    'table',
    'stepper'
  ].forEach(function (name) {
    map[`@angular/cdk/${ name }`] = `lib/@angular/cdk/bundles/cdk-${ name }.umd.js`;
  });

  let config = {
    map: map,
    packages: packages
  };

  SystemJS.config(config);

})();