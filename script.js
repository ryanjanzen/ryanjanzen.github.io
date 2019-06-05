"use strict";

class X12Parser {
    segmentSeparator = '~';
    elementSeparator = '*';
    fieldSeparator = ':';

    constructor() {
        const submitButton = document.getElementById('submitX12');
        submitButton.addEventListener('click', () => { this.parse(); });
    }

    /**
     * 
     * @param {string} text 
     */
    parse() {
        const textElement = document.getElementById('claimX12');
        const text = textElement.textContent;

        let results = '';
        const segments = text.split(this.segmentSeparator);
        for(let segment of segments) {
            results += 'Segment:' + segment + '\n';
            const elements = segment.split(this.elementSeparator);
            for(let element of elements) {
                results += 'Element: ' + element + '\n';
            }
            results += '\n';
        }

        const resultElement = document.getElementById('claimResult');
        resultElement.textContent = results;
    }
}

new X12Parser();