export interface IGameConfig {
    gameModes: Array<IGameMode>;
}

export interface IGameMode {
    name: string;
    fieldSize: {
        m: number;
        n: number;
    };
    time: number;
    bombsCount: number;
}
