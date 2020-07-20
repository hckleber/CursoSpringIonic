import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { CriadorDTO } from "../../models/criador.dto";
import { API_CONFIG } from "../../config/api.config";
import { StorageService } from "../storage.service";

@Injectable()
export class CriadorService{

    constructor(public http: HttpClient, public storage: StorageService){
    }

    findByEmail(email: string) : Observable<CriadorDTO> {
     
        let token = this.storage.getLocalUser().token;
        let authHeader = new HttpHeaders({'Authorization': 'Bearer ' + token});

        return this.http.get<CriadorDTO>(
            `${API_CONFIG.baseUrl}/criador/email?value=${email}`,
            {'headers': authHeader});
    }

    getImageFromBucket(id: string) : Observable<any>{
        //aqui deve ser configurado a url + o prefixo da imagem do criador
        let url = `${API_CONFIG.bucketBaseUrl}/cp${id}.jpg`
        return this.http.get(url, {responseType: 'blob'});
    }
}