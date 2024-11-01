import { api } from "./api";

export interface Repository{
    id:number;
    name:string;
    full_name:string;
    owner:{
        login:string;
        avatar_url:string;
    };
    description:string;
    language:string;
    forks_count:number;
    stargazers_count:number;
    watchers_count:number;
    default_branch:string;
}

export const getRepoInfo= async (repo:string): Promise<Repository>=>{
    const result = await api.get<Repository>(`/repos/${repo}`);
    return result.data;
};