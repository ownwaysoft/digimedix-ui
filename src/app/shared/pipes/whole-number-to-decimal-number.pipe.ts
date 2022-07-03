import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'wholeNumberToDecimal' })
export class WholeNumberToDecimalPipe implements PipeTransform {
    transform(convertableItem:any, propertyName?: string): string {
        if (typeof convertableItem === "string" || !convertableItem) {
            if (convertableItem == 0) {
                return `R  ${convertableItem}.00`;
            }
            // The below regexp is used to identify the given string is a number or a string
            else if (/^\d+$/.test(convertableItem)) {
                return `R  ${convertableItem}`;
            }
            else {
                return convertableItem;
            }
        };
        if (propertyName === 'qty') {
            return convertableItem;
        }
        if (Number.isInteger(convertableItem)) {
            return `R  ${convertableItem}.00`;
        }
        else {
            return `R  ${convertableItem.toFixed(2)}`;
        }
    }
}
