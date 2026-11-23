const goal = 23;
const steps = [4, 6, 9];
const points = [0, 0, 0];

const playerOutputs = [
  document.getElementById('player-0'),
  document.getElementById('player-1'),
  document.getElementById('player-2')
];

const totalOutput = document.getElementById('total');
const remainingOutput = document.getElementById('remaining');
const buttons = document.querySelectorAll('button');

function left(goalValue, points) {
  if (points > goalValue) {
    return 0;
  }
  return goalValue - points;
}

function show() {
  let sum = 0;

  for (let i = 0; i < points.length; i++) {
    playerOutputs[i].textContent = points[i];
    sum += points[i];
  }

  totalOutput.textContent = sum;
  remainingOutput.textContent = left(goal, sum);
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {
    points[i] += steps[i];
    show();
  });
}

show();
