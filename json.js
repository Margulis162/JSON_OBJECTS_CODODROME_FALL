// vars and classes 

class Cultist {
    first_name;
    last_name;
    age;
    gender;
    phone;
    email;
    additional_data;

    constructor(first_name, last_name, age, gender, phone, email, additional_data,){
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
        this.gender = gender;
        this.phone = phone;
        this.email = email;
        this.additional_data = additional_data;
    }
}


const cultist_1 = new Cultist( "John", "Wick", 120 , "yes", " 123-456-7890", "Keanu@yahoo.com", "Likes to lool cool and bikes",);


// flow

console.log(cultist_1);