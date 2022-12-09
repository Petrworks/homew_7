const year = +prompt("Введіть ваш рік народження");
const city = prompt("Введіть місто в якому ви живете");
const sport = prompt("Введіть ваш улюбленний вид спорту");

let yearMessage;
let cityMessage;
let sportMessage;

switch (city) {
  case "Київ":
    {
      cityMessage = `Ти живеш у столиці України.`;
    }
    break;
  case "Вашингтон":
    {
      cityMessage = `Ти живеш у столиці США.`;
    }
    break;
  case "Лондон":
    {
      cityMessage = `Ти живеш у столиці Великообританії.`;
    }
    break;

  default: {
    cityMessage = `Ти живеш у місті ${city}`;
  }
}
if (city === null) {
  cityMessage = `Шкода, що Ви не захотіли ввести своє місто`;
} else {
  cityMessage;
}

switch (sport) {
  case "баскетбол":
    {
      sportMessage = "Круто! Хочеш стати Стефаном Каррі?";
    }
    break;
  case "футбол":
    {
      sportMessage = "Круто! Хочеш стати Ліонелем Месі?";
    }
    break;
  case "теніс":
    {
      sportMessage = "Круто! Хочеш стати Роджером Федерері?";
    }
    break;

  default: {
    sportMessage = `Ти живеш у місті ${city}`;
  }
}

if (sport === null) {
  sportMessage = `Шкода, що Ви не захотіли ввести ваш улюбленний вид спорту`;
} else {
  sportMessage;
}

if (year === null) {
  yearMessage = `Шкода, що Ви не захотіли ввести свій рік народження`;
} else {
  yearMessage = `Ваш рік народження ${year}`;
}

alert(`${yearMessage}
${cityMessage}
${sportMessage}`);
