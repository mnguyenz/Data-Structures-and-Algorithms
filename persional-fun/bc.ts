interface Card {
    name: string;
    basePoints: number;
    attributes: {
        entrepreneur?: boolean;
        enternainer?: boolean;
        creator?: boolean;
        leader?: boolean;
        innovator?: boolean;
    };
    level?: number;
}

interface BonusConfig {
    threshold: number;
    type: 'ADD' | 'MULTIPLY';
    value: number;
}

const bonusConfig: Record<string, BonusConfig[]> = {
    entrepreneur: [
        { threshold: 2, type: 'ADD', value: 10 },
        { threshold: 4, type: 'ADD', value: 30 },
        { threshold: 7, type: 'ADD', value: 60 },
        { threshold: 10, type: 'ADD', value: 90 },
        { threshold: 13, type: 'ADD', value: 140 },
        { threshold: 17, type: 'ADD', value: 200 },
        { threshold: 21, type: 'ADD', value: 300 },
    ],
    enternainer: [
        { threshold: 2, type: 'MULTIPLY', value: 1.05 },
        { threshold: 4, type: 'MULTIPLY', value: 1.1 },
        { threshold: 6, type: 'MULTIPLY', value: 1.2 },
        { threshold: 9, type: 'MULTIPLY', value: 1.4 },
        { threshold: 12, type: 'MULTIPLY', value: 1.6 },
        { threshold: 16, type: 'MULTIPLY', value: 1.8 },
        { threshold: 20, type: 'MULTIPLY', value: 2.3 },
    ],
    creator: [
        { threshold: 3, type: 'ADD', value: 15 },
        { threshold: 5, type: 'ADD', value: 35 },
        { threshold: 7, type: 'ADD', value: 65 },
        { threshold: 10, type: 'ADD', value: 100 },
        { threshold: 13, type: 'ADD', value: 150 },
        { threshold: 16, type: 'ADD', value: 200 },
        { threshold: 19, type: 'ADD', value: 280 },
    ],
    leader: [
        { threshold: 1, type: 'MULTIPLY', value: 1.04 },
        { threshold: 3, type: 'MULTIPLY', value: 1.08 },
        { threshold: 5, type: 'MULTIPLY', value: 1.15 },
        { threshold: 7, type: 'MULTIPLY', value: 1.35 },
        { threshold: 10, type: 'MULTIPLY', value: 1.5 },
        { threshold: 14, type: 'MULTIPLY', value: 1.7 },
        { threshold: 18, type: 'MULTIPLY', value: 2 },
    ],
    innovator: [
        { threshold: 3, type: 'MULTIPLY', value: 1.1 },
        { threshold: 5, type: 'MULTIPLY', value: 1.2 },
        { threshold: 7, type: 'MULTIPLY', value: 1.3 },
        { threshold: 9, type: 'MULTIPLY', value: 1.45 },
        { threshold: 12, type: 'MULTIPLY', value: 1.65 },
        { threshold: 15, type: 'MULTIPLY', value: 1.8 },
        { threshold: 19, type: 'MULTIPLY', value: 2.1 },
    ]
};

class CardSelector {
    private bestCombination: Card[] = [];
    private bestPoints: number = 0;

    private calculatePoints(cards: Card[]): number {
        const attributeCounts: Record<string, number> = {
            entrepreneur: 0,
            enternainer: 0,
            creator: 0,
            leader: 0,
            innovator: 0,
        };

        let basePoints = 0;

        // Count attributes and sum base points
        for (const card of cards) {
            basePoints += card.basePoints;
            for (const [attr, hasAttr] of Object.entries(card.attributes)) {
                if (hasAttr) {
                    attributeCounts[attr]++;
                }
            }
        }

        // Calculate bonuses
        let totalAddition = 0;
        let totalMultiplier = 1;

        for (const [attribute, count] of Object.entries(attributeCounts)) {
            const config = bonusConfig[attribute];
            let maxAddition = 0;
            let maxMultiplier = 1;

            for (const { threshold, type, value } of config) {
                if (count >= threshold) {
                    if (type === 'ADD') {
                        maxAddition = value;
                    } else if (type === 'MULTIPLY') {
                        maxMultiplier = value;
                    }
                }
            }

            totalAddition += maxAddition;
            totalMultiplier *= maxMultiplier;
        }

        return (basePoints + totalAddition) * totalMultiplier;
    }

