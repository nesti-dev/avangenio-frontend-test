const games = [
    {
        platform: "party",
        name: 'Game 1',
        background: 'src/assets/images/1_75884dd9-8acc-45de-b09c-66c5d0f875e5.jpeg',
        teams: [
            {name: 'Team 1'},
            {name: 'Team 2'},
            {name: 'Team 3'},
            {name: 'Team 1'},
            {name: 'Team 2'},
            {name: 'Team 3'},
            {name: 'Team 1'},
            {name: 'Team 2'},
            {name: 'Team 3'},
            {name: 'Team 1'},
            {name: 'Team 2'},
            {name: 'Team 3'},
            {name: 'Team 1'},
            {name: 'Team 2'},
            {name: 'Team 3'},
        ]
    },
    {
        platform: 'party',
        name: 'Game 2',
        background: 'src/assets/images/2_75884dd9-8acc-45de-b09c-66c5d0f875e5.jpeg',
        teams: [
            {name: 'Team 4'},
            {name: 'Team 5'},
            {name: 'Team 6'}
        ]
    },
    {
        platform: 'party',
        name: 'Game 3',
        teams: [
            {name: 'Team 7'},
            {name: 'Team 8'},
            {name: 'Team 9'}
        ]
    },
    {
        platform: 'match',
        name: 'Game 4',
        teams: [
            {name: 'Team 10'},
            {name: 'Team 11'},
            {name: 'Team 12'}
        ]
    },
    {
        platform: 'match',
        name: 'Game 5',
        teams: [
            {name: 'Team 13'},
            {name: 'Team 14'},
            {name: 'Team 15'}
        ]
    },
    {
        platform: 'stream',
        name: 'Game 6',
        teams: [
            {name: 'Team 16'},
            {name: 'Team 17'},
            {name: 'Team 18'}
        ]
    },
]


const categories = [
    {
        name: 'Action Games',
        link_to: '/categories/action-games/',
        background: 'src/assets/images/_296df42f-2f13-4f08-99d3-e04ea9464e78.jpeg'
    },
    {
        name: 'Sport Games',
        link_to: '/categories/sport-games/',
        background: 'src/assets/images/_de8d3ee4-c0fd-44eb-a5df-b668fc1c862c.jpeg'
    },
    {
        name: 'Adventure Games',
        link_to: '/categories/adventure-games/',
        background: 'src/assets/images/_fa8a018d-2a90-4187-b3c9-7f969c04ca47.jpeg'
    },
    {
        name: 'Arcade Games',
        link_to: '/categories/arcade-games/',
        background: 'src/assets/images/_745ec161-c704-46df-b1c6-fe9bd501cf31.jpeg'
    },
    {
        name: 'Fantasy Games',
        link_to: '/categories/fantasy-games/',
        background: 'src/assets/images/_1821d08a-b1a3-4db6-ba9e-4f358acadae4.jpeg'
    },
    {
        name: 'Strategy Games',
        link_to: '/categories/strategy-games/',
        background: 'src/assets/images/_4552e671-67bd-41dc-af4b-cb28b3436072.jpeg'
    },
    {
        name: 'Shooter Games',
        link_to: '/categories/shooter-games/',
        background: 'src/assets/images/_75884dd9-8acc-45de-b09c-66c5d0f875e5.jpeg'
    },
    {
        name: 'All Categories',
        link_to: '/categories/all/',
        background: 'src/assets/images/_4da931c3-e690-4374-ae00-6a1cda8f2aa3.jpeg'
    }
]

class API {
    constructor() {
        this.games = games
        this.categories = categories
    }

    get_games() {
        return this.games
    }

    get_categories() {
        return this.categories
    }
}

export default API
