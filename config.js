module.exports = {
    app: {
        token: 'ODE1NzU2NDI2OTYxNDg1ODI0.GSpFGL.JFeUMcOHs4KjWefKc_7M95og9vqJGTe_9VFEB0',
        playing: 'Hansi&Co blokhut editie deluxe',
        global: true,
        guild: 'XXX'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        maxVol: 100,
        leaveOnEnd: true,
        loopMessage: false,
        spotifyBridge: true,
        defaultvolume: 100,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
