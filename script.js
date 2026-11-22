
//set arms
const leftArm = document.querySelector('.leftarm');
const rightArm = document.querySelector('.rightarm');

//positions
const SEMAPHORE = {
    A: [0, 1], B: [0, 2], C: [0, 3], D: [0, 4], E: [0, 5], F: [0, 6], G: [0, 7],
    H: [1, 2], I: [1, 3], K: [1, 4], L: [1, 5], M: [1, 6], N: [1, 7],
    O: [2, 3], P: [2, 4], Q: [2, 5], R: [2, 6], S: [2, 7],
    T: [3, 4], U: [3, 5], Y: [3, 6],
    J: [4, 6], V: [4, 7],
    W: [5, 6], X: [5, 7],
    Z: [6, 7]
};

//rotations
function setArm(arm, side, position) {
    // Convert position to screen angles (0 = up, clockwise)
    const screenAngle = (180 + 45 * position) % 360;
    // Left arm points left at rotate(0), right arm points right at rotate(0)
    let rotation = screenAngle - (side === 'left' ? 270 : 90);
    if (rotation >= 180) rotation -= 360;
    if (rotation < -180) rotation += 360;
    arm.style.transform = `rotate(${rotation}deg)`;
}

//set arms
function showLetter(letter) {
    const pair = SEMAPHORE[letter];
    if (!pair) return;
    setArm(rightArm, 'right', pair[0]);
    setArm(leftArm, 'left', pair[1]);
}


//return to rest
function rest() {
    setArm(rightArm, 'right', 0);
    setArm(leftArm, 'left', 0);
}

document.addEventListener('keydown', (e) => {
    if (e.repeat) return;
    showLetter(e.key.toUpperCase());
});

document.addEventListener('keyup', rest);

rest();


