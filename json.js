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
        this.introduction = function(){
            console.log(`Greetings, my name is ${first_name}`);
        }
    }

    static new_cultist() {
       return new Cultist("John", "Dow", 21 , "yes", " 123-456-7890", "cunstractive_cult@yahoo.com", "no info avaliable", )
        
    }
}


const cultist_1 = new Cultist( "John", "Wick", 120 , "yes", " 123-456-7890", "Keanu@yahoo.com", "Likes to lool cool and bikes",);
const cult_1_JSON = JSON.stringify(cultist_1);

// flow

console.log( cult_1_JSON);