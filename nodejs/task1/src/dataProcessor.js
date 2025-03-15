function dataProcessor(text) {
    const words = text
        .toLowerCase()
        .replace(/[^\w\s]/g, '')
        .split(/\s+/)
        .filter(Boolean);

    const wordFrequencies = words.reduce((acc, word) => {
        acc[word] = (acc[word] || 0) + 1;
        return acc;
    }, {});

    return {
        totalWords: words.length,
        wordFrequencies
    };
}

module.exports = dataProcessor;
