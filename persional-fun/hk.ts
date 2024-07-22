function orderMining(): void {
    const data = [
        {
            name: 'Markets - Fan Tokens',
            spend: 428130,
            revenue: 2000
        },
        {
            name: 'Markets - Staking',
            spend: 149846,
            revenue: 1260
        },
        {
            name: 'Markets - BTC pairs',
            spend: 20183,
            revenue: 90
        },
        {
            name: 'Markets - ETH pairs',
            spend: 47952,
            revenue: 96
        },
        {
            name: 'Markets - Top 10 cmc pairs',
            spend: 13939,
            revenue: 147
        },
        {
            name: 'Markets - GameFi tokens',
            spend: 40365,
            revenue: 158
        },
        {
            name: 'Markets - Meme coins',
            spend: 85626,
            revenue: 232
        },
        {
            name: 'Markets - Shit coins',
            spend: 214065,
            revenue: 1240
        },
        {
            name: 'Markets - Margin Trading x10',
            spend: 107033,
            revenue: 579
        },
        {
            name: 'Markets - Margin Trading 20',
            spend: 59600,
            revenue: 689
        },
        {
            name: 'Markets - Margin Trading x30',
            spend: 282556,
            revenue: 1120
        },
        {
            name: 'Markets - Margin Trading x50',
            spend: 428130,
            revenue: 2310
        },
        {
            name: 'Markets - Derivatives',
            spend: 399602,
            revenue: 1190
        }
        ,
        {
            name: 'Markets - Web3 Integration',
            spend: 278285,
            revenue: 1660
        },
        // {
        //     name: 'Markets - P2P trading',
        //     spend: 58543,
        //     revenue: 717
        // },
        // {
        //     name: 'Markets - Trading Bot',
        //     spend: 50064,
        //     revenue: 384
        // },
        {
            name: 'PR & Team - Support team',
            spend: 17880,
            revenue: 138
        },
        {
            name: 'PR & Team - HamsterBook',
            spend: 21407,
            revenue: 147
        },
        {
            name: 'PR & Team - X',
            spend: 23547,
            revenue: 168
        },
        {
            name: 'PR & Team - Cointelegraph',
            spend: 14985,
            revenue: 84
        },
        {
            name: 'PR & Team - HamsterTube',
            spend: 25688,
            revenue: 189
        },
        {
            name: 'PR & Team - HamsterGram',
            spend: 21407,
            revenue: 105
        },
        {
            name: 'PR & Team - Tiktok',
            spend: 119880,
            revenue: 241
        },
        {
            name: 'PR & Team - Coindesk',
            spend: 80730,
            revenue: 180
        },
        {
            name: 'PR & Team - Influencers',
            spend: 59600,
            revenue: 531
        },
        {
            name: 'PR & Team - CEO',
            spend: 23840,
            revenue: 197
        },
        {
            name: 'PR & Team - IT team',
            spend: 161461,
            revenue: 541
        },
        {
            name: 'PR & Team - Marketing',
            spend: 23840,
            revenue: 138
        },
        {
            name: 'PR & Team - Partnership Program',
            spend: 11921,
            revenue: 138
        },
        {
            name: 'PR & Team - Product team',
            spend: 80730,
            revenue: 225
        },
        {
            name: 'PR & Team - BisDev team',
            spend: 21407,
            revenue: 105
        },
        {
            name: 'PR & Team - Two factor authentication',
            spend: 332297,
            revenue: 322
        },
        {
            name: 'PR & Team - UX and UI team',
            spend: 32538,
            revenue: 368
        },
        {
            name: 'PR & Team - Security team',
            spend: 159841,
            revenue: 482
        },
        {
            name: 'PR & Team - QA team',
            spend: 54587,
            revenue: 400
        },
        {
            name: 'PR & Team - Antihacking Shield',
            spend: 27877,
            revenue: 202
        },
        {
            name: 'PR & Team - Risk Management team',
            spend: 85626,
            revenue: 558
        },
        {
            name: 'PR & Team - Security Audition',
            spend: 25671,
            revenue: 172
        },
        {
            name: 'PR & Team - Anonymous transactions ban',
            spend: 143857,
            revenue: 723
        },
        {
            name: 'PR & Team - Blocking suspicious accounts',
            spend: 100913,
            revenue: 360
        },
        // {
        //     name: 'PR & Team - Tokenomics expert',
        //     spend: 42786,
        //     revenue: 859
        // },
        // {
        //     name: 'PR & Team - Consensus Explorer pass',
        //     spend: 213929,
        //     revenue: 2570
        // },
        // {
        //     name: 'PR & Team - VC Labs',
        //     spend: 85498,
        //     revenue: 803
        // },
        {
            name: 'PR & Team - Compliance officer',
            spend: 29950,
            revenue: 206
        },
        {
            name: 'Legal - KYC',
            spend: 33230,
            revenue: 26
        },
        {
            name: 'Legal - KYB',
            spend: 40365,
            revenue: 135
        },
        {
            name: 'Legal - opinion',
            spend: 42813,
            revenue: 126
        },
        {
            name: 'Legal - SEC transparancy',
            spend: 96876,
            revenue: 135
        },
        {
            name: 'Legal - Anti money loudering',
            spend: 128439,
            revenue: 589
        },
        {
            name: 'Legal - Licence UAE',
            spend: 119200,
            revenue: 1100
        },
        {
            name: 'Legal - Licence Europe',
            spend: 119200,
            revenue: 1410
        },
        {
            name: 'Legal - Licence Asia',
            spend: 69693,
            revenue: 680
        },
        {
            name: 'Legal - Licence South America',
            spend: 69693,
            revenue: 717
        },
        {
            name: 'Legal - Licence Australia',
            spend: 403652,
            revenue: 1530
        },
        {
            name: 'Legal - Licence North America',
            spend: 238399,
            revenue: 1830
        },
        {
            name: 'Legal - Licence Nigenia',
            spend: 121096,
            revenue: 383
        },
        {
            name: 'Legal - Licence Japan',
            spend: 427858,
            revenue: 4460
        },
        {
            name: 'Specials - Hamster Kombat merch',
            spend: 71520,
            revenue: 197
        },
        {
            name: 'Specials - TON + Hamster Kombat = Success',
            spend: 1276282,
            revenue: 5720
        },
        {
            name: 'Specials - Consensus Piranha Pass',
            spend: 275801,
            revenue: 3050
        },
        {
            name: 'Specials - Web 3 Academy Launch',
            spend: 262239,
            revenue: 2950
        },
        {
            name: 'Specials - Youtube Gold Button',
            spend: 59600,
            revenue: 541
        },
        {
            name: 'Specials - Hamster Youtube Channel',
            spend: 64220,
            revenue: 526
        },
        // {
        //     name: 'Specials - Bitcoin Pizza Day',
        //     spend: 23840,
        //     revenue: 197
        // },
        // {
        //     name: 'Specials - Top 10 Global Ranking',
        //     spend: 85572,
        //     revenue: 2060
        // },
        {
            name: 'Specials - Special Hamster Conference',
            spend: 403652,
            revenue: 2020
        },
        {
            name: 'Specials - There are two chairs...',
            spend: 696935,
            revenue: 3670
        },
        {
            name: 'Specials - Apps Center Listing',
            spend: 209080,
            revenue: 1830
        }
    ]
    data.sort((a, b) => (a.revenue / a.spend) - (b.revenue / b.spend));
    console.log(data);
};

orderMining();