var gulp = require('gulp'), // ���������� Gulp
	sass = require('gulp-sass'); // ���������� Sass �����


gulp.task('sass', function() { // ������� ���� "sass"
  return gulp.src(['assets/sass/**/*.sass', 'assets/sass/**/*.scss']) // ����� ��������
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError)) // ����������� Sass � CSS ����������� gulp-sass
    .pipe(gulp.dest('assets/css')) // ��������� ���������� � ����� css
  });

gulp.task('watch', function() {
  gulp.watch(['assets/sass/**/*.sass', 'assets/sass/**/*.scss'], ['sass']); // ���������� �� sass ������� � ����� sass
});

gulp.task('default', ['watch']);

