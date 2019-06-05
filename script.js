"use strict";

class X12Parser {
    segmentSeparator = '~';
    elementSeparator = '*';
    fieldSeparator = ':';

    constructor() {
        const submitButton = document.querySelector('.submitClaim');
        submitButton.addEventListener('click', () => { this.parse(); });
    }

    /**
     * 
     * @param {string} text 
     */
    parse() {
        const textElement = document.querySelector('.claimX12');
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

        const resultElement = document.querySelector('.claimResult');
        resultElement.textContent = results;
    }
}

new X12Parser();