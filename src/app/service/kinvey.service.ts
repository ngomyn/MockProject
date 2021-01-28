import { Injectable } from '@angular/core';
import { FilesService } from 'kinvey-angular-sdk';

@Injectable({
  providedIn: 'root'
})
export class KinveyService {

  constructor(private filesService: FilesService) { }  
  public async upload(filecontent) {
    try {
      const fileContent = filecontent;
      const metadata ={
        _id: '',
        filename: '',
        mimeType: fileContent.type,
        size: fileContent.length
      };
      const file = await this.filesService.upload(fileContent, metadata);
      console.log(file);
    } catch (error) {
      console.log(error);
    };
  };
}
