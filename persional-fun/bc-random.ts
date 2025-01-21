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

    findBestCombinationWithFixed(
        fixedCards: Card[],
        allCards: Card[],
        n: number
    ): { cards: Card[], point: number } {
        if (fixedCards.length > n) {
            throw new Error("Number of fixed cards cannot exceed target size.");
        }

        this.bestCombination = [];
        this.bestPoints = 0;

        const selectableCards = allCards.filter(
            card => !fixedCards.some(fixed => fixed.name === card.name)
        );

        const targetSize = n - fixedCards.length;

        this.backtrack(selectableCards, 0, [], targetSize, fixedCards);

        return {
            cards: this.bestCombination,
            point: this.bestPoints
        };
    }

    private backtrack(
        cards: Card[],
        start: number,
        current: Card[],
        targetSize: number,
        fixedCards: Card[] = []
    ): void {
        // Include fixed cards in the combination
        if (current.length === targetSize) {
            const combination = [...fixedCards, ...current];
            const points = this.calculatePoints(combination);
            if (points > this.bestPoints) {
                this.bestPoints = points;
                this.bestCombination = combination;
            }
            return;
        }

        // If not enough cards left to complete the target size, return
        if (current.length + (cards.length - start) < targetSize) {
            return;
        }

        // Explore combinations
        for (let i = start; i < cards.length; i++) {
            current.push(cards[i]);
            this.backtrack(cards, i + 1, current, targetSize, fixedCards);
            current.pop();
        }
    }

}

const fixedCards: Card[] = [
    { name: '1', basePoints: 7.71, attributes: { innovator: true } },
    { name: '2', basePoints: 8.73, attributes: { leader: true } },
    { name: '3', basePoints: 6.01, attributes: { entrepreneur: true, innovator: true } },
    { name: '4', basePoints: 8.78, attributes: { entrepreneur: true, leader: true } },
    { name: '5', basePoints: 9.99, attributes: { leader: true } },
    { name: '6', basePoints: 8.08, attributes: { entrepreneur: true, creator: true, enternainer: true } },
];

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
    { name: 'Jangelia Olie', level: 2, basePoints: 9.33, attributes: { creator: true } },
    { name: 'Jerry Tanks', level: 2, basePoints: 7.62, attributes: { enternainer: true } },
    { name: 'Hephen Stawking', level: 2, basePoints: 6.48, attributes: { innovator: true } },
    { name: 'Kim Took', level: 2, basePoints: 9.18, attributes: { leader: true } },
    { name: 'Levin Keary', level: 2, basePoints: 8.76, attributes: { entrepreneur: true, creator: true } },
    { name: 'Lillie Beilish', level: 2, basePoints: 9.4, attributes: { creator: true } },
    { name: 'Melsen Nandela', level: 2, basePoints: 6.29, attributes: { leader: true } },
    { name: 'Omas Thedison', level: 2, basePoints: 6.28, attributes: { leader: true, innovator: true } },
    { name: 'R.J.J Trollkein', level: 2, basePoints: 6.9, attributes: { creator: true } },
    { name: 'Sarl Cagan', level: 2, basePoints: 7.04, attributes: { innovator: true } },
    { name: 'Soward Tuchz', level: 2, basePoints: 7.99, attributes: { entrepreneur: true } },
    { name: 'Theter Piel', level: 2, basePoints: 7.22, attributes: { creator: true } },
    { name: 'Tikola Nesta', level: 2, basePoints: 9.19, attributes: { leader: true, innovator: true } },
    { name: 'Wusan Sojcicki', level: 2, basePoints: 8.34, attributes: { entrepreneur: true } },
];

const selector = new CardSelector();
const resultWithFixed = selector.findBestCombinationWithFixed(fixedCards, cards, 12);
console.log('Best Combination with Fixed Cards:', resultWithFixed);
