import Session from '../Session.js'

const mySession = new Session();

import { Helpers as ToolpicHelpers } from 'toolpic'

export default function handleRender(render, self) {
  console.log("....");

  render.listenForResources().then(() => {
    

    ToolpicHelpers.nextTick(() => {
      render.Vue.$forceUpdate();
      const maxAge = 250;
      const start = Date.now();
      const ticker = setInterval(() => {
        render.Vue.$forceUpdate();
        if (Date.now() - start >= maxAge) clearInterval(ticker);
        //render.Vue.$forceUpdate();
      }, 50);
    });
  });
  render.on("load", () => {
    try {
      this.timestamp = this.activeTemplate.video.duration;
      window.render.seekAnimations(Number(this.timestamp));
    }
    catch (e) {}

    console.log("!!!!");
    console.log(render);

    ToolpicHelpers.nextTick(() => {
      render.Vue.$forceUpdate();
      const maxAge = 250;
      const start = Date.now();
      const ticker = setInterval(() => {
        render.Vue.$forceUpdate();
        if (Date.now() - start >= maxAge) clearInterval(ticker);
        //render.Vue.$forceUpdate();
      }, 50);
    });
  });

  render.on("update", function() {
    mySession.data = render.dataset;
    mySession.dataTemplateId = self.activeTemplate.name;
  });

  mySession.template = self.activeTemplate;
  mySession.docIndex = self.activeDocIndex;

  mySession.updateUrl();

  self.__smartInstance.rendererInstance = render;
  self.__smartInstance.data = self.activeTemplate.smartActions || new Array;

}
