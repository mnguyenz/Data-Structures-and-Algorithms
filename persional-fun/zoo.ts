function zooIncome(): void {
    const data = [
        // {
        //     name: 'Squirrel',
        //     space: 1,
        //     spend: 5450,
        //     revenue: 1000
        // },
        // {
        //     name: 'Rabbit',
        //     space: 2,
        //     spend: 2800,
        //     revenue: 550
        // },
        // {
        //     name: 'Turrle',
        //     space: 3,
        //     spend: 1250,
        //     revenue: 250
        // },
        // {
        //     name: 'Flamingo',
        //     space: 4,
        //     spend: 6200,
        //     revenue: 1050
        // },
        // {
        //     name: 'Zebra',
        //     space: 5,
        //     spend: 6400,
        //     revenue: 1000
        // },
        {
            name: 'Moose',
            space: 6,
            spend: 5250,
            revenue: 800
        },
        {
            name: 'Giraffe',
            space: 7,
            spend: 830,
            revenue: 125
        },
        {
            name: 'Parrot',
            space: 8,
            spend: 380,
            revenue: 50
        },
        {
            name: 'Fox',
            space: 9,
            spend: 1965,
            revenue: 250
        },
        {
            name: 'Penguin',
            space: 10,
            spend: 2345,
            revenue: 270
        },
        {
            name: 'Panda',
            space: 11,
            spend: 3990,
            revenue: 400
        },
        {
            name: 'Crocodile',
            space: 12,
            spend: 3220,
            revenue: 360
        },
        {
            name: 'Wolf',
            space: 13,
            spend: 4910,
            revenue: 480
        },
        {
            name: 'Bear',
            space: 14,
            spend: 6000,
            revenue: 530
        },
        {
            name: 'Dolphin',
            space: 15,
            spend: 7000,
            revenue: 630
        },
        {
            name: 'Cat (Rare)',
            // space: 10,
            spend: 14900,
            revenue: 22000
        },
        {
            name: 'Dog (Rare)',
            // space: 10,
            spend: 49900,
            revenue: 75000
        },
        {
            name: 'Python (Epic)',
            // space: 10,
            spend: 149900,
            revenue: 224000
        },
        {
            name: 'Platypus',
            // space: 10,
            spend: 16000,
            revenue: 2000
        },
        {
            name: 'Capybara',
            // space: 10,
            spend: 16000,
            revenue: 2000
        }
        ,
        {
            name: 'Walrus',
            // space: 10,
            spend: 23000,
            revenue: 2300
        }
        ,
        {
            name: 'Seal',
            // space: 10,
            spend: 23000,
            revenue: 2300
        }
        ,
        {
            name: 'Pepe',
            // space: 10,
            spend: 25000,
            revenue: 2500
        }
    ]
    data.sort((a, b) => (a.revenue / a.spend) - (b.revenue / b.spend));
    console.log(data);
};

zooIncome();