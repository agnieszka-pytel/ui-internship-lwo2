const GOLF_SCORES = {
  HOLE_IN_ONE: 'Hole-in-one!',
  EAGLE: 'Eagle',
  BIRDIE: 'Birdie',
  PAR: 'Par',
  BOGEY: 'Bogey',
  DOUBLE_BOGEY: 'Double Bogey',
  GO_HOME: 'Go Home!',
};

function golfScore(par, strokes) {
  if (strokes == 1) {
    return GOLF_SCORES.HOLE_IN_ONE;
  } else {
    let diff = strokes - par;
    switch ( true ) {
      case diff <= -2:
        return GOLF_SCORES.EAGLE;
      case diff == -1:
        return GOLF_SCORES.BIRDIE;
      case diff == 0:
        return GOLF_SCORES.PAR;
      case diff == 1:
        return GOLF_SCORES.BOGEY;
      case diff == 2:
        return GOLF_SCORES.DOUBLE_BOGEY;
      case diff >= 3:
        return GOLF_SCORES.GO_HOME;
    }
  }
}

export {golfScore, GOLF_SCORES};
