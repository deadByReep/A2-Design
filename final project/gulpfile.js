let gulp = require('gulp');


gulp.task('build',async function(){
	let buildHtml = gulp.src('src/**/*.html')
		.pipe(gulp.dest('dist'));

	let buildCss = gulp.src('src/css/*.css')
		.pipe(gulp.dest('dist/css'));	

	let buildJs = gulp.src('src/js/*.js')
		.pipe(gulp.dest('dist/js'));

	let buildImg = gulp.src('src/assets/images/*.*')
		.pipe(gulp.dest('dist/assets/images'));		
});