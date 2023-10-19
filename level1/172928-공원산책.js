function solution(park, routes) {
    const limit = [park.length-1, park[0].length-1]; // park's limit
    let nowPosition = getInitPosition(park); // now position
    
    for(let i=0; i<routes.length; i++) { // move robot!
        nowPosition = moveRobot(limit, nowPosition, getRoute(routes[i]), park);
    }
    
    return nowPosition;
}

const getInitPosition = (park) => { // Get init position
    let position = [0, 0];
    park.forEach((v, idx) => {
        let row = v.indexOf('S');
        if(row !== -1) {
            position[0] = idx;
            position[1] = row;
        }
    })
    return position; // [Col, Row] array
}

const getRoute = (route) => {
    return route.split(' '); // [Direction, Distance] array
}

const moveRobot = (limit, position, route, park) => {
    let movedCol = position[0];
    let movedRow = position[1];
    let flag = false; // true: can't move, flase: can move
    
    if(route[0] === 'N' || route[0] === 'W') route[1] *= -1;
    
    for(let step = 0; step < Math.abs(route[1]); step++) { // Do per one step
        if(route[0] === 'N' || route[0] === 'S') {
            movedCol += route[1]/Math.abs(route[1]); // move one step (col)
        } else {
            movedRow += route[1]/Math.abs(route[1]); // move one step (row)
        }
        
        if(movedCol < 0 || movedCol > limit[0]) { // over the park's col!
            flag = true;
            break;
        }
        if(movedRow < 0 || movedRow > limit[1]) { // over the park's row!
            flag = true;
            break;
        }
        if(park[movedCol][movedRow] === 'X')  { // can't move hurdle!
            flag = true;
            break;
        }
    }
    
    return flag ? position : [movedCol, movedRow]; // [Col, Row] array
}
