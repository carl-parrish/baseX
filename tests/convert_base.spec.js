let baseX = require('../utils/index.js');

describe('Utils test suite', () => {
    test('should return converted binary', () => {
        const binary = baseX(23, 2);
        expect(binary).toBe((23 >>> 0).toString(2));
    }), 
    test('should return converted octal', () => {
        const octal = baseX(23, 8);
        expect(octal).toBe((23 >>> 0).toString(8));
    }),
    test('should return converted hexadecimal', () => {
        const hexadecimal = baseX(23, 16);
        expect(hexadecimal).toBe((23 >>> 0).toString(16));
    }),
    test('should return converted base36', () => {
        const base36 = baseX(124, 36);
        expect(base36).toBe((124 >>> 0).toString(36));
    }),
    test('should return converted base62', () => {
        const base64 = baseX(23, 62);
        expect(base64).toBe('n');
    }),
    test('should return Base64', () => {
        const base64 = baseX(125, 64);
        expect(base64).toBe('1Z');
    }),
    test('should return Base7', () => {
        const base7 = baseX(23, 7);
        expect(base7).toBe('32');
    }) 
});