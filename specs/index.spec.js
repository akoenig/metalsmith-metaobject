/*
 * metalsmith-metaobject
 *
 * Copyright(c) 2014 André König <andre.koenig@posteo.de>
 * MIT Licensed
 *
 */

/**
 * @author André König <andre.koenig@posteo.de>
 *
 */

'use strict';

var fs = require('fs');
var path = require('path');
var metalsmith = require('metalsmith')(path.join(__dirname, 'fixtures'));
var markdown = require('metalsmith-markdown');
var templates = require('metalsmith-templates');
var metaobject = require('../');

describe('The "metalsmith-metaobject" plugin', function () {

    it('should be able to inject a meta object', function (done) {
        var meta = {
            author: {
                name: 'André König'
            }
        };

        metalsmith
            .use(metaobject(meta))
            .use(templates({
                engine: 'handlebars'
            }))
            .build(function () {
                var result = fs.readFileSync(path.join(__dirname, 'fixtures', 'build', 'content', 'index.md'), 'utf-8');

                expect(result).toBe(meta.author.name);

                done();
            });
    });
});