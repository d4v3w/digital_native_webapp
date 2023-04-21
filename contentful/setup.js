/**
 * Script taken from https://github.dev/contentful/react-starter
 * MIT License

Copyright (c) 2022 Contentful

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 
 */
require('dotenv').config()
const spaceImport = require('contentful-import')

const { CONTENTFUL_SPACE_ID, CONTENTFUL_MANAGEMENT_TOKEN } = process.env

if (!CONTENTFUL_SPACE_ID || !CONTENTFUL_MANAGEMENT_TOKEN) {
    throw new Error(
        [
            'Parameters missing...',
            'Please ensure your .env file exists and contains the variables CONTENTFUL_SPACE_ID and CONTENTFUL_MANAGEMENT_TOKEN',
        ].join('\n')
    )
}

spaceImport({
    contentFile: './contentful/export.json',
    spaceId: CONTENTFUL_SPACE_ID,
    managementToken: CONTENTFUL_MANAGEMENT_TOKEN,
})
    .then(() => console.log('The content model of your space is set up!'))
    .catch((e) => console.error(e))
