export default class GalleryImage {
    title: string;
    source: string;
    description?: string;
    dateUploaded?: Date

    // constructor(title: string, source: string);
    constructor(title: string, source: string, description?: string, date?: Date) {
        this.title = title;
        this.source= source;
        this.description = description;
        this.dateUploaded = date;
    }
}