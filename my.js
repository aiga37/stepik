//твой код тут
class Device {
    constructor(brand) {
        this.brand = brand;
    }
  
    powerOn() {
        return 'Устройство включено';
    }
  } 

  class Smartphone extends Device {
    constructor(brand) {
        super(brand);
    }
  
    call() {
        return `${super.powerOn()}, ${this.brand} звонит`;
    }
  } 

  //

  let phone = new Smartphone(brand);
  console.log(phone.call());