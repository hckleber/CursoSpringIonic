import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Rx';
import { PeixeDTO } from "../../models/peixe.dto";

@Injectable()
export class AnimaisService{

    constructor(public http: HttpClient){
    }

    /** Verificar de colocar find para tipos distintos */
    findById(animal_id : string){
        return this.http.get<PeixeDTO>(`${API_CONFIG.baseUrl}/peixes/${animal_id}`);
    }

    findByCategoria(categoria_id : string){4
                

        switch (parseInt(categoria_id)){
            case 1:
                console.log("peixe");
            return this.http.get(`${API_CONFIG.baseUrl}/peixes`);
            
            case 2:
                console.log("coral");
            return this.http.get(`${API_CONFIG.baseUrl}/corais`);
            
            default:
                console.log("erro");
            return this.http.get(`${API_CONFIG.baseUrl}/corais`);
            
        }
    }

    getSmallImageFromBucket(id : string) : Observable<any>{
        let url = `${API_CONFIG.bucketBaseUrl}/prod${id}-small.jpg`
        return this.http.get(url, {responseType : 'blob'});
    }


    getlImageFromBucket(id : string) : Observable<any>{
        let url = `${API_CONFIG.bucketBaseUrl}/prod${id}.jpg`
        return this.http.get(url, {responseType : 'blob'});
    }


}