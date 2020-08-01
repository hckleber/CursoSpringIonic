import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AnimaisService{

    constructor(public http: HttpClient){
    }

    findByCategoria(categoria_id : string){4
                console.log("o Id é: " + categoria_id);

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

}