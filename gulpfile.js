'use strict';

const webpack = require('webpack');
const gulpWebpack = require('webpack-stream');
const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const del = require('del');
const wpConfig = require('./webpack.config.js');

gulp.task('clean', (cb) => {
  del(['dist','lib']).then(() => {
    cb();
  });
});

gulp.task('build', ['clean'], function(){
  return gulp.src('./src/**/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('lib/'))
});

gulp.task('webpack', ['build'], () => {
  return gulp.src('./demo/*.js')
    .pipe(gulpWebpack(wpConfig))
    .pipe(gulp.dest('dist'))
});

gulp.task('dev', ['webpack'], () => {
  return gulp.watch(['src/**/*.js', './demo/*.js'], ['webpack'])
});
