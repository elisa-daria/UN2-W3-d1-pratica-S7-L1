//ESERCIZIO 1

class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
  whoIsOlder(otherUser) {
    if (this.age > otherUser.age) {
      return `${this.firstName} ${this.lastName} is older than ${otherUser.firstName} ${otherUser.lastName}`;
    } else {
      return `${this.firstName} ${this.lastName} is younger than ${otherUser.firstName} ${otherUser.lastName}`;
    }
  }
}

const user1 = new User("John", "Doe", 30, "NYC");
const user2 = new User("Jane", "Doe", 25, "LA");
console.log("es1)", user1.whoIsOlder(user2));

//ESERCIZIO 2

const petName = document.getElementById("petName");
const petsHuman = document.getElementById("humanPet");
const species = document.getElementById("species");
const breed = document.getElementById("breed");

const getButton = document.getElementsByTagName("button")[0];

const pets = [];

class Pet {
  constructor(_petName, _petsHuman, _species, _breed) {
    this.petName = _petName;
    this.petsHuman = _petsHuman;
    this.species = _species;
    this.breed = _breed;
  }
  getHuman(anotherPet) {
    return this.petsHuman === anotherPet.petsHuman;
  }
}

const gettingForm = document.getElementsByTagName("form")[0];
gettingForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const pet = new Pet(
    petName.value,
    petsHuman.value,
    species.value,
    breed.value
  );
  pets.push(pet);
});
