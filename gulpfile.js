var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var connect = require('gulp-connect');
var webpackConfig = require('./webpack.config');
gulp.task('webpack', function() {
	webpack(webpackConfig, function(err, stats) {
		if (err) {
			if (err) throw new gutil.PluginError("webpack", err);
		} else {
			console.log("webpack is Ok")
			gulp.run('reload')
		}
	})
})
gulp.task('reload', function() {
	return gulp.src(['../react/app/*.*'])
		.pipe(connect.reload()); //当文件改变时，重新载入
})
gulp.task('connect', function() {
	connect.server({ //创建livereload服务
		root: '',
		port: 3000,
		livereload: true
	});
})
gulp.task('default', function() {
	gulp.run(['webpack', 'connect']);
	gulp.watch(['../react/app/*.*', '../react/app/component/*.*'], function() {
		console.log('watch');
		gulp.run('webpack');
	});
})