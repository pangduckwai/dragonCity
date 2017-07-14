import { InMemoryDbService } from 'angular-in-memory-web-api';

//TODO TEMP!!! For Testing

export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		const characterz = [
			{id:1, name:'Lady Pteropus',altr:'Rachel Ross',         str:3,sta:4,agt:9,dex:8,int:9,pct:6,wil:8,lck:3,chr:9,mele:77,arch:20,mark:75},
			{id:2, name:'T.J.',         altr:'Trish Josié Michaels',str:4,sta:6,agt:8,dex:8,int:6,pct:7,wil:7,lck:6,chr:8,mele:85,arch:70,mark:82},
			{id:3, name:'Lee',                                      str:8,sta:8,agt:7,dex:9,int:5,pct:6,wil:7,lck:7,chr:7,mele:94,arch:80,mark:77},
			{id:4, name:'Greg',         altr:'Greg Michaels',       str:5,sta:6,agt:5,dex:6,int:8,pct:8,wil:8,lck:7,chr:8,mele:40,arch:90,mark:95},
			{id:5, name:'The Colonel',                              str:5,sta:7,agt:6,dex:6,int:7,pct:7,wil:7,lck:6,chr:7,mele:50,arch:80,mark:90},
			{id:10,name:'The Captain',  altr:'Gordon Ramses',       str:6,sta:7,agt:7,dex:6,int:7,pct:6,wil:6,lck:5,chr:7,mele:60,arch:63,mark:80},
			{id:11,name:'Lord Pteropus',altr:'Dominic Smith',       str:9,sta:7,agt:8,dex:8,int:5,pct:7,wil:9,lck:5,chr:5,mele:90,arch:90,mark:87},
			{id:20,name:'The Drug Lord',                            str:5,sta:5,agt:5,dex:5,int:7,pct:7,wil:7,lck:7,chr:5,mele:40,arch:30,mark:50},
			{id:21,name:'Mr Beast',                                 str:9,sta:6,agt:4,dex:5,int:3,pct:4,wil:5,lck:5,chr:2,mele:60,arch:15,mark:40},
			{id:22,name:'Mal Function', altr:'Malcolm Fung',        str:7,sta:6,agt:6,dex:5,int:4,pct:5,wil:6,lck:5,chr:3,mele:60,arch:70,mark:80},
			{id:23,name:'Thug 1',       altr:'Joe Net',             str:7,sta:6,agt:5,dex:5,int:4,pct:5,wil:5,lck:5,chr:3,mele:50,arch:60,mark:50},
			{id:24,name:'Thug 2',       altr:'Seven Jung',          str:6,sta:7,agt:5,dex:5,int:5,pct:4,wil:5,lck:5,chr:3,mele:50,arch:30,mark:70},
		];
		return {characterz};
	}
}