    private backtrack(cards: Card[], start: number, current: Card[], targetSize: number): void {
        // If we have selected enough cards, calculate points
        if (current.length === targetSize) {
            const points = this.calculatePoints(current);
            if (points > this.bestPoints) {
                this.bestPoints = points;
                this.bestCombination = [...current];
            }
            return;
        }

        // If we don't have enough cards left to reach targetSize, return
        if (current.length + (cards.length - start) < targetSize) {
            return;
        }

        // Try all possible cards from the current position
        for (let i = start; i < cards.length; i++) {
            current.push(cards[i]);
            this.backtrack(cards, i + 1, current, targetSize);
            current.pop();
        }
    }

    findBestCombination(cards: Card[], n: number, isFilterBasePoint?: number): { names: string[], point: number } {
        this.bestCombination = [];
        this.bestPoints = 0;

        if (isFilterBasePoint) {
            cards = cards.filter(card =>
                Object.values(card.attributes).filter(Boolean).length > 1 || card.basePoints > isFilterBasePoint
            );
        }

        // Sort cards by basePoints to potentially find better combinations earlier
        const sortedCards = [...cards].sort((a, b) => b.basePoints - a.basePoints);

        this.backtrack(sortedCards, 0, [], n);

        return {
            names: this.bestCombination.sort((a, b) => b.basePoints - a.basePoints).map(card => card.name),
            point: this.bestPoints
        };
    }
}

