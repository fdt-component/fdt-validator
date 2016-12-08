'use strict';

const webpack = require('webpack');
const gulpWebpack = require('webpack-stream');
const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const del = require('del');
const wpConfig = require('./webpack.config.js');
const objectAssign = require('object-assign');

gulp.task('clean', (cb) => {
  del(['dist']).then(() => {
    cb();
  });
});

gulp.task('js', ['clean'], function(){
  return gulp.src('src/tools/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/tools/'))
});

gulp.task('webpack', ['js'], () => {
  let config = objectAssign({}, wpConfig, {
    plugins: [
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compressor: {
          warnings: false
        }
      })
    ]
  })
  return gulp.src('./src/*.js')
    .pipe(gulpWebpack(config))
    .pipe(gulp.dest('dist'))
  });

gulp.task('build', ['webpack']);
