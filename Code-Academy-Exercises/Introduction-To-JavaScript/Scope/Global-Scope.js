const satellite = 'The Moon';
const galaxy = 'The Milky Way';
const stars = 'North Star';

const callMyNightSky = () => {
	return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
};

console.log(callMyNightSky());

// use global variables when you want to access them with any code in the program because they are not bound to a block
