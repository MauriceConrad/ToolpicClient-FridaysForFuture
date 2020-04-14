import { Sha256 } from '../../__helpers';

export async function ResourceSpace(query, width, height, callback) {
  const privateKey = "b29117e026633c0af8246a1234fb0fbbe0b0672f28e6e232d6c5e5d868e0c58a";
  const user = "Maurice";

  const urlQuery = "user=" + user + "&function=search_get_previews&param1=" + encodeURIComponent(query) + "&param8=thm,scr,pre,col,fhd&param5=500";

  const sign = Sha256.hash(privateKey + urlQuery, true);
  const url = "https://bilder.fffutu.re/api/?" + urlQuery + "&sign=" + sign;
  const response = await fetch(url);
  const results = await response.json();

  callback(results.map(entry => {
    return {
      preview: entry.url_thm,
      src: entry.url_fhd,
      ext: entry.file_extension,
      name: entry.field8
    };
  }));
  return true;
}
export async function Pexels(query, width, height, callback) {
  const apiKey = "563492ad6f91700001000001fd927492d5bb4d918cebd637b3838073";

  const perPage = 80;
  const maxRequest = 500;
  const requestsAmount = new Array(Math.ceil(maxRequest / perPage)).fill(true).map((value, index) => {
    return index < Math.trunc(maxRequest / perPage) ? perPage : (maxRequest % perPage);
  });
  const results = [];
  for (let i = 0; i < requestsAmount.length; i++) {
    const count = requestsAmount[i];
    const res = (await request(count, i));
    const results = res.photos.map(entry => {
      const baseUrl = entry.src.original;
      const minSize = {
        w: width,
        h: height
      };
      const aimRatio = minSize.h / minSize.w;
      const imgRatio = entry.height / entry.width;
      const minSideName = ["w", "h"][Number(imgRatio <= aimRatio)];
      const specificUrl = entry.src.original + "?auto=compress&cs=tinysrgb&" + minSideName + "=" + minSize[minSideName];
      const thumbUrl = entry.src.original + "?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=250&w=120";

      return {
        name: "",
        preview: thumbUrl,
        src: specificUrl
      };
    });
    callback(results);
  }


  async function request(count, index) {
    const url = 'https://api.pexels.com/v1/search?query=' + query.replace(/\s/g, "+") + '&per_page=' + count + '&page=' + (index + 1);

    const response = await fetch(url, {
      headers: {
        'Authorization': apiKey
      }
    });
    console.log(await response.text());
    return await response.json();
  }
}


export async function Pixabay(query, width, height, callback) {
  const apiKey = "15279689-2d59e718147678953b72b30d3";

  const perPage = 200;
  const maxRequest = 500;
  const requestsAmount = new Array(Math.ceil(maxRequest / perPage)).fill(true).map((value, index) => {
    return index < Math.trunc(maxRequest / perPage) ? perPage : (maxRequest % perPage);
  });

  for (let i = 0; i < requestsAmount.length; i++) {
    const count = requestsAmount[i];
    const res = await request(count, i);
    const results = res.hits.map(entry => {
      return {
        name: entry.tags,
        preview: entry.previewURL,
        src: entry.largeImageURL
      };
    });
    callback(results);
  }


  async function request(count, index) {
    const url = 'https://pixabay.com/api/?key=' + apiKey + '&q=' + query.replace(/\s/g, "+") + '&lang=de&image_type=photo&per_page=' + 200 + '&page=' + (index + 1);
    const response = await fetch(url);
    return await response.json();
  }
}