// Cards list
const cards: Card[] = [
    { name: 'Albert Rowney Sr.', level: 2, basePoints: 6.75, attributes: { enternainer: true } },
    { name: 'Arack Bobama', level: 2, basePoints: 6, attributes: { leader: true } },
    { name: 'Bergrey Srin', level: 2, basePoints: 9.99, attributes: { innovator: true } },
    // { name: 'Bergrey Srin', level: 2, basePoints: 7.67, attributes: { innovator: true } },
    { name: 'Bimons Siles', level: 2, basePoints: 8.15, attributes: { enternainer: true } },
    { name: 'Carbara Borcoran', level: 2, basePoints: 9.82, attributes: { entrepreneur: true, creator: true } },
    { name: 'Crosti Tornado', level: 2, basePoints: 8.45, attributes: { enternainer: true } },
    { name: 'Fenry Hord', level: 2, basePoints: 7.07, attributes: { innovator: true } },
    { name: 'Foger Rederer', level: 2, basePoints: 6.98, attributes: { enternainer: true } },
    { name: 'Frosalind Ranklin', level: 2, basePoints: 6.82, attributes: { innovator: true } },
    { name: 'Jangelia Olie', level: 2, basePoints: 9.33, attributes: { creator: true } },
    { name: 'Jerry Tanks', level: 2, basePoints: 7.62, attributes: { enternainer: true } },
    { name: 'Hephen Stawking', level: 2, basePoints: 6.48, attributes: { innovator: true } },
    { name: 'Kim Took', level: 2, basePoints: 9.18, attributes: { leader: true } },
    { name: 'Levin Keary', level: 2, basePoints: 8.76, attributes: { entrepreneur: true, creator: true } },
    { name: 'Lillie Beilish', level: 2, basePoints: 9.4, attributes: { creator: true } },
    { name: 'Melsen Nandela', level: 2, basePoints: 6.29, attributes: { leader: true } },
    { name: 'Nisaac Oltden', level: 2, basePoints: 9.6, attributes: { innovator: true } },
    { name: 'Omas Thedison', level: 2, basePoints: 6.28, attributes: { leader: true, innovator: true } },
    { name: 'Pamath Chalihapitiya', level: 2, basePoints: 9.94, attributes: { entrepreneur: true, leader: true } },
    { name: 'Parry Lage', level: 2, basePoints: 9.51, attributes: { entrepreneur: true, innovator: true } },
    { name: 'R.J.J Trollkein', level: 2, basePoints: 6.9, attributes: { creator: true } },
    { name: 'Richeael Mordan', level: 2, basePoints: 9.28, attributes: { enternainer: true, innovator: true } },
    { name: 'Sarl Cagan', level: 2, basePoints: 7.04, attributes: { innovator: true } },
    { name: 'Soward Tuchz', level: 2, basePoints: 7.99, attributes: { entrepreneur: true } },
    { name: 'Theter Piel', level: 2, basePoints: 7.22, attributes: { creator: true } },
    { name: 'Tikola Nesta', level: 2, basePoints: 9.19, attributes: { leader: true, innovator: true } },
    { name: 'Wanye Kest', level: 2, basePoints: 8.95, attributes: { creator: true } },
    { name: 'Wusan Sojcicki', level: 2, basePoints: 8.34, attributes: { entrepreneur: true } },

    // { name: 'Albert Rowney Sr.', basePoints: 5.77, attributes: { enternainer: true } },
    // { name: 'Arack Bobama', basePoints: 5.22, attributes: { leader: true } },
    { name: 'Barren Wruffett', basePoints: 5.59, attributes: { entrepreneur: true } },
    // { name: 'Barren Wruffett', basePoints: 5.23, attributes: { entrepreneur: true } },
    // { name: 'Barren Wruffett', basePoints: 4.18, attributes: { entrepreneur: true } },
    { name: 'Beryl Handserg', basePoints: 5.73, attributes: { entrepreneur: true, leader: true } },
    // { name: 'Beryl Handserg', basePoints: 4.03, attributes: { entrepreneur: true, leader: true } },
    { name: 'Beven Serg', basePoints: 5.33, attributes: { creator: true } },
    // { name: 'Beven Serg', basePoints: 5.3, attributes: { creator: true } },
    // { name: 'Beven Serg', basePoints: 5.18, attributes: { creator: true } },
    // { name: 'Beven Serg', basePoints: 4.83, attributes: { creator: true } },
    // { name: 'Bimons Siles', basePoints: 5.9, attributes: { enternainer: true } },
    // { name: 'Bimons Siles', basePoints: 5.76, attributes: { enternainer: true } },
    { name: 'Busain Olt', basePoints: 4.02, attributes: { enternainer: true } },
    { name: 'Candrew Arnegie', basePoints: 5.27, attributes: { entrepreneur: true } },
    // { name: 'Candrew Arnegie', basePoints: 4.68, attributes: { entrepreneur: true } },
    { name: 'Carie Murie', basePoints: 5.63, attributes: { innovator: true } },
    // { name: 'Carie Murie', basePoints: 4.38, attributes: { innovator: true } },
    { name: 'Carrett Gamp', basePoints: 4.72, attributes: { entrepreneur: true } },
    // { name: 'Carrett Gamp', basePoints: 4.25, attributes: { entrepreneur: true } },
    { name: 'Chian Bresky', basePoints: 4.73, attributes: { entrepreneur: true } },
    { name: 'Chinston Wurhill', basePoints: 5.19, attributes: { creator: true } },
    // { name: 'Chinston Wurhill', basePoints: 4.4, attributes: { creator: true } },
    { name: 'Crosti Tornado', basePoints: 5.88, attributes: { enternainer: true } },
    { name: 'Dag Gadol', basePoints: 5.43, attributes: { enternainer: true, innovator: true } },
    // { name: 'Dag Gadol', basePoints: 4.59, attributes: { enternainer: true, innovator: true } },
    { name: 'Darles Charwin', basePoints: 5.99, attributes: { innovator: true } },
    // { name: 'Darles Charwin', basePoints: 5.14, attributes: { innovator: true } },
    { name: 'Elbert Ainstein', basePoints: 6, attributes: { innovator: true } },
    // { name: 'Elbert Ainstein', basePoints: 5.28, attributes: { innovator: true } },
    // { name: 'Elbert Ainstein', basePoints: 4.94, attributes: { innovator: true } },
    { name: 'Fenry Hord', basePoints: 5.52, attributes: { innovator: true } },
    // { name: 'Frosalind Ranklin', basePoints: 5.9, attributes: { innovator: true } },
    // { name: 'Frosalind Ranklin', basePoints: 4.88, attributes: { innovator: true } },
    { name: 'Gahatma Mandhi', basePoints: 5.16, attributes: { leader: true } },
    // { name: 'Gahatma Mandhi', basePoints: 4.97, attributes: { leader: true } },
    // { name: 'Gahatma Mandhi', basePoints: 4.1, attributes: { leader: true } },
    { name: 'Gane Joodall', basePoints: 5.48, attributes: { innovator: true } },
    // { name: 'Gane Joodall', basePoints: 4.14, attributes: { innovator: true } },
    { name: 'Gariana Ande', basePoints: 4.75, attributes: { creator: true, enternainer: true } },
    // { name: 'Gariana Ande', basePoints: 4.36, attributes: { creator: true, enternainer: true } },
    { name: 'Gori Lreiner', basePoints: 5.16, attributes: { entrepreneur: true } },
    // { name: 'Gori Lreiner', basePoints: 5.13, attributes: { entrepreneur: true } },
    { name: 'Gralex Braham', basePoints: 5.59, attributes: { innovator: true } },
    // { name: 'Gralex Braham', basePoints: 4.69, attributes: { innovator: true } },
    // { name: 'Gralex Braham', basePoints: 4.38, attributes: { innovator: true } },
    { name: 'Heed Rastings', basePoints: 4.99, attributes: { entrepreneur: true } },
    // { name: 'Heed Rastings', basePoints: 4.16, attributes: { entrepreneur: true } },
    // { name: 'Heed Rastings', basePoints: 4, attributes: { entrepreneur: true } },
    { name: 'Hobert Rerjavec', basePoints: 5.38, attributes: { entrepreneur: true } },
    // { name: 'Hobert Rerjavec', basePoints: 4.84, attributes: { entrepreneur: true } },
    // { name: 'Hobert Rerjavec', basePoints: 4.62, attributes: { entrepreneur: true } },
    { name: 'Ichelle Mobama', basePoints: 5.1, attributes: { creator: true } },
    // { name: 'Ichelle Mobama', basePoints: 4.62, attributes: { creator: true } },
    { name: 'Jarlet Sohan', basePoints: 5.9, attributes: { enternainer: true } },
    // { name: 'Jarlet Sohan', basePoints: 5.86, attributes: { enternainer: true } },
    { name: 'Jather Onson', basePoints: 5.89, attributes: { innovator: true } },
    // { name: 'Jather Onson', basePoints: 5.44, attributes: { innovator: true } },
    // { name: 'Jather Onson', basePoints: 4.4, attributes: { innovator: true } },
    { name: 'Jaymond Dohn', basePoints: 5.97, attributes: { entrepreneur: true } },
    // { name: 'Jaymond Dohn', basePoints: 5.7, attributes: { entrepreneur: true } },
    { name: 'JeBron Lames', basePoints: 5.63, attributes: { enternainer: true } },
    { name: 'K. Fennedy', basePoints: 5.27, attributes: { leader: true } },
    // { name: 'K. Fennedy', basePoints: 4.88, attributes: { leader: true } },
    // { name: 'K. Fennedy', basePoints: 4.75, attributes: { leader: true } },
    { name: 'K.J Lowwring', basePoints: 5.02, attributes: { creator: true, innovator: true } },
    { name: 'Kavis Tralanick', basePoints: 4.31, attributes: { entrepreneur: true } },
    // { name: 'Kim Took', basePoints: 4.62, attributes: { leader: true } },
    { name: 'Mack Ja', basePoints: 5.73, attributes: { entrepreneur: true } },
    // { name: 'Mack Ja', basePoints: 4.95, attributes: { entrepreneur: true } },
    // { name: 'Mack Ja', basePoints: 4.49, attributes: { entrepreneur: true } },
    { name: 'Mangela Erkel', basePoints: 5.75, attributes: { leader: true } },
    // { name: 'Mangela Erkel', basePoints: 4.87, attributes: { leader: true } },
    // { name: 'Mangela Erkel', basePoints: 4.74, attributes: { leader: true } },
    { name: 'Mell Dichael', basePoints: 5.65, attributes: { leader: true } },
    // { name: 'Mell Dichael', basePoints: 4.11, attributes: { leader: true } },
    { name: 'Merge Rartin', basePoints: 5.34, attributes: { creator: true } },
    // { name: 'Merge Rartin', basePoints: 4.91, attributes: { creator: true } },
    { name: 'Mionel Lessi', basePoints: 5.93, attributes: { enternainer: true } },
    // { name: 'Mionel Lessi', basePoints: 5.3, attributes: { enternainer: true } },
    // { name: 'Mionel Lessi', basePoints: 4.27, attributes: { enternainer: true } },
    { name: 'Nafael Radal', basePoints: 5.39, attributes: { enternainer: true } },
    // { name: 'Nafael Radal', basePoints: 4.36, attributes: { enternainer: true } },
    // { name: 'Nafael Radal', basePoints: 4.25, attributes: { enternainer: true } },
    { name: 'Nihanma Rah', basePoints: 4.17, attributes: { creator: true } },
    { name: 'Panther Irons', basePoints: 4.54, attributes: { enternainer: true } },
    // { name: 'Panther Irons', basePoints: 4.16, attributes: { enternainer: true } },
    { name: 'Pundar Sicha', basePoints: 5.22, attributes: { innovator: true } },
    // { name: 'Pundar Sicha', basePoints: 4.19, attributes: { innovator: true } },
    { name: 'Ranklin Doosevelt', basePoints: 4.94, attributes: { leader: true } },
    // { name: 'Ranklin Doosevelt', basePoints: 4.18, attributes: { leader: true } },
    { name: 'Sarisma Marey', basePoints: 5.14, attributes: { creator: true } },
    // { name: 'Sarisma Marey', basePoints: 4.36, attributes: { creator: true } },
    // { name: 'Sarl Cagan', basePoints: 5.14, attributes: { innovator: true } },
    { name: 'Sarry Lellison', basePoints: 5.55, attributes: { entrepreneur: true } },
    { name: 'Shed Eeran', basePoints: 5.31, attributes: { creator: true, enternainer: true } },
    // { name: 'Shed Eeran', basePoints: 4.46, attributes: { creator: true, enternainer: true } },
    // { name: 'Soward Tuchz', basePoints: 5.48, attributes: { entrepreneur: true } },
    { name: 'Stepin Kong', basePoints: 4.95, attributes: { creator: true, innovator: true } },
    { name: 'Svan Epigel', basePoints: 4.97, attributes: { leader: true } },
    // { name: 'Svan Epigel', basePoints: 4.13, attributes: { leader: true } },
    { name: 'Teli Gyson', basePoints: 5.44, attributes: { creator: true } },
    // { name: 'Teli Gyson', basePoints: 4.19, attributes: { creator: true } },
    { name: 'Thargaret Matcher', basePoints: 4.84, attributes: { creator: true, leader: true } },
    { name: 'The Pebble', basePoints: 5.6, attributes: { leader: true, enternainer: true } },
    { name: 'Tusbin Jieber', basePoints: 5.91, attributes: { enternainer: true } },
    // { name: 'Tusbin Jieber', basePoints: 5.85, attributes: { enternainer: true } },
    // { name: 'Tusbin Jieber', basePoints: 5.71, attributes: { enternainer: true } },
    { name: 'Yalala Mousafzai', basePoints: 5.6, attributes: { leader: true } },
    // { name: 'Yalala Mousafzai', basePoints: 4.04, attributes: { leader: true } },
    // { name: 'Wanye Kest', basePoints: 5.55, attributes: { creator: true } },
    { name: 'Weve Stozniak', basePoints: 5.58, attributes: { entrepreneur: true, innovator: true } },
    // { name: 'Weve Stozniak', basePoints: 4.68, attributes: { entrepreneur: true, innovator: true } },
    { name: 'Werlina Sames', basePoints: 5.9, attributes: { entrepreneur: true, enternainer: true } },
    // { name: 'Werlina Sames', basePoints: 5.18, attributes: { entrepreneur: true, enternainer: true } },
    // { name: 'Wusan Sojcicki', basePoints: 5.71, attributes: { entrepreneur: true } },
    { name: 'Zack Muckerberg', basePoints: 5.83, attributes: { entrepreneur: true } },
    // { name: 'Zack Muckerberg', basePoints: 4.84, attributes: { entrepreneur: true } },
    // { name: 'Zack Muckerberg', basePoints: 4.38, attributes: { entrepreneur: true } },
];

const selector = new CardSelector();
const result = selector.findBestCombination(cards, 14, 6.8);
console.log('Best Combination:', result);
