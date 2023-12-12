'use client'

const formatDate = (date: string): string => {
    const newDate = date.replace(' ', '')
    const inputDate = new Date(newDate)

    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    };

    const formattedDate: string = new Intl.DateTimeFormat('en-US', options).format(inputDate);
    return formattedDate.replace("at", " ")
}

function formatFilterDate(inputDate: string): string {
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };

    const formattedDate = new Date(inputDate).toLocaleDateString('en-US', options);
    return formattedDate;
}


const removeDuplicates = (arrayOfStrings: string[]): string[] => {
    const filteredSet = new Set(arrayOfStrings)
    const filteredArray = Array.from(filteredSet)
    return filteredArray
}

const filterUsers = (users: any[], filterProperties: { [key:string]: string, organization: string, username: string, email: string, date: string, phone: string, status: string }): any[] => {
    return users.filter((obj) => {
        // Check if at least one property in filterProperties matches in the current object
        return Object.keys(filterProperties).some((key) => obj[key] === filterProperties[key]);
    });
}



export { removeDuplicates, formatDate, formatFilterDate, filterUsers }


