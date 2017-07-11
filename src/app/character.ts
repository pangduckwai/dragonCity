export class Character {
	id: number;
	name: string;
	altr?: string;

	//Attributes: range from 0 to 9, 4 is human average
	str: number;  //Strength. Weight lifting, boxers
	sta: number;  //Stamina (endurance, physical resilience, ...)
	agt: number;  //Agility (balance, grace, speed, and overall physical coordination, ...). Athletes
	dex: number;  //Dexterity (coordination, precision, ...). Sniper, surgeon, safecracker, ...
	int: number;  //Intelligence (reasoning, learning, knowledge ...). Scientist, engineer, doctor, ...
	pct: number;  //Perception (common sense, intuition, …). Detective, psychologist, ...
	wil: number;  //Willpower (mental resilience, determination, courage, ...)
	lck: number;  //Luck
	chr: number;  //Charisma

	//Skills: range from 0 to 99
	mele: number; //Melee or martial art skill
	arch: number; //Archery skill
	mark: number; //Marksmanship skill
}