export interface BaseRepository {
    create(...param: any[]): Promise<any>;
    find(...param: any[]): Promise<any>;
    findOne(...param: any[]): Promise<any>;
    findBy(...param: any[]): Promise<any>;
}