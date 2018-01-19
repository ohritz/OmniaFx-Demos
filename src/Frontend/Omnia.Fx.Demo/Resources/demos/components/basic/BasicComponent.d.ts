import Vue from 'vue';
import { IWebComponentInstance } from '@omnia/fx';
export declare class BasicComponent extends Vue implements IWebComponentInstance {
    message: string;
    private basicService;
    private httpClient;
    private omniaContext;
    private spContext;
    mounted(): void;
    render(h: any): any;
}