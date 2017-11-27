// used for upload photos and documents of wrestlers 

import * as path  from 'path'
import { MyElementType } from './MyElementType';


let pathToPhoto = path.join(__dirname, '..', '..', 'test_data','images','dwayne.jpg')

export function uploadPhoto(abc: uploadTypes ,InputElement: MyElementType): void{

}

enum uploadTypes {
    photo = 'photo',
    document = 'document'
}