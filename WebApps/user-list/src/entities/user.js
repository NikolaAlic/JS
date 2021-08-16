export class User {
    constructor(name, email, dob, picture) {
        this.name = name;
        this.email = email;
        this.dob = new Date(dob);
        this.picture = picture;
    }
    
    formatDate() {
        const monthNumber = this.dob.getMonth();
        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const month = monthNames[monthNumber];

        const dayNumber = this.dob.getDate();
        let day = "";
        if (dayNumber === 1 || dayNumber === 21 || dayNumber === 31) {
            day = dayNumber + 'st';
        } else if (dayNumber === 2 || dayNumber === 22) {
            day = dayNumber + 'nd';
        } else if (dayNumber === 3 || dayNumber === 23) {
            day = dayNumber + 'rd';
        } else {
            day = dayNumber + 'th';
        }

        const yearNumber = this.dob.getFullYear();
        const yearString = yearNumber.toString();
        const year = yearString.slice(2,4);

        return `${month} ${day} ${year}`;

    }

    hideEmail() {
        const emailArr = this.email.split("@");
        emailArr[0] = emailArr[0].slice(0, 3) + '...';
        return emailArr.join("@");
    }
}