// used for upload photos and documents of wrestlers 

import * as path  from 'path'
import { MyElementType } from './MyElementType';
import { frameTimeout } from '../../test_data/frameTimeouts';


const pathToPhoto = path.join(__dirname, '..', '..', 'test_data','images','dwayne.jpg')
const pathToDocument = path.join(__dirname, '..', '..', 'test_data')

export class Uploader{
    constructor(){
    }

    uploadPhoto(inputElement: MyElementType): void {
        inputElement.chooseFile(pathToPhoto)
    }

    uploadDocument(inputElement: MyElementType): void {
        inputElement.chooseFile(pathToDocument)
    }

    waitForPhotoToBeUploaded(imgSelector: MyElementType){
        browser.waitUntil(() => imgSelector.isVisible(), frameTimeout.m, 'Uploaded photo should be visible')
    }
}
