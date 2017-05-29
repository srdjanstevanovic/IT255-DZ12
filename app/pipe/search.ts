import {Pipe, PipeTransform} from 'angular2/core';
@Pipe({
    name: 'SearchPipe'
})
export class SearchPipe implements PipeTransform {

    transform (value, [queryString]) {
        if (value==null) {
            return null;
        }
        console.log('transform');
        return value.filter(item=>item["name"].toLowerCase().indexOf(queryString.toLowerCase()) !== -1);
    }
}