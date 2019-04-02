let timelineData = '<ul><li><div><img src="images/timelines/present.png"><p>1000AD, the present.</p></div></li><li><div><img src="images/timelines/middleages.png"><p>600AD, the middle ages.</p></div></li><li><div><img src="images/timelines/future.png"><p>2300AD, the present.</p></div></li><li><div><img src="images/timelines/prehistory.png"><p>65000000BC, pre-history.</p></div></li><li><div><img src="images/timelines/darkagesworld.png"><p>12000BC, the dark ages.</p></div></li><li><div><img src="images/timelines/darkageszeal.png"><p>12000BC, the dark ages, the kingdom of zeal.</p></div></li></ul>';
let characterData = '<ul><li><div><img src="images/goodguys/crono.png"><p>Crono is the main character.</p></div></li><li><div><img src="images/goodguys/lucca.png"><p>Lucca uses a gun.</p></div></li><li><div><img src="images/goodguys/marle.png"><p>Marle uses a bow.</p></div></li><li><div><img src="images/goodguys/robo.png"><p>Robo is a robot.</p></div></li><li><div><img src="images/goodguys/frog.png"><p>Frogs real name is Glen.</p></div></li><li><div><img src="images/goodguys/ayla.png"><p>Ayla is a cavewoman.</p></div></li><li><div><img src="images/goodguys/magus.png"><p>SPOILER: Magus can become a goodguy.</p></div></li></ul>';
let someOtherData = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"]

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
      return someOtherData;
  },
  getJSON2: function () {
      console.log("called: getJSON2");
      return someOtherData;
  }
};




var someOtherFunction = function () {
    console.log("Can't touch this!");
}