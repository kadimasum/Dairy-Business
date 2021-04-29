// MILK PRODUCED PER SHADE PER DAY

let oneShadeMilk = (cows, volume)=>{

    this.volume = volume;
    this.cows = cows;
    
    return this.volume * this.cows;
};

// TOTAL AMOUNT OF MILK FOR ALL SHADES PER DAY

let allShadeMilk = (oneShadeMilk, shades)=>{
   
    this.shades = shades;

    return oneShadeMilk * this.shades;
};

// INCOME PER DAY
const price = 45;
let incomePerDay = (allShadeMilk, price)=>{
    
    return allShadeMilk * price;
}

