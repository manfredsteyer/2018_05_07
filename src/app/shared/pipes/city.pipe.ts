import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'city',
    pure: true
})
export class CityPipe implements PipeTransform {
    
    transform(value: string, fmt: string, lang: string): string {
        
        let short, long;

        switch(value) {
            case "Hamburg":
                long = 'Airport Hamburg Fulsbüttel Helmut Schmidt';
                short = 'HAM';
                break;
            case 'Graz':
                long = 'Flughafen Graz Thalerhof';
                short = 'GRZ';
                break;
            case 'Berlin':
                long = 'Airport Berlin Tegel Otto Lilienthal';
                short = 'TXL'
                break;
            default:
                long = short = value;
        }

        if (fmt === 'short') {
            return short;
        }
        return long;

    }
}