# CSS restrictions
Amp has CSS restrictions. CSS cannot be lager than 50kb and must be inlined. The reason for this is that CSS blocks the critical rendering path, which means that the web browser will delay rendering content until the `CSS Object Model` is constructed.

# Step1: Remove unused CSS
`bootstrap.min.css` is around 118kb. We need to clean up unused CSS. 

[purifycss](https://github.com/purifycss/purifycss) remove unsed CSS classes. It can be integrated into Gulp like this:
```javascript
var purify = require('gulp-purifycss');

gulp.task('purify', function() {
  return gulp.src(SOURCE.BOOTSTRAP_CSS)
    .pipe(purify([SOURCE.AMPHTML]))
    .pipe(gulp.dest('./amphtml/css'));
});
```

# Step2: Minify and Insert CSS into AMP HTML
use [clean-css](https://github.com/jakubpawlowicz/clean-css) to minify the CSS and then use [gulp-html-replace](https://www.npmjs.com/package/gulp-html-replace) to insert the result into the AMP HTML
```javascript
var cleanCSS = require('gulp-clean-css');
var htmlreplace = require('gulp-html-replace');

gulp.task('inline-css', function() {
  return gulp.src(SOURCE.AMPHTML)
    .pipe(htmlreplace({
      'cssInline': {
        'src': gulp.src(SOURCE.CLEANED_CSS).pipe(cleanCSS()),
        'tpl': '<style amp-custom>%s</style>'
      }
    }))
    .pipe(gulp.dest(BUILD_PATH));
});
```

# Step3: Validate 
