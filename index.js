// Code your solution in this file!
function distanceFromHqInBlocks(start){
    const hq = 42;
    if(start>=42){
        return start - hq;
    }else if(start<42){
        return hq - start;
    }
    
}
function distanceFromHqInFeet(location){
    distanceFromHqInBlocks(location);
    return distanceFromHqInBlocks(location) * 264;
}
function distanceTravelledInFeet(start,destination){
    if (destination>start){
        return ((destination-start) * 264)
    }
    else if(start>destination){
        return ((start-destination) * 264)
}
}
function calculatesFarePrice(start,destination){
    let distance = distanceTravelledInFeet(start,destination);
    let fare;
 if (distance<=400){
    return fare = 0;
 }
 else if(distance>400 && distance<2000){
    return fare = 2.56;
 }
 else if(distance>2000 && distance<2500){
    return fare=25;
 }else {
    return fare = "cannot travel that far";
 }
}