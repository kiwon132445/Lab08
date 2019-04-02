let timelineData = '<ul><li><div><img src="images/timelines/present.png"><p>1000AD, the present.</p></div></li><li><div><img src="images/timelines/middleages.png"><p>600AD, the middle ages.</p></div></li><li><div><img src="images/timelines/future.png"><p>2300AD, the future.</p></div></li><li><div><img src="images/timelines/prehistory.png"><p>65000000BC, pre-history.</p></div></li><li><div><img src="images/timelines/darkagesworld.png"><p>12000BC, the dark ages.</p></div></li><li><div><img src="images/timelines/darkageszeal.png"><p>12000BC, the dark ages, the kingdom of zeal.</p></div></li></ul>';

let characterData = '<ul><li><div><img src="images/goodguys/crono.png"><p>Crono is the main character.</p></div></li><li><div><img src="images/goodguys/lucca.png"><p>Lucca uses a gun.</p></div></li><li><div><img src="images/goodguys/marle.png"><p>Marle uses a bow.</p></div></li><li><div><img src="images/goodguys/robo.png"><p>Robo is a robot.</p></div></li><li><div><img src="images/goodguys/frog.png"><p>Frogs real name is Glen.</p></div></li><li><div><img src="images/goodguys/ayla.png"><p>Ayla is a cavewoman.</p></div></li><li><div><img src="images/goodguys/magus.png"><p>SPOILER: Magus can become a goodguy.</p></div></li></ul>';

let bossData = [
    {"imagePath": "images/badguys/azala.png", "description":"Dinosaur leader in PreHistory."},
    {"imagePath": "images/badguys/dalton.png", "description":"He tried to steal the Epoch."},
    {"imagePath": "images/badguys/atroposxr.png", "description":"Robos former friend."},
    {"imagePath": "images/badguys/flea.png", "description":"One of Magus' three generals."},
    {"imagePath": "images/badguys/slash.png", "description":"One of Magus' three generals."},
    {"imagePath": "images/badguys/ozzie.png", "description":"One of Magus' three generals."},
    {"imagePath": "images/badguys/queenzeal.png", "description":"The Queen of Zeal, who is trying to revive Lavos."}
]

let npcData = [
    {"imagePath": "images/npc/oldman.png", "description":"The man found at the end of time."},
    {"imagePath": "images/npc/masa_mune.png", "description":"The keepers of the sword Masamune."},
    {"imagePath": "images/npc/schala.png", "description":"The princess of the Kingdom of Zeal."},
    {"imagePath": "images/npc/melchior.png", "description":"The creator of the Masamune."},
    {"imagePath": "images/npc/kingguardia.png", "description":"The King of Guardia, Marles father."},
    {"imagePath": "images/npc/johnny.png", "description":"Johnny is an NPC you can race in the future."},
    {"imagePath": "images/npc/tata.png", "description":"Found the hero badge by mistake and was mislabeled as the hero."},
]

module.exports = {
  getHTML1: function () {
      console.log("called: getHTML1");
      return timelineData;
  },
  getHTML2: function () {
      console.log("called: getHTML2");
      return characterData;
  },
  getJSON1: function () {
      console.log("called: getJSON1");
      return bossData;
  },
  getJSON2: function () {
      console.log("called: getJSON2");
      return npcData;
  }
};




var someOtherFunction = function () {
    console.log("Can't touch this!");
}