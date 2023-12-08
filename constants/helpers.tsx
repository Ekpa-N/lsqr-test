export function formatDate(date: string): string {
    const newDate = date.replace(' ', '')
    const inputDate = new Date(newDate);

    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    };

    const formattedDate: string = new Intl.DateTimeFormat('en-US', options).format(inputDate);
    return formattedDate.replace("at", " ");
}