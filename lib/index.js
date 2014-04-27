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

/**
 * A plugin for passing an object to metalsmith as metadata.
 *
 * @param {object} data The object that should be available as metadata.
 *
 */
module.exports = function plugin (data) {

    data = (('object' === typeof data)? data : undefined) || {};

    return function through (files, metalsmith, done) {
        var metadata;
        var key;

        if (Object.keys(data).length) {
            metadata = metalsmith.metadata();

            for (key in data) {
                if (data.hasOwnProperty(key)) {
                    metadata[key] = data[key];
                }
            }
        }

        done();
    };
};