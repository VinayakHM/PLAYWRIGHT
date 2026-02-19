export{}

declare global{
namespace NodeJS{
    interface ProcessEnv{
        USER_PWD1: string|undefined;
        USER_PWD2:string|undefined;
    }
}
var BASE_URL:string;
}