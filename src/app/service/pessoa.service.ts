import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";
import { pessoa } from '../model/pessoa-model';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private storage: Storage) { }

}