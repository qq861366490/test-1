/*!
	gulpfile.js
	gulp 的配置文件
 */
 
var gulp = require('gulp'),
	imgMin = require('gulp-imagemin'),
	jsMin = require('gulp-uglify'),
	connect = require('gulp-connect'),
	sassMin = require('gulp-sass-china'),
	htmlMin = require('gulp-htmlmin'),
	cssMin = require('gulp-minify-css'),
	//gulp-preset-es2015
	babel = require('gulp-babel');
	//gulp-rename
	//gulp-concat
	//del

//同步编译压缩html文件
gulp.task('copy-html',function(){
	gulp.src('src/index.html').pipe(gulp.dest('dist'));
})
//gulp.task('copy-html',function(){
//	var options = {
//		collapseWhitespace:true,
//		collapseBooleanAttributes:true,
//		removeComments:true,
//		removeEmptyAttributes:true,
//		removeScriptTypeAttributes:true,
//		removeStyleLinkTypeAttributes:true,
//		minifyJS:true,
//		minifyCSS:true
//	};
//	gulp.src('src/index.html').pipe(htmlMin(options)).pipe(gulp.dest('dist'));
//})
//同步压缩img文件
gulp.task('copy-img',function(){
	gulp.src('src/imgs/**/*').pipe(imgMin()).pipe(gulp.dest('dist/imgs'));
})
//同步编译和压缩js文件 转化ES6语法为ES5语法 排除混淆关键字
gulp.task('copy-js',function(){
	gulp.src('src/public/**/*').pipe(gulp.dest('dist/public'));
})
//gulp.task('copy-js',function(){
//	gulp.src('src/public/**/*').pipe(babel({
//		presets: ['es2015']
//	})).pipe(jsMin({
//		mangel: {
//			except: ['jQuery','$']
//		}
//	})).pipe(gulp.dest('dist/public'));
//
//})

//同步编译和压缩sass文件    //'compressed'压缩一行
gulp.task('sass',function(){
	gulp.src('src/sass/*.{scss,sass}').pipe(sassMin({
		outputStyle: 'expanded'
	})).pipe(gulp.dest('dist/css'));
})

//开启服务
gulp.task('server',function(){
	connect.server({
		root: 'dist',
		livereload: true
	})
})
//监听
gulp.task('watch',function(){
	gulp.watch('src/index.html',['copy-html']);
	gulp.watch('src/imgs/**/*',['copy-img']);
	gulp.watch('src/public/**/*',['copy-js']);
	gulp.watch('src/sass/*.{scss,sass}',['sass']);

	gulp.watch('dist/index.html',function(){
		gulp.src('dist/index.html').pipe(connect.reload());
	})

})
//
gulp.task('server-watch',['server','watch']);