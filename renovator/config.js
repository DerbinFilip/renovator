module.exports = {
    platform: 'xyz',
    endpoint: 'xyz',
    token: process.env.TOKEN,
    hostRules: [
        {
            "hostType": 'npm',
            "matchHost": 'xyz',
            "username": 'xyz',
            "password": process.env.TOKEN,
            "automerge": true
        },
        {
            matchHost: 'github.com',
            token: process.env.GITHUB_COM_TOKEN,
        },
        {
            "hostType": "maven",
            "matchHost": "xyz",
            "username": 'xyz',
            "password": process.env.Token
        }
    ]
};