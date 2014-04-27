# metalsmith-metaobject

A plugin to pass an object as metadata to metalsmith.

_Note:_ If you want to load your metadata from external JSON files consider using [metalsmith-metadata](https://github.com/segmentio/metalsmith-metadata/).

## Installation

Install with [npm](https://npmjs.org/package/metalsmith-metaobject).

    npm install --save metalsmith-metaobject

## CLI Usage

  Install via npm and then add the `metalsmith-metaobject` key to your `metalsmith.json` plugins.

```json
{
    "plugins": {
        "metalsmith-metaobject": {
            "author": {
                "name": "André König",
                "github": "akoenig",
                "email": "andre.koenig@posteo.de"
            }
            "feed": "/atom.xml"
        }
    }
}
```

## Javascript Usage

  Pass the options to `Metalsmith#use`:

```js
var metaobject = require('metalsmith-metaobject');

metalsmith.use(metaobject({
    author: {
        name: 'André König',
        github: 'akoenig',
        email: 'andre.koenig@posteo.de'
    },
    feed: '/atom.xml'
}));
```

## Template usage

After passing the respective meta data object to `metalsmith` you are able to use it in your templates: Example for `handlebars`:

    {{ author.name }}

## Changelog

### Version 0.1.0 (20140427)

- Initial Release

## Author

Copyright 2014, [André König](http://) (andre.koenig@posteo.de)
