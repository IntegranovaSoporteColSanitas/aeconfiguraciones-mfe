/**
 * Utility class to manage Json formats
 */
export class JsonUtility {

    /**
     * Returns the Json format for a date value
     * @param date Date value to be converted
     */
    public static date2Json(date: Date | null): string {
        return JsonUtility.dateTime2Json(date);
    }


    /**
     * Returns the Json format for a datetime value
     * @param date Datetime value to be converted
     */
    public static dateTime2Json(date: Date | null): string {
        let dateJson = '';
        if (date) {
            date.setMilliseconds(0);
            dateJson = date.getUTCFullYear().toString() + '-' +
            (date.getUTCMonth() + 1).toString().padStart(2, '0') + '-' +
            date.getUTCDate().toString().padStart(2, '0') + 'T' +
            date.getUTCHours().toString().padStart(2, '0') + ':' +
            date.getUTCMinutes().toString().padStart(2, '0') + ':' +
            date.getUTCSeconds().toString().padStart(2, '0') + 'Z';
        }
        return dateJson;
    }

    /**
     * Returns the Json format for a time value
     * @param date Date value to be converted
     */
    public static time2Json(date: Date | null): string {
        return JsonUtility.dateTime2Json(date);
    }
}

