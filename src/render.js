const host = [
  'http://localhost:443',
  'http://116.203.228.48:443',
  'https://api.fridaysforfuture.io',
  'http://192.168.178.72:443'
][2];

import EventEmitter from './EventEmitter.js';

export default class RenderProcess extends EventEmitter {
  constructor(config) {
    super();

    const { width, height, format, type, video, data, root, assets } = config;


    const endpoint = host + '/render';

    const sessionId = Date.now();

    const request = fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        root,
        assets,
        width,
        height,
        format,
        type,
        video,
        data,
        sessionId,
        renderings: 5
      }, null, 2)
    });


    this.checkProgress(sessionId, request);

    request.then(response => response.blob()).then(blob => {
      const url = URL.createObjectURL(blob);

      this.emitEvent("end", [{
        blob,
        url
      }]);
    });



  }
  checkProgress(id, request) {
    const endpointProgress = host + '/progress';
    const endpoint = endpointProgress + "/" + id;

    const checker = setInterval(async () => {
      const progress = await (await fetch(endpoint)).json();

      if (Object.entries(progress).length == 0) {
        clearInterval(checker);
      }

      this.emitEvent("progress", [progress]);
    }, 1000);

    request.then(function() {
      clearInterval(checker);
    });

    return checker;
  }
}
