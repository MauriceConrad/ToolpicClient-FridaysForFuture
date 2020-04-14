export function JSONstringifyWithFuncs(obj, space = null) {
  return JSON.stringify(obj, function(key, value) {
    if (typeof value === "function") {
      const funcStr = value.toString();
      const name = (() => {
        const funcKeyWordEnds = funcStr.indexOf('function') + 8;
        const funcStr2 = funcStr.substring(funcKeyWordEnds);
        const funcNameStart = funcStr2.search(/[^\s]/);
        const funcStr3 = funcStr2.substring(funcNameStart);
        return funcStr3.substring(0, funcStr3.search(/(\(|\s)/));
      })();

      const args = (() => {
        const argsDefStarts = funcStr.indexOf("(");
        const argsDefEnds = funcStr.indexOf(")");
        const args = funcStr.substring(argsDefStarts, argsDefEnds).split(/(,|\s|\(|\))/);
        return args.filter(argStr => argStr.search(/[^\,\s\)\(]/) > -1);
      })();

      const async = (() => {
        const funcKeyWordStarts = funcStr.indexOf('function');
        return funcStr.substring(0, funcKeyWordStarts).search("async") > -1;
      })();

      const body = funcStr.substring(funcStr.indexOf("{"), funcStr.lastIndexOf("}"));
      const descriptor = {
        __JSDataType__: 'function',
        name,
        args,
        body,
        async,
        raw: funcStr
      };
      //console.log(descriptor);
      return descriptor;
      //return "/Function(" + 'funcBody' + ")/";
    }
    return value;
  }, space)
}

export function base64ArrayBuffer(arrayBuffer) {
  var base64    = ''
  var encodings = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'

  var bytes         = new Uint8Array(arrayBuffer)
  var byteLength    = bytes.byteLength
  var byteRemainder = byteLength % 3
  var mainLength    = byteLength - byteRemainder

  var a, b, c, d
  var chunk

  // Main loop deals with bytes in chunks of 3
  for (var i = 0; i < mainLength; i = i + 3) {
    // Combine the three bytes into a single integer
    chunk = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2]

    // Use bitmasks to extract 6-bit segments from the triplet
    a = (chunk & 16515072) >> 18 // 16515072 = (2^6 - 1) << 18
    b = (chunk & 258048)   >> 12 // 258048   = (2^6 - 1) << 12
    c = (chunk & 4032)     >>  6 // 4032     = (2^6 - 1) << 6
    d = chunk & 63               // 63       = 2^6 - 1

    // Convert the raw binary segments to the appropriate ASCII encoding
    base64 += encodings[a] + encodings[b] + encodings[c] + encodings[d]
  }

  // Deal with the remaining bytes and padding
  if (byteRemainder == 1) {
    chunk = bytes[mainLength]

    a = (chunk & 252) >> 2 // 252 = (2^6 - 1) << 2

    // Set the 4 least significant bits to zero
    b = (chunk & 3)   << 4 // 3   = 2^2 - 1

    base64 += encodings[a] + encodings[b] + '=='
  } else if (byteRemainder == 2) {
    chunk = (bytes[mainLength] << 8) | bytes[mainLength + 1]

    a = (chunk & 64512) >> 10 // 64512 = (2^6 - 1) << 10
    b = (chunk & 1008)  >>  4 // 1008  = (2^6 - 1) << 4

    // Set the 2 least significant bits to zero
    c = (chunk & 15)    <<  2 // 15    = 2^4 - 1

    base64 += encodings[a] + encodings[b] + encodings[c] + '='
  }

  return base64
}

export async function responseToDataUrl(response) {
  const imgArrayBuffer = await response.arrayBuffer();
  const base64 = base64ArrayBuffer(imgArrayBuffer);
  const dataUrl = 'data:' + response.headers.get("Content-Type") + ';base64,' + base64;
  return dataUrl;
}
export function iOS() {

  var iDevices = [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod'
  ];

  if (!!navigator.platform) {
    while (iDevices.length) {
      if (navigator.platform === iDevices.pop()){ return true; }
    }
  }

  return false;
}
export function openTab(url) {
	// Create link in memory
	var a = window.document.createElement("a");
	a.target = '_blank';
	a.href = url;

	// Dispatch fake click
	var e = window.document.createEvent("MouseEvents");
	e.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
	a.dispatchEvent(e);
}
export function getRelElementsPos(el, rel, svg = false) {
  const bounding = svg ? el.getBBox() : el.getBoundingClientRect();
  return {
    x: bounding.x + bounding.width * rel[0],
    y: bounding.y + bounding.height * rel[1]
  };
}
export function createElement(tagName, options, inner) {
  if (typeof options === "string") options = {
    className: options
  }
  options.attributes = options.attributes == undefined ? {} : options.attributes;
  options.childs = options.childs == undefined ? [] : options.childs;
  if (inner) options.childs.push(document.createTextNode(inner));
  options.eventListeners = options.eventListeners == undefined ? [] : options.eventListeners;
  options.className = options.className == undefined ? "" : options.className;
  var e = document.createElement(tagName);
  e.setAttribute("class", options.className);
  for (var i = 0; i < Object.keys(options.attributes).length; i++) {
    e.setAttribute(Object.keys(options.attributes)[i], options.attributes[Object.keys(options.attributes)[i]]);
  }
  for (var i = 0; i < options.childs.length; i++) {
    if (typeof options.childs[i] == "string") {
      e.innerHTML += options.childs[i];
    }
    else {
      e.appendChild(options.childs[i]);
    }
  }
  for (var i = 0; i < options.eventListeners.length; i++) {
    e.addEventListener(options.eventListeners[i].type, options.eventListeners[i].callback);
  }
  return e;
}
export function getElementCenter(e) {
  const boundings = e.getBoundingClientRect();

  return {
    x: boundings.x + boundings.width / 2,
    y: boundings.y + boundings.height / 2
  };
}
export function parseTransformData(str) {
  const data = [];
  let start = 0;

  const result = {};

  const regex = /[a-z]{1,}\(/;

  while (str.search(regex) > -1) {
    const entryStartPos = str.search(regex);
    const entryEndPos = str.indexOf(")", entryStartPos) + 1;

    const entryStr = str.substring(entryStartPos, entryEndPos);

    const match = entryStr.match(/([a-z]{1,})\((.*)\)/);

    const [ key, valueStr ] = Array.from(match).slice(1);

    const values = valueStr.split(/,\s?/).map(valStr => {
      const [ value, undefined, unit ] = Array.from(valStr.match(/(([0-9]|\.)*)([a-z]*)/)).slice(1);
      return {
        value: Number(value),
        unit: unit ? unit : null
      }
    });

    data.push({
      name: key,
      value: values
    });

    result[key] = values;


    str = str.substring(entryEndPos);

  }

  return result;
}

export function getSVG(url) {
  return new Promise(async function(resolve, reject) {
    (await fetch(url)).text().then(resolve);
  });
}



export function loadIcons(icons) {
  function loopObj(obj) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] == "object" && obj[key] != null) {
          obj[key] = loopObj(obj[key]);
        }
        else if (typeof obj[key] == "string") {
          obj[key] = (async () => (await fetch(obj[key])).text())();
        }
      }
    }
    return obj;
  }

  return loopObj(icons);
}
export function loadIconsResolved(icons) {
  async function loopObj(obj) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] == "object" && obj[key] != null) {
          obj[key] = await loopObj(obj[key]);
        }
        else if (typeof obj[key] == "string") {
          obj[key] = await (async () => (await fetch(obj[key])).text())();
        }
      }
    }
    return obj;
  }
  return loopObj(icons);
}
