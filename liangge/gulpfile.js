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
	gulp.src('src/*.html').pipe(gulp.dest('dist'));
})
gulp.task('min-html',function(){
	var options = {
		collapseWhitespace:true,
		collapseBooleanAttributes:true,
		removeComments:true,
		removeEmptyAttributes:true,
		removeScriptTypeAttributes:true,
		removeStyleLinkTypeAttributes:true,
		minifyJS:true,
		minifyCSS:true
	};
	gulp.src('dist/*.html').pipe(htmlMin(options)).pipe(gulp.dest('dist-min'));
})
//同步压缩img文件
gulp.task('copy-img',function(){
	gulp.src('src/imgs/**/*').pipe(gulp.dest('dist/imgs'));
})
gulp.task('min-img',function(){
	gulp.src('dist/imgs/**/*').pipe(gulp.dest('dist-min/imgs'));
})
//同步编译和压缩js文件 转化ES6语法为ES5语法 排除混淆关键字
gulp.task('copy-js',function(){
	gulp.src('src/public/**/*').pipe(gulp.dest('dist/public'));
})
gulp.task('min-js',function(){
	gulp.src('dist/public/**/*').pipe(babel({
		presets: ['es2015']
	})).pipe(jsMin({
		mangel: {
			except: ['jQuery','$']
		}
	})).pipe(gulp.dest('dist-min/public'));

})

//同步编译和压缩sass文件    //'compressed'压缩一行
gulp.task('sass',function(){
	gulp.src('src/sass/*.{scss,sass}').pipe(sassMin({
		outputStyle: 'expanded'
	})).pipe(gulp.dest('dist/css'));
})
//压缩css文件
gulp.task('min-css',function(){
	gulp.src('dist/css/*.css').pipe(cssMin()).pipe(gulp.dest('dist-min/css'));
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
	gulp.watch('src/*.html',['copy-html']);
	gulp.watch('src/imgs/**/*',['copy-img']);
	gulp.watch('src/public/**/*',['copy-js']);
	gulp.watch('src/sass/*.{scss,sass}',['sass']);

	gulp.watch('src/public/plug/goods.js',function(){
		gulp.src('dist/goods.html').pipe(connect.reload());
	})

});
//同步监听并开启服务时实刷新
gulp.task('server-watch',['server','watch']);

//压缩js,img,html,css到dist-min文件夹
gulp.task('build',['min-html','min-img','min-css','min-js']);