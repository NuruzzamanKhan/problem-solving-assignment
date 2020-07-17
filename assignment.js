//feetToMile
function feetToMile(feet){
    let mile = feet/5280;
    return mile;
}

//woodCalculator
function woodCalculator(chair, table, bed){
    chairCount = chair * 1;
    tableCount = table * 3;
    bedCount = bed * 5;
    let totalWood = chairCount + tableCount + bedCount;
    return totalWood;
}


//brickCalculator
function brickCalculator(floor) {
    if (floor <= 10) {
      let feetUnderTen = 15 * floor;
      let totalBrickNeed = 1000 * feetUnderTen;
      return totalBrickNeed;
    } else if (floor <= 20) {
      let feetUnderTen = 15 * 10;
      let feetUpToTen = (floor - 10) * 12;
      let totalBrickNeed = (feetUnderTen + feetUpToTen) * 1000;
      return totalBrickNeed;
    } else {
      let feetUpToTwenty = (floor - 20) * 10;
      let totalFeet = 15 + 12 + feetUpToTwenty;
      let totalBrickNeed = 1000 * totalFeet;
      return totalBrickNeed;
    }
  }


//tinyFriend
function tinyFriend(friendsAge){
    let tiny = friendsAge[0];
    for(i = 0; i < friendsAge.length; i++){
        singleAge = friendsAge[i];
        if(singleAge < tiny){
            tiny = singleAge;
        }
    }
    return tiny;
}